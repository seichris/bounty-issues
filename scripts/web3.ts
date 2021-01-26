import Web3 from "web3";
import {useState} from "react";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

export default function web3() {
  const [loading, setLoading] = useState(false);
  return {
    get web3Loading() {
      return loading
    },
    async getweb3() {
      setLoading(true);
      let web3Modal;
      let provider;
      let web3;
      let providerOptions;
      providerOptions = {
        metamask: {
          id: "injected",
          name: "MetaMask",
          type: "injected",
          check: "isMetaMask"
        },
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: "9d495868a4714a5483b4248ad34c1d80", // Required
            network: "mainnet",
            qrcodeModalOptions: {
            mobileLinks: [
              "rainbow",
              "metamask",
              "argent",
              "trust",
              "imtoken",
              "pillar"
              ]
            }
          }
        },
        };
      web3Modal = new Web3Modal({
      network: "rinkeby",
      cacheProvider: true,
      providerOptions
      });
      provider = await web3Modal.connect();
      provider.on('error', e => console.error('WS Error', e));
      provider.on('end', e => console.error('WS End', e));

      provider.on("disconnect", (error: { code: number; message: string }) => {
        console.log(error);
      });
      provider.on("connect", (info: { chainId: number }) => {
        console.log(info);
      });
      web3 = new Web3(provider);
      setLoading(false);
      return web3;
    },
  }
}




{/*

const web3Modal = new Web3Modal({
  network: process.env.REACT_APP_WEB3_NETWORK,
  cacheProvider: true,
  disableInjectedProvider: false,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "INFURA_ID",
      },
    },
  },
});

export async function connectWithWeb3() {
  const provider = await web3Modal.connect();
  const addresses = await provider.enable();

  return {
    provider,
    addresses,
  };
}
*/}
