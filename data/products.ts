import { Product } from "@/types/products";

const products: Product[] = [
  {
    id: 1,
    name: "天地星空 AMACHIHOSHISORA 500ml",
    description:
      "A 500ml version of Japanese sake brewed at the foot of Mt. Fuji.",
    price: 65,
    image: {
      url: "/amachi-500ml.png",
      alt: "AMACHIHOSHISORA 500ml",
      width: 500,
      height: 500,
    },
  },
  {
    id: 2,
    name: "天地星空 AMACHIHOSHISORA 720ml",
    description:
      "A 720ml version of Japanese sake brewed at the foot of Mt. Fuji.",
    price: 80,
    image: {
      url: "/amachi-720ml.png",
      alt: "AMACHIHOSHISORA 720ml",
      width: 500,
      height: 500,
    },
  },
  {
    id: 3,
    name: "丸モ高木陶器 Marumo Takagi 1cup",
    description: "This unique sake cup changes color.",
    price: 25,
    image: {
      url: "/marumo-1.png",
      alt: "marumo-1cup",
      width: 500,
      height: 500,
    },
  },
  {
    id: 4,
    name: "丸モ高木陶器 Marumo Takagi 4cups",
    description: "Buy 4 and get 20% off!",
    price: 80,
    image: {
      url: "/marumo-4.png",
      alt: "marumo-4cups",
      width: 500,
      height: 500,
    },
  },
  {
    id: 5,
    name: "丸モ高木陶器 Marumo Takagi 9cups and wood box",
    description: "This unique sake cup and Japanese traditional wood box",
    price: 300,
    image: {
      url: "/marumo-9.png",
      alt: "marumo-9cups",
      width: 500,
      height: 500,
    },
  },
  {
    id: 6,
    name: "丸モ高木陶器 おちょこ MarumoTakagi Ochoko",
    description:
      "An ochoko is a small cup used for drinking sake in Japan. It’s usually made of ceramic or glass.",
    price: 10,
    image: {
      url: "/ochoko.png",
      alt: "ochoko",
      width: 500,
      height: 500,
    },
  },
  {
    id: 7,
    name: "丸モ高木陶器 豆皿 MarumoTakagi Mamezara",
    description: "Maruzara is usually used under the Ochoko",
    price: 10,
    image: {
      url: "/mamezara.png",
      alt: "mamezara",
      width: 500,
      height: 500,
    },
  },
  {
    id: 8,
    name: "Euro Shipping",
    description: "When purchasing online, please add this",
    price: 30,
    image: {
      url: "/free.png",
      alt: "shipping",
      width: 500,
      height: 500,
    },
  },
];

export default products;
