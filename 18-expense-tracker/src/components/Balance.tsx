import { useAppSelector } from "../store/hooks";
import {
  selectExpense,
  selectIncome,
  selectTotal,
} from "../store/transactionsSlice";
import { addDecimalAndZeros } from "../utils/addDecimalAndZeros";
import elevation from "./../assets/style/elevation.module.scss";

const Balance = () => {
  const income = useAppSelector(selectIncome);
  const expense = useAppSelector(selectExpense);
  const total = useAppSelector(selectTotal);

  return (
    <div style={{ textAlign: "center" }}>
      <div className={elevation.LightElevationThird}>
        <h2>Your Balance</h2>
        <h2>${addDecimalAndZeros(total)}</h2>
      </div>

      <div className="grid">
        <p>Income</p>
        <p>Expense</p>

        <p style={{ color: "green", fontWeight: 900 }}>
          ${addDecimalAndZeros(income)}
        </p>
        <p style={{ color: "red", fontWeight: 900 }}>
          ${addDecimalAndZeros(expense)}
        </p>
      </div>
    </div>
  );
};

export default Balance;
