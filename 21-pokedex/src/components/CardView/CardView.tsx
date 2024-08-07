import { useEffect, useState } from "react";

import style from "./CardView.module.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { DETAIL_URL, HOME_URL } from "../../utils/constants";
import { Grid } from "react-loader-spinner";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const CardView = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    name: "---",
    generation: "---",
    effect: "---",
    ability: "---",
    img: "---",
  });

  useEffect(() => {
    setIsLoading(true);
    axios.get(DETAIL_URL + id).then((responseDetail) => {
      axios.get(HOME_URL + id).then((response) => {
        setData({
          name: response.data.name,
          generation: responseDetail.data.generation.name,
          effect: responseDetail.data.effect_entries[1].short_effect,
          ability: responseDetail.data.flavor_text_entries[0].flavor_text,
          img: response.data.sprites.front_default,
        });
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <div>
      <Link to="/" className={style.back}>
        Back
      </Link>
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
        <div className={style.box}>
          <h2 className={style.title}>{capitalizeFirstLetter(data.name)}</h2>
          <img className={style.img} src={data.img} alt="" />

          <table className={style.table}>
            <tbody>
              <tr>
                <td>Generation:</td>
                <td>{data.generation}</td>
              </tr>
              <tr>
                <td>Effect:</td>
                <td>{data.effect}</td>
              </tr>
              <tr>
                <td>Ability:</td>
                <td>{data.ability}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CardView;
