import styles from './Header.module.css';

import codeLearnLogo from '../assets/code-learn-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={codeLearnLogo} alt="Logotipo da Code Learn" />
    </header>
  )
}