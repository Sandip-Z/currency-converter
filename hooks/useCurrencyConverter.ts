import { parseDecimal } from "@/utility/numbers";
import { useCallback } from "react";

const useCurrencyConverter = () => {
  const convertNEPToBUSD = useCallback((NEP: number) => {
    return {
      NEP: parseDecimal(NEP, 2),
      BUSD: parseDecimal(NEP * 3, 2),
    };
  }, []);

  const convertBUSDToNEP = useCallback((BUSD: number) => {
    return {
      NEP: parseDecimal(BUSD / 3, 2),
      BUSD: parseDecimal(BUSD, 2),
    };
  }, []);

  return {
    convertBUSDToNEP,
    convertNEPToBUSD,
  };
};

export default useCurrencyConverter;
