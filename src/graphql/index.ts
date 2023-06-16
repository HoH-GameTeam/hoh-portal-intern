import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
/ eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Decimal: any;
  EmailAddress: any;
  Upload: any;
};

export type ActiveDevice = {
  __typename?: 'ActiveDevice';
  current: Scalars['Boolean'];
  device: Scalars['String'];
  id: Scalars['ID'];
  lastSeenAt?: Maybe<Scalars['DateTime']>;
  lastSeenIpAddress?: Maybe<Scalars['String']>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export type BaccaratBetData = {
  __typename?: 'BaccaratBetData';
  bankerResult?: Maybe<BaccaratResult>;
  betBankerAmount: Scalars['Decimal'];
  betBankerPairAmount: Scalars['Decimal'];
  betPlayerAmount: Scalars['Decimal'];
  betPlayerPairAmount: Scalars['Decimal'];
  betTieAmount: Scalars['Decimal'];
  playerResult?: Maybe<BaccaratResult>;
};

export type BaccaratResult = {
  __typename?: 'BaccaratResult';
  cards: Array<Card>;
  total: Scalars['Int'];
};

export type Bet = {
  __typename?: 'Bet';
  betAmount: Scalars['Decimal'];
  betChargeAmount: Scalars['Decimal'];
  betData?: Maybe<BetDataType>;
  createdAt: Scalars['DateTime'];
  currency: Currency;
  equivalentUsdRate: Scalars['Decimal'];
  game: Game;
  id: Scalars['ID'];
  payoutAmount: Scalars['Decimal'];
  payoutRate: Scalars['Decimal'];
  rngResult?: Maybe<RngResult>;
  /** Null when user's privacy is anonymous, except current user */
  user?: Maybe<User>;
};

export type BetDataType = BaccaratBetData | BitFarmBetData | CrashBetData | CryptoQuestBetData | DiceBetData | LimboBetData | MinesBetData | MiniPokerBetData;

export type BetResponse = {
  __typename?: 'BetResponse';
  bet?: Maybe<Bet>;
  result: BetResult;
};

export enum BetResult {
  GameNotAvailable = 'GAME_NOT_AVAILABLE',
  InsufficientAmount = 'INSUFFICIENT_AMOUNT',
  InvalidBetParams = 'INVALID_BET_PARAMS',
  InvalidBetState = 'INVALID_BET_STATE',
  Success = 'SUCCESS',
  UnderMinBet = 'UNDER_MIN_BET',
  Waiting = 'WAITING'
}

export type BetRoom = {
  __typename?: 'BetRoom';
  floorPrice: Scalars['Decimal'];
  id: Scalars['ID'];
  maxProfitAmount?: Maybe<Scalars['Decimal']>;
  maxProfitRate?: Maybe<Scalars['Decimal']>;
};

export type BitFarmBetData = {
  __typename?: 'BitFarmBetData';
  betLines: Scalars['Int'];
};

export enum BlockchainNetwork {
  Bep20 = 'BEP20',
  Erc20 = 'ERC20',
  Ethereum = 'ETHEREUM',
  Litecoin = 'LITECOIN',
  None = 'NONE',
  Polygon = 'POLYGON',
  Segwit = 'SEGWIT',
  Solana = 'SOLANA',
  Trc20 = 'TRC20'
}

export type Card = {
  __typename?: 'Card';
  rank: Scalars['Int'];
  suit: Scalars['String'];
};

export type CrashBetData = {
  __typename?: 'CrashBetData';
  roundId: Scalars['ID'];
};

export type CrashBetDetail = {
  __typename?: 'CrashBetDetail';
  id: Scalars['ID'];
  payoutAmount: Scalars['Decimal'];
  payoutRate: Scalars['Decimal'];
};

export type CrashRoundData = {
  __typename?: 'CrashRoundData';
  players: Array<Maybe<CrashBetDetail>>;
  result: Scalars['Decimal'];
};

export type CreateHostInput = {
  isActive: Scalars['Boolean'];
  logoUri: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  thumbnailUri: Scalars['String'];
};

export type CryptoAddress = {
  __typename?: 'CryptoAddress';
  address: Scalars['String'];
  id: Scalars['ID'];
};

export type CryptoQuestBetData = {
  __typename?: 'CryptoQuestBetData';
  betLines: Scalars['Int'];
};

export type CryptoWithdrawalInfo = {
  __typename?: 'CryptoWithdrawalInfo';
  feeAmount: Scalars['Decimal'];
  feeRate: Scalars['Decimal'];
  id: Scalars['String'];
  minimumAmount: Scalars['Decimal'];
};

export type Currency = {
  __typename?: 'Currency';
  /** List blockchain networks supported by the currency, null if the currency CANNOT deposit/withdrawal via blockchain */
  blockchainNetworks?: Maybe<Array<BlockchainNetwork>>;
  decimalDigits: Scalars['Int'];
  equivalentUsdRate: Scalars['Decimal'];
  id: Scalars['ID'];
  name: Scalars['String'];
  shortName: Scalars['String'];
  type: CurrencyType;
};

export enum CurrencyType {
  Crypto = 'CRYPTO',
  Fiat = 'FIAT'
}

export enum DepositStatus {
  Completed = 'COMPLETED',
  Credit = 'CREDIT',
  New = 'NEW'
}

export type DepositTransaction = {
  __typename?: 'DepositTransaction';
  amount: Scalars['Decimal'];
  createdAt: Scalars['DateTime'];
  currency: Currency;
  equivalentUsdRate: Scalars['Decimal'];
  id: Scalars['ID'];
  status: DepositStatus;
  tx?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type DiceBetData = {
  __typename?: 'DiceBetData';
  betValue: Scalars['Decimal'];
  isRollOver: Scalars['Boolean'];
  result: Scalars['Decimal'];
  winChance: Scalars['Decimal'];
};

export type Game = {
  __typename?: 'Game';
  description: Scalars['String'];
  /** User already added the game to list favorites or not */
  favored: Scalars['Boolean'];
  /** Total favorites */
  favorites: Scalars['Int'];
  gameBank?: Maybe<GameBank>;
  id: Scalars['ID'];
  isMiniGame: Scalars['Boolean'];
  /** Current user already liked the game or not */
  liked: Scalars['Boolean'];
  /** Total likes */
  likes: Scalars['Int'];
  maxWinRate: Scalars['Decimal'];
  name: Scalars['String'];
  previews: Array<Photo>;
  publisher: Publisher;
  releaseDate: Scalars['Date'];
  reviewing: Scalars['String'];
  rtp: Scalars['Decimal'];
  slug: Scalars['String'];
  summary: Scalars['String'];
  tags: Array<Scalars['String']>;
  thumbnail?: Maybe<Photo>;
  type: GameType;
};


export type GameFavoredArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};


export type GameGameBankArgs = {
  currencyId: Scalars['ID'];
};


export type GameLikedArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};

export type GameBank = {
  __typename?: 'GameBank';
  amount: Scalars['Decimal'];
  betRoom?: Maybe<BetRoom>;
  id: Scalars['ID'];
  shareSummary?: Maybe<Array<Maybe<GameBankShare>>>;
  slotBetRooms?: Maybe<Array<SlotBetRoom>>;
};

export type GameBankShare = {
  __typename?: 'GameBankShare';
  gameBankId: Scalars['ID'];
  id: Scalars['ID'];
  investAmount: Scalars['Decimal'];
  investorId?: Maybe<Scalars['ID']>;
  isHost: Scalars['Boolean'];
  shareRate: Scalars['Decimal'];
  /** Null when user's privacy is anonymous, except current user */
  user?: Maybe<User>;
};

export enum GameType {
  Multiplayer = 'MULTIPLAYER',
  None = 'NONE',
  Slot = 'SLOT'
}

export type GraphError = {
  __typename?: 'GraphError';
  code?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type Host = {
  __typename?: 'Host';
  id: Scalars['ID'];
  slug: Scalars['String'];
};

export type Identification = {
  __typename?: 'Identification';
  address: Scalars['String'];
  city: Scalars['String'];
  countryCode: Scalars['String'];
  dateOfBirth: Scalars['Date'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  postalCode: Scalars['String'];
};

export type IdentificationInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  countryCode: Scalars['String'];
  dateOfBirth: Scalars['Date'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  lastName: Scalars['String'];
  postalCode: Scalars['String'];
};

export enum IdentificationStatus {
  Accepted = 'ACCEPTED',
  New = 'NEW',
  Rejected = 'REJECTED',
  Reviewing = 'REVIEWING'
}

export type InvestTransaction = {
  __typename?: 'InvestTransaction';
  amount: Scalars['Decimal'];
  createdAt: Scalars['DateTime'];
  gameBankId: Scalars['ID'];
  id: Scalars['ID'];
  investorId: Scalars['ID'];
  isHost: Scalars['Boolean'];
  /** Null when user's privacy is anonymous, except current user */
  user?: Maybe<User>;
};

export type JackpotWinBet = {
  __typename?: 'JackpotWinBet';
  at: Scalars['DateTime'];
  betId: Scalars['ID'];
  currency: Currency;
  game: Game;
  jackpotCount: Scalars['Int'];
  jackpotTotalAmount: Scalars['Decimal'];
  price: Scalars['Decimal'];
  /** Null when user's privacy is anonymous, except current user */
  user?: Maybe<User>;
};

export type LimboBetData = {
  __typename?: 'LimboBetData';
  betMultiplier: Scalars['Decimal'];
  result: Scalars['Decimal'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  accessToken: Scalars['String'];
};

export type MeType = {
  __typename?: 'MeType';
  activeDevices: Array<ActiveDevice>;
  profile: Profile;
  user: User;
  userWallets: Array<UserWallet>;
};

export type MinesBetData = {
  __typename?: 'MinesBetData';
  currentMultiplier: Scalars['Decimal'];
  minesCells?: Maybe<Array<Scalars['Int']>>;
  minesCount: Scalars['Int'];
  nextMultiplier: Scalars['Decimal'];
  openedCells: Array<Scalars['Int']>;
};

export type MiniPokerBetData = {
  __typename?: 'MiniPokerBetData';
  miniPokerResult?: Maybe<MiniPokerResult>;
  winJackpotTotalAmount: Scalars['Decimal'];
};

export type MiniPokerResult = {
  __typename?: 'MiniPokerResult';
  cards: Array<Card>;
  rate: Scalars['Decimal'];
  type: MiniPokerWinType;
};

export enum MiniPokerWinType {
  Flush = 'FLUSH',
  FourOfKind = 'FOUR_OF_KIND',
  FullHouse = 'FULL_HOUSE',
  JackOrBetter = 'JACK_OR_BETTER',
  None = 'NONE',
  RoyalFlush = 'ROYAL_FLUSH',
  Straight = 'STRAIGHT',
  StraightFlush = 'STRAIGHT_FLUSH',
  ThreeOfKind = 'THREE_OF_KIND',
  TwoPairs = 'TWO_PAIRS'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Change or set password for current user */
  changePassword: PayloadOfProfile;
  /** Create an withdrawal for crypto currency */
  createCryptoWithdrawal: WithdrawalTransaction;
  createHost: Host;
  depositGameBank: InvestTransaction;
  diceBet: BetResponse;
  favorite: Game;
  like: Game;
  limboBet: BetResponse;
  /** Log in by email/password */
  login: PayloadOfLoginResult;
  /** Log in via Google by using idToken */
  loginGoogle: PayloadOfLoginResult;
  /** Sign out for user by remove current active device */
  logout: PayloadOfBoolean;
  minesBet: BetResponse;
  minesCashout: BetResponse;
  minesOpen: BetResponse;
  miniPokerBet: SlotBetResponse;
  publishGameBank: GameBank;
  /** Update new password with activate token */
  recoverPassword: PayloadOfBoolean;
  /** Register new account by email */
  register: PayloadOfLoginResult;
  /** Remove active device, client should manual clean cache of the list active devices */
  removeActiveDevice: PayloadOfBoolean;
  /** Request recover password via email */
  requestRecoverPassword: PayloadOfBoolean;
  /** Set profile hidden to public feed */
  setHidden: PayloadOfProfile;
  setupGame: GameBank;
  /** Update user avatar */
  updateAvatar: PayloadOfUser;
  /** Change email of user, allow only when current email is inactivated */
  updateEmail: PayloadOfProfile;
  updateIdentification: PayloadOfUserIdentification;
  /** Update user nickname */
  updateNickname: PayloadOfProfile;
  uploadIdentificationPhotos: PayloadOfProfile;
  /** Verify email by token sent to the email */
  verifyEmail: PayloadOfProfile;
  withdrawGameBank: InvestTransaction;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCryptoWithdrawalArgs = {
  address: Scalars['String'];
  amount: Scalars['Decimal'];
  currencyId: Scalars['ID'];
  network: BlockchainNetwork;
};


export type MutationCreateHostArgs = {
  input: CreateHostInput;
};


export type MutationDepositGameBankArgs = {
  amount: Scalars['Decimal'];
  gameBankId: Scalars['ID'];
  isHost: Scalars['Boolean'];
};


export type MutationDiceBetArgs = {
  amount: Scalars['Decimal'];
  betRoomId: Scalars['ID'];
  isRollOver: Scalars['Boolean'];
  value: Scalars['Decimal'];
};


export type MutationFavoriteArgs = {
  gameId: Scalars['ID'];
  value: Scalars['Boolean'];
};


export type MutationLikeArgs = {
  gameId: Scalars['ID'];
  value: Scalars['Boolean'];
};


export type MutationLimboBetArgs = {
  amount: Scalars['Decimal'];
  betRoomId: Scalars['ID'];
  multiplier: Scalars['Decimal'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLoginGoogleArgs = {
  token: Scalars['String'];
};


export type MutationMinesBetArgs = {
  amount: Scalars['Decimal'];
  betRoomId: Scalars['ID'];
  cells?: InputMaybe<Array<Scalars['Int']>>;
  mines: Scalars['Int'];
};


export type MutationMinesCashoutArgs = {
  betRoomId: Scalars['ID'];
};


export type MutationMinesOpenArgs = {
  betRoomId: Scalars['ID'];
  cellIdx: Scalars['Int'];
};


export type MutationMiniPokerBetArgs = {
  betRoomId: Scalars['ID'];
};


export type MutationPublishGameBankArgs = {
  gameBankId: Scalars['ID'];
};


export type MutationRecoverPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRemoveActiveDeviceArgs = {
  deviceId: Scalars['ID'];
};


export type MutationRequestRecoverPasswordArgs = {
  email: Scalars['EmailAddress'];
};


export type MutationSetHiddenArgs = {
  value: Scalars['Boolean'];
};


export type MutationSetupGameArgs = {
  input: SetupGameRequestInput;
};


export type MutationUpdateAvatarArgs = {
  file: Scalars['Upload'];
};


export type MutationUpdateEmailArgs = {
  email: Scalars['EmailAddress'];
};


export type MutationUpdateIdentificationArgs = {
  input: IdentificationInput;
};


export type MutationUpdateNicknameArgs = {
  nickname: Scalars['String'];
};


export type MutationUploadIdentificationPhotosArgs = {
  idBack?: InputMaybe<Scalars['Upload']>;
  idFront?: InputMaybe<Scalars['Upload']>;
  passport?: InputMaybe<Scalars['Upload']>;
  selfie: Scalars['Upload'];
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String'];
};


export type MutationWithdrawGameBankArgs = {
  allBalance?: InputMaybe<Scalars['Boolean']>;
  allProfit?: InputMaybe<Scalars['Boolean']>;
  amount?: InputMaybe<Scalars['Decimal']>;
  gameBankId: Scalars['ID'];
  isHost: Scalars['Boolean'];
};

export type PageableOfBet = {
  __typename?: 'PageableOfBet';
  data: Array<Bet>;
  hasMore: Scalars['Boolean'];
};

export type PageableOfDepositTransaction = {
  __typename?: 'PageableOfDepositTransaction';
  data: Array<DepositTransaction>;
  hasMore: Scalars['Boolean'];
};

export type PageableOfGame = {
  __typename?: 'PageableOfGame';
  data: Array<Game>;
  hasMore: Scalars['Boolean'];
};

export type PageableOfGameBankShare = {
  __typename?: 'PageableOfGameBankShare';
  data: Array<GameBankShare>;
  hasMore: Scalars['Boolean'];
};

export type PageableOfInvestTransaction = {
  __typename?: 'PageableOfInvestTransaction';
  data: Array<InvestTransaction>;
  hasMore: Scalars['Boolean'];
};

export type PageableOfJackpotWinBet = {
  __typename?: 'PageableOfJackpotWinBet';
  data: Array<JackpotWinBet>;
  hasMore: Scalars['Boolean'];
};

export type PageableOfRound = {
  __typename?: 'PageableOfRound';
  data: Array<Round>;
  hasMore: Scalars['Boolean'];
};

export type PageableOfTransactionInfo = {
  __typename?: 'PageableOfTransactionInfo';
  data: Array<TransactionInfo>;
  hasMore: Scalars['Boolean'];
};

export type PageableOfWithdrawalTransaction = {
  __typename?: 'PageableOfWithdrawalTransaction';
  data: Array<WithdrawalTransaction>;
  hasMore: Scalars['Boolean'];
};

export type PayloadOfBoolean = {
  __typename?: 'PayloadOfBoolean';
  content?: Maybe<Scalars['Boolean']>;
  error?: Maybe<GraphError>;
  success: Scalars['Boolean'];
};

export type PayloadOfLoginResult = {
  __typename?: 'PayloadOfLoginResult';
  content?: Maybe<LoginResult>;
  error?: Maybe<GraphError>;
  success: Scalars['Boolean'];
};

export type PayloadOfProfile = {
  __typename?: 'PayloadOfProfile';
  content?: Maybe<Profile>;
  error?: Maybe<GraphError>;
  success: Scalars['Boolean'];
};

export type PayloadOfUser = {
  __typename?: 'PayloadOfUser';
  content?: Maybe<User>;
  error?: Maybe<GraphError>;
  success: Scalars['Boolean'];
};

export type PayloadOfUserIdentification = {
  __typename?: 'PayloadOfUserIdentification';
  content?: Maybe<UserIdentification>;
  error?: Maybe<GraphError>;
  success: Scalars['Boolean'];
};

export type Photo = {
  __typename?: 'Photo';
  large: Scalars['String'];
  medium: Scalars['String'];
  small: Scalars['String'];
  square: Scalars['String'];
  uri: Scalars['String'];
};

export type Profile = {
  __typename?: 'Profile';
  email?: Maybe<Scalars['EmailAddress']>;
  emailVerified: Scalars['Boolean'];
  hasPassword: Scalars['Boolean'];
  hidden: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type Publisher = {
  __typename?: 'Publisher';
  branch: Scalars['String'];
  description: Scalars['String'];
  foundedYear: Scalars['Int'];
  gameCount: Scalars['Int'];
  id: Scalars['ID'];
  logo?: Maybe<Photo>;
  name: Scalars['String'];
  summary: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  bet?: Maybe<Bet>;
  /** Get an address to deposit for a crypto currency */
  cryptoDepositAddress?: Maybe<CryptoAddress>;
  /** Withdrawal info of a crypto currency, null means not supported */
  cryptoWithdrawalInfo?: Maybe<CryptoWithdrawalInfo>;
  currencies: Array<Currency>;
  /** deposit histories of an user */
  depositTransactions: PageableOfDepositTransaction;
  /** Game info, null if the game is not available right now */
  game?: Maybe<Game>;
  gameBank: GameBank;
  gameBankInvestTransactions?: Maybe<PageableOfInvestTransaction>;
  gameBankShares?: Maybe<PageableOfGameBankShare>;
  games?: Maybe<PageableOfGame>;
  /** list of jackpot win bets */
  jackpotWinBets: PageableOfJackpotWinBet;
  me: MeType;
  minesCurrentBet?: Maybe<BetResponse>;
  /** list of my bets */
  myBets: PageableOfBet;
  round?: Maybe<Round>;
  /** multiplayer game rounds */
  rounds: PageableOfRound;
  /** transactions of an user */
  transactions: PageableOfTransactionInfo;
  userIdentification: UserIdentification;
  /** withdrawal histories of an user */
  withdrawalTransactions: PageableOfWithdrawalTransaction;
};


export type QueryBetArgs = {
  id: Scalars['ID'];
};


export type QueryCryptoDepositAddressArgs = {
  currencyId: Scalars['ID'];
  network: BlockchainNetwork;
};


export type QueryCryptoWithdrawalInfoArgs = {
  currencyId: Scalars['ID'];
  network: BlockchainNetwork;
};


export type QueryDepositTransactionsArgs = {
  currencyId?: InputMaybe<Scalars['ID']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type QueryGameArgs = {
  slug: Scalars['String'];
};


export type QueryGameBankArgs = {
  gameBankId: Scalars['ID'];
};


export type QueryGameBankInvestTransactionsArgs = {
  gameBankId: Scalars['ID'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type QueryGameBankSharesArgs = {
  gameBankId: Scalars['ID'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type QueryGamesArgs = {
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  publisherId?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryJackpotWinBetsArgs = {
  gameId?: InputMaybe<Scalars['ID']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type QueryMinesCurrentBetArgs = {
  gameId: Scalars['ID'];
};


export type QueryMyBetsArgs = {
  currencyId?: InputMaybe<Scalars['Int']>;
  gameId?: InputMaybe<Scalars['ID']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type QueryRoundArgs = {
  id: Scalars['ID'];
};


export type QueryRoundsArgs = {
  gameId: Scalars['ID'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type QueryTransactionsArgs = {
  currencyId?: InputMaybe<Scalars['ID']>;
  group?: InputMaybe<TransactionGroup>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type QueryWithdrawalTransactionsArgs = {
  currencyId?: InputMaybe<Scalars['ID']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export type RegisterInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};

export type RngResult = {
  __typename?: 'RngResult';
  id: Scalars['String'];
  message: Scalars['String'];
  rng: Scalars['String'];
  rngPublicKey: Scalars['String'];
};

export type Round = {
  __typename?: 'Round';
  id: Scalars['ID'];
  rngResult?: Maybe<RngResult>;
  roundData?: Maybe<RoundDataType>;
};

export type RoundDataType = CrashRoundData;

export type SetupGameRequestInput = {
  allInvestorMaxShareRate?: InputMaybe<Scalars['Decimal']>;
  betRoomSettingIds: Array<Scalars['ID']>;
  currencyId: Scalars['ID'];
  gameId: Scalars['ID'];
  hostId: Scalars['ID'];
  investable: Scalars['Boolean'];
  investorDepositMaximumAmount?: InputMaybe<Scalars['Decimal']>;
  investorDepositMinimumAmount: Scalars['Decimal'];
  willPublish: Scalars['Boolean'];
};

export type SlotBetResponse = {
  __typename?: 'SlotBetResponse';
  bet?: Maybe<Bet>;
  result: BetResult;
  slotBetRoom?: Maybe<SlotBetRoom>;
};

export type SlotBetRoom = {
  __typename?: 'SlotBetRoom';
  betRoomId: Scalars['ID'];
  jackpotAmount: Scalars['Decimal'];
  price: Scalars['Decimal'];
};

export type Subscription = {
  __typename?: 'Subscription';
  highBet: Bet;
  highBetByGame: Bet;
  jackpotWon?: Maybe<JackpotWinBet>;
  latestBet: Bet;
  latestBetByGame: Bet;
  /** NOTE: set authToken=<accessToken> for socket connection params as web browser could not set websocket header */
  userWalletChanged: UserWallet;
};


export type SubscriptionHighBetByGameArgs = {
  gameId: Scalars['ID'];
};


export type SubscriptionLatestBetByGameArgs = {
  gameId: Scalars['ID'];
};

export enum TransactionGroup {
  Account = 'ACCOUNT',
  Affiliate = 'AFFILIATE',
  Bonus = 'BONUS',
  Game = 'GAME'
}

export type TransactionInfo = {
  __typename?: 'TransactionInfo';
  amount: Scalars['Decimal'];
  createdAt: Scalars['DateTime'];
  currency: Currency;
  equivalentUsdRate: Scalars['Decimal'];
  group: TransactionGroup;
  id: Scalars['String'];
  itemId: Scalars['ID'];
  label: Scalars['String'];
  remainAmount: Scalars['Decimal'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Photo>;
  id: Scalars['ID'];
  nickname: Scalars['String'];
};

export type UserIdentification = {
  __typename?: 'UserIdentification';
  identification?: Maybe<Identification>;
  status: IdentificationStatus;
  userId: Scalars['ID'];
};

export type UserWallet = {
  __typename?: 'UserWallet';
  amount: Scalars['Decimal'];
  currencyId: Scalars['ID'];
  id: Scalars['ID'];
  lockedAmount?: Maybe<Scalars['Decimal']>;
};

export enum WithdrawalStatus {
  Completed = 'COMPLETED',
  Credit = 'CREDIT',
  Insufficient = 'INSUFFICIENT',
  New = 'NEW',
  Processing = 'PROCESSING'
}

export type WithdrawalTransaction = {
  __typename?: 'WithdrawalTransaction';
  amount: Scalars['Decimal'];
  createdAt: Scalars['DateTime'];
  currency: Currency;
  equivalentUsdRate: Scalars['Decimal'];
  id: Scalars['ID'];
  status: WithdrawalStatus;
  tx?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type MyBetsQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  gameId?: InputMaybe<Scalars['ID']>;
  currencyId?: InputMaybe<Scalars['Int']>;
}>;


export type MyBetsQuery = { __typename?: 'Query', myBets: { __typename?: 'PageableOfBet', hasMore: boolean, data: Array<{ __typename?: 'Bet', id: string, createdAt: any, betAmount: any, betChargeAmount: any, payoutRate: any, payoutAmount: any, equivalentUsdRate: any, game: { __typename?: 'Game', id: string, name: string, type: GameType, isMiniGame: boolean }, currency: { __typename?: 'Currency', id: string, shortName: string, decimalDigits: number, equivalentUsdRate: any } }> } };

export type BetQueryVariables = Exact<{
  betId: Scalars['ID'];
  currencyId: Scalars['ID'];
}>;


export type BetQuery = { __typename?: 'Query', bet?: { __typename?: 'Bet', id: string, createdAt: any, betAmount: any, betChargeAmount: any, payoutRate: any, payoutAmount: any, equivalentUsdRate: any, rngResult?: { __typename?: 'RngResult', id: string, rng: string, rngPublicKey: string } | null, game: { __typename?: 'Game', id: string, name: string, thumbnail?: { __typename?: 'Photo', square: string } | null, publisher: { __typename?: 'Publisher', name: string }, gameBank?: { __typename?: 'GameBank', id: string, amount: any } | null }, currency: { __typename?: 'Currency', id: string, shortName: string, decimalDigits: number, equivalentUsdRate: any } } | null };

export type JackpotWinnersQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  gameId?: InputMaybe<Scalars['ID']>;
}>;


export type JackpotWinnersQuery = { __typename?: 'Query', jackpotWinBets: { __typename?: 'PageableOfJackpotWinBet', hasMore: boolean, data: Array<{ __typename?: 'JackpotWinBet', betId: string, jackpotCount: number, jackpotTotalAmount: any, price: any, at: any, game: { __typename?: 'Game', id: string, slug: string, name: string }, currency: { __typename?: 'Currency', id: string, shortName: string, decimalDigits: number, equivalentUsdRate: any }, user?: { __typename?: 'User', id: string, nickname: string, avatar?: { __typename?: 'Photo', square: string } | null } | null }> } };

export type GamesQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  publisherId?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GamesQuery = { __typename?: 'Query', games?: { __typename?: 'PageableOfGame', hasMore: boolean, data: Array<{ __typename?: 'Game', id: string, name: string, slug: string, type: GameType, isMiniGame: boolean, tags: Array<string>, rtp: any, maxWinRate: any, thumbnail?: { __typename?: 'Photo', large: string, medium: string, square: string } | null, publisher: { __typename?: 'Publisher', name: string, branch: string } }> } | null };

export type GameQueryVariables = Exact<{
  slug: Scalars['String'];
  currencyId: Scalars['ID'];
}>;


export type GameQuery = { __typename?: 'Query', game?: { __typename?: 'Game', id: string, type: GameType, isMiniGame: boolean, likes: number, favorites: number, favored: boolean, name: string, slug: string, releaseDate: any, summary: string, description: string, reviewing: string, tags: Array<string>, rtp: any, maxWinRate: any, thumbnail?: { __typename?: 'Photo', square: string } | null, previews: Array<{ __typename?: 'Photo', square: string, large: string }>, publisher: { __typename?: 'Publisher', name: string, gameCount: number, logo?: { __typename?: 'Photo', square: string } | null }, gameBank?: { __typename?: 'GameBank', id: string, amount: any, betRoom?: { __typename?: 'BetRoom', id: string, maxProfitRate?: any | null, maxProfitAmount?: any | null, floorPrice: any } | null, slotBetRooms?: Array<{ __typename?: 'SlotBetRoom', betRoomId: string, price: any, jackpotAmount: any }> | null } | null } | null };

export type GetGameBankQueryVariables = Exact<{
  slug: Scalars['String'];
  currencyId: Scalars['ID'];
}>;


export type GetGameBankQuery = { __typename?: 'Query', game?: { __typename?: 'Game', id: string, gameBank?: { __typename?: 'GameBank', id: string, amount: any, betRoom?: { __typename?: 'BetRoom', id: string, maxProfitRate?: any | null, maxProfitAmount?: any | null, floorPrice: any } | null, slotBetRooms?: Array<{ __typename?: 'SlotBetRoom', betRoomId: string, price: any, jackpotAmount: any }> | null } | null } | null };

export type MinesCurrentBetQueryVariables = Exact<{
  gameId: Scalars['ID'];
  currencyId: Scalars['ID'];
}>;


export type MinesCurrentBetQuery = { __typename?: 'Query', minesCurrentBet?: { __typename?: 'BetResponse', result: BetResult, bet?: { __typename?: 'Bet', id: string, betAmount: any, betChargeAmount: any, payoutRate: any, payoutAmount: any, equivalentUsdRate: any, game: { __typename?: 'Game', gameBank?: { __typename?: 'GameBank', id: string, amount: any } | null }, betData?: { __typename?: 'BaccaratBetData' } | { __typename?: 'BitFarmBetData' } | { __typename?: 'CrashBetData' } | { __typename?: 'CryptoQuestBetData' } | { __typename?: 'DiceBetData' } | { __typename?: 'LimboBetData' } | { __typename?: 'MinesBetData', minesCount: number, currentMultiplier: any, nextMultiplier: any, minesCells?: Array<number> | null, openedCells: Array<number> } | { __typename?: 'MiniPokerBetData' } | null, currency: { __typename?: 'Currency', name: string, shortName: string, decimalDigits: number, equivalentUsdRate: any } } | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeType', user: { __typename?: 'User', id: string, nickname: string, avatar?: { __typename?: 'Photo', uri: string, square: string, small: string, medium: string, large: string } | null }, profile: { __typename?: 'Profile', id: string, hasPassword: boolean, email?: any | null, emailVerified: boolean, hidden: boolean }, activeDevices: Array<{ __typename?: 'ActiveDevice', id: string, device: string, lastSeenIpAddress?: string | null, lastSeenAt?: any | null, current: boolean }>, userWallets: Array<{ __typename?: 'UserWallet', id: string, currencyId: string, amount: any, lockedAmount?: any | null }> } };

export type UserIdentificationQueryVariables = Exact<{ [key: string]: never; }>;


export type UserIdentificationQuery = { __typename?: 'Query', userIdentification: { __typename?: 'UserIdentification', userId: string, status: IdentificationStatus, identification?: { __typename?: 'Identification', id: string, firstName: string, lastName: string, gender: string, dateOfBirth: any, address: string, city: string, postalCode: string, countryCode: string } | null } };

export type CurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrenciesQuery = { __typename?: 'Query', currencies: Array<{ __typename?: 'Currency', id: string, name: string, shortName: string, type: CurrencyType, decimalDigits: number, equivalentUsdRate: any, blockchainNetworks?: Array<BlockchainNetwork> | null }> };

export type CryptoDepositAddressQueryVariables = Exact<{
  currencyId: Scalars['ID'];
  network: BlockchainNetwork;
}>;


export type CryptoDepositAddressQuery = { __typename?: 'Query', cryptoDepositAddress?: { __typename?: 'CryptoAddress', id: string, address: string } | null };

export type CryptoWithdrawalInfoQueryVariables = Exact<{
  currencyId: Scalars['ID'];
  network: BlockchainNetwork;
}>;


export type CryptoWithdrawalInfoQuery = { __typename?: 'Query', cryptoWithdrawalInfo?: { __typename?: 'CryptoWithdrawalInfo', id: string, feeAmount: any, feeRate: any, minimumAmount: any } | null };

export type DepositTransactionsQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  currencyId?: InputMaybe<Scalars['ID']>;
}>;


export type DepositTransactionsQuery = { __typename?: 'Query', depositTransactions: { __typename?: 'PageableOfDepositTransaction', hasMore: boolean, data: Array<{ __typename?: 'DepositTransaction', id: string, amount: any, equivalentUsdRate: any, status: DepositStatus, createdAt: any, tx?: string | null, currency: { __typename?: 'Currency', name: string, shortName: string, decimalDigits: number, equivalentUsdRate: any } }> } };

export type WithdrawalTransactionsQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  currencyId?: InputMaybe<Scalars['ID']>;
}>;


export type WithdrawalTransactionsQuery = { __typename?: 'Query', withdrawalTransactions: { __typename?: 'PageableOfWithdrawalTransaction', hasMore: boolean, data: Array<{ __typename?: 'WithdrawalTransaction', id: string, amount: any, status: WithdrawalStatus, createdAt: any, tx?: string | null, currency: { __typename?: 'Currency', name: string, shortName: string, decimalDigits: number, equivalentUsdRate: any } }> } };

export type TransactionsQueryVariables = Exact<{
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  currencyId?: InputMaybe<Scalars['ID']>;
  group?: InputMaybe<TransactionGroup>;
}>;


export type TransactionsQuery = { __typename?: 'Query', transactions: { __typename?: 'PageableOfTransactionInfo', hasMore: boolean, data: Array<{ __typename?: 'TransactionInfo', id: string, group: TransactionGroup, label: string, amount: any, remainAmount: any, equivalentUsdRate: any, createdAt: any, currency: { __typename?: 'Currency', id: string, name: string, shortName: string, decimalDigits: number, equivalentUsdRate: any, blockchainNetworks?: Array<BlockchainNetwork> | null } }> } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'PayloadOfLoginResult', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null, content?: { __typename?: 'LoginResult', accessToken: string } | null } };

export type LoginGoogleMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type LoginGoogleMutation = { __typename?: 'Mutation', loginGoogle: { __typename?: 'PayloadOfLoginResult', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null, content?: { __typename?: 'LoginResult', accessToken: string } | null } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'PayloadOfLoginResult', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null, content?: { __typename?: 'LoginResult', accessToken: string } | null } };

export type ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'PayloadOfProfile', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null, content?: { __typename?: 'Profile', id: string, hasPassword: boolean, email?: any | null, hidden: boolean } | null } };

export type RequestRecoverPasswordMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
}>;


export type RequestRecoverPasswordMutation = { __typename?: 'Mutation', requestRecoverPassword: { __typename?: 'PayloadOfBoolean', success: boolean, content?: boolean | null, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null } };

export type RecoverPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type RecoverPasswordMutation = { __typename?: 'Mutation', recoverPassword: { __typename?: 'PayloadOfBoolean', success: boolean, content?: boolean | null, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'PayloadOfBoolean', success: boolean, content?: boolean | null } };

export type FavoriteMutationVariables = Exact<{
  gameId: Scalars['ID'];
  value: Scalars['Boolean'];
}>;


export type FavoriteMutation = { __typename?: 'Mutation', favorite: { __typename?: 'Game', id: string, likes: number, liked: boolean, favorites: number, favored: boolean } };

export type LikeMutationVariables = Exact<{
  gameId: Scalars['ID'];
  value: Scalars['Boolean'];
}>;


export type LikeMutation = { __typename?: 'Mutation', like: { __typename?: 'Game', id: string, likes: number, liked: boolean, favorites: number, favored: boolean } };

export type MiniPokerBetMutationVariables = Exact<{
  betRoomId: Scalars['ID'];
  currencyId: Scalars['ID'];
}>;


export type MiniPokerBetMutation = { __typename?: 'Mutation', miniPokerBet: { __typename?: 'SlotBetResponse', result: BetResult, bet?: { __typename?: 'Bet', id: string, betAmount: any, betChargeAmount: any, payoutRate: any, payoutAmount: any, betData?: { __typename?: 'BaccaratBetData' } | { __typename?: 'BitFarmBetData' } | { __typename?: 'CrashBetData' } | { __typename?: 'CryptoQuestBetData' } | { __typename?: 'DiceBetData' } | { __typename?: 'LimboBetData' } | { __typename?: 'MinesBetData' } | { __typename?: 'MiniPokerBetData', winJackpotTotalAmount: any, miniPokerResult?: { __typename?: 'MiniPokerResult', type: MiniPokerWinType, rate: any, cards: Array<{ __typename?: 'Card', rank: number, suit: string }> } | null } | null, game: { __typename?: 'Game', gameBank?: { __typename?: 'GameBank', id: string, amount: any, betRoom?: { __typename?: 'BetRoom', id: string, maxProfitRate?: any | null, maxProfitAmount?: any | null, floorPrice: any } | null, slotBetRooms?: Array<{ __typename?: 'SlotBetRoom', betRoomId: string, price: any, jackpotAmount: any }> | null } | null } } | null } };

export type DiceBetMutationVariables = Exact<{
  betRoomId: Scalars['ID'];
  amount: Scalars['Decimal'];
  isRollOver: Scalars['Boolean'];
  value: Scalars['Decimal'];
  currencyId: Scalars['ID'];
}>;


export type DiceBetMutation = { __typename?: 'Mutation', diceBet: { __typename?: 'BetResponse', result: BetResult, bet?: { __typename?: 'Bet', id: string, betAmount: any, betChargeAmount: any, payoutRate: any, payoutAmount: any, equivalentUsdRate: any, game: { __typename?: 'Game', gameBank?: { __typename?: 'GameBank', id: string, amount: any, betRoom?: { __typename?: 'BetRoom', id: string, maxProfitRate?: any | null, maxProfitAmount?: any | null, floorPrice: any } | null, slotBetRooms?: Array<{ __typename?: 'SlotBetRoom', betRoomId: string, price: any, jackpotAmount: any }> | null } | null }, betData?: { __typename?: 'BaccaratBetData' } | { __typename?: 'BitFarmBetData' } | { __typename?: 'CrashBetData' } | { __typename?: 'CryptoQuestBetData' } | { __typename?: 'DiceBetData', isRollOver: boolean, result: any, betValue: any, winChance: any } | { __typename?: 'LimboBetData' } | { __typename?: 'MinesBetData' } | { __typename?: 'MiniPokerBetData' } | null } | null } };

export type MinesBetMutationVariables = Exact<{
  betRoomId: Scalars['ID'];
  currencyId: Scalars['ID'];
  amount: Scalars['Decimal'];
  mines: Scalars['Int'];
  cells?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type MinesBetMutation = { __typename?: 'Mutation', minesBet: { __typename?: 'BetResponse', result: BetResult, bet?: { __typename?: 'Bet', id: string, betAmount: any, betChargeAmount: any, payoutRate: any, payoutAmount: any, equivalentUsdRate: any, game: { __typename?: 'Game', gameBank?: { __typename?: 'GameBank', id: string, amount: any } | null }, betData?: { __typename?: 'BaccaratBetData' } | { __typename?: 'BitFarmBetData' } | { __typename?: 'CrashBetData' } | { __typename?: 'CryptoQuestBetData' } | { __typename?: 'DiceBetData' } | { __typename?: 'LimboBetData' } | { __typename?: 'MinesBetData', minesCount: number, currentMultiplier: any, nextMultiplier: any, minesCells?: Array<number> | null, openedCells: Array<number> } | { __typename?: 'MiniPokerBetData' } | null } | null } };

export type MinesOpenMutationVariables = Exact<{
  betRoomId: Scalars['ID'];
  cellIdx: Scalars['Int'];
  currencyId: Scalars['ID'];
}>;


export type MinesOpenMutation = { __typename?: 'Mutation', minesOpen: { __typename?: 'BetResponse', result: BetResult, bet?: { __typename?: 'Bet', id: string, betAmount: any, betChargeAmount: any, payoutRate: any, payoutAmount: any, equivalentUsdRate: any, game: { __typename?: 'Game', gameBank?: { __typename?: 'GameBank', id: string, amount: any } | null }, betData?: { __typename?: 'BaccaratBetData' } | { __typename?: 'BitFarmBetData' } | { __typename?: 'CrashBetData' } | { __typename?: 'CryptoQuestBetData' } | { __typename?: 'DiceBetData' } | { __typename?: 'LimboBetData' } | { __typename?: 'MinesBetData', minesCount: number, currentMultiplier: any, nextMultiplier: any, minesCells?: Array<number> | null, openedCells: Array<number> } | { __typename?: 'MiniPokerBetData' } | null } | null } };

export type MinesCashOutMutationVariables = Exact<{
  betRoomId: Scalars['ID'];
  currencyId: Scalars['ID'];
}>;


export type MinesCashOutMutation = { __typename?: 'Mutation', minesCashout: { __typename?: 'BetResponse', result: BetResult, bet?: { __typename?: 'Bet', id: string, betAmount: any, betChargeAmount: any, payoutRate: any, payoutAmount: any, equivalentUsdRate: any, game: { __typename?: 'Game', gameBank?: { __typename?: 'GameBank', id: string, amount: any } | null } } | null } };

export type LimboBetMutationVariables = Exact<{
  betRoomId: Scalars['ID'];
  currencyId: Scalars['ID'];
  amount: Scalars['Decimal'];
  multiplier: Scalars['Decimal'];
}>;


export type LimboBetMutation = { __typename?: 'Mutation', limboBet: { __typename?: 'BetResponse', result: BetResult, bet?: { __typename?: 'Bet', id: string, betAmount: any, betChargeAmount: any, payoutRate: any, payoutAmount: any, equivalentUsdRate: any, game: { __typename?: 'Game', gameBank?: { __typename?: 'GameBank', id: string, amount: any } | null }, betData?: { __typename?: 'BaccaratBetData' } | { __typename?: 'BitFarmBetData' } | { __typename?: 'CrashBetData' } | { __typename?: 'CryptoQuestBetData' } | { __typename?: 'DiceBetData' } | { __typename?: 'LimboBetData', betMultiplier: any, result: any } | { __typename?: 'MinesBetData' } | { __typename?: 'MiniPokerBetData' } | null } | null } };

export type UpdateNickNameMutationVariables = Exact<{
  nickname: Scalars['String'];
}>;


export type UpdateNickNameMutation = { __typename?: 'Mutation', updateNickname: { __typename?: 'PayloadOfProfile', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null, content?: { __typename?: 'Profile', id: string, hasPassword: boolean, email?: any | null, hidden: boolean } | null } };

export type SetHiddenProfileMutationVariables = Exact<{
  isHidden: Scalars['Boolean'];
}>;


export type SetHiddenProfileMutation = { __typename?: 'Mutation', setHidden: { __typename?: 'PayloadOfProfile', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null, content?: { __typename?: 'Profile', id: string, hasPassword: boolean, email?: any | null, hidden: boolean } | null } };

export type UpdateEmailMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', updateEmail: { __typename?: 'PayloadOfProfile', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null, content?: { __typename?: 'Profile', id: string, hasPassword: boolean, email?: any | null, hidden: boolean } | null } };

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail: { __typename?: 'PayloadOfProfile', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null, content?: { __typename?: 'Profile', id: string, hasPassword: boolean, email?: any | null, emailVerified: boolean, hidden: boolean } | null } };

export type RemoveActiveDeviceMutationVariables = Exact<{
  deviceId: Scalars['ID'];
}>;


export type RemoveActiveDeviceMutation = { __typename?: 'Mutation', removeActiveDevice: { __typename?: 'PayloadOfBoolean', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null } };

export type UpdateIdentificationMutationVariables = Exact<{
  input: IdentificationInput;
}>;


export type UpdateIdentificationMutation = { __typename?: 'Mutation', updateIdentification: { __typename?: 'PayloadOfUserIdentification', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null, content?: { __typename?: 'UserIdentification', status: IdentificationStatus, userId: string, identification?: { __typename?: 'Identification', id: string, firstName: string, lastName: string, gender: string, dateOfBirth: any, address: string, city: string, postalCode: string, countryCode: string } | null } | null } };

export type UploadIdentificationPhotosMutationVariables = Exact<{
  idFront?: InputMaybe<Scalars['Upload']>;
  idBack?: InputMaybe<Scalars['Upload']>;
  passport?: InputMaybe<Scalars['Upload']>;
  selfie: Scalars['Upload'];
}>;


export type UploadIdentificationPhotosMutation = { __typename?: 'Mutation', uploadIdentificationPhotos: { __typename?: 'PayloadOfProfile', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null } };

export type UpdateAvatarMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UpdateAvatarMutation = { __typename?: 'Mutation', updateAvatar: { __typename?: 'PayloadOfUser', success: boolean, error?: { __typename?: 'GraphError', code?: string | null, message: string } | null, content?: { __typename?: 'User', id: string, nickname: string, avatar?: { __typename?: 'Photo', uri: string, square: string, small: string, medium: string, large: string } | null } | null } };

export type CreateCryptoWithdrawalMutationVariables = Exact<{
  currencyId: Scalars['ID'];
  network: BlockchainNetwork;
  address: Scalars['String'];
  amount: Scalars['Decimal'];
}>;


export type CreateCryptoWithdrawalMutation = { __typename?: 'Mutation', createCryptoWithdrawal: { __typename?: 'WithdrawalTransaction', id: string, amount: any, equivalentUsdRate: any, status: WithdrawalStatus, createdAt: any, updatedAt: any } };

export type LatestBetSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type LatestBetSubscription = { __typename?: 'Subscription', latestBet: { __typename?: 'Bet', id: string, equivalentUsdRate: any, betAmount: any, payoutRate: any, payoutAmount: any, createdAt: any, game: { __typename?: 'Game', id: string, name: string }, currency: { __typename?: 'Currency', id: string, shortName: string, decimalDigits: number, equivalentUsdRate: any }, user?: { __typename?: 'User', id: string, nickname: string, avatar?: { __typename?: 'Photo', square: string } | null } | null } };

export type LatestBetByGameSubscriptionVariables = Exact<{
  gameId: Scalars['ID'];
}>;


export type LatestBetByGameSubscription = { __typename?: 'Subscription', latestBetByGame: { __typename?: 'Bet', id: string, equivalentUsdRate: any, betAmount: any, payoutRate: any, payoutAmount: any, createdAt: any, currency: { __typename?: 'Currency', id: string, shortName: string, decimalDigits: number, equivalentUsdRate: any }, game: { __typename?: 'Game', id: string, name: string }, user?: { __typename?: 'User', id: string, nickname: string, avatar?: { __typename?: 'Photo', square: string } | null } | null } };

export type HightBetSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type HightBetSubscription = { __typename?: 'Subscription', highBet: { __typename?: 'Bet', id: string, equivalentUsdRate: any, betAmount: any, payoutRate: any, payoutAmount: any, game: { __typename?: 'Game', id: string, name: string }, currency: { __typename?: 'Currency', id: string, shortName: string, decimalDigits: number, equivalentUsdRate: any }, user?: { __typename?: 'User', id: string, nickname: string, avatar?: { __typename?: 'Photo', square: string } | null } | null } };

export type HighBetByGameSubscriptionVariables = Exact<{
  gameId: Scalars['ID'];
}>;


export type HighBetByGameSubscription = { __typename?: 'Subscription', highBetByGame: { __typename?: 'Bet', id: string, equivalentUsdRate: any, betAmount: any, payoutRate: any, payoutAmount: any, game: { __typename?: 'Game', id: string, name: string }, currency: { __typename?: 'Currency', id: string, shortName: string, decimalDigits: number, equivalentUsdRate: any }, user?: { __typename?: 'User', id: string, nickname: string, avatar?: { __typename?: 'Photo', square: string } | null } | null } };

export type WalletChangedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type WalletChangedSubscription = { __typename?: 'Subscription', userWalletChanged: { __typename?: 'UserWallet', id: string, currencyId: string, amount: any, lockedAmount?: any | null } };


export const MyBetsDocument = gql`
    query MyBets($page: Int!, $pageSize: Int!, $gameId: ID, $currencyId: Int) {
  myBets(
    page: $page
    pageSize: $pageSize
    gameId: $gameId
    currencyId: $currencyId
  ) {
    hasMore
    data {
      id
      createdAt
      betAmount
      betChargeAmount
      payoutRate
      payoutAmount
      equivalentUsdRate
      game {
        id
        name
        type
        isMiniGame
      }
      currency {
        id
        shortName
        decimalDigits
        equivalentUsdRate
      }
    }
  }
}
    `;

/**
 * __useMyBetsQuery__
 *
 * To run a query within a React component, call `useMyBetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyBetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyBetsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      gameId: // value for 'gameId'
 *      currencyId: // value for 'currencyId'
 *   },
 * });
 */
export function useMyBetsQuery(baseOptions: Apollo.QueryHookOptions<MyBetsQuery, MyBetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyBetsQuery, MyBetsQueryVariables>(MyBetsDocument, options);
      }
export function useMyBetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyBetsQuery, MyBetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyBetsQuery, MyBetsQueryVariables>(MyBetsDocument, options);
        }
export type MyBetsQueryHookResult = ReturnType<typeof useMyBetsQuery>;
export type MyBetsLazyQueryHookResult = ReturnType<typeof useMyBetsLazyQuery>;
export type MyBetsQueryResult = Apollo.QueryResult<MyBetsQuery, MyBetsQueryVariables>;
export const BetDocument = gql`
    query Bet($betId: ID!, $currencyId: ID!) {
  bet(id: $betId) {
    id
    createdAt
    betAmount
    betChargeAmount
    payoutRate
    payoutAmount
    equivalentUsdRate
    rngResult {
      id
      rng
      rngPublicKey
    }
    game {
      id
      name
      thumbnail {
        square
      }
      publisher {
        name
      }
      gameBank(currencyId: $currencyId) {
        id
        amount
      }
    }
    currency {
      id
      shortName
      decimalDigits
      equivalentUsdRate
    }
  }
}
    `;

/**
 * __useBetQuery__
 *
 * To run a query within a React component, call `useBetQuery` and pass it any options that fit your needs.
 * When your component renders, `useBetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBetQuery({
 *   variables: {
 *      betId: // value for 'betId'
 *      currencyId: // value for 'currencyId'
 *   },
 * });
 */
export function useBetQuery(baseOptions: Apollo.QueryHookOptions<BetQuery, BetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BetQuery, BetQueryVariables>(BetDocument, options);
      }
export function useBetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BetQuery, BetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BetQuery, BetQueryVariables>(BetDocument, options);
        }
export type BetQueryHookResult = ReturnType<typeof useBetQuery>;
export type BetLazyQueryHookResult = ReturnType<typeof useBetLazyQuery>;
export type BetQueryResult = Apollo.QueryResult<BetQuery, BetQueryVariables>;
export const JackpotWinnersDocument = gql`
    query JackpotWinners($page: Int!, $pageSize: Int!, $gameId: ID) {
  jackpotWinBets(page: $page, pageSize: $pageSize, gameId: $gameId) {
    hasMore
    data {
      betId
      jackpotCount
      jackpotTotalAmount
      price
      at
      game {
        id
        slug
        name
      }
      currency {
        id
        shortName
        decimalDigits
        equivalentUsdRate
      }
      user {
        id
        avatar {
          square
        }
        nickname
      }
    }
  }
}
    `;

/**
 * __useJackpotWinnersQuery__
 *
 * To run a query within a React component, call `useJackpotWinnersQuery` and pass it any options that fit your needs.
 * When your component renders, `useJackpotWinnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJackpotWinnersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useJackpotWinnersQuery(baseOptions: Apollo.QueryHookOptions<JackpotWinnersQuery, JackpotWinnersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JackpotWinnersQuery, JackpotWinnersQueryVariables>(JackpotWinnersDocument, options);
      }
export function useJackpotWinnersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JackpotWinnersQuery, JackpotWinnersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JackpotWinnersQuery, JackpotWinnersQueryVariables>(JackpotWinnersDocument, options);
        }
export type JackpotWinnersQueryHookResult = ReturnType<typeof useJackpotWinnersQuery>;
export type JackpotWinnersLazyQueryHookResult = ReturnType<typeof useJackpotWinnersLazyQuery>;
export type JackpotWinnersQueryResult = Apollo.QueryResult<JackpotWinnersQuery, JackpotWinnersQueryVariables>;
export const GamesDocument = gql`
    query Games($page: Int!, $pageSize: Int!, $publisherId: ID, $tags: [String!]) {
  games(page: $page, pageSize: $pageSize, publisherId: $publisherId, tags: $tags) {
    hasMore
    data {
      id
      name
      slug
      type
      isMiniGame
      thumbnail {
        large
        medium
        square
      }
      tags
      rtp
      maxWinRate
      publisher {
        name
        branch
      }
    }
  }
}
    `;

/**
 * __useGamesQuery__
 *
 * To run a query within a React component, call `useGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGamesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      publisherId: // value for 'publisherId'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useGamesQuery(baseOptions: Apollo.QueryHookOptions<GamesQuery, GamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GamesQuery, GamesQueryVariables>(GamesDocument, options);
      }
export function useGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GamesQuery, GamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GamesQuery, GamesQueryVariables>(GamesDocument, options);
        }
export type GamesQueryHookResult = ReturnType<typeof useGamesQuery>;
export type GamesLazyQueryHookResult = ReturnType<typeof useGamesLazyQuery>;
export type GamesQueryResult = Apollo.QueryResult<GamesQuery, GamesQueryVariables>;
export const GameDocument = gql`
    query Game($slug: String!, $currencyId: ID!) {
  game(slug: $slug) {
    id
    type
    isMiniGame
    likes
    favorites
    favored
    name
    slug
    releaseDate
    summary
    description
    reviewing
    thumbnail {
      square
    }
    previews {
      square
      large
    }
    tags
    rtp
    maxWinRate
    publisher {
      name
      gameCount
      logo {
        square
      }
    }
    gameBank(currencyId: $currencyId) {
      id
      amount
      betRoom {
        id
        maxProfitRate
        maxProfitAmount
        floorPrice
      }
      slotBetRooms {
        betRoomId
        price
        jackpotAmount
      }
    }
  }
}
    `;

/**
 * __useGameQuery__
 *
 * To run a query within a React component, call `useGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      currencyId: // value for 'currencyId'
 *   },
 * });
 */
export function useGameQuery(baseOptions: Apollo.QueryHookOptions<GameQuery, GameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GameQuery, GameQueryVariables>(GameDocument, options);
      }
export function useGameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GameQuery, GameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GameQuery, GameQueryVariables>(GameDocument, options);
        }
export type GameQueryHookResult = ReturnType<typeof useGameQuery>;
export type GameLazyQueryHookResult = ReturnType<typeof useGameLazyQuery>;
export type GameQueryResult = Apollo.QueryResult<GameQuery, GameQueryVariables>;
export const GetGameBankDocument = gql`
    query GetGameBank($slug: String!, $currencyId: ID!) {
  game(slug: $slug) {
    id
    gameBank(currencyId: $currencyId) {
      id
      amount
      betRoom {
        id
        maxProfitRate
        maxProfitAmount
        floorPrice
      }
      slotBetRooms {
        betRoomId
        price
        jackpotAmount
      }
    }
  }
}
    `;

/**
 * __useGetGameBankQuery__
 *
 * To run a query within a React component, call `useGetGameBankQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameBankQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameBankQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      currencyId: // value for 'currencyId'
 *   },
 * });
 */
export function useGetGameBankQuery(baseOptions: Apollo.QueryHookOptions<GetGameBankQuery, GetGameBankQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGameBankQuery, GetGameBankQueryVariables>(GetGameBankDocument, options);
      }
export function useGetGameBankLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGameBankQuery, GetGameBankQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGameBankQuery, GetGameBankQueryVariables>(GetGameBankDocument, options);
        }
export type GetGameBankQueryHookResult = ReturnType<typeof useGetGameBankQuery>;
export type GetGameBankLazyQueryHookResult = ReturnType<typeof useGetGameBankLazyQuery>;
export type GetGameBankQueryResult = Apollo.QueryResult<GetGameBankQuery, GetGameBankQueryVariables>;
export const MinesCurrentBetDocument = gql`
    query MinesCurrentBet($gameId: ID!, $currencyId: ID!) {
  minesCurrentBet(gameId: $gameId) {
    result
    bet {
      id
      betAmount
      betChargeAmount
      payoutRate
      payoutAmount
      equivalentUsdRate
      game {
        gameBank(currencyId: $currencyId) {
          id
          amount
        }
      }
      betData {
        ... on MinesBetData {
          minesCount
          currentMultiplier
          nextMultiplier
          minesCells
          openedCells
        }
      }
      currency {
        name
        shortName
        decimalDigits
        equivalentUsdRate
      }
    }
  }
}
    `;

/**
 * __useMinesCurrentBetQuery__
 *
 * To run a query within a React component, call `useMinesCurrentBetQuery` and pass it any options that fit your needs.
 * When your component renders, `useMinesCurrentBetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMinesCurrentBetQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      currencyId: // value for 'currencyId'
 *   },
 * });
 */
export function useMinesCurrentBetQuery(baseOptions: Apollo.QueryHookOptions<MinesCurrentBetQuery, MinesCurrentBetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MinesCurrentBetQuery, MinesCurrentBetQueryVariables>(MinesCurrentBetDocument, options);
      }
export function useMinesCurrentBetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MinesCurrentBetQuery, MinesCurrentBetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MinesCurrentBetQuery, MinesCurrentBetQueryVariables>(MinesCurrentBetDocument, options);
        }
export type MinesCurrentBetQueryHookResult = ReturnType<typeof useMinesCurrentBetQuery>;
export type MinesCurrentBetLazyQueryHookResult = ReturnType<typeof useMinesCurrentBetLazyQuery>;
export type MinesCurrentBetQueryResult = Apollo.QueryResult<MinesCurrentBetQuery, MinesCurrentBetQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    user {
      id
      nickname
      avatar {
        uri
        square
        small
        medium
        large
      }
    }
    profile {
      id
      hasPassword
      email
      emailVerified
      hidden
    }
    activeDevices {
      id
      device
      lastSeenIpAddress
      lastSeenAt
      current
    }
    userWallets {
      id
      currencyId
      amount
      lockedAmount
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UserIdentificationDocument = gql`
    query UserIdentification {
  userIdentification {
    userId
    status
    identification {
      id
      firstName
      lastName
      gender
      dateOfBirth
      address
      city
      postalCode
      countryCode
    }
  }
}
    `;

/**
 * __useUserIdentificationQuery__
 *
 * To run a query within a React component, call `useUserIdentificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserIdentificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserIdentificationQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserIdentificationQuery(baseOptions?: Apollo.QueryHookOptions<UserIdentificationQuery, UserIdentificationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserIdentificationQuery, UserIdentificationQueryVariables>(UserIdentificationDocument, options);
      }
export function useUserIdentificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserIdentificationQuery, UserIdentificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserIdentificationQuery, UserIdentificationQueryVariables>(UserIdentificationDocument, options);
        }
export type UserIdentificationQueryHookResult = ReturnType<typeof useUserIdentificationQuery>;
export type UserIdentificationLazyQueryHookResult = ReturnType<typeof useUserIdentificationLazyQuery>;
export type UserIdentificationQueryResult = Apollo.QueryResult<UserIdentificationQuery, UserIdentificationQueryVariables>;
export const CurrenciesDocument = gql`
    query Currencies {
  currencies {
    id
    name
    shortName
    type
    decimalDigits
    equivalentUsdRate
    blockchainNetworks
  }
}
    `;

/**
 * __useCurrenciesQuery__
 *
 * To run a query within a React component, call `useCurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrenciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<CurrenciesQuery, CurrenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrenciesQuery, CurrenciesQueryVariables>(CurrenciesDocument, options);
      }
export function useCurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrenciesQuery, CurrenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrenciesQuery, CurrenciesQueryVariables>(CurrenciesDocument, options);
        }
export type CurrenciesQueryHookResult = ReturnType<typeof useCurrenciesQuery>;
export type CurrenciesLazyQueryHookResult = ReturnType<typeof useCurrenciesLazyQuery>;
export type CurrenciesQueryResult = Apollo.QueryResult<CurrenciesQuery, CurrenciesQueryVariables>;
export const CryptoDepositAddressDocument = gql`
    query CryptoDepositAddress($currencyId: ID!, $network: BlockchainNetwork!) {
  cryptoDepositAddress(currencyId: $currencyId, network: $network) {
    id
    address
  }
}
    `;

/**
 * __useCryptoDepositAddressQuery__
 *
 * To run a query within a React component, call `useCryptoDepositAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCryptoDepositAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCryptoDepositAddressQuery({
 *   variables: {
 *      currencyId: // value for 'currencyId'
 *      network: // value for 'network'
 *   },
 * });
 */
export function useCryptoDepositAddressQuery(baseOptions: Apollo.QueryHookOptions<CryptoDepositAddressQuery, CryptoDepositAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CryptoDepositAddressQuery, CryptoDepositAddressQueryVariables>(CryptoDepositAddressDocument, options);
      }
export function useCryptoDepositAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CryptoDepositAddressQuery, CryptoDepositAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CryptoDepositAddressQuery, CryptoDepositAddressQueryVariables>(CryptoDepositAddressDocument, options);
        }
export type CryptoDepositAddressQueryHookResult = ReturnType<typeof useCryptoDepositAddressQuery>;
export type CryptoDepositAddressLazyQueryHookResult = ReturnType<typeof useCryptoDepositAddressLazyQuery>;
export type CryptoDepositAddressQueryResult = Apollo.QueryResult<CryptoDepositAddressQuery, CryptoDepositAddressQueryVariables>;
export const CryptoWithdrawalInfoDocument = gql`
    query CryptoWithdrawalInfo($currencyId: ID!, $network: BlockchainNetwork!) {
  cryptoWithdrawalInfo(currencyId: $currencyId, network: $network) {
    id
    feeAmount
    feeRate
    minimumAmount
  }
}
    `;

/**
 * __useCryptoWithdrawalInfoQuery__
 *
 * To run a query within a React component, call `useCryptoWithdrawalInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCryptoWithdrawalInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCryptoWithdrawalInfoQuery({
 *   variables: {
 *      currencyId: // value for 'currencyId'
 *      network: // value for 'network'
 *   },
 * });
 */
export function useCryptoWithdrawalInfoQuery(baseOptions: Apollo.QueryHookOptions<CryptoWithdrawalInfoQuery, CryptoWithdrawalInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CryptoWithdrawalInfoQuery, CryptoWithdrawalInfoQueryVariables>(CryptoWithdrawalInfoDocument, options);
      }
export function useCryptoWithdrawalInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CryptoWithdrawalInfoQuery, CryptoWithdrawalInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CryptoWithdrawalInfoQuery, CryptoWithdrawalInfoQueryVariables>(CryptoWithdrawalInfoDocument, options);
        }
export type CryptoWithdrawalInfoQueryHookResult = ReturnType<typeof useCryptoWithdrawalInfoQuery>;
export type CryptoWithdrawalInfoLazyQueryHookResult = ReturnType<typeof useCryptoWithdrawalInfoLazyQuery>;
export type CryptoWithdrawalInfoQueryResult = Apollo.QueryResult<CryptoWithdrawalInfoQuery, CryptoWithdrawalInfoQueryVariables>;
export const DepositTransactionsDocument = gql`
    query DepositTransactions($page: Int!, $pageSize: Int!, $currencyId: ID) {
  depositTransactions(page: $page, pageSize: $pageSize, currencyId: $currencyId) {
    hasMore
    data {
      id
      amount
      equivalentUsdRate
      status
      createdAt
      currency {
        name
        shortName
        decimalDigits
        equivalentUsdRate
      }
      tx
    }
  }
}
    `;

/**
 * __useDepositTransactionsQuery__
 *
 * To run a query within a React component, call `useDepositTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDepositTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDepositTransactionsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      currencyId: // value for 'currencyId'
 *   },
 * });
 */
export function useDepositTransactionsQuery(baseOptions: Apollo.QueryHookOptions<DepositTransactionsQuery, DepositTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DepositTransactionsQuery, DepositTransactionsQueryVariables>(DepositTransactionsDocument, options);
      }
export function useDepositTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DepositTransactionsQuery, DepositTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DepositTransactionsQuery, DepositTransactionsQueryVariables>(DepositTransactionsDocument, options);
        }
export type DepositTransactionsQueryHookResult = ReturnType<typeof useDepositTransactionsQuery>;
export type DepositTransactionsLazyQueryHookResult = ReturnType<typeof useDepositTransactionsLazyQuery>;
export type DepositTransactionsQueryResult = Apollo.QueryResult<DepositTransactionsQuery, DepositTransactionsQueryVariables>;
export const WithdrawalTransactionsDocument = gql`
    query WithdrawalTransactions($page: Int!, $pageSize: Int!, $currencyId: ID) {
  withdrawalTransactions(
    page: $page
    pageSize: $pageSize
    currencyId: $currencyId
  ) {
    hasMore
    data {
      id
      amount
      status
      createdAt
      currency {
        name
        shortName
        decimalDigits
        equivalentUsdRate
      }
      tx
    }
  }
}
    `;

/**
 * __useWithdrawalTransactionsQuery__
 *
 * To run a query within a React component, call `useWithdrawalTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWithdrawalTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWithdrawalTransactionsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      currencyId: // value for 'currencyId'
 *   },
 * });
 */
export function useWithdrawalTransactionsQuery(baseOptions: Apollo.QueryHookOptions<WithdrawalTransactionsQuery, WithdrawalTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WithdrawalTransactionsQuery, WithdrawalTransactionsQueryVariables>(WithdrawalTransactionsDocument, options);
      }
export function useWithdrawalTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WithdrawalTransactionsQuery, WithdrawalTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WithdrawalTransactionsQuery, WithdrawalTransactionsQueryVariables>(WithdrawalTransactionsDocument, options);
        }
export type WithdrawalTransactionsQueryHookResult = ReturnType<typeof useWithdrawalTransactionsQuery>;
export type WithdrawalTransactionsLazyQueryHookResult = ReturnType<typeof useWithdrawalTransactionsLazyQuery>;
export type WithdrawalTransactionsQueryResult = Apollo.QueryResult<WithdrawalTransactionsQuery, WithdrawalTransactionsQueryVariables>;
export const TransactionsDocument = gql`
    query Transactions($page: Int!, $pageSize: Int!, $currencyId: ID, $group: TransactionGroup) {
  transactions(
    page: $page
    pageSize: $pageSize
    currencyId: $currencyId
    group: $group
  ) {
    hasMore
    data {
      id
      group
      label
      amount
      remainAmount
      equivalentUsdRate
      createdAt
      currency {
        id
        name
        shortName
        decimalDigits
        equivalentUsdRate
        blockchainNetworks
      }
    }
  }
}
    `;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      currencyId: // value for 'currencyId'
 *      group: // value for 'group'
 *   },
 * });
 */
export function useTransactionsQuery(baseOptions: Apollo.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
      }
export function useTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
        }
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsQueryResult = Apollo.QueryResult<TransactionsQuery, TransactionsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    success
    error {
      code
      message
    }
    content {
      accessToken
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LoginGoogleDocument = gql`
    mutation LoginGoogle($token: String!) {
  loginGoogle(token: $token) {
    success
    error {
      code
      message
    }
    content {
      accessToken
    }
  }
}
    `;
export type LoginGoogleMutationFn = Apollo.MutationFunction<LoginGoogleMutation, LoginGoogleMutationVariables>;

/**
 * __useLoginGoogleMutation__
 *
 * To run a mutation, you first call `useLoginGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginGoogleMutation, { data, loading, error }] = useLoginGoogleMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useLoginGoogleMutation(baseOptions?: Apollo.MutationHookOptions<LoginGoogleMutation, LoginGoogleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginGoogleMutation, LoginGoogleMutationVariables>(LoginGoogleDocument, options);
      }
export type LoginGoogleMutationHookResult = ReturnType<typeof useLoginGoogleMutation>;
export type LoginGoogleMutationResult = Apollo.MutationResult<LoginGoogleMutation>;
export type LoginGoogleMutationOptions = Apollo.BaseMutationOptions<LoginGoogleMutation, LoginGoogleMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: EmailAddress!, $password: String!) {
  register(input: {email: $email, password: $password}) {
    success
    error {
      code
      message
    }
    content {
      accessToken
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
    success
    error {
      code
      message
    }
    content {
      id
      hasPassword
      email
      hidden
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const RequestRecoverPasswordDocument = gql`
    mutation RequestRecoverPassword($email: EmailAddress!) {
  requestRecoverPassword(email: $email) {
    success
    error {
      code
      message
    }
    content
  }
}
    `;
export type RequestRecoverPasswordMutationFn = Apollo.MutationFunction<RequestRecoverPasswordMutation, RequestRecoverPasswordMutationVariables>;

/**
 * __useRequestRecoverPasswordMutation__
 *
 * To run a mutation, you first call `useRequestRecoverPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestRecoverPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestRecoverPasswordMutation, { data, loading, error }] = useRequestRecoverPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestRecoverPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RequestRecoverPasswordMutation, RequestRecoverPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestRecoverPasswordMutation, RequestRecoverPasswordMutationVariables>(RequestRecoverPasswordDocument, options);
      }
export type RequestRecoverPasswordMutationHookResult = ReturnType<typeof useRequestRecoverPasswordMutation>;
export type RequestRecoverPasswordMutationResult = Apollo.MutationResult<RequestRecoverPasswordMutation>;
export type RequestRecoverPasswordMutationOptions = Apollo.BaseMutationOptions<RequestRecoverPasswordMutation, RequestRecoverPasswordMutationVariables>;
export const RecoverPasswordDocument = gql`
    mutation RecoverPassword($token: String!, $newPassword: String!) {
  recoverPassword(token: $token, newPassword: $newPassword) {
    success
    error {
      code
      message
    }
    content
  }
}
    `;
export type RecoverPasswordMutationFn = Apollo.MutationFunction<RecoverPasswordMutation, RecoverPasswordMutationVariables>;

/**
 * __useRecoverPasswordMutation__
 *
 * To run a mutation, you first call `useRecoverPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecoverPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recoverPasswordMutation, { data, loading, error }] = useRecoverPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useRecoverPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RecoverPasswordMutation, RecoverPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RecoverPasswordMutation, RecoverPasswordMutationVariables>(RecoverPasswordDocument, options);
      }
export type RecoverPasswordMutationHookResult = ReturnType<typeof useRecoverPasswordMutation>;
export type RecoverPasswordMutationResult = Apollo.MutationResult<RecoverPasswordMutation>;
export type RecoverPasswordMutationOptions = Apollo.BaseMutationOptions<RecoverPasswordMutation, RecoverPasswordMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    success
    content
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const FavoriteDocument = gql`
    mutation Favorite($gameId: ID!, $value: Boolean!) {
  favorite(gameId: $gameId, value: $value) {
    id
    likes
    liked
    favorites
    favored
  }
}
    `;
export type FavoriteMutationFn = Apollo.MutationFunction<FavoriteMutation, FavoriteMutationVariables>;

/**
 * __useFavoriteMutation__
 *
 * To run a mutation, you first call `useFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [favoriteMutation, { data, loading, error }] = useFavoriteMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<FavoriteMutation, FavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FavoriteMutation, FavoriteMutationVariables>(FavoriteDocument, options);
      }
export type FavoriteMutationHookResult = ReturnType<typeof useFavoriteMutation>;
export type FavoriteMutationResult = Apollo.MutationResult<FavoriteMutation>;
export type FavoriteMutationOptions = Apollo.BaseMutationOptions<FavoriteMutation, FavoriteMutationVariables>;
export const LikeDocument = gql`
    mutation Like($gameId: ID!, $value: Boolean!) {
  like(gameId: 1, value: true) {
    id
    likes
    liked
    favorites
    favored
  }
}
    `;
export type LikeMutationFn = Apollo.MutationFunction<LikeMutation, LikeMutationVariables>;

/**
 * __useLikeMutation__
 *
 * To run a mutation, you first call `useLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMutation, { data, loading, error }] = useLikeMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useLikeMutation(baseOptions?: Apollo.MutationHookOptions<LikeMutation, LikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeMutation, LikeMutationVariables>(LikeDocument, options);
      }
export type LikeMutationHookResult = ReturnType<typeof useLikeMutation>;
export type LikeMutationResult = Apollo.MutationResult<LikeMutation>;
export type LikeMutationOptions = Apollo.BaseMutationOptions<LikeMutation, LikeMutationVariables>;
export const MiniPokerBetDocument = gql`
    mutation MiniPokerBet($betRoomId: ID!, $currencyId: ID!) {
  miniPokerBet(betRoomId: $betRoomId) {
    result
    bet {
      id
      betAmount
      betChargeAmount
      payoutRate
      payoutAmount
      betData {
        ... on MiniPokerBetData {
          winJackpotTotalAmount
          miniPokerResult {
            type
            rate
            cards {
              rank
              suit
            }
          }
        }
      }
      game {
        gameBank(currencyId: $currencyId) {
          id
          amount
          betRoom {
            id
            maxProfitRate
            maxProfitAmount
            floorPrice
          }
          slotBetRooms {
            betRoomId
            price
            jackpotAmount
          }
        }
      }
    }
  }
}
    `;
export type MiniPokerBetMutationFn = Apollo.MutationFunction<MiniPokerBetMutation, MiniPokerBetMutationVariables>;

/**
 * __useMiniPokerBetMutation__
 *
 * To run a mutation, you first call `useMiniPokerBetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMiniPokerBetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [miniPokerBetMutation, { data, loading, error }] = useMiniPokerBetMutation({
 *   variables: {
 *      betRoomId: // value for 'betRoomId'
 *      currencyId: // value for 'currencyId'
 *   },
 * });
 */
export function useMiniPokerBetMutation(baseOptions?: Apollo.MutationHookOptions<MiniPokerBetMutation, MiniPokerBetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MiniPokerBetMutation, MiniPokerBetMutationVariables>(MiniPokerBetDocument, options);
      }
export type MiniPokerBetMutationHookResult = ReturnType<typeof useMiniPokerBetMutation>;
export type MiniPokerBetMutationResult = Apollo.MutationResult<MiniPokerBetMutation>;
export type MiniPokerBetMutationOptions = Apollo.BaseMutationOptions<MiniPokerBetMutation, MiniPokerBetMutationVariables>;
export const DiceBetDocument = gql`
    mutation DiceBet($betRoomId: ID!, $amount: Decimal!, $isRollOver: Boolean!, $value: Decimal!, $currencyId: ID!) {
  diceBet(
    betRoomId: $betRoomId
    amount: $amount
    isRollOver: $isRollOver
    value: $value
  ) {
    bet {
      id
      betAmount
      betChargeAmount
      payoutRate
      payoutAmount
      equivalentUsdRate
      game {
        gameBank(currencyId: $currencyId) {
          id
          amount
          betRoom {
            id
            maxProfitRate
            maxProfitAmount
            floorPrice
          }
          slotBetRooms {
            betRoomId
            price
            jackpotAmount
          }
        }
      }
      betData {
        ... on DiceBetData {
          isRollOver
          result
          betValue
          winChance
        }
      }
    }
    result
  }
}
    `;
export type DiceBetMutationFn = Apollo.MutationFunction<DiceBetMutation, DiceBetMutationVariables>;

/**
 * __useDiceBetMutation__
 *
 * To run a mutation, you first call `useDiceBetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDiceBetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [diceBetMutation, { data, loading, error }] = useDiceBetMutation({
 *   variables: {
 *      betRoomId: // value for 'betRoomId'
 *      amount: // value for 'amount'
 *      isRollOver: // value for 'isRollOver'
 *      value: // value for 'value'
 *      currencyId: // value for 'currencyId'
 *   },
 * });
 */
export function useDiceBetMutation(baseOptions?: Apollo.MutationHookOptions<DiceBetMutation, DiceBetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DiceBetMutation, DiceBetMutationVariables>(DiceBetDocument, options);
      }
export type DiceBetMutationHookResult = ReturnType<typeof useDiceBetMutation>;
export type DiceBetMutationResult = Apollo.MutationResult<DiceBetMutation>;
export type DiceBetMutationOptions = Apollo.BaseMutationOptions<DiceBetMutation, DiceBetMutationVariables>;
export const MinesBetDocument = gql`
    mutation MinesBet($betRoomId: ID!, $currencyId: ID!, $amount: Decimal!, $mines: Int!, $cells: [Int!]) {
  minesBet(betRoomId: $betRoomId, amount: $amount, mines: $mines, cells: $cells) {
    result
    bet {
      id
      betAmount
      betChargeAmount
      payoutRate
      payoutAmount
      equivalentUsdRate
      game {
        gameBank(currencyId: $currencyId) {
          id
          amount
        }
      }
      betData {
        ... on MinesBetData {
          minesCount
          currentMultiplier
          nextMultiplier
          minesCells
          openedCells
        }
      }
    }
  }
}
    `;
export type MinesBetMutationFn = Apollo.MutationFunction<MinesBetMutation, MinesBetMutationVariables>;

/**
 * __useMinesBetMutation__
 *
 * To run a mutation, you first call `useMinesBetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMinesBetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [minesBetMutation, { data, loading, error }] = useMinesBetMutation({
 *   variables: {
 *      betRoomId: // value for 'betRoomId'
 *      currencyId: // value for 'currencyId'
 *      amount: // value for 'amount'
 *      mines: // value for 'mines'
 *      cells: // value for 'cells'
 *   },
 * });
 */
export function useMinesBetMutation(baseOptions?: Apollo.MutationHookOptions<MinesBetMutation, MinesBetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MinesBetMutation, MinesBetMutationVariables>(MinesBetDocument, options);
      }
export type MinesBetMutationHookResult = ReturnType<typeof useMinesBetMutation>;
export type MinesBetMutationResult = Apollo.MutationResult<MinesBetMutation>;
export type MinesBetMutationOptions = Apollo.BaseMutationOptions<MinesBetMutation, MinesBetMutationVariables>;
export const MinesOpenDocument = gql`
    mutation MinesOpen($betRoomId: ID!, $cellIdx: Int!, $currencyId: ID!) {
  minesOpen(betRoomId: $betRoomId, cellIdx: $cellIdx) {
    result
    bet {
      id
      betAmount
      betChargeAmount
      payoutRate
      payoutAmount
      equivalentUsdRate
      game {
        gameBank(currencyId: $currencyId) {
          id
          amount
        }
      }
      betData {
        ... on MinesBetData {
          minesCount
          currentMultiplier
          nextMultiplier
          minesCells
          openedCells
        }
      }
    }
  }
}
    `;
export type MinesOpenMutationFn = Apollo.MutationFunction<MinesOpenMutation, MinesOpenMutationVariables>;

/**
 * __useMinesOpenMutation__
 *
 * To run a mutation, you first call `useMinesOpenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMinesOpenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [minesOpenMutation, { data, loading, error }] = useMinesOpenMutation({
 *   variables: {
 *      betRoomId: // value for 'betRoomId'
 *      cellIdx: // value for 'cellIdx'
 *      currencyId: // value for 'currencyId'
 *   },
 * });
 */
export function useMinesOpenMutation(baseOptions?: Apollo.MutationHookOptions<MinesOpenMutation, MinesOpenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MinesOpenMutation, MinesOpenMutationVariables>(MinesOpenDocument, options);
      }
export type MinesOpenMutationHookResult = ReturnType<typeof useMinesOpenMutation>;
export type MinesOpenMutationResult = Apollo.MutationResult<MinesOpenMutation>;
export type MinesOpenMutationOptions = Apollo.BaseMutationOptions<MinesOpenMutation, MinesOpenMutationVariables>;
export const MinesCashOutDocument = gql`
    mutation MinesCashOut($betRoomId: ID!, $currencyId: ID!) {
  minesCashout(betRoomId: $betRoomId) {
    result
    bet {
      id
      betAmount
      betChargeAmount
      payoutRate
      payoutAmount
      equivalentUsdRate
      game {
        gameBank(currencyId: $currencyId) {
          id
          amount
        }
      }
    }
  }
}
    `;
export type MinesCashOutMutationFn = Apollo.MutationFunction<MinesCashOutMutation, MinesCashOutMutationVariables>;

/**
 * __useMinesCashOutMutation__
 *
 * To run a mutation, you first call `useMinesCashOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMinesCashOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [minesCashOutMutation, { data, loading, error }] = useMinesCashOutMutation({
 *   variables: {
 *      betRoomId: // value for 'betRoomId'
 *      currencyId: // value for 'currencyId'
 *   },
 * });
 */
export function useMinesCashOutMutation(baseOptions?: Apollo.MutationHookOptions<MinesCashOutMutation, MinesCashOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MinesCashOutMutation, MinesCashOutMutationVariables>(MinesCashOutDocument, options);
      }
export type MinesCashOutMutationHookResult = ReturnType<typeof useMinesCashOutMutation>;
export type MinesCashOutMutationResult = Apollo.MutationResult<MinesCashOutMutation>;
export type MinesCashOutMutationOptions = Apollo.BaseMutationOptions<MinesCashOutMutation, MinesCashOutMutationVariables>;
export const LimboBetDocument = gql`
    mutation LimboBet($betRoomId: ID!, $currencyId: ID!, $amount: Decimal!, $multiplier: Decimal!) {
  limboBet(betRoomId: $betRoomId, amount: $amount, multiplier: $multiplier) {
    result
    bet {
      id
      betAmount
      betChargeAmount
      payoutRate
      payoutAmount
      equivalentUsdRate
      game {
        gameBank(currencyId: $currencyId) {
          id
          amount
        }
      }
      betData {
        ... on LimboBetData {
          betMultiplier
          result
        }
      }
    }
  }
}
    `;
export type LimboBetMutationFn = Apollo.MutationFunction<LimboBetMutation, LimboBetMutationVariables>;

/**
 * __useLimboBetMutation__
 *
 * To run a mutation, you first call `useLimboBetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLimboBetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [limboBetMutation, { data, loading, error }] = useLimboBetMutation({
 *   variables: {
 *      betRoomId: // value for 'betRoomId'
 *      currencyId: // value for 'currencyId'
 *      amount: // value for 'amount'
 *      multiplier: // value for 'multiplier'
 *   },
 * });
 */
export function useLimboBetMutation(baseOptions?: Apollo.MutationHookOptions<LimboBetMutation, LimboBetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LimboBetMutation, LimboBetMutationVariables>(LimboBetDocument, options);
      }
export type LimboBetMutationHookResult = ReturnType<typeof useLimboBetMutation>;
export type LimboBetMutationResult = Apollo.MutationResult<LimboBetMutation>;
export type LimboBetMutationOptions = Apollo.BaseMutationOptions<LimboBetMutation, LimboBetMutationVariables>;
export const UpdateNickNameDocument = gql`
    mutation UpdateNickName($nickname: String!) {
  updateNickname(nickname: $nickname) {
    success
    error {
      code
      message
    }
    content {
      id
      hasPassword
      email
      hidden
    }
  }
}
    `;
export type UpdateNickNameMutationFn = Apollo.MutationFunction<UpdateNickNameMutation, UpdateNickNameMutationVariables>;

/**
 * __useUpdateNickNameMutation__
 *
 * To run a mutation, you first call `useUpdateNickNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNickNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNickNameMutation, { data, loading, error }] = useUpdateNickNameMutation({
 *   variables: {
 *      nickname: // value for 'nickname'
 *   },
 * });
 */
export function useUpdateNickNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNickNameMutation, UpdateNickNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNickNameMutation, UpdateNickNameMutationVariables>(UpdateNickNameDocument, options);
      }
export type UpdateNickNameMutationHookResult = ReturnType<typeof useUpdateNickNameMutation>;
export type UpdateNickNameMutationResult = Apollo.MutationResult<UpdateNickNameMutation>;
export type UpdateNickNameMutationOptions = Apollo.BaseMutationOptions<UpdateNickNameMutation, UpdateNickNameMutationVariables>;
export const SetHiddenProfileDocument = gql`
    mutation SetHiddenProfile($isHidden: Boolean!) {
  setHidden(value: $isHidden) {
    success
    error {
      code
      message
    }
    content {
      id
      hasPassword
      email
      hidden
    }
  }
}
    `;
export type SetHiddenProfileMutationFn = Apollo.MutationFunction<SetHiddenProfileMutation, SetHiddenProfileMutationVariables>;

/**
 * __useSetHiddenProfileMutation__
 *
 * To run a mutation, you first call `useSetHiddenProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetHiddenProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setHiddenProfileMutation, { data, loading, error }] = useSetHiddenProfileMutation({
 *   variables: {
 *      isHidden: // value for 'isHidden'
 *   },
 * });
 */
export function useSetHiddenProfileMutation(baseOptions?: Apollo.MutationHookOptions<SetHiddenProfileMutation, SetHiddenProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetHiddenProfileMutation, SetHiddenProfileMutationVariables>(SetHiddenProfileDocument, options);
      }
export type SetHiddenProfileMutationHookResult = ReturnType<typeof useSetHiddenProfileMutation>;
export type SetHiddenProfileMutationResult = Apollo.MutationResult<SetHiddenProfileMutation>;
export type SetHiddenProfileMutationOptions = Apollo.BaseMutationOptions<SetHiddenProfileMutation, SetHiddenProfileMutationVariables>;
export const UpdateEmailDocument = gql`
    mutation UpdateEmail($email: EmailAddress!) {
  updateEmail(email: $email) {
    success
    error {
      code
      message
    }
    content {
      id
      hasPassword
      email
      hidden
    }
  }
}
    `;
export type UpdateEmailMutationFn = Apollo.MutationFunction<UpdateEmailMutation, UpdateEmailMutationVariables>;

/**
 * __useUpdateEmailMutation__
 *
 * To run a mutation, you first call `useUpdateEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmailMutation, { data, loading, error }] = useUpdateEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateEmailMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEmailMutation, UpdateEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEmailMutation, UpdateEmailMutationVariables>(UpdateEmailDocument, options);
      }
export type UpdateEmailMutationHookResult = ReturnType<typeof useUpdateEmailMutation>;
export type UpdateEmailMutationResult = Apollo.MutationResult<UpdateEmailMutation>;
export type UpdateEmailMutationOptions = Apollo.BaseMutationOptions<UpdateEmailMutation, UpdateEmailMutationVariables>;
export const VerifyEmailDocument = gql`
    mutation VerifyEmail($token: String!) {
  verifyEmail(token: $token) {
    success
    error {
      code
      message
    }
    content {
      id
      hasPassword
      email
      emailVerified
      hidden
    }
  }
}
    `;
export type VerifyEmailMutationFn = Apollo.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, options);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const RemoveActiveDeviceDocument = gql`
    mutation RemoveActiveDevice($deviceId: ID!) {
  removeActiveDevice(deviceId: $deviceId) {
    success
    error {
      code
      message
    }
  }
}
    `;
export type RemoveActiveDeviceMutationFn = Apollo.MutationFunction<RemoveActiveDeviceMutation, RemoveActiveDeviceMutationVariables>;

/**
 * __useRemoveActiveDeviceMutation__
 *
 * To run a mutation, you first call `useRemoveActiveDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveActiveDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeActiveDeviceMutation, { data, loading, error }] = useRemoveActiveDeviceMutation({
 *   variables: {
 *      deviceId: // value for 'deviceId'
 *   },
 * });
 */
export function useRemoveActiveDeviceMutation(baseOptions?: Apollo.MutationHookOptions<RemoveActiveDeviceMutation, RemoveActiveDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveActiveDeviceMutation, RemoveActiveDeviceMutationVariables>(RemoveActiveDeviceDocument, options);
      }
export type RemoveActiveDeviceMutationHookResult = ReturnType<typeof useRemoveActiveDeviceMutation>;
export type RemoveActiveDeviceMutationResult = Apollo.MutationResult<RemoveActiveDeviceMutation>;
export type RemoveActiveDeviceMutationOptions = Apollo.BaseMutationOptions<RemoveActiveDeviceMutation, RemoveActiveDeviceMutationVariables>;
export const UpdateIdentificationDocument = gql`
    mutation UpdateIdentification($input: IdentificationInput!) {
  updateIdentification(input: $input) {
    success
    error {
      code
      message
    }
    content {
      status
      userId
      identification {
        id
        firstName
        lastName
        gender
        dateOfBirth
        address
        city
        postalCode
        countryCode
      }
    }
  }
}
    `;
export type UpdateIdentificationMutationFn = Apollo.MutationFunction<UpdateIdentificationMutation, UpdateIdentificationMutationVariables>;

/**
 * __useUpdateIdentificationMutation__
 *
 * To run a mutation, you first call `useUpdateIdentificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIdentificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIdentificationMutation, { data, loading, error }] = useUpdateIdentificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateIdentificationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIdentificationMutation, UpdateIdentificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIdentificationMutation, UpdateIdentificationMutationVariables>(UpdateIdentificationDocument, options);
      }
export type UpdateIdentificationMutationHookResult = ReturnType<typeof useUpdateIdentificationMutation>;
export type UpdateIdentificationMutationResult = Apollo.MutationResult<UpdateIdentificationMutation>;
export type UpdateIdentificationMutationOptions = Apollo.BaseMutationOptions<UpdateIdentificationMutation, UpdateIdentificationMutationVariables>;
export const UploadIdentificationPhotosDocument = gql`
    mutation UploadIdentificationPhotos($idFront: Upload, $idBack: Upload, $passport: Upload, $selfie: Upload!) {
  uploadIdentificationPhotos(
    idFront: $idFront
    idBack: $idBack
    passport: $passport
    selfie: $selfie
  ) {
    success
    error {
      code
      message
    }
  }
}
    `;
export type UploadIdentificationPhotosMutationFn = Apollo.MutationFunction<UploadIdentificationPhotosMutation, UploadIdentificationPhotosMutationVariables>;

/**
 * __useUploadIdentificationPhotosMutation__
 *
 * To run a mutation, you first call `useUploadIdentificationPhotosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadIdentificationPhotosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadIdentificationPhotosMutation, { data, loading, error }] = useUploadIdentificationPhotosMutation({
 *   variables: {
 *      idFront: // value for 'idFront'
 *      idBack: // value for 'idBack'
 *      passport: // value for 'passport'
 *      selfie: // value for 'selfie'
 *   },
 * });
 */
export function useUploadIdentificationPhotosMutation(baseOptions?: Apollo.MutationHookOptions<UploadIdentificationPhotosMutation, UploadIdentificationPhotosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadIdentificationPhotosMutation, UploadIdentificationPhotosMutationVariables>(UploadIdentificationPhotosDocument, options);
      }
export type UploadIdentificationPhotosMutationHookResult = ReturnType<typeof useUploadIdentificationPhotosMutation>;
export type UploadIdentificationPhotosMutationResult = Apollo.MutationResult<UploadIdentificationPhotosMutation>;
export type UploadIdentificationPhotosMutationOptions = Apollo.BaseMutationOptions<UploadIdentificationPhotosMutation, UploadIdentificationPhotosMutationVariables>;
export const UpdateAvatarDocument = gql`
    mutation UpdateAvatar($file: Upload!) {
  updateAvatar(file: $file) {
    success
    error {
      code
      message
    }
    content {
      id
      avatar {
        uri
        square
        small
        medium
        large
      }
      nickname
    }
  }
}
    `;
export type UpdateAvatarMutationFn = Apollo.MutationFunction<UpdateAvatarMutation, UpdateAvatarMutationVariables>;

/**
 * __useUpdateAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAvatarMutation, { data, loading, error }] = useUpdateAvatarMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAvatarMutation, UpdateAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAvatarMutation, UpdateAvatarMutationVariables>(UpdateAvatarDocument, options);
      }
export type UpdateAvatarMutationHookResult = ReturnType<typeof useUpdateAvatarMutation>;
export type UpdateAvatarMutationResult = Apollo.MutationResult<UpdateAvatarMutation>;
export type UpdateAvatarMutationOptions = Apollo.BaseMutationOptions<UpdateAvatarMutation, UpdateAvatarMutationVariables>;
export const CreateCryptoWithdrawalDocument = gql`
    mutation CreateCryptoWithdrawal($currencyId: ID!, $network: BlockchainNetwork!, $address: String!, $amount: Decimal!) {
  createCryptoWithdrawal(
    currencyId: $currencyId
    network: $network
    address: $address
    amount: $amount
  ) {
    id
    amount
    equivalentUsdRate
    status
    createdAt
    updatedAt
  }
}
    `;
export type CreateCryptoWithdrawalMutationFn = Apollo.MutationFunction<CreateCryptoWithdrawalMutation, CreateCryptoWithdrawalMutationVariables>;

/**
 * __useCreateCryptoWithdrawalMutation__
 *
 * To run a mutation, you first call `useCreateCryptoWithdrawalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCryptoWithdrawalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCryptoWithdrawalMutation, { data, loading, error }] = useCreateCryptoWithdrawalMutation({
 *   variables: {
 *      currencyId: // value for 'currencyId'
 *      network: // value for 'network'
 *      address: // value for 'address'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useCreateCryptoWithdrawalMutation(baseOptions?: Apollo.MutationHookOptions<CreateCryptoWithdrawalMutation, CreateCryptoWithdrawalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCryptoWithdrawalMutation, CreateCryptoWithdrawalMutationVariables>(CreateCryptoWithdrawalDocument, options);
      }
export type CreateCryptoWithdrawalMutationHookResult = ReturnType<typeof useCreateCryptoWithdrawalMutation>;
export type CreateCryptoWithdrawalMutationResult = Apollo.MutationResult<CreateCryptoWithdrawalMutation>;
export type CreateCryptoWithdrawalMutationOptions = Apollo.BaseMutationOptions<CreateCryptoWithdrawalMutation, CreateCryptoWithdrawalMutationVariables>;
export const LatestBetDocument = gql`
    subscription LatestBet {
  latestBet {
    id
    equivalentUsdRate
    betAmount
    payoutRate
    payoutAmount
    createdAt
    game {
      id
      name
    }
    currency {
      id
      shortName
      decimalDigits
      equivalentUsdRate
    }
    user {
      id
      avatar {
        square
      }
      nickname
    }
  }
}
    `;

/**
 * __useLatestBetSubscription__
 *
 * To run a query within a React component, call `useLatestBetSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLatestBetSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBetSubscription({
 *   variables: {
 *   },
 * });
 */
export function useLatestBetSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LatestBetSubscription, LatestBetSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LatestBetSubscription, LatestBetSubscriptionVariables>(LatestBetDocument, options);
      }
export type LatestBetSubscriptionHookResult = ReturnType<typeof useLatestBetSubscription>;
export type LatestBetSubscriptionResult = Apollo.SubscriptionResult<LatestBetSubscription>;
export const LatestBetByGameDocument = gql`
    subscription LatestBetByGame($gameId: ID!) {
  latestBetByGame(gameId: $gameId) {
    id
    equivalentUsdRate
    betAmount
    payoutRate
    payoutAmount
    createdAt
    currency {
      id
      shortName
      decimalDigits
      equivalentUsdRate
    }
    game {
      id
      name
    }
    user {
      id
      avatar {
        square
      }
      nickname
    }
  }
}
    `;

/**
 * __useLatestBetByGameSubscription__
 *
 * To run a query within a React component, call `useLatestBetByGameSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLatestBetByGameSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBetByGameSubscription({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useLatestBetByGameSubscription(baseOptions: Apollo.SubscriptionHookOptions<LatestBetByGameSubscription, LatestBetByGameSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LatestBetByGameSubscription, LatestBetByGameSubscriptionVariables>(LatestBetByGameDocument, options);
      }
export type LatestBetByGameSubscriptionHookResult = ReturnType<typeof useLatestBetByGameSubscription>;
export type LatestBetByGameSubscriptionResult = Apollo.SubscriptionResult<LatestBetByGameSubscription>;
export const HightBetDocument = gql`
    subscription HightBet {
  highBet {
    id
    equivalentUsdRate
    betAmount
    payoutRate
    payoutAmount
    game {
      id
      name
    }
    currency {
      id
      shortName
      decimalDigits
      equivalentUsdRate
    }
    user {
      id
      avatar {
        square
      }
      nickname
    }
  }
}
    `;

/**
 * __useHightBetSubscription__
 *
 * To run a query within a React component, call `useHightBetSubscription` and pass it any options that fit your needs.
 * When your component renders, `useHightBetSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHightBetSubscription({
 *   variables: {
 *   },
 * });
 */
export function useHightBetSubscription(baseOptions?: Apollo.SubscriptionHookOptions<HightBetSubscription, HightBetSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<HightBetSubscription, HightBetSubscriptionVariables>(HightBetDocument, options);
      }
export type HightBetSubscriptionHookResult = ReturnType<typeof useHightBetSubscription>;
export type HightBetSubscriptionResult = Apollo.SubscriptionResult<HightBetSubscription>;
export const HighBetByGameDocument = gql`
    subscription HighBetByGame($gameId: ID!) {
  highBetByGame(gameId: $gameId) {
    id
    equivalentUsdRate
    betAmount
    payoutRate
    payoutAmount
    game {
      id
      name
    }
    currency {
      id
      shortName
      decimalDigits
      equivalentUsdRate
    }
    user {
      id
      avatar {
        square
      }
      nickname
    }
  }
}
    `;

/**
 * __useHighBetByGameSubscription__
 *
 * To run a query within a React component, call `useHighBetByGameSubscription` and pass it any options that fit your needs.
 * When your component renders, `useHighBetByGameSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHighBetByGameSubscription({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useHighBetByGameSubscription(baseOptions: Apollo.SubscriptionHookOptions<HighBetByGameSubscription, HighBetByGameSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<HighBetByGameSubscription, HighBetByGameSubscriptionVariables>(HighBetByGameDocument, options);
      }
export type HighBetByGameSubscriptionHookResult = ReturnType<typeof useHighBetByGameSubscription>;
export type HighBetByGameSubscriptionResult = Apollo.SubscriptionResult<HighBetByGameSubscription>;
export const WalletChangedDocument = gql`
    subscription WalletChanged {
  userWalletChanged {
    id
    currencyId
    amount
    lockedAmount
  }
}
    `;

/**
 * __useWalletChangedSubscription__
 *
 * To run a query within a React component, call `useWalletChangedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWalletChangedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletChangedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useWalletChangedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<WalletChangedSubscription, WalletChangedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<WalletChangedSubscription, WalletChangedSubscriptionVariables>(WalletChangedDocument, options);
      }
export type WalletChangedSubscriptionHookResult = ReturnType<typeof useWalletChangedSubscription>;
export type WalletChangedSubscriptionResult = Apollo.SubscriptionResult<WalletChangedSubscription>;