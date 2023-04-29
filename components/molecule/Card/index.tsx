interface ICardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ title, children }) => {
  return (
    <div className="border-2 border-gray-100 px-7 py-10 w-1/5 rounded-xl shadow-md">
      <p className={"mb-3 text-2xl text-center"}>{title}</p>
      {children}
    </div>
  );
};

export { Card };
