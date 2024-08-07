import axios from "axios";
import { useEffect, useState } from "react";
import { HOME_URL } from "../../utils/constants";
import { Grid } from "react-loader-spinner";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<any>([]);
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(HOME_URL, {
        params: {
          offset: 0 + (activePage - 1) * 10,
          limit: 10,
        },
      })
      .then((resp) => {
        const data = resp.data.results;
        setPokemons(data);
        setIsLoading(false);
      });
  }, [activePage]);

  return (
    <>
      {isLoading ? (
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      ) : (
        <>
          <div className="content">
            {pokemons.map((item: { name: any; url: any }) => (
              <Card name={item.name} url={item.url} />
            ))}
          </div>
          <Pagination activePage={activePage} setActivePage={setActivePage} />
        </>
      )}
    </>
  );
};

export default PokemonList;
