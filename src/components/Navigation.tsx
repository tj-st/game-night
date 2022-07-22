import Link from 'next/link';
import { FaCalendarAlt, FaPlusCircle, FaShieldAlt } from 'react-icons/fa';
import styles from '../styles/modules/Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.bar}>
      <div className={styles.items}>
        <div>
          <Link href="/">
            <a className="hover:drop-shadow-2xl">
              <FaShieldAlt size={36} color={'#FFA552'} />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/events">
            <a className="hover:drop-shadow-2xl">
              <FaCalendarAlt size={36} color={'#FFA552'} />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/create">
            <a className="hover:drop-shadow-2xl">
              <FaPlusCircle size={36} color={'#FFA552'} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
