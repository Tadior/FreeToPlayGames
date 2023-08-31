import { Carousel } from 'antd';
import cls from './GameCarousel.module.css';
import { GameInfo } from '@/entities/Game';

type GameCarouselProps = Pick<GameInfo, 'screenshots'>;
export const GameCarousel = ({ screenshots }: GameCarouselProps) => {
  const contentStyle: React.CSSProperties = {
      margin: 0,
      width: '300px',
      height: '200px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
  };
  const onChange = () => {
    console.log('change');
  };

  return (
    <Carousel className={cls.Carousel} afterChange={onChange}>
      {screenshots.map((screenshot) => {
        return (
          <div key={screenshot.id}>
            <img src={screenshot.image} alt={`screenshot`} />
          </div>
        );
      })}
    </Carousel>
  );
};
