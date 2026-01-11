import type { NextApiRequest, NextApiResponse } from "next";
import { ApiData, FixerRatesResponse } from "../../types/types";

const FIXER_URL =
  "https://data.fixer.io/api/latest?access_key=b56a8a02662b6acc1c2912deb64001d5";

const parseCodes = (value: string | string[] | undefined): string[] => {
  if (!value) {
    return [];
  }

  const raw = Array.isArray(value) ? value.join(",") : value;
  return raw
    .split(",")
    .map((code) => code.trim().toUpperCase())
    .filter(Boolean);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiData | { error: string }>
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const response = await fetch(FIXER_URL);

    if (!response.ok) {
      res.status(502).json({ error: "Failed to fetch rates" });
      return;
    }

    const data = (await response.json()) as FixerRatesResponse;

    if (!data.success) {
      res
        .status(502)
        .json({ error: data.error?.info ?? "Fixer API error" });
      return;
    }

    const requestedCodes = parseCodes(req.query.codes);
    const filteredRates: Record<string, number> = {};

    if (requestedCodes.length === 0) {
      Object.assign(filteredRates, data.rates);
    } else {
      requestedCodes.forEach((code) => {
        if (data.rates[code] !== undefined) {
          filteredRates[code] = data.rates[code];
        }
      });
    }

    res.setHeader("x-last-updated", data.date);
    res.status(200).json({
      base: data.base,
      rates: filteredRates,
    });
  } catch {
    res.status(500).json({ error: "Unexpected server error" });
  }
}
