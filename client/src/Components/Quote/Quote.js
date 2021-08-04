import styles from "./Quotes.module.css";

export default function Quote(props) {
  return (
    <div className={styles.quoteDiv}>
      "{props.quote}"
      <br />
      -{props.author}
    </div>
  )
}