import cls from './GamePage.module.css';
import { useGetGameByIdQuery } from '@/shared/api/gameApi';
import { useParams } from 'react-router-dom';
import { GameDetail } from '@/entities/Game/ui/GameDetail';
import {GoBackButton} from "@/shared/ui/GoBackButton";
import {Loader} from "@/shared/ui/Loader";

const GamePage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetGameByIdQuery(id);
  if (isLoading) {
    return (<Loader />);
  }
  return (
    <section className={cls.GamePage}>
      <h2>{data.title}</h2>
      <GameDetail data={data} />
        <GoBackButton />
    </section>
  );
};

export default GamePage;
