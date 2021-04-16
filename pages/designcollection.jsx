import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BuyButton } from "../components/Button";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import DesignWrapper from "../components/DesignWrapper";

export default function Designcollection() {
  const menu = <FaIcons.FaBars />;
  const home = <BiIcons.BiHomeSmile />;

  return (
    <div>
      <Head>
        <title>Buchi</title>
        <link rel="icon" href="/STREETHANDS.png" />
      </Head>
      <Header link="./" icon={home} />
      <main>
        <BuyButton />
        <DesignWrapper />
      </main>
    </div>
  );
}
