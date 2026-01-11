import { useEffect, useMemo, useState } from "react";
import Card from "../components/card/Card";
import MetaData from "../components/metadata/MetaData";
import { ApiData } from "../types/types";
import styles from "../styles/HomePage.module.scss";

const CODES = ["USD", "GBP", "JPY", "AUD", "CAD"];

const HomePage = () => {
  const [baseAmount, setBaseAmount] = useState(100);
  const [data, setData] = useState<ApiData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/rates?codes=${CODES.join(",")}`);
        if (!response.ok) {
          throw new Error("Failed to load rates");
        }

        const payload = (await response.json()) as ApiData;
        setData(payload);
        const updated = response.headers.get("x-last-updated");
        setLastUpdated(updated ?? new Date().toLocaleString());
      } catch {
        setError("Unable to load exchange rates right now.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, []);

  const baseCurrency = data?.base ?? "EUR";

  const sortedRates = useMemo(() => {
    if (!data) {
      return [] as Array<[string, number]>;
    }

    return Object.entries(data.rates).sort(([a], [b]) => a.localeCompare(b));
  }, [data]);

  return (
    <>
      <MetaData
        title="Exchanger | Home"
        description="Currency exchange rates powered by Fixer."
      />
      <div className={styles.container}>
        <section className={styles.inputSection}>
          <label htmlFor="baseAmount">Converting from {baseCurrency}</label>
          <input
            id="baseAmount"
            type="number"
            min={0}
            value={baseAmount}
            onChange={(event) => setBaseAmount(Number(event.target.value))}
          />
          <div className={styles.metaRow}>
            <span>Base currency: {baseCurrency}</span>
            <span>
              Last updated: {lastUpdated ? lastUpdated : "Fetching rates..."}
            </span>
          </div>
        </section>

        {error ? <div className={styles.error}>{error}</div> : null}

        <section className={styles.cards}>
          {sortedRates.map(([currency, rate]) => (
            <Card
              key={currency}
              currency={currency}
              rate={rate}
              baseAmount={baseAmount}
              baseCurrency={baseCurrency}
              isLoading={isLoading}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default HomePage;
