import { LikeButton, BadButton } from "./Button";

export default function DesignWrapper() {
  const images = [
    { img: "sample/sample8.png", title: "セル・ライト" },
    { img: "sample/sample15.png", title: "BUCHI-T" },
    { img: "sample/sample9.png", title: "リック・メタボ" },
    { img: "sample/sample10.png", title: "KILROY" },
    { img: "sample/sample11.png", title: "LIVING DECK" },
    { img: "sample/sample12.png", title: "GREATFUL PEACE" },
    { img: "sample/sample13.png", title: "SLEEPYFACE" },
    { img: "sample/sample14.png", title: "@NEWYORK@TOKYO" },
    { img: "sample/sample5.png", title: "sk8er BOZ" },
    { img: "sample/sample6.png", title: "SLEEPY SHEEP" },
    { img: "sample/sample3.png", title: "OKINAWA君" },
    { img: "sample/sample4.png", title: "pique girl" },
    // { img: "sample/sample0.png", title: "Buchi" },
    // { img: "sample/sample1.png", title: "Dandy suit" },
    // { img: "sample/sample2.png", title: "NEKO NEKO" },
    // { img: "sample/sample7.png", title: "Art girl" },
  ];
  return (
    <div>
      {images.map((image) => {
        return (
          <ul key={image.img}>
            <li className="sample-wrapper">
              <img src={image.img} className="sample" />
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
  );
}
