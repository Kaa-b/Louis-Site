import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaPlaneDeparture,
} from "react-icons/fa";
import { GiGlider } from "react-icons/gi";
import { MdPhotoLibrary } from "react-icons/md";
import { IoMdJet } from "react-icons/io"

const socColorW = "white";
const socColorB = "#03045E";
const socFontSizeSmall = "30px";
const socFontSizeBig = "40px"

export const social = [
  {
    id: 1,
    iconHome: <FaFacebook color={socColorW} fontSize={socFontSizeSmall} />,
    iconSidebar: <FaFacebook color={socColorB} fontSize={socFontSizeSmall} />,
    iconAbout: <FaFacebook color={socColorB} fontSize={socFontSizeBig} />,
    url: "https://www.facebook.com/Louis.Mscl.Photography",
  },
  {
    id: 2,
    iconHome: <FaInstagram color={socColorW} fontSize={socFontSizeSmall} />,
    iconSidebar: <FaInstagram color={socColorB} fontSize={socFontSizeSmall} />,
    iconAbout: <FaInstagram color={socColorB} fontSize={socFontSizeBig} />,
    url: "https://www.instagram.com/louis.mscl.photography/?hl=fr",
  },
  {
    id: 3,
    iconHome: <FaYoutube color={socColorW} fontSize={socFontSizeSmall} />,
    iconSidebar: <FaYoutube color={socColorB} fontSize={socFontSizeSmall} />,
    iconAbout: <FaYoutube color={socColorB} fontSize={socFontSizeBig} />,
    url: "https://www.youtube.com/channel/UCuDLJ0thba-KkYIITR80QZg",
  },
];

const catColor = "#03045E";
const catFontSize = "22px";

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
    icon: <IoMdJet color={catColor} fontSize={catFontSize} />,
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
    description: "Cat??gorie planeur",
    url: "https://res.cloudinary.com/dfpnxd8gj/image/upload/v1657711856/vixb5fqcmezdgaswf5oz.jpg",
    categorie: "glider",
    title: "Planeur",
  },
  {
    id: 2,
    description: "Cat??gorie aviation civile",
    url: "https://res.cloudinary.com/dfpnxd8gj/image/upload/v1657660955/hkfovicorfkqt5ajeobp.jpg",
    categorie: "civile",
    title: "Aviation civile",
  },
  {
    id: 3,
    description: "Cat??gorie aviation militaire",
    url: "https://res.cloudinary.com/dfpnxd8gj/image/upload/v1657692126/bwfulzirw5y72rtaul3m.jpg",
    categorie: "militaire",
    title: "Aviation militaire",
  },
  {
    id: 4,
    description: "Cat??gorie qui disparaitra surement",
    url: "https://res.cloudinary.com/dfpnxd8gj/image/upload/v1657691977/lgjbohhcdiugekvjafa3.jpg",
    categorie: "all",
    title: "Tout",
  },
];

export const paragraphe = [
  {
    id: 1,
    text: [

      "Pourquoi voler ?",

      "Car une fois que vous aurez essay?? de voler, vous marcherez sur terre les yeux tourn??s vers le ciel, car l?? vous ??tes all??, et l?? il vous tarde de retourner.",

      "~ L??onard de Vinci",
    ],
  },
  {
    id: 2,
    titre: "Pr??sentation",
    text: [
      "",

      "Photographe d???action sp??cialis??e dans les domaines de l???a??ronautique, tant civil que militaire. Des avions de ligne aux avions de chasse, en passant par les h??licopt??res et les planeurs. Des prises de vue en conditions r??elles comme si vous y ??tiez.",

      " Je suis originaire de Toulouse o?? j???ai grandi berc??e par la capitale de l'a??ronautique et ses ballets perp??tuels d???avions en tout genre.",

      " Brevet?? pilote de planeur en 2016 dans la r??gion Toulousaine, je d??couvre la joie immense que procure le vol ?? voile. Et je m???essaye ?? la photographie a??ronautique??? C???est le d??clic et me lance dans la photo d???action en vol et au sol de tout type d???a??ronef. Les vols et les meetings s???encha??nent et cette envie de partager ma passion pour le vol grandit, me permettant ainsi d???offrir des clich??s de plus en plus immersifs.",

      " J???ai quitt?? cette merveilleuse r??gion ?? l?????ge de 22 ans pour ??tudier l'ing??nierie appliqu??e ?? l???a??ronautique ?? Poitiers. Quelques ann??es d?????tudes plus tard, de retour ?? Toulouse, je rejoins un des plus grands avionneurs de notre ??poque en tant qu???ing??nieur essais en vol. L???occasion de faire d???incroyables rencontres??? et de comprendre toute la complexit?? et la rigueur qui permettent ?? nos avions de voler.",

      " Aujourd???hui, je continue de faire vivre et de transmettre cette passion pour l'a??ronautique, car voler restera le r??ve de chacun qui nous fera toujours regarder le ciel avec autant d???envie et d???admiration.",
    ],
  },
  {
    id: 3,
    description: "Planeur",
    categorie: "glider",
    text: [
      "Projetez-vous en train de surfer dans les airs pendant des heures, en survolant sereinement les plus beaux paysages de France???",

      "Imaginez-vous en train de voler avec les aigles dans un planeur silencieux, en jouant avec les courants ascendants cr????s par le soleil et le vent??? Le planeur, c???est un avion sans moteur qui se pilote tr??s simplement et qui permet de voler sans utiliser d???autre ??nergie que la force des courants a??riens. Voler en planeur, c???est jouer avec la puissance des ??l??ments naturels en pilotant une machine l??g??re et performante qui procure des sensations uniques. Le vol en planeur, c???est un sport Passion ?? pratiquer sans mod??ration en balade, en voltige, ou en comp??tition.",
    ],
  },
  {
    id: 4,
    description: "Aviation civile",
    categorie: "civile",
    text: [
      "Venez vous essayer et d??couvrir la joie du pilotage aux commandes de ces petits coucous aussi agiles que rapides. Le point de passage de tous les futurs pilotes professionnels afin de ma??triser les bases du vol moteur.",

      "Des avions historiques, des pr??misses de l???a??ronautique, aux avions des guerres qui ont marqu?? ces deux derniers si??cles.",

      "La technologie au service d???avion toujours plus s??rs, afin de rendre vos voyages toujours plus agr??ables. d??couvrez ces g??ants du ciel capables de franchir des distances inimaginables afin de vous faire d??couvrir de nouvelles r??gions. Boeing, Airbus, admirez la bataille f??roce entre les plus grands avionneurs de notre ??re.",

    ],
  },
  {
    id: 5,
    description: "Aviation militaire",
    categorie: "militaire",
    text: [
      "Mettre en avant la pointe de l???a??ronautique ?? travers les a??ronefs les plus ??volu??s. Faire briller le savoir faire des avionneurs et des pilotes. Des man??uvres toujours plus impressionnantes, au service de l???efficacit?? et de la performance.  Avions de transport, de chasse ou bien encore des h??licopt??res, d??couvrez comment les arm??es ont su faire du ciel un terrain d???excellence."
    ],
  },
  {
    id: 6,
    description: "Toute les photos",
    categorie: "all",
    text: "",
  },
];
