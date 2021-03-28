import styles from "./Header-Footer.module.css";
import Link from "next/link";
import { HeaderManu } from "./HeaderManu";

export function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <img src={"./images/BUCHI.png"} className={styles.logo} />
        <Link href={props.link}>
          <button className={styles.button}>
            {props.icon}
          </button>
        </Link>
      </div>
    </div>
  );
}

export const Headerbar = () => {
  return (
    <div className={styles.navWrapper}>
      {HeaderManu.map((item, index) => {
        return (
          <nav>
            <ul className={styles.navManu}>
            {/* keyがうまく付いていない 何故？😭*/}
              <li key={index} className={item.cName}>
                <a href={item.src}>
                  {item.icon}
                  {" "}
                  {item.title}
                </a>
              </li>
            </ul>
          </nav>
        );
      })}
    </div>
  );
};
