import "./App.scss";
import PokemonList from "./components/PokemonList/PokemonList";
import { Route, Routes } from "react-router-dom";
import CardView from "./components/CardView/CardView";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Pokedex</h1>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<CardView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
