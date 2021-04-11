import { LikeButton, BadButton } from "./Button";

export const DesignWrapper = () => {
  const images = [
    { img: "sample/sample13.png", title: "SLEEPYFACE" },
    { img: "sample/sample14.png", title: "@NEWYORK@TOKYO" },
    { img: "sample/sample15.png", title: "Buchi-T" },
    { img: "sample/sample8.png", title: "セル・ライト" },
    { img: "sample/sample9.png", title: "リック・メタボ" },
    { img: "sample/sample10.png", title: "KILROY" },
    // { img: "sample/sample0.png", title: "Buchi" },
    // { img: "sample/sample2.png", title: "NEKONEKO" },
    { img: "sample/sample11.png", title: "LIVING DECK" },
    { img: "sample/sample12.png", title: "GREATFUL PEACE" },
    { img: "sample/sample3.png", title: "OKINAWA君" },
    { img: "sample/sample4.png", title: "pique girl" },
    { img: "sample/sample5.png", title: "sk8er Boz" },
    { img: "sample/sample6.png", title: "SLEEPYSHEEEP" },
    // { img: "sample/sample7.png", title: "art girl" },
    { img: "sample/sample1.png", title: "Dandy suit" },
  ];

  const card = () => {};
  return (
    <div>
      {images.map((image, id) => {
        return (
          <ul key={image.img}>
            <li className="sample-wrapper">
              <img src={image.img} className="sample" />
              <div className="info-wrapper">
                <span className="info ">
                  <LikeButton col="pink" className="bg-pink-300" b="Goog💓" />
                </span>
                <span className="info">
                  <LikeButton className="badbuttou" b="Bad😱" />
                </span>

                <p className="info">{image.title}</p>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
