import cls from './GameList.module.css';
import { Game } from '../../model/types/game';
import { GameListItem } from '@/entities/Game/ui/GameListItem/GameListItem';

interface ArticleListProps {
  games: Game[];
}

export const GameList = (props: ArticleListProps) => {
  const { games } = props;
  return (
    <div className={cls.GameList}>
      {games.map((game) => {
        return <GameListItem gameData={game} key={game.id} />;
      })}
    </div>
  );
};
