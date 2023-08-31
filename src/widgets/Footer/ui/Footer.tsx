import cls from './Footer.module.css';
import { Container } from '@/shared/ui/Container';
import LogoFooter from '@/shared/assets/logo-footer.png';
import { BASE_ROUTE } from '@/shared/consts/routes';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className={cls.Footer}>
      <Container>
        <Link to={BASE_ROUTE} className={cls.Link}>
          <img className={cls.Logo} src={LogoFooter}></img>FreeToGame
        </Link>
      </Container>
    </footer>
  );
};
