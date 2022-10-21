import WatchUltraLogo from "./assets/Images/WatchUltraLogo.png";
import Watch8Logo from "./assets/Images/Watch8Logo.png";
import AppleCardLogo from "./assets/Images/AppleCardLogo.png";
import RaymondRay from "./assets/Images/Carousel/RaymondRay.jpg";
import Shantaram from "./assets/Images/Carousel/Shantaram.jpg";
import See from "./assets/Images/Carousel/See.jpg";
import GreatPumpkin from "./assets/Images/Carousel/GreatPumpkin.jpg";
import Luck from "./assets/Images/Carousel/Luck.jpg";
import MorningShow from "./assets/Images/Carousel/MorningShow.jpg";
import BlackBird from "./assets/Images/Carousel/BlackBird.jpg";
import BadSisters from "./assets/Images/Carousel/BadSisters.jpg";
import BeerRun from "./assets/Images/Carousel/BeerRun.jpg";
import Severance from "./assets/Images/Carousel/Severance.jpg";
import TedLasso from "./assets/Images/Carousel/TedLasso.jpg";
import SmallSeverance from "./assets/SmallScreenImages/SmallCarousel/SmallSeverance.jpg";
import SmallShantaram from "./assets/SmallScreenImages/SmallCarousel/SmallShantaram.jpg";
import SmallBadSisters from "./assets/SmallScreenImages/SmallCarousel/SmallBadSisters.jpg";
import SmallGreatPumpkin from "./assets/SmallScreenImages/SmallCarousel/SmallGreatPumpkin.jpg";
import SmallBlackBird from "./assets/SmallScreenImages/SmallCarousel/SmallBlackBird.jpg";
import SmallMorningShow from "./assets/SmallScreenImages/SmallCarousel/SmallMorningShow.jpg";
import SmallBeerRun from "./assets/SmallScreenImages/SmallCarousel/SmallBeerRun.jpg";
import SmallSee from "./assets/SmallScreenImages/SmallCarousel/SmallSee.jpg";
import SmallTedLasso from "./assets/SmallScreenImages/SmallCarousel/SmallTedLasso.jpg";
import SmallLuck from "./assets/SmallScreenImages/SmallCarousel/SmallLuck.jpg";
import SmallRayRaymond from "./assets/SmallScreenImages/SmallCarousel/SmallRayRaymond.jpg";
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

const ImageList = [
  { img: RaymondRay, name: "RaymondRay" },
  { img: See, name: "See" },
  { img: Severance, name: "Severance" },
  { img: BadSisters, name: "BadSisters" },
  { img: BeerRun, name: "BeerRun" },
  { img: Luck, name: "Luck" },
  { img: MorningShow, name: "MorningShow" },
  { img: TedLasso, name: "TedLasso" },
  { img: BlackBird, name: "BlackBird" },
  { img: GreatPumpkin, name: "GreatPumpkin" },
  { img: Shantaram, name: "Shantaram" },
];
const SmallScreenImageList = [
  { img: SmallShantaram, name: "SmallShantaram" },
  { img: SmallLuck, name: "SmallLuck" },
  { img: SmallTedLasso, name: "SmallTedLasso" },
  { img: SmallBadSisters, name: "SmallBadSisters" },
  { img: SmallBeerRun, name: "SmallBeerRun" },
  { img: SmallBlackBird, name: "SmallBlackBird" },
  { img: SmallMorningShow, name: "SmallMorningShow" },
  { img: SmallSee, name: "SmallSee" },
  { img: SmallSeverance, name: "SmallSeverance" },
  { img: SmallGreatPumpkin, name: "SmallGreatPumpkin" },
  { img: SmallRayRaymond, name: "SmallRayRaymond" },
];

const OptionsList = [
  {
    Heading: "Shop and Learn",
    options: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
  },
  {
    Heading: "Services",
    options: [
      "Apple Music",
      "Apple TV+",
      "Apple Fitness+",
      "Apple News+",
      "Apple Arcade",
      "iCloud",
      "Apple One",
      "Apple Card",
      "Apple Books",
      "Apple Podcasts",
      "App Store",
    ],
  },
  {
    Heading: "Account",
    options: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
  },
  {
    Heading: "Apple Store",
    options: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Refurbished and Clearance",
      "Financing",
      "Apple Trade In",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    Heading: "For Business",
    options: ["Apple and Business", "Shop for Business"],
  },
  {
    Heading: "For Education",
    options: ["Apple and Education", "Shop for K-12", "Shop for College"],
  },
  {
    Heading: "For Healthcare",
    options: [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
    ],
  },
  {
    Heading: "For Government",
    options: ["Shop for Government", "Shop for Veterans and Military"],
  },
  {
    Heading: "Apple Values",
    options: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supplier Responsibility",
    ],
  },
  {
    Heading: "About Apple",
    options: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics and Compilance",
      "Events",
      "Contact Apple",
    ],
  },
];

let DesktopOptionList = [
  {
    Section: "Section1",
    OptionLists: [
      {
        Heading: "Shop and Learn",
        options: [
          "Store",
          "Mac",
          "iPad",
          "iPhone",
          "Watch",
          "AirPods",
          "TV & Home",
          "AirTag",
          "Accessories",
          "Gift Cards",
        ],
      },
    ],
  },
  {
    Section: "Section2",
    OptionLists: [
      {
        Heading: "Services",
        options: [
          "Apple Music",
          "Apple TV+",
          "Apple Fitness+",
          "Apple News+",
          "Apple Arcade",
          "iCloud",
          "Apple One",
          "Apple Card",
          "Apple Books",
          "Apple Podcasts",
          "App Store",
        ],
      },
      {
        Heading: "Account",
        options: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
      },
    ],
  },
  {
    Section: "Section3",
    OptionLists: [
      {
        Heading: "Apple Store",
        options: [
          "Find a Store",
          "Genius Bar",
          "Today at Apple",
          "Apple Camp",
          "Apple Store App",
          "Refurbished and Clearance",
          "Financing",
          "Apple Trade In",
          "Order Status",
          "Shopping Help",
        ],
      },
    ],
  },
  {
    Section: "Section4",
    OptionLists: [
      {
        Heading: "For Business",
        options: ["Apple and Business", "Shop for Business"],
      },
      {
        Heading: "For Education",
        options: ["Apple and Education", "Shop for K-12", "Shop for College"],
      },
      {
        Heading: "For Healthcare",
        options: [
          "Apple in Healthcare",
          "Health on Apple Watch",
          "Health Records on iPhone",
        ],
      },
      {
        Heading: "For Government",
        options: ["Shop for Government", "Shop for Veterans and Military"],
      },
    ],
  },
  {
    Section: "Section5",
    OptionLists: [
      {
        Heading: "Apple Values",
        options: [
          "Accessibility",
          "Education",
          "Environment",
          "Inclusion and Diversity",
          "Privacy",
          "Racial Equity and Justice",
          "Supplier Responsibility",
        ],
      },
      {
        Heading: "About Apple",
        options: [
          "Newsroom",
          "Apple Leadership",
          "Career Opportunities",
          "Investors",
          "Ethics and Compilance",
          "Events",
          "Contact Apple",
        ],
      },
    ],
  },
];

export {
  LinksList,
  GalleryList,
  ImageList,
  SmallScreenImageList,
  OptionsList,
  DesktopOptionList,
};
