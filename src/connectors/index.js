import { InjectedConnector } from "@web3-react/injected-connector";
// import { RPC_URL } from "src/constants";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
export const injected = new InjectedConnector({
  supportedChainIds: [
    1, 3, 4, 5, 42, 56, 97, 9731, 9732, 43114, 43113, 1285, 80001, 137,
  ],
});

// export const walletconnect = new WalletConnectConnector({
//   rpc: {
//     137: RPC_URL,
//   },
//   bridge: "https://bridge.walletconnect.org",
//   qrcode: true,
//   pollingInterval: 15000,
// });
export const SUPPORTED_WALLETS = [
  {
    name: "METAMASK",
    data: {
      connector: injected,
      name: "MetaMask",
      iconName: "images/MetaMask.png",
      description: "Easy-to-use browser extension.",
      href: null,
      color: "#E8831D",
    },
  },
  {
    name: "Wallet Connect",
    data: {
      // connector: walletconnect,
      name: "Wallet Connect",
      iconName: "images/images/social.png",
      description: "Easy-to-use browser extension.",
      href: null,
      color: "#E8831D",
    },
  },
];
