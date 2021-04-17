import { BadButton, LikeButton } from "./Button";

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
            <li className="rounded-xl p-4 mx-auto my-10 w-9/12 max-w-2xl bg-gray-100 bg-opacity-30 shadow-card">
              <img
                src={image.img}
                className="block text-center mx-auto w-11/12 max-w-2xl"
              />

              <span className="mx-1">
                <LikeButton />
              </span>
              <span className="mx-1">
                <LikeButton />
              </span>

              <p className="inline-block rounded w-6/12 py-1 mx-4 my-2 bg-gray-100 bg-opacity-30">
                {image.title}
              </p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
