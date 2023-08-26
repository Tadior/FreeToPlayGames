import cls from './Footer.module.css';
import { Container } from '@/shared/ui/Container';
import LogoFooter from '@/shared/assets/logo-footer.png';
export const Footer = () => {
  return (
    <footer className={cls.Footer}>
      <Container>
        <a href="#" className={cls.Link}>
          <img className={cls.Logo} src={LogoFooter}></img>FreeToGame
        </a>
      </Container>
    </footer>
  );
};
