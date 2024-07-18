import buttons from "./../../assets/style/buttons.module.scss";

type typeProps = { avatar_url: string; login: string; html_url: string };

const Card: React.FC<typeProps> = ({ avatar_url, login, html_url }) => {
  return (
    <div className="card">
      <img src={avatar_url} />
      <h2
        className="cardTitle"
      >
        {login}
      </h2>
      <a className={buttons.FilledButtons} href={html_url} target="_blank">
        View profile
      </a>
    </div>
  );
};

export default Card;
