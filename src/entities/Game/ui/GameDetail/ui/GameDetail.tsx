import cls from './GameDetail.module.css';
import { GameInfo } from '@/entities/Game';
import { GameCarousel } from '@/entities/Game/ui/GameCarousel';
import { GameInformationBlock } from '@/entities/Game/ui/GameDetail/ui/GameInformationBlock';
import {Carousel, Col, Row} from "antd";

interface GameDetailProps {
  data: GameInfo;
}
export const GameDetail = (props: GameDetailProps) => {
  const { title, thumbnail, description, screenshots } = props.data;

    const contentStyle: React.CSSProperties = {
        overflow: "hidden",
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

  return (
    <div className={cls.GameDetail}>
      <div className={cls.Top}>
          <div className={cls.ImgWrapper}>
              <img className={cls.Thumbnail} src={thumbnail} alt={title} />
          </div>
          <GameInformationBlock props={props.data} />
      </div>
        <div className={cls.Bottom}>
            <div className={cls.Description}>
                <div className={cls.SubTitle}>Description:</div>
                <div className={cls.DescriptionText}>{description}</div>
            </div>
            <div className={cls.Screenshot}>
                <div className={cls.SubTitle}>Screenshots:</div>
                <div className={cls.ScreenshotWrapper}>
                    <GameCarousel screenshots={screenshots} />
                </div>
            </div>
            {/*<div className={cls.Test}>*/}
            {/*    <div className={cls.TestWrapper}>*/}
            {/*        <Carousel>*/}
            {/*            {screenshots.map((screenshot) => {*/}
            {/*                return (*/}
            {/*                    <><img src={screenshot.image} alt={`screenshot`} /></>*/}
            {/*                );*/}
            {/*            })}*/}
            {/*        </Carousel>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </div>
  );
};
