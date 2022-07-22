import Navigation from './Navigation';

type LayoutProps = {
  children?: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div>
        <Navigation />
        <main className="pl-14">{children}</main>
      </div>
    </>
  );
};

export default Layout;
