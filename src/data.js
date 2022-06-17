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
    url: "/",
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
    url: "/plane",
    text: "Avion",
    icon: <FaPlaneDeparture color={catColor} fontSize={catFontSize} />,
  },
  {
    id: 4,
    url: "/meeting",
    text: "Meeting",
    icon: <GiAirplane color={catColor} fontSize={catFontSize} />,
  },
  {
    id: 5,
    url: "/all",
    text: "Tout",
    icon: <MdPhotoLibrary color={catColor} fontSize={catFontSize} />,
  },
];

export const images = [
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
    text:
      "Pariatur veniam aute incididunt velit anim ut duis cupidatat ut eu proident. Culpa in sit culpa minim amet quis. Tempor laboris cillum excepteur minim dolor nulla ea reprehenderit qui velit. Cupidatat sunt ex dolore ullamco velit laborum nostrud quis aute ea do.",
  },
  {
    id: 1,
    description: "Présentation Louis",
    text : {
      
      p1: "Sunt exercitation ad enim irure exercitation minim amet ea pariatur aliquip cupidatat. Velit sint exercitation pariatur officia qui irure amet aliquip dolore. Reprehenderit tempor non laborum occaecat minim eiusmod.",
      p2: " Sunt exercitation ad enim irure exercitation minim amet ea pariatu Nisi qui excepteur mollit aute irure amet dolor quis. Dolore nulla aliqua voluptate minim irure ea. Veniam Lorem labore laboris qui. Magna magna nisi exercitation ea ex consectetur magna irure Lorem dolor esse. Lorem amet eu sunt proident adipisicing amet aute euSunt exercitation ad enim irure exercitation minim amet ea pariatur aliquip cupidatat. Velit sint exercitation pariatur officia.",
      p3: " Qui irure amet aliquip dolore. Reprehenderit tempor non laborum occaecat minim eiusmod. Sunt exercitation ad en<br/>im irure exercitation minim amet ea pariatu Nisi qui excepteur mollit aute irure amet dolor quis. Dolore nulla aliqua voluptate minim irure ea. Veniam Lorem labore laboris qui. Magna magna nisi exercitation ea ex consectetur magna irure Lorem dolor esse. Lorem amet eu sunt proident adipisicing amet aute eu."
    },
  }
];
