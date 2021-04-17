import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export default function Home() {
  const menu = <FaIcons.FaBars />;

  return (
    <div>
      <Head>
        <title>Buchi</title>
      </Head>
      <Header link="./outlink" icon={menu} />

      <main>
        <img
          src={"./images/tw-header.jpg"}
          className="block w-full max-w-2xl mx-auto  my-8 opacity-80 "
        />
        <div>
          <Link href="/designcollection">
            <img
              src={"./images/Designcollection.png"}
              className="main-button"
            />
          </Link>
          <img src={"./images/Notready.png"} className="main-button" />
          <img src={"./images/Notready.png"} className="main-button" />
        </div>
      </main>
    </div>
  );
}
