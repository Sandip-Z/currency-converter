import { useState } from "react";
import { Card, ExchangeIcon, InputCurrency } from "@/components";
import { CURRENCIES, InputEventType } from "@/types";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";
import { showDecimal } from "@/utility/numbers";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState({
    NEP: "1.00",
    BUSD: "3.00",
  });

  const { convertBUSDToNEP, convertNEPToBUSD } = useCurrencyConverter();

  return (
    <Card title="Currency Converter" key={"current-converted-card"}>
      <>
        <InputCurrency
          id="nepali-currency"
          value={currencies?.NEP}
          label={CURRENCIES?.NEP}
          handleChange={(e: InputEventType) => {
            const result = convertNEPToBUSD(e.target.value);
            setCurrencies({
              BUSD: showDecimal(result),
              NEP: e.target.value,
            });
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
            const result = convertBUSDToNEP(e.target.value);
            setCurrencies({
              BUSD: e?.target?.value,
              NEP: showDecimal(result),
            });
          }}
        />
      </>
    </Card>
  );
};

export { CurrencyConverter };
