import { Link } from 'react-router-dom'
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.menu}>
      <a href="#footer" className={styles.menuLogo}>
        <img
          src="src\assets\img\hbo-logo.svg"
          alt="Logotipo HBOMax com o nome da marca"
          className={styles.menuLogoImage} 
        />
      </a>
      <div>
        <a className={styles.menuItem}><Link to="./SignIn">Entrar</Link></a>
        <a href="#subscription" className={styles.menuItemButton}>
          Assine Agora
        </a>
      </div>
    </nav>
  )
}