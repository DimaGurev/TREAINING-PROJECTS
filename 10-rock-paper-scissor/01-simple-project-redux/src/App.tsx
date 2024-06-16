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

// Импорт типов
import { GameStatus, Variants } from "./types";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { changeGameStatus, changeGameOver } from "./store/gameStatusSlice";
import { RootState } from "./store/store";
import {
  addPlayerPoint,
  addСomputerPoint,
  clearPlayerSelection,
  setRandomVariantsAnswer,
  userSelectedAnAnswerOption,
} from "./store/userDataSlice";

function App() {
  const dispatch = useDispatch();

  const gameOver = useSelector((state: RootState) => state.gameStatus.gameOver);
  const gameStatus = useSelector(
    (state: RootState) => state.gameStatus.gameStatus
  );
  const { computerPoints, computerSelection, playerPoints, userSelection } =
    useSelector((state: RootState) => state.userData);

  const [showConfetti, setShowConfetti] = useState(false);

  const checkGameResult = () => {
    if (computerSelection === userSelection) {
      dispatch(addСomputerPoint());
      dispatch(addPlayerPoint());
    } else if (
      (computerSelection === Variants.paper &&
        userSelection === Variants.stone) ||
      (computerSelection === Variants.scissors &&
        userSelection === Variants.paper) ||
      (computerSelection === Variants.stone &&
        userSelection === Variants.scissors)
    ) {
      dispatch(addСomputerPoint());
    } else if (
      (computerSelection === Variants.stone &&
        userSelection === Variants.paper) ||
      (computerSelection === Variants.paper &&
        userSelection === Variants.scissors) ||
      (computerSelection === Variants.scissors &&
        userSelection === Variants.stone)
    ) {
      dispatch(addPlayerPoint());
    }
    dispatch(clearPlayerSelection());
  };

  useEffect(() => {
    if (userSelection !== null) {
      checkGameResult();
    }
  }, [userSelection]);

  useEffect(() => {
    if (playerPoints >= 3 || computerPoints >= 3) {
      dispatch(changeGameOver(true));
    }
  }, [playerPoints, computerPoints]);

  useEffect(() => {
    if (playerPoints === computerPoints) {
      dispatch(changeGameStatus(GameStatus.Draw));
    } else if (playerPoints > computerPoints) {
      dispatch(changeGameStatus(GameStatus.Win));
      setShowConfetti(true);
    } else {
      dispatch(changeGameStatus(GameStatus.Lose));
    }
  }, [gameOver]);

  useEffect(() => {
    dispatch(setRandomVariantsAnswer());
  }, [userSelection]);

  const handleUserSelection = (variant: Variants) => {
    dispatch(userSelectedAnAnswerOption(variant));
  };

  return (
    <>
      <div className={main.center}>
        <div className={`${elevation.LightElevationFifth} box`}>
          <h1>Rock Paper Scissors {computerSelection}</h1>
          <button onClick={() => dispatch(setRandomVariantsAnswer())}>
            {computerPoints}, {computerSelection}, {playerPoints},{" "}
            {userSelection}
          </button>
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
                <div onClick={() => handleUserSelection(Variants.stone)}>
                  <img src={stoneImage} alt="stone" />
                </div>
                <div onClick={() => handleUserSelection(Variants.paper)}>
                  <img src={paperImage} alt="paper" />
                </div>
                <div onClick={() => handleUserSelection(Variants.scissors)}>
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
