export enum Variants {
  stone = "stone",
  paper = "paper",
  scissors = "scissors",
}

export type VariantsAnswers = Variants | null;

export enum GameStatus {
  Win = "You WIN 🥳",
  Lose = "You LOSE 🤥",
  Draw = "DRAW 🤝",
}
