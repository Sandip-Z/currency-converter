interface IWalletDetailProps {
  account: string;
  chainId: string;
  balance: string;
  handleDisconnect: () => void;
}

interface DetailProps {
  label: string;
  value: string;
}

const Detail: React.FC<DetailProps> = ({ label, value }) => {
  return (
    <div className="flex place-content-around my-2">
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
      <Detail label="Account" value={account} />
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
