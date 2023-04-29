interface IWalletDetailProps {
  account: string;
  chainId: string;
  balance: string;
  handleDisconnect: () => void;
}

interface DetailProps {
  label: string;
  value: string;
  clip?: boolean;
}

const Detail: React.FC<DetailProps> = ({ label, value, clip }) => {
  return (
    <div className="flex place-content-between px-10 my-2">
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
};

const WalletDetail: React.FC<IWalletDetailProps> = ({
  account,
  chainId,
  balance,
  handleDisconnect,
}) => {
  return (
    <div className=" text-white">
      <Detail label="Account" value={account} clip />
      <Detail label="Chain ID" value={chainId} />
      <Detail label="Balance" value={balance} />
      <p className="flex place-content-center mt-5">Wallet Details</p>
      <div className="flex place-content-center mt-5 pb-5">
        <button
          className="bg-red-500 rounded-lg hover:bg-red-600 px-5 py-2 text-white"
          onClick={handleDisconnect}
        >
          Disconnect
        </button>
      </div>
    </div>
  );
};

export { WalletDetail };
