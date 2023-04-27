import { InputEventType } from "@/types";

interface IInputType {
  type: string;
  id: string;
  value: string | number;
  onChange: (e: InputEventType) => void;
}

const Input: React.FC<IInputType> = (props) => {
  return (
    <input
      className={"border-grey-200 border-2 p-2 rounded-xl"}
      {...props}
      min={0}
    />
  );
};

export { Input };
