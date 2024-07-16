import elevation from "./../assets/style/elevation.module.scss";
import buttons from "./../assets/style/buttons.module.scss";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTransaction } from "../store/transactionsSlice";
import {
  handleAmount,
  handleClear,
  handleText,
  selectAmount,
  selectText,
} from "../store/inputSlice";
import nextId from "react-id-generator";

const AddTransaction = () => {
  const dispatch = useAppDispatch();

  const text = useAppSelector(selectText);
  const amount = useAppSelector(selectAmount);

  const add = () => {
    if (text !== "" && amount !== "") {
      dispatch(addTransaction({ id: nextId(), text, amount }));
      dispatch(handleClear());
    }
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    add();
  };

  return (
    <div>
      <h3 className={elevation.LightElevationSecond} style={{ padding: 10 }}>
        Add new transaction
      </h3>
      <form onSubmit={onSubmitForm}>
        <label>
          <h4>Text</h4>
          <input
            onChange={(e) => dispatch(handleText(e.target.value))}
            type="text"
            placeholder="Enter text"
            value={text}
            required
          />
        </label>
        <label>
          <h4>Amount (negative - expense, positive - income)</h4>
          <input
            onChange={(e) => dispatch(handleAmount(e.target.value))}
            type="number"
            placeholder="Enter amount"
            value={amount}
            required
          />
        </label>
        <center>
          <button
            className={buttons.FilledButtons}
            style={{ margin: "10px auto 0" }}
            onClick={add}
          >
            Add transaction
          </button>
        </center>
      </form>
    </div>
  );
};

export default AddTransaction;
