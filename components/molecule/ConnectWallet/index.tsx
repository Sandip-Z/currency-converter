interface IConnectWalletProps {
  handleConnect: () => void;
}

const ConnectWallet: React.FC<IConnectWalletProps> = ({ handleConnect }) => {
  return (
    <div>
      <p className="text-red-500 text-center mt-5">
        {"Wallet not connected. Click connect button below"}
      </p>
      <div className="my-5 flex justify-center">
        <button
          onClick={handleConnect}
          className="bg-blue-500 hover:bg-blue-600 p-2 mb-5 rounded-lg text-white"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export { ConnectWallet };
