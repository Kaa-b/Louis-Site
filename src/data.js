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
    description: "avion du futur",
    url: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/b/8/5/b85d7922a6_50190465_avion-hypersonique-stargazer-venus-aerospace.jpg",
    categorie: "glider",
    title: "Planeur",
  },
  {
    id: 2,
    description: "avion normal mais cool",
    url: "https://resize.elle.fr/article_960_webp/var/plain_site/storage/images/love-sexe/psycho/phobies/aviophobie-tout-savoir-sur-la-peur-de-l-avion-3928431/94871221-1-fre-FR/Aviophobie-tout-savoir-sur-la-peur-de-l-avion.jpg",
    categorie: "plane",
    title: "Avion",
  },
  {
    id: 3,
    description: "avion semi futuriste mais tout noir et vachement stylé",
    url: "https://media.lesechos.com/api/v1/images/view/611d256cd286c23a9d2d9bc6/1280x720-webp/0611553863687-web-tete.webp",
    categorie: "meeting",
    title: "Meeting",
  },
  {
    id: 4,
    description: "avion semi futuriste mais tout noir et vachement stylé",
    url: " https://images.radio-canada.ca/v1/ici-info/16x9/avion-aeroport-voyage-decollage-atterrissage-4.jpg",
    categorie: "all",
    title: "Tout",
  },
];

export const paragraphe = [
  {
    id: 1,
    description: "text accrocheur début du site",
    text: "A small change",
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

export const images = [
  {
    id: 1,
    description: "planeur 1",
    url: " https://www.caravelis.com/xml/oi/TFO022000319933/TFO022000319933-17a/medias/jpg/dsc04872_w2000.jpg",
    categorie: ["all", "glider", "meeting"],
  },
  {
    id: 2,
    description: "planeur 2",
    url: "https://glider-it.com/images/header_models/jeemo_1.jpg",
    categorie: ["all", "glider"],
  },
  {
    id: 3,
    description: "planeur 3",
    url: "https://www.aerospacetestinginternational.com/wp-content/uploads/2020/02/gliding-main.jpg",
    categorie: ["all", "glider", "meeting"],
  },
  {
    id: 4,
    description: "planeur 4",
    url: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2018_36/2558926/180907-airbus-perlan-world-record-mn-1536.jpg",
    categorie: ["all", "glider"],
  },
  {
    id: 5,
    description: "planeur 5",
    url: "https://media.wired.com/photos/59823776f338d42af7860a00/16:9/w_2400,c_limit/Perlan-FeatureArt.jpg",
    categorie: ["all", "glider"],
  },
  {
    id: 6,
    description: "planeur 6",
    url: "https://www.aerocontact.com/actualite-aeronautique-spatiale/images/AWN20150924123552.jpg",
    categorie: ["all", "glider", "meeting"],
  },
  {
    id: 7,
    description: "planeur 7",
    url: "https://learnenglishkids.britishcouncil.org/sites/kids/files/image/grammar-chants-have-you-flown-in-a-plane-thumbnail.png",
    categorie: ["all", "plane"],
  },
  {
    id: 8,
    description: "planeur 8",
    url: "https://www.challenges.fr/assets/img/2020/06/11/cover-r4x3w1000-5ee1eb43deaac-the-e-thrust.jpg",
    categorie: ["all", "plane"],
  },
  {
    id: 9,
    description: "planeur 9",
    url: "https://www.aerospatium.info/wp-content/uploads/2020/07/MAVERIC-3D-01-e1581514051817.jpg",
    categorie: ["all", "plane"],
  },
  {
    id: 10,
    description: "planeur 10",
    url: "https://www.h2-mobile.fr/img/post-h2/airbus-zeroe_080521.jpg",
    categorie: ["all", "plane", "meeting"],
  },
  {
    id: 11,
    description: "planeur 11",
    url: "https://images.ladepeche.fr/api/v1/images/view/5f6987253e45464258154935/large/image.jpg?v=1",
    categorie: ["all", "plane", "meeting"],
  },
  {
    id: 12,
    description: "planeur 12",
    url: "https://img-4.linternaute.com/ZI0kn8zGSH5a_DCK54500qmnhhU=/fit-in/x630/smart/filters:fill(1D1D1B)/ae6382f1223548b19811a0aff3789c86/ccmcms-linternaute/10133259-09-avion-plane-thomas-sollner-fotoliacom.jpg",
    categorie: ["all", "plane", "meeting"],
  },
];
