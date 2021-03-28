import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export default function Home() {
  const menu = <FaIcons.FaBars />;
  const home = <BiIcons.BiHomeSmile />;

  return (
    <div>
      <Head>
        <title>Buchi</title>
        <link rel="icon" href="/STREETHANDS.png" />
      </Head>
      <Header link="./outlink" icon={menu} />

      <main>
      <img src={"./images/tw-header.jpg"} className="image-top" />
      <div className="img-wrapper">
      <Link href="/designcollection">
        <img src={"./images/Designcollection.png"} className="con" />
      </Link>
        <img src={"./images/Notready.png"} className="con" />
        <img src={"./images/Notready.png"} className="con" />
      </div>
      </main>

      <Footer/>
    </div>
    
  );
}
