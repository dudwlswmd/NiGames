import polygonBackgroundImg from "../assets/images/plantImg/Polygon-min.gif";
import avalancheBackgroundImg from "../assets/images/plantImg/Avalanche-min.gif";
import xplaBackgroundImg from "../assets/images/plantImg/XPLA-min.gif";
import bscBackgroundImg from "../assets/images/plantImg/BSC-min.gif";
import solanaBackgroundImg from "../assets/images/plantImg/Solana-min.gif";

import polygonCoinImg from "../assets/images/plantImg/POLYGONCOIN.svg";
import avalancheCoinImg from "../assets/images/plantImg/AVALANCHECOIN.svg";
import xplaCoinImg from "../assets/images/plantImg/XPLACOIN.svg";
import bscCoinImg from "../assets/images/plantImg/BSCCOIN.svg";
import solanaCoinImg from "../assets/images/plantImg/SOLANACOIN.svg";

export const chainPlantData = [
  {
    id: 1,
    title: "Polygon",
    plant_background: polygonBackgroundImg,
    coin_img: polygonCoinImg,
    active: true,
  },
  {
    id: 2,
    title: "Avalanche",
    plant_background: avalancheBackgroundImg,
    coin_img: avalancheCoinImg,
    active: true,
  },
  {
    id: 3,
    title: "XPLA",
    plant_background: xplaBackgroundImg,
    coin_img: xplaCoinImg,
    active: false,
  },
  {
    id: 4,
    title: "BSC",
    plant_background: bscBackgroundImg,
    coin_img: bscCoinImg,
    active: false,
  },
  // {
  //   id: 5,
  //   title: "SOLANA",
  //   values: [44444, 44444, 44444, 44444, 44444, 44444, 44444, 44444, 44444],
  //   population: null,
  //   on_boarding_game: null,
  //   accumulated_prize: null,
  //   gas_fees: null,
  //   plant_background: solanaBackgroundImg,
  //   coin_img: solanaCoinImg,
  // },
];
