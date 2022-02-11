import styles from './Header.module.css'

export default function Header({ title }) {
  return (
  <div className={styles.header}>
  <h3 className='brand'>{title}</h3>
  <div className='theme-switcher'></div>
  <div className='menu'></div>
  </div>
  );
}
