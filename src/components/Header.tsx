import styles from '../styles/modules/Header.module.css';

type PageHeaderProps = {
  title: string;
};

const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className={styles.header}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default PageHeader;
