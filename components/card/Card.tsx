import { CardProps } from "../../types/types";
import styles from "./Card.module.scss";

const currencySymbols: Record<string, string> = {
  USD: "$",
  GBP: "£",
  JPY: "¥",
  AUD: "A$",
  CAD: "CA$",
};

const Card = ({
  currency,
  rate,
  baseAmount,
  baseCurrency,
  isLoading = false,
}: CardProps) => {
  const converted = baseAmount * rate;
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className={`${styles.card} ${isLoading ? styles.loading : ""}`}>
      <div className={styles.meta}>
        <span>
          {baseCurrency} → {currency}
        </span>
        <span>{rate.toFixed(6)}</span>
      </div>
      <div className={styles.body}>
        <h3>{currency}</h3>
        <p>
          {currencySymbols[currency] ?? ""}
          {formatter.format(converted)}
        </p>
      </div>
    </div>
  );
};

export default Card;
