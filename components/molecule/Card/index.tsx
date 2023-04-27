interface ICardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ title, children }) => {
  return (
    <div className="border-4 border-black p-2 w-1/3 rounded-xl">
      <p className={"mb-3"}>{title}</p>
      {children}
    </div>
  );
};

export { Card };
