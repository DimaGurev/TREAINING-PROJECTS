import axios from "axios";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { formatNumber } from "../../utils/formatNumber";
import { getIdPokemonFromUrl } from "../../utils/getIdPokemonFromUrl";
import style from "./Card.module.scss";
import { COLORS, HOME_URL, PokemonType } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiLoader2Fill } from "react-icons/ri";

const Card = ({ name, url }: any) => {
  const [img, setImg] = useState("");
  const [type, setType] = useState<PokemonType | "">("");

  axios.get(HOME_URL + `/${getIdPokemonFromUrl(url)}`).then((response) => {
    setImg(response.data.sprites.front_default);
    setType(response.data.types[0].type.name as keyof typeof COLORS);
  });

  const backgroundColor = type ? COLORS[type as keyof typeof COLORS] : "#FFF"; // Default color if type is invalid

  return (
    <Link to={`/pokemon/${getIdPokemonFromUrl(url)}`}>
      <div className={style.border}>
        <div className={style.header} style={{ backgroundColor }}>
          {img ? (
            <img className={style.image} src={img} alt="" />
          ) : (
            <RiLoader2Fill />
          )}
        </div>
        <div className={style.footer}>
          <p className={style.ordinal}>
            #{formatNumber(getIdPokemonFromUrl(url))}
          </p>
          <p className={style.name}>{capitalizeFirstLetter(name)}</p>
          <p className={style.type}>
            Type : <span>{type ? type : "---"}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
