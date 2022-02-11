import styles from './Header.module.css'

export default function Header({ title }) {
  return (
  <div className={styles.header}>
  <h4 className='brand'>{title}</h1>
  <div className='theme-switcher'></div>
  <div className='menu'></div>
  </div>
  );
}
