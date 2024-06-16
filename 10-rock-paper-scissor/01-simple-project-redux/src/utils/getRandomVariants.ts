import { Variants } from "../types";

const getRandomVariants = (): Variants => {
  const randomVariants: Variants[] = [
    Variants.stone,
    Variants.paper,
    Variants.scissors,
  ];
  const randomIndex: number = Math.floor(Math.random() * randomVariants.length);
  return randomVariants[randomIndex];
};

export default getRandomVariants;
