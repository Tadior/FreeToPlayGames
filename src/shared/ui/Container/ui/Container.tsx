import cls from './Container.module.css';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return <div className={cls.Container}>{children}</div>;
};
