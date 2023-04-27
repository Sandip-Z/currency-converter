import { useState } from "react";
import { Card, ExchangeIcon, InputCurrency } from "@/components";
import { CURRENCIES, InputEventType } from "@/types";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";

export default function Home() {
  const [currencies, setCurrencies] = useState({
    NEP: 1,
    BUSD: 3,
  });
  const { convertBUSDToNEP, convertNEPToBUSD } = useCurrencyConverter();

  return (
    <main className="flex justify-center h-screen items-center">
      <Card title="Currency Converter" key={"current-converted-card"}>
        <>
          <InputCurrency
            id="nepali-currency"
            value={currencies?.NEP}
            label={CURRENCIES?.NEP}
            handleChange={(e: InputEventType) => {
              const result = convertNEPToBUSD(+e.target.value);
              setCurrencies(result);
            }}
          />
          <div className="flex justify-center py-5">
            <ExchangeIcon />
          </div>
          <InputCurrency
            id="busd-currency"
            value={currencies?.BUSD}
            label={CURRENCIES?.BUSD}
            handleChange={(e: InputEventType) => {
              const result = convertBUSDToNEP(+e.target.value);
              setCurrencies(result);
            }}
          />
        </>
      </Card>
    </main>
  );
}
