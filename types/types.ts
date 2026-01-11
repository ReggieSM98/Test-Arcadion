export interface FixerRatesResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
  error?: {
    code: number;
    type: string;
    info: string;
  };
}

export interface ApiData {
  base: string;
  rates: Record<string, number>;
}

export interface CardProps {
  currency: string;
  rate: number;
  baseAmount: number;
  baseCurrency: string;
  isLoading?: boolean;
}

export interface MetaDataProps {
  title: string;
  description: string;
}
