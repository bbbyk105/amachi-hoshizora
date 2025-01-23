import { Product } from "@/types/products";

const products: Product[] = [
  {
    id: 1,
    name: "天地星空 AMACHIHOSHISORA 500ml",
    description:
      "A 500ml version of Japanese sake brewed at the foot of Mt. Fuji.",
    price: 65,
    image: {
      url: "/images/productA.jpg",
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
      url: "/images/productA.jpg",
      alt: "AMACHIHOSHISORA 500ml",
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
      url: "/images/productA.jpg",
      alt: "AMACHIHOSHISORA 500ml",
      width: 500,
      height: 500,
    },
  },
  {
    id: 4,
    name: "丸モ高木陶器 Marumo Takagi 4cups",
    description: "Buy 4 and get 25% off!",
    price: 80,
    image: {
      url: "/images/productA.jpg",
      alt: "AMACHIHOSHISORA 500ml",
      width: 500,
      height: 500,
    },
  },
];

export default products;
