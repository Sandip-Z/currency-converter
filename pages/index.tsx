import {
  ConnectWallet,
  CurrencyConverter,
  PopUp,
  WalletDetail,
} from "@/components";
import { useEffect, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";

import { clipLongString } from "@/utility/string";

export default function Home() {
  const { address, chainId, connectWallet, disconnectWallet, balance } =
    useWeb3();
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    if (address && chainId) {
      setIsWalletConnected(true);
    } else {
      setIsWalletConnected(false);
    }
  }, [address, chainId]);

  const handleDisconnect = () => {
    disconnectWallet();
    setIsWalletConnected(false);
  };

  const handleConnectWallet = () => {
    connectWallet("injected");
    if (address && chainId && balance?.formatted) {
      setIsWalletConnected(true);
    }
  };

  return (
    <main className="flex flex-col justify-center h-screen items-center">
      <CurrencyConverter />
      <PopUp text={"Check Wallet Details"}>
        {isWalletConnected ? (
          <WalletDetail
            account={clipLongString(address || "")}
            balance={String(balance?.formatted)}
            chainId={String(chainId?.toString())}
            key={"23"}
            handleDisconnect={handleDisconnect}
          />
        ) : (
          <ConnectWallet handleConnect={handleConnectWallet} />
        )}
      </PopUp>
    </main>
  );
}
