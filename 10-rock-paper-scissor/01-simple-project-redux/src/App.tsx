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
import getRandomVariants from "./utils/getRandomVariants";

// Импорт типов
import { GameStatus, Variants, VariantsAnswers } from "./types";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [gameStatus, setGameStatus] = useState<GameStatus | null>(null);

  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setСomputerPoints] = useState(0);

  const [computerSelection, setComputerSelection] = useState(
    getRandomVariants()
  );

  const [userSelection, setUserSelection] = useState<VariantsAnswers>(null);

  const [showConfetti, setShowConfetti] = useState(false);

  const userSelectedAnAnswerOption = (answer: VariantsAnswers): void => {
    setUserSelection(answer);
  };

  useEffect(() => {
    if (computerSelection === userSelection) {
      setPlayerPoints((prev) => prev + 1);
      setСomputerPoints((prev) => prev + 1);
      setUserSelection(null);
    }

    if (
      (computerSelection === Variants.paper &&
        userSelection === Variants.stone) ||
      (computerSelection === Variants.scissors &&
        userSelection === Variants.paper) ||
      (computerSelection === Variants.stone &&
        userSelection === Variants.scissors)
    ) {
      setСomputerPoints((prev) => prev + 1);
      setUserSelection(null);
    }

    if (
      (computerSelection === Variants.stone &&
        userSelection === Variants.paper) ||
      (computerSelection === Variants.paper &&
        userSelection === Variants.scissors) ||
      (computerSelection === Variants.scissors &&
        userSelection === Variants.stone)
    ) {
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
    setComputerSelection(getRandomVariants());
  }, [userSelection]);

  useEffect(() => {
    if (playerPoints === computerPoints) {
      setGameStatus(GameStatus.Draw);
    } else if (playerPoints > computerPoints) {
      setGameStatus(GameStatus.Win);
      setShowConfetti(true);
    } else {
      setGameStatus(GameStatus.Lose);
    }
  }, [gameOver]);

  return (
    <>
      <div className={main.center}>
        <div className={`${elevation.LightElevationFifth} box`}>
          <h1>Rock Paper Scissors {computerSelection}</h1>
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
                <div onClick={() => userSelectedAnAnswerOption(Variants.stone)}>
                  <img src={stoneImage} alt="stone" />
                </div>
                <div onClick={() => userSelectedAnAnswerOption(Variants.paper)}>
                  <img src={paperImage} alt="paper" />
                </div>
                <div
                  onClick={() => userSelectedAnAnswerOption(Variants.scissors)}
                >
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
