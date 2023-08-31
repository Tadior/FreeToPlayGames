import cls from './MainPage.module.css';
import { gameApi } from '@/shared/api/gameApi';
import { GameList } from '@/entities/Game';
import { GameTags } from '@/features/GameTags';
import {Loader} from "@/shared/ui/Loader";
const MainPage = () => {
  const { data, isLoading, error } = gameApi.useGetGamesQuery({
    category: '',
    ['sort-by']: '',
  });
    if (isLoading) {
        return (<Loader />);
    }
  return (
    <section className={cls.MainPage}>
      <h1>Main Page</h1>
      <GameTags />
      {data && <GameList games={data} />}
    </section>
  );
};

export default MainPage;
