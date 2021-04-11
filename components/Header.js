import styles from "./Header-Footer.module.css";
import Link from "next/link";
import { HeaderManu } from "./HeaderManu";

export function Header(props) {
  return (
    <div className="fixed  top-0 z-10 w-screen border-t  bg-white bg-opacity-95">
      <div className={styles.headerContainer}>
        <img src={"./images/BUCHI.png"} className={styles.logo} />
        <Link href={props.link}>
          <button className={styles.button}>{props.icon}</button>
        </Link>
      </div>
    </div>
  );
}

export const Headerbar = () => {
  return (
    <div className={styles.navWrapper}>
      {HeaderManu.map((item) => {
        return (
          <nav key={item.title}>
            <ul className={styles.navManu}>
              <li className={item.cName}>
                <a href={item.src}>
                  {item.icon} {item.title}
                </a>
              </li>
            </ul>
          </nav>
        );
      })}
    </div>
  );
};
