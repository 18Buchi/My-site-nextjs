import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

export default function Designcollection() {
  const menu = <FaIcons.FaBars />;
  const home = <BiIcons.BiHomeSmile />;

  const images = [
    "sample/sample0.png",
    "sample/sample1.png",
    "sample/sample2.png",
    "sample/sample3.png",
    "sample/sample4.png",
    "sample/sample5.png",
    "sample/sample6.png",
    "sample/sample7.png",
  ];
  let currentIndex = 0;

  return (
    <div>
      <Head>
        <title>Buchi</title>
        <link rel="icon" href="/STREETHANDS.png" />
      </Head>
      <Header link="./" icon={home} />
      <main>
        <div>
          {images.map((image) => {
            return <img src={image}  className="sample"/>;
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
