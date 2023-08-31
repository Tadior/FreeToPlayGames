import './styles/main.css';
import { Header } from '@/widgets/Header';
import cls from './App.module.css';
import { Container } from '@/shared/ui/Container';
import { Footer } from '@/widgets/Footer';
import { MainPage } from '@/pages/MainPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GamePage } from '@/pages/GamePage';
import { BASE_ROUTE, GAME_ROUTE } from '@/shared/consts/routes';
import { Suspense } from 'react';

function App() {
  return (
    <div id="app" className={cls.App}>
      <Header />
      <main>
        <Container>
          <Suspense fallback="">
            <Routes>
              <Route path={BASE_ROUTE} element={<MainPage />} />
              <Route path={`${GAME_ROUTE}:id`} element={<GamePage />} />
              <Route
                path={GAME_ROUTE}
                element={<Navigate to={BASE_ROUTE} replace />}
              />
            </Routes>
          </Suspense>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
