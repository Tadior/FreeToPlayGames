import cls from './Header.module.css';
import Logo from '@/shared/assets/logo.png';
import { Container } from '@/shared/ui/Container';
export const Header = () => {
  return (
    <header className={cls.Header}>
      <Container>
        <div className={cls.Wrapper}>
          <a href="#" className={cls.Link}>
            <img src={Logo} className={cls.Logo} alt="FreeToPlayGames logo" />
          </a>
        </div>
      </Container>
    </header>
  );
};
