// export const PATH_AFTER_LOGIN = PATH_FUTURE.root;
export const GoogleClientId =
  '924079859710-ue9nj253npmjn35065vfaojkb0ap07qh.apps.googleusercontent.com';

export const TEST_NET = true;
export const METAMASK_PROVIDER = 'METAMASK';
export const WALLETCONNECT_PROVIDER = 'WALLETCONNECT';
export const NETWORK_VERSION = TEST_NET ? 97 : 56;
export const NETWORK_VERSION_HEX = TEST_NET ? '0x61' : '0x38';

export const HOH_CONTRACT_ADDRESS = TEST_NET
  ? '0xb457b1E97C53484D63bB685d97Bd917098c0Dff8'
  : '0xb457b1E97C53484D63bB685d97Bd917098c0Dff8';
export const KENNY_CONTRACT_ADDRESS = TEST_NET
  ? '0x153Cf8CFD7Eb71DD40a081a6Ad7DeF7802b5Ac16'
  : '0x153Cf8CFD7Eb71DD40a081a6Ad7DeF7802b5Ac16';
export const BUSD_CONTRACT_ADDRESS = TEST_NET
  ? '0xdB6DDE3C43863D4363681bc63df90DF123fD52D4'
  : '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';

export const CHAIN_CONFIGS = {
  BINANCE_SMART_CHAIN: {
    TEST_NET: {
      chainId: '0x61',
      rpcTarget: 'https://data-seed-prebsc-1-s3.binance.org:8545	',
      displayName: 'Binance Smart Chain Testnet',
      blockExplorer: 'https://testnet.bscscan.com',
      ticker: 'tBNB',
      tickerName: 'tBNB',
    },
  },
};

export const NETWORK_CONFIG = TEST_NET
  ? [
      {
        chainId: NETWORK_VERSION_HEX,
        chainName: 'Binance Smart Chain Testnet',
        nativeCurrency: {
          name: 'tBNB',
          symbol: 'tBNB',
          decimals: 18,
        },
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
        blockExplorerUrls: ['https://testnet.bscscan.com'],
      },
    ]
  : [
      {
        chainId: NETWORK_VERSION_HEX,
        chainName: 'Binance Smart Chain Mainnet',
        nativeCurrency: {
          name: 'BNB',
          symbol: 'BNB',
          decimals: 18,
        },
        rpcUrls: ['https://bsc-dataseed1.binance.org'],
        blockExplorerUrls: ['https://bscscan.com'],
      },
    ];
