import styles from '../styles/modules/Header.module.css';

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
