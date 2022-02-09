import styles from './Header.module.css'

export default function Header({ title }, { logo }) {
  return (
  <div className={styles.footer}>
    <div className='logo'>{logo}</div>
  <h1 className="title">{title}</h1>
  </div>
  );
}
