import styles from "./Header-Footer.module.css";
import Link from "next/link";
import { HeaderManu } from "./HeaderManu";

export function Header(props) {
  return (
    <div className="fixed top-0 z-10 h-20 w-full bg-white border-b border-gray-700 opacity-95">
      <div className="pt-3 flex justify-between mx-auto max-w-screen-md">
        <img src={"./images/BUCHI.png"} className="h-14" />
        <Link href={props.link}>
          <button className="py-4 px-8 text-3xl hover:text-blue-600 focus:outline-none">
            {props.icon}
          </button>
        </Link>
      </div>
    </div>
  );
}

export const Headerbar = () => {
  return (
    <div  className="font-bold w-64 mx-auto">
      {HeaderManu.map((item) => {
        return (
          <nav key={item.title}>
            <ul className="">
              <li className="p-5 ">
                <a href={item.src} className="text-2xl flex justify-between items-start bg-gray-600">
                  {item.icon}<p className="px-2  ">{item.title}</p>
                </a>
              </li>
            </ul>
          </nav>
        );
      })}
    </div>
  );
};
