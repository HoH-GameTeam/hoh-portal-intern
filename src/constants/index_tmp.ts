import {
  bnbCoin,
  dashCoin,
  satsCoin,
  solCoin,
  trxCoin,
  usdtCoin,
} from '../assets/images/tmps';

export const WALLET_TAB_KEY = {
  DEPOSIT: 'deposit',
  BSCSWAP: 'bscswap',
  VAULT_PRO: 'vaultPro',
  WITHDRAW: 'withdraw',
};

export const CURRENCIES = {
  CRYPTO: 'Crypto',
  FIAT: 'Fiat',
  NFT: 'NFT',
};

export const COIN_LIST = [
  {
    name: 'TRX',
    image: trxCoin,
  },
  {
    name: 'USDT',
    image: usdtCoin,
  },
  {
    name: 'SOL',
    image: solCoin,
  },
  {
    name: 'DASH',
    image: dashCoin,
  },
  {
    name: 'BNB',
    image: bnbCoin,
  },
  {
    name: 'SATS',
    image: satsCoin,
  },
];
