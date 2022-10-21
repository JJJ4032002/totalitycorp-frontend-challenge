import WatchUltraLogo from "./assets/Images/WatchUltraLogo.png";
import Watch8Logo from "./assets/Images/Watch8Logo.png";
import AppleCardLogo from "./assets/Images/AppleCardLogo.png";

const LinksList = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Only on Apple",
  "Accessories",
  "Support",
];
const Iphone14Pro = () => {
  return <h1 className="Heading">iPhone 14 Pro</h1>;
};

const Iphone14 = () => {
  return <h1 className="Heading">iPhone 14</h1>;
};

const WatchUltra = () => {
  return (
    <div>
      <img src={WatchUltraLogo} alt="Apple Watch Ultra" />
    </div>
  );
};
const Watch8 = () => {
  return (
    <div>
      <img src={Watch8Logo} alt="Apple Watch Series 8" />
    </div>
  );
};
const AirPodsPro = () => {
  return <h1 className="Heading">AirPods Pro</h1>;
};
const AppleCard = () => {
  return (
    <div>
      <img src={AppleCardLogo} alt="Apple Card" />
    </div>
  );
};

const GalleryList = [
  {
    Product: "Iphone14Pro",
    theme: "dark",
    heading: <Iphone14Pro />,
    tagline: "Pro. Beyond.",
  },
  {
    Product: "Iphone14",
    theme: "light",
    heading: <Iphone14 />,
    tagline: "Big and bigger.",
  },
  {
    Product: "WatchUltra",
    theme: "light",
    heading: <WatchUltra />,
    tagline: "Adventure awaits.",
  },
  {
    Product: "Watch8",
    theme: "dark",
    heading: <Watch8 />,
    tagline: "A healthy leap ahead",
  },
  {
    Product: "AirPodsPro",
    theme: "dark",
    heading: <AirPodsPro />,
    tagline: "Rebuilt from the sound up.",
  },
  {
    Product: "AppleCard",
    theme: "light",
    heading: <AppleCard />,
    tagline: "Get up to 3% Daily Cash back with every purchase.",
  },
];

export { LinksList, GalleryList };
