// Импорт стилей
import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import buttons from "./assets/style/buttons.module.scss";

// Импорт React и его компонентов
import { useEffect, useState } from "react";

// Импорт библиотек и сторонних зависимостей
import Confetti from "react-confetti";

// Импорт изображений, шрифтов и других ресурсов
import stoneImage from "./assets/image/hand-rock.png";
import paperImage from "./assets/image/hand.png";
import scissorsImage from "./assets/image/hand-scissors.png";

type VariantAnswers = "stone" | "paper" | "scissors" | null;

const getRandomVariants = (): VariantAnswers => {
  const randomVariants: VariantAnswers[] = ["stone", "paper", "scissors"];
  const randomIndex: number = Math.floor(Math.random() * randomVariants.length);
  return randomVariants[randomIndex];
};

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [gameStatus, setGameStatus] = useState<
    "You WIN 🥳" | "You LOSE 🤥 " | "DRAW 🤝" | null
  >(null);

  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setСomputerPoints] = useState(0);

  const computerSelection = getRandomVariants();
  const [userSelection, setUserSelection] = useState<VariantAnswers>(null);

  const [showConfetti, setShowConfetti] = useState(false);

  const userSelectedAnAnswerOption = (answer: VariantAnswers): void => {
    setUserSelection(answer);
  };

  useEffect(() => {
    if (computerSelection === userSelection) {
      setPlayerPoints((prev) => prev + 1);
      setСomputerPoints((prev) => prev + 1);
      setUserSelection(null);
    }
    // paper stone
    if (computerSelection === "paper" && userSelection === "stone") {
      setСomputerPoints((prev) => prev + 1);
      setUserSelection(null);
    }
    if (computerSelection === "stone" && userSelection === "paper") {
      setPlayerPoints((prev) => prev + 1);
      setUserSelection(null);
    }
    // scissors paper
    if (computerSelection === "scissors" && userSelection === "paper") {
      setСomputerPoints((prev) => prev + 1);
      setUserSelection(null);
    }
    if (computerSelection === "paper" && userSelection === "scissors") {
      setPlayerPoints((prev) => prev + 1);
      setUserSelection(null);
    }
    // stone scissors
    if (computerSelection === "stone" && userSelection === "scissors") {
      setСomputerPoints((prev) => prev + 1);
      setUserSelection(null);
    }
    if (computerSelection === "scissors" && userSelection === "stone") {
      setPlayerPoints((prev) => prev + 1);
      setUserSelection(null);
    }
  }, [userSelection]);

  useEffect(() => {
    if (playerPoints >= 3 || computerPoints >= 3) {
      setGameOver(true);
    }
  }, [playerPoints, computerPoints]);

  useEffect(() => {
    if (playerPoints === computerPoints) {
      setGameStatus("DRAW 🤝");
    }
    if (playerPoints > computerPoints) {
      setGameStatus("You WIN 🥳");
      setShowConfetti(true);
    }
    if (playerPoints < computerPoints) {
      setGameStatus("You LOSE 🤥 ");
    }
  }, [gameOver]);

  return (
    <>
      <div className={main.center}>
        <div className={`${elevation.LightElevationFifth} box`}>
          <h1>Rock Paper Scissors</h1>
          {showConfetti && <Confetti />}
          <div className={`${main.row} scoreboard`}>
            <span className="player">user</span>
            <span className="counter">
              {playerPoints} : {computerPoints}
            </span>
            <span className="player">computer</span>
          </div>
          {gameOver ? (
            <>
              <p className="bolt">{gameStatus}</p>
              <button
                onClick={() => window.location.reload()}
                className={buttons.FilledButtons}
              >
                Repeat Game
              </button>
            </>
          ) : (
            <>
              <p className="bolt">Get Started, Let's Rock!</p>
              <div className={`${main.row} choice`}>
                <div onClick={() => userSelectedAnAnswerOption("stone")}>
                  <img src={stoneImage} alt="stone" />
                </div>
                <div onClick={() => userSelectedAnAnswerOption("paper")}>
                  <img src={paperImage} alt="paper" />
                </div>
                <div onClick={() => userSelectedAnAnswerOption("scissors")}>
                  <img src={scissorsImage} alt="scissors" />
                </div>
              </div>
              <p>Make your move.</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
