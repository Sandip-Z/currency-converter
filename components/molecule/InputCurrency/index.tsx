import { Input } from "@/components";
import { InputEventType } from "@/types";

interface InputCurrencyProps {
  id: string;
  value: number | string;
  label: string;
  handleChange: (e: InputEventType) => void;
}

const InputCurrency: React.FC<InputCurrencyProps> = ({
  id,
  value,
  handleChange,
  label,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <Input id={id} type="number" value={value} onChange={handleChange} />
    </div>
  );
};

export { InputCurrency };
