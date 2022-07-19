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

const socColorW = "white";
const socColorB = "#03045E";
const socFontSizeW = "30px";
const socFontSizeB = "40px"

export const social = [
  {
    id: 1,
    iconW: <FaFacebook color={socColorW} fontSize={socFontSizeW} />,
    iconB: <FaFacebook color={socColorB} fontSize={socFontSizeB} />,
    url: "https://www.facebook.com/Louis.Mscl.Photography",
  },
  {
    id: 2,
    iconW: <FaInstagram color={socColorW} fontSize={socFontSizeW} />,
    iconB: <FaInstagram color={socColorB} fontSize={socFontSizeB} />,
    url: "https://www.instagram.com/louis.mscl.photography/?hl=fr",
  },
  {
    id: 3,
    iconW: <FaYoutube color={socColorW} fontSize={socFontSizeW} />,
    iconB: <FaYoutube color={socColorB} fontSize={socFontSizeB} />,
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
    text: [

      "Pourquoi voler ?",

      "Car une fois que vous aurez essayé de voler, vous marcherez sur terre les yeux tournés vers le ciel, car là vous êtes allé, et là il vous tarde de retourner.",

      "~ Léonard de Vinci",
    ],
  },
  {
    id: 2,
    titre: "Présentation",
    text: [
      "",

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
    text: [
      "Projetez-vous en train de surfer dans les airs pendant des heures, en survolant sereinement les plus beaux paysages de France…",

      "Imaginez-vous en train de voler avec les aigles dans un planeur silencieux, en jouant avec les courants ascendants créés par le soleil et le vent… Le planeur, c’est un avion sans moteur qui se pilote très simplement et qui permet de voler sans utiliser d’autre énergie que la force des courants aériens. Voler en planeur, c’est jouer avec la puissance des éléments naturels en pilotant une machine légère et performante qui procure des sensations uniques. Le vol en planeur, c’est un sport Passion à pratiquer sans modération en balade, en voltige, ou en compétition.",
    ],
  },
  {
    id: 4,
    description: "Intro catégorie aviation civile",
    categorie: "civile",
    text: [
      "Venez vous essayer et découvrir la joie du pilotage aux commandes de ces petits coucous aussi agiles que rapides. Le point de passage de tous les futurs pilotes professionnels afin de maîtriser les bases du vol moteur.",

      "Des avions historiques, des prémisses de l’aéronautique, aux avions des guerres qui ont marqué ces deux derniers siècles.",

      "La technologie au service d’avion toujours plus sûrs, afin de rendre vos voyages toujours plus agréables. découvrez ces géants du ciel capables de franchir des distances inimaginables afin de vous faire découvrir de nouvelles régions. Boeing, Airbus, admirez la bataille féroce entre les plus grands avionneurs de notre ère.",

    ],
  },
  {
    id: 5,
    description: "Intro catégorie aviation militaire",
    categorie: "militaire",
    text: [
      "Mettre en avant la pointe de l’aéronautique à travers les aéronefs les plus évolués. Faire briller le savoir faire des avionneurs et des pilotes. Des manœuvres toujours plus impressionnantes, au service de l’efficacité et de la performance.  Avions de transport, de chasse ou bien encore des hélicoptères, découvrez comment les armées ont su faire du ciel un terrain d’excellence."
    ],
  },
  {
    id: 6,
    description: "Intro catégorie Tout",
    categorie: "all",
    text: "",
  },
];
