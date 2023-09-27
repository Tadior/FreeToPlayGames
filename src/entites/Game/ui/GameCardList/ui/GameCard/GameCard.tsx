import { Game } from "../../../../../../types/Game";
import cls from "./GameCard.module.css";
import { ReactComponent as PlaySvg } from "../../../../../../assets/play.svg";
import { Link } from "react-router-dom";
import { getRussianDate } from "../../../../../../helpers/getRussianDate/getRussianDate";

interface GameCardProps {
  gameInfo: Game;
}

export const GameCard = (props: GameCardProps) => {
  const {
    id,
    title,
    thumbnail,
    short_description,
    genre,
    release_date,
    publisher,
  } = props.gameInfo;
  return (
    <Link to={`/${id}`} className={cls.GameCard} id={`${id}`}>
      <img className={cls.Image} src={thumbnail} alt={title} />
      <ul className={cls.GenresList}>
        <li className={cls.Genre}>{genre}</li>
      </ul>
      <div className={cls.Wrapper}>
        <div className={cls.Info}>
          <div className={cls.Title}>{title}</div>
          <div className={cls.Publisher}>{publisher}</div>
          <div className={cls.Description}>{short_description}</div>
          <div className={cls.Release}>{getRussianDate(release_date)}</div>
        </div>
        <div className={cls.GameButton}>
          <PlaySvg className={cls.PlayImg} />
        </div>
      </div>
    </Link>
  );
};
