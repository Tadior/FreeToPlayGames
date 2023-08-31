import cls from './GameInformationBlock.module.css';
import { GameInfo } from '@/entities/Game';

type GameInformationProps = {
  props: Pick<
    GameInfo,
    | 'genre'
    | 'developer'
    | 'publisher'
    | 'release_date'
    | 'minimum_system_requirements'
  >;
};
export const GameInformationBlock = ({ props }: GameInformationProps) => {
  const {
    genre,
    developer,
    publisher,
    release_date,
    minimum_system_requirements,
  } = props;
  const itemsData = {
    genre: genre,
    developer: developer,
    publisher: publisher,
    ['release date']: release_date,
  };
  return (
    <ul className={cls.Info}>
      {Object.keys(itemsData).map((item) => {
        return (
          <li className={cls.Item} key={item}>
            <div className={cls.Title}>{item}:</div>
            <div className={cls.Value}>
              {itemsData[item as keyof typeof itemsData]}
            </div>
          </li>
        );
      })}

      <li className={[cls.Item, cls.ItemReq].join(' ')}>
        <div className={cls.Title}>Minimum system requirements:</div>
        <div className={cls.requirements}>
          {minimum_system_requirements ? (
            <>
              <div className={cls.requirementsItem}>
                Operational system: {minimum_system_requirements.os}
              </div>
              <div className={cls.requirementsItem}>
                Processor: {minimum_system_requirements.processor}
              </div>
              <div className={cls.requirementsItem}>
                Memory: {minimum_system_requirements.memory}
              </div>
              <div className={cls.requirementsItem}>
                Graphics: {minimum_system_requirements.graphics}
              </div>
              <div className={cls.requirementsItem}>
                Storage: {minimum_system_requirements.storage}
              </div>
            </>
          ) : (
            'No requirements'
          )}
        </div>
      </li>
    </ul>
  );
};
