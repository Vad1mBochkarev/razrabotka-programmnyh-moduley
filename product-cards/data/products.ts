export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 0,
    image: "/images/image.png",
    title: "тарелка глубокая",
    description: "тарелка диаметром 30 см с высокими бортиками",
    price: 2500,
  },
  {
    id: 1,
    image: "/images/image.png",
    title: "кружка",
    description: "350 мл для самого вкусного кофе",
    price: 2000,
  },
  {
    id: 2,
    image: "/images/image.png",
    title: "ваза",
    description: "2 литра для ваших ярких букетов",
    price: 4000,
  },
  {
    id: 3,
    image: "/images/image.png",
    title: "тарелка объемная",
    description: "блюдце 20 см под разные вкусности",
    price: 3500,
  },
];



// тарелка глубокая — 30 см с высокими бортиками — 2500 ₽;
// кружка — 350 мл для самого вкусного кофе — 2000 ₽;
// ваза — 2 литра для ваших ярких букетов — 4000 ₽;
// тарелка объемная — блюдце 20 см под разные вкусности — 3500 ₽.