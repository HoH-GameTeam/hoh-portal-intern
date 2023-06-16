export enum CMD_CRASH {
  NEW_ROUND = 'CRASH_100',
  GAMEBANK_INFO = 'CRASH_101',
  PLAYER_JOIN_BET = 'CRASH_102',
  PLAYER_BET = 'CRASH_103',
  PLAYER_CANCEL = 'CRASH_104',
  PLAYER_CASH_OUT = 'CRASH_105',
  PLAYER_BET_ERROR = 'CRASH_106',
  PLAYER_CASH_OUT_ERROR = 'CRASH_107',
  CRASH = 'CRASH_108',
  CLEAR = 'CRASH_109',
  BUTTON_STATE = 'CRASH_110',
  CHANGE_CURRENCY = 'CRASH_111',
  ALERT = 'CRASH_112',
  PLAYER_AUTO_BET = 'CRASH_113',
  PLAYER_CANCEL_AUTO_BET = 'CRASH_114',
  MINI_STATISTICAL = 'CRASH_115',
  FULL_STATISTICAL = 'CRASH_116',
  PLAYER_CASH_OUT_BROADCAST = 'CRASH_117',
  PLAYER_BE_CRASH = 'CRASH_118',
}

export enum WINTYPE_MINIPOKER {
  NONE = 'NONE',
  JACK_OR_BETTER = 'JACK_OR_BETTER',
  TWO_PAIRS = 'TWO_PAIRS',
  THREE_OF_KIND = 'THREE_OF_KIND',
  STRAIGHT = 'STRAIGHT',
  FLUSH = 'FLUSH',
  FULL_HOUSE = 'FULL_HOUSE',
  FOUR_OF_KIND = 'FOUR_OF_KIND',
  STRAIGHT_FLUSH = 'STRAIGHT_FLUSH',
  ROYAL_FLUSH = 'ROYAL_FLUSH',
}

export enum BET_RESULT {
  SUCCESS = 'SUCCESS',
  WAITING = 'WAITING',
  OVER_MAX_BET = 'OVER_MAX_BET',
  UNDER_MIN_BET = 'UNDER_MIN_BET',
  INVALID_BET_PARAMS = 'INVALID_BET_PARAMS',
  GAME_NOT_AVAILABLE = 'GAME_NOT_AVAILABLE',
  INSUFFICIENT_AMOUNT = 'INSUFFICIENT_AMOUNT',
  INVALID_BET_STATE = 'INVALID_BET_STATE',
}