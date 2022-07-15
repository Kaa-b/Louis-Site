import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaPlaneDeparture,
} from "react-icons/fa";
import { GiGlider, GiAirplane } from "react-icons/gi";
import { MdPhotoLibrary } from "react-icons/md";

const socColor = "white";
const socFontSize = "30px";

export const social = [
  {
    id: 1,
    icon: <FaFacebook color={socColor} fontSize={socFontSize} />,
    url: "https://www.facebook.com/Louis.Mscl.Photography",
  },
  {
    id: 2,
    icon: <FaInstagram color={socColor} fontSize={socFontSize} />,
    url: "https://www.instagram.com/louis.mscl.photography/?hl=fr",
  },
  {
    id: 3,
    icon: <FaYoutube color={socColor} fontSize={socFontSize} />,
    url: "https://www.youtube.com/channel/UCuDLJ0thba-KkYIITR80QZg",
  },
];

const catColor = "white";
const catFontSize = "30px";

export const categories = [
  {
    id: 1,
    url: "/about",
    text: "Home",
    icon: <FaHome color={catColor} fontSize={catFontSize} />,
  },
  {
    id: 2,
    url: "/glider",
    text: "Planeur",
    icon: <GiGlider color={catColor} fontSize={catFontSize} />,
  },
  {
    id: 3,
    url: "/civile",
    text: "Aviation civile",
    icon: <FaPlaneDeparture color={catColor} fontSize={catFontSize} />,
  },
  {
    id: 4,
    url: "/militaire",
    text: "Aviation militaire",
    icon: <GiAirplane color={catColor} fontSize={catFontSize} />,
  },
  {
    id: 5,
    url: "/all",
    text: "Tout",
    icon: <MdPhotoLibrary color={catColor} fontSize={catFontSize} />,
  },
];

export const CategorieImages = [
  {
    id: 1,
    description: "Catégorie planeur",
    url: "http://res.cloudinary.com/dfpnxd8gj/image/upload/v1657711734/drqqs6pswgovxcbackz2.jpg",
    categorie: "glider",
    title: "Planeur",
  },
  {
    id: 2,
    description: "Catégorie aviation civile",
    url: "http://res.cloudinary.com/dfpnxd8gj/image/upload/v1657660816/nkcnkvjgktwyegvdyuew.jpg",
    categorie: "civile",
    title: "Aviation civile",
  },
  {
    id: 3,
    description: "Catégorie aviation militaire",
    url: "http://res.cloudinary.com/dfpnxd8gj/image/upload/v1657692030/usmjfpleijejqa7stqzq.jpg",
    categorie: "militaire",
    title: "Aviation militaire",
  },
  {
    id: 4,
    description: "Catégorie qui disparaitra surement",
    url: "http://res.cloudinary.com/dfpnxd8gj/image/upload/v1657711773/rxsj6okdt3egokajinil.jpg",
    categorie: "all",
    title: "Tout",
  },
];

export const paragraphe = [
  {
    id: 1,
    description: "text accrocheur début du site",
    text: "Another small change",
  },
  {
    id: 2,
    description: "Présentation Louis",
    text: [
      "Photographe d’action spécialisée dans les domaines de l’aéronautique, tant civil que militaire. Des avions de ligne aux avions de chasse, en passant par les hélicoptères et les planeurs. Des prises de vue en conditions réelles comme si vous y étiez.",

      " Je suis originaire de Toulouse où j’ai grandi bercée par la capitale de l'aéronautique et ses ballets perpétuels d’avions en tout genre.",

      " Breveté pilote de planeur en 2016 dans la région Toulousaine, je découvre la joie immense que procure le vol à voile. Et je m’essaye à la photographie aéronautique… C’est le déclic et me lance dans la photo d’action en vol et au sol de tout type d’aéronef. Les vols et les meetings s’enchaînent et cette envie de partager ma passion pour le vol grandit, me permettant ainsi d’offrir des clichés de plus en plus immersifs.",

      " J’ai quitté cette merveilleuse région à l’âge de 22 ans pour étudier l'ingénierie appliquée à l’aéronautique à Poitiers. Quelques années d’études plus tard, de retour à Toulouse, je rejoins un des plus grands avionneurs de notre époque en tant qu’ingénieur essais en vol. L’occasion de faire d’incroyables rencontres… et de comprendre toute la complexité et la rigueur qui permettent à nos avions de voler.",

      " Aujourd’hui, je continue de faire vivre et de transmettre cette passion pour l'aéronautique, car voler restera le rêve de chacun qui nous fera toujours regarder le ciel avec autant d’envie et d’admiration.",
    ],
  },
  {
    id: 3,
    description: "Intro catégorie Planeur",
    categorie: "glider",
    text: "Pariatur veniam aute incididunt velit anim ut duis cupidatat ut eu proident. Culpa in sit culpa minim amet quis. Tempor laboris cillum excepteur minim dolor nulla ea reprehenderit qui velit. Cupidatat sunt ex dolore ullamco velit laborum nostrud quis aute ea do.",
  },
  {
    id: 4,
    description: "Intro catégorie aviation civile",
    categorie: "civile",
    text: "Pariatur veniam aute incididunt velit anim ut duis cupidatat ut eu proident. Culpa in sit culpa minim amet quis. Tempor laboris cillum excepteur minim dolor nulla ea reprehenderit qui velit. Cupidatat sunt ex dolore ullamco velit laborum nostrud quis aute ea do.",
  },
  {
    id: 5,
    description: "Intro catégorie aviation militaire",
    categorie: "militaire",
    text: "Pariatur veniam aute incididunt velit anim ut duis cupidatat ut eu proident. Culpa in sit culpa minim amet quis. Tempor laboris cillum excepteur minim dolor nulla ea reprehenderit qui velit. Cupidatat sunt ex dolore ullamco velit laborum nostrud quis aute ea do.",
  },
  {
    id: 6,
    description: "Intro catégorie Tout",
    categorie: "all",
    text: "Pariatur veniam aute incididunt velit anim ut duis cupidatat ut eu proident. Culpa in sit culpa minim amet quis. Tempor laboris cillum excepteur minim dolor nulla ea reprehenderit qui velit. Cupidatat sunt ex dolore ullamco velit laborum nostrud quis aute ea do.",
  },
];