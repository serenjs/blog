import styles from './Header.module.css'

export default function Header({ title }) {
  return (
  <div className={styles.header}>
  <h3 className={styles.brand}>{title}</h3>
  <div className={styles.headerMenu}>
    <div className={styles.themeSwitcher}></div>
    <div className={styles.menu}></div>
  </div>
  </div>
  );
}
