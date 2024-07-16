import elevation from "./../assets/style/elevation.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  removeTransaction,
  selectTransactions,
} from "../store/transactionsSlice";

const History = () => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(selectTransactions);

  return (
    <>
      {transactions.length === 0 || (
        <div>
          <h3
            className={elevation.LightElevationSecond}
            style={{ padding: 10 }}
          >
            History{" "}
          </h3>
          {transactions.map((item) => (
            <div
              key={item?.id}
              className="transaction"
              style={{ borderColor: item?.amount > 0 ? "green" : "red" }}
            >
              <p>{item?.text}</p>
              <p>
                {item?.amount}{" "}
                <IoCloseSharp
                  onClick={() => dispatch(removeTransaction(item?.id || ""))}
                  style={{ cursor: "pointer" }}
                />
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default History;
