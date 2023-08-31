import cls from './GameListItem.module.css';
import { Game } from '@/entities/Game';
import { getDateInRuFormat } from '@/shared/helpers/getDateInRuFormat';
import { Link } from 'react-router-dom';
import { GAME_ROUTE } from '@/shared/consts/routes';

interface GameListItemProps {
  gameData: Game;
}

export const GameListItem = (props: GameListItemProps) => {
  const { title, thumbnail, genre, publisher, release_date, id } =
    props.gameData;
  return (
    <Link
      to={`${GAME_ROUTE}${id}`}
      className={cls.GameListItem}
      id={id.toString()}>
      <div className={cls.ImageWrapper}>
        <img className={cls.Image} src={thumbnail} alt={title} />
      </div>
      <div className={cls.Title}>{title}</div>
      <div className={cls.Genre}>{genre}</div>
      <div className={cls.Publisher}>{publisher}</div>
      <div className={cls.Release}>{getDateInRuFormat(release_date)}</div>
    </Link>
  );
};
