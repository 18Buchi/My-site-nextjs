import styles from "./Header-Footer.module.css";
import Link from "next/link";
import { HeaderManu } from "./HeaderManu";

export function Header(props) {
  return (
    <div className="fixed top-0 z-10 h-20 w-full bg-white border-b border-gray-700 opacity-95">
      <div className="pt-3 flex justify-between mx-auto max-w-screen-md">
        <img src={"./images/BUCHI.png"} className="h-14" />
        <Link href={props.link}>
          <button className="py-4 px-8 text-3xl">{props.icon}</button>
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
