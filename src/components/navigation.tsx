import Link from 'next/link';
import { FaCalendarAlt, FaGamepad, FaShieldAlt } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav className="left-0 top-0 fixed h-full w-16 bg-[#222222] flex">
      <div className="py-5 mx-auto">
        <div className="mb-12">
          <Link href="/">
            <a className="hover:drop-shadow-2xl">
              <FaShieldAlt size={40} color={'#FFA552'} />
            </a>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="/events">
            <a className="hover:drop-shadow-2xl">
              <FaCalendarAlt size={40} color={'#FFA552'} />
            </a>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="/">
            <a className="hover:drop-shadow-2xl">
              <FaGamepad size={40} color={'#FFA552'} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
