import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { HeaderManu } from "./HeaderManu";
import cn from "classnames";

import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

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

export const Headerbar = (props) => {
  console.log(Headerbar);
  return (
    <div className={styles.navWrapper}>
      {HeaderManu.map((item, index) => {
        return (
          <nav>
            <ul className={styles.navManu}>
              <li key={index} className={item.cName}>
                <a href={item.src}>
                  {item.icon}
                  {"　"}
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
