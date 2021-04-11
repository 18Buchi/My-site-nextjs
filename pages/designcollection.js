import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LikeButton, BadButton, BuyButton } from "../components/Button";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import { DesignWrapper } from "../components/designWrapper";

export default function Designcollection() {
  const menu = <FaIcons.FaBars />;
  const home = <BiIcons.BiHomeSmile />;
  const cards = [<DesignWrapper />];

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

      <Footer />
    </div>
  );
}
