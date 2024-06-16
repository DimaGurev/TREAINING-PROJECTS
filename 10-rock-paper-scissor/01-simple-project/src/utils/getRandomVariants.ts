import { Variants, VariantsAnswers } from "../types";

const getRandomVariants = (): VariantsAnswers => {
  const randomVariants: VariantsAnswers[] = [
    Variants.stone,
    Variants.paper,
    Variants.scissors,
  ];
  const randomIndex: number = Math.floor(Math.random() * randomVariants.length);
  return randomVariants[randomIndex];
};

export default getRandomVariants;
