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
    <div className="font-bold w-56 mx-auto">
      {HeaderManu.map((item) => {
        return (
          <nav key={item.title}>
            <ul className="">
              <li className="p-5 ">
                <a
                  href={item.src}
                  className="p-3 flex items-start hover:bg-gray-100 rounded md:rounded-lg"
                >
                  <p className="text-3xl">{item.icon}</p>
                  {"　"}
                  <p className="text-2xl">{item.title}</p>
                </a>
              </li>
            </ul>
          </nav>
        );
      })}
    </div>
  );
};
