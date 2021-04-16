import Head from "next/head";
import { Header, Headerbar } from "../components/Header";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import { Footer } from "../components/Footer";

export default function Outlink() {
  const menu = <FaIcons.FaBars />;
  const home = <BiIcons.BiHomeSmile />;
  return (
    <div>
      <Head>
        <title>Buchi.Outlink</title>
        <link rel="icon" href="/STREETHANDS.png" />
      </Head>

      <Header link="./" icon={home} />
      <Headerbar />
    </div>
  );
}
