import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { GamePage } from '@/pages/GamePage';
import { ErrorPage } from '@/pages/ErrorPage';
import { BASE_ROUTE, GAME_ROUTE } from '@/shared/consts/routes';

export const router = createBrowserRouter([
  {
    path: BASE_ROUTE,
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${GAME_ROUTE}:id`,
    element: <GamePage />,
  },
]);
