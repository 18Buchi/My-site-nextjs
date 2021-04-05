import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LikeButton, BadButton, BuyButton } from "../components/Button";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

export default function Designcollection() {
  const menu = <FaIcons.FaBars />;
  const home = <BiIcons.BiHomeSmile />;
  const images = [
    { id: 0, img: "sample/sample0.png", title:"name0"},
    { id: 1, img: "sample/sample1.png", title:"name1"},
    { id: 2, img: "sample/sample2.png", title:"name2" },
    { id: 3, img: "sample/sample3.png" , title:"name3"},
    { id: 4, img: "sample/sample4.png" , title:"name4"},
    { id: 5, img: "sample/sample5.png" , title:"name5"},
    { id: 6, img: "sample/sample6.png" , title:"name6"},
    { id: 7, img: "sample/sample7.png" , title:"name7"},
    { id: 8, img: "sample/sample8.png", title:"name8"},
    { id: 9, img: "sample/sample9.png", title:"name9"},
    { id: 10, img: "sample/sample10.png", title:"name10"},
    { id: 11, img: "sample/sample11.png", title:"name11"},
    { id: 12, img: "sample/sample12.png", title:"name12"},
    { id: 13, img: "sample/sample13.png", title:"name13"},
    { id: 14, img: "sample/sample14.png", title:"name14"},
    { id: 15, img: "sample/sample15.png", title:"name15"},
  ];

  let i = 0;
  for (i = images.length - 1; 0 < i; i--) {
    let k = Math.floor(Math.random() * (i + 1));
    let tmp = images[i];

    images[i] = images[k];
    images[k] = tmp;
  }
  return (
    <div>
      <Head>
        <title>Buchi</title>
        <link rel="icon" href="/STREETHANDS.png" />
      </Head>

      <Header link="./" icon={home} />
      <main>
        <BuyButton />
        {/* ボタン部分tailswindcss */}
        {/* <a href="https://suzuri.jp/Buchi18" className="underNav">
          <button className=" py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-gray-500 hover:bg-gray-600">
            Want to buy !!
            <br />
            購入する
          </button>
        </a> */}

        <div>
          {images.map((image) => {
            return (
              <ul>
                <li key={image.id} className="sample-wrapper">
                  <img src={image.img} className="sample"/>
                  <div className="info-wrapper">
                    <span className="info">
                      <LikeButton />
                    </span>
                    <span className="info">
                      <BadButton />
                    </span>

                    <p className="info">{image.title}</p>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
