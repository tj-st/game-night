import { FaShieldAlt } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav className="left-0 top-0 fixed h-full w-16 bg-[#222222] flex">
      <div className="mx-auto pt-5">
        <FaShieldAlt size={40} color={'#FFA552'} />
      </div>
    </nav>
  );
};

export default Navigation;
