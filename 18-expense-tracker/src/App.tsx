import mainStyles from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import History from "./components/History";

function App() {
  return (
    <>
      <div className={mainStyles.center}>
        <div className={elevation.LightElevationThird}>
          <h1>Expense Tracker</h1>
          <Balance />
          <History />
          <AddTransaction />
        </div>
      </div>
    </>
  );
}

export default App;
