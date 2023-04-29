import {
  ConnectWallet,
  CurrencyConverter,
  PopUp,
  WalletDetail,
} from "@/components";
import { useState } from "react";

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(true);

  return (
    <main className="flex flex-col justify-center h-screen items-center">
      <CurrencyConverter />
      <PopUp text={"Check Wallet Details"}>
        {isWalletConnected ? (
          <WalletDetail
            account="1"
            balance="2"
            chainId="123"
            key={"23"}
            handleDisconnect={() => null}
          />
        ) : (
          <ConnectWallet handleConnect={() => {}} />
        )}
      </PopUp>
    </main>
  );
}
