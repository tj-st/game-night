type PageHeaderProps = {
  title: string;
};

const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className="h-20 bg-orange-400 pl-5 flex items-center">
      <h1 className="font-bold text-5xl drop-shadow-md text-[#222222]">{props.title}</h1>
    </div>
  );
};

export default PageHeader;
