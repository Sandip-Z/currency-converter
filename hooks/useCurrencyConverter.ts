import { useCallback } from "react";

const useCurrencyConverter = () => {
  const convertNEPToBUSD = useCallback((NEP: string) => {
    return (+NEP * 3).toString();
  }, []);

  const convertBUSDToNEP = useCallback((BUSD: string) => {
    return (+BUSD / 3).toString();
  }, []);

  return {
    convertBUSDToNEP,
    convertNEPToBUSD,
  };
};

export default useCurrencyConverter;
