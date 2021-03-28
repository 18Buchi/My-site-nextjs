import styles from "./Header-Footer.module.css";
import Link from "next/link";

export function Footer(props) {
  return (
    <div className={styles.footer}>
          <p>
           ©︎ Buchi,inc
          </p>
    </div>
  );
}

