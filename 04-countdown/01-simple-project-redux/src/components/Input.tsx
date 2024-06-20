// Импорт стилей
import { setName, setSelectedDate, toogleStatus } from "../store/gameSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import buttons from "./../assets/style/buttons.module.scss";
import typography from "./../assets/style/typography.module.scss";

const Input: React.FC = () => {
  const dispatch = useAppDispatch();

  const name = useAppSelector((state) => state.game.name);
  const selectedDate = useAppSelector((state) => state.game.selectedDate);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedDate(e.target.value));
  };

  return (
    <>
      <h4 className={typography.LabelLarge}>Name</h4>
      <input
        onChange={(e) => changeName(e)}
        value={name}
        type="text"
        placeholder="What are you counting down to?"
      />

      <h4 className={typography.LabelLarge}>Date</h4>
      <input
        onChange={(e) => handleDateChange(e)}
        type="date"
        value={selectedDate}
      />

      <button
        onClick={() => dispatch(toogleStatus())}
        className={buttons.FilledButtons}
        style={{ marginTop: "30px", width: "100%" }}
      >
        Submit
      </button>
    </>
  );
};

export default Input;
