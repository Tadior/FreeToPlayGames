import cls from './Header.module.css';
import Logo from '@/shared/assets/logo.png';
import { Container } from '@/shared/ui/Container';
import { Link } from 'react-router-dom';
import { BASE_ROUTE } from '@/shared/consts/routes';
export const Header = () => {
  return (
    <header className={cls.Header}>
      <Container>
        <div className={cls.Wrapper}>
          <Link to={BASE_ROUTE} className={cls.Link}>
            <img src={Logo} className={cls.Logo} alt="FreeToPlayGames logo" />
          </Link>
        </div>
      </Container>
    </header>
  );
};
