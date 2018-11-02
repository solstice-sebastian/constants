export const DATETIME = 'YYYY-MM-DD HH:mm:ss';
export const DATETIME_FILENAME = 'YYYYMMDD_HHmmss';
export const NO_ENTRY = 'No entry';
export const NO_EXIT = 'No exit';
export const NO_LIMIT_PRICE = 'No limitPrice';
export const NO_PRICE = 'No price';
export const NO_TICKER = 'No ticker';
export const NO_ORDER = 'No order';
export const NO_DASHBOARD_ASSETS = 'No dashboard assets';
export const INSUFFICIENT_DATA = 'Insufficient data';
export const INSUFFICIENT_FUNDS = 'Insufficient funds';
export const CONDITIONS_MET = 'Conditions met';
export const RESET_CONDITIONS_MET = 'Reset conditions met';

export const TEXT_SECTION_SEPARATOR = '\n\n------------------------------------------------------\n\n';
export const MS_PER_SECOND = 1000;
export const MS_PER_MINUTE = 1000 * 60;
export const MS_PER_HOUR = 1000 * 60 * 60;
export const MS_PER_DAY = 1000 * 60 * 60 * 24;
export const MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;

export enum AnalyticTypes {
  COMBINED_ANALYTIC = 'combinedAnalytic',
  PRICE_SMA = 'priceSma',
  VOLUME_SMA = 'volumeSma',
  BTC_VOLUME_SMA = 'btcVolumeSma',
  THRESHOLD_ANALYTIC = 'thresholdAnalytic',
  LINKED_ANALYTIC = 'linkedAnalytic',
}

export enum NotificationChannelTypes {
  LOG = 'log',
  MAC = 'mac',
  TEXT = 'text',
  EMAIL = 'email',
  DATABASE = 'db',
  WEBHOOK = 'webhook',
  WEB_SOCKET = 'ws',
}

export enum Instructions {
  SHOULD_EXIT = 'Should exit',
  SHOULD_CONTINUE = 'Should continue',
}

export enum BotStates {
  ENTERED = 'ENTERED',
  EXITED = 'EXITED',
}

export enum OrderSides {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum Environments {
  PRODUCTION = 'production',
  LOCAL = 'local',
  MOCK = 'mock',
  TEST = 'test',
  SIMULATION = 'simulation',
  STAGING = 'staging',
}

export enum RequestMethods {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

export enum ExchangeCodes {
  BINA = 'BINA',
  GDAX = 'GDAX',
  GMNI = 'GMNI',
}

export const GDAX = {
  // sandbox
  SANDBOX_HOST: 'https://public.sandbox.pro.coinbase.com',
  // production
  API_HOST: 'https://api.pro.coinbase.com',
  EXCHANGE_CODE: 'GDAX',
  stream: {
    HOSTNAME: 'ws-feed-public.sandbox.pro.coinbase.com',
    CHANNEL_PREFIX: 'wss',
  },
  orderSides: {
    BUY: 'buy',
    SELL: 'sell',
  },
  orderTypes: {
    MARKET: 'market',
    LIMIT: 'limit'
  },
  liquidity: {
    MAKER: 'M',
    TAKER: 'T',
  },
  orderStatuses: {
    PENDING: 'pending',
    OPEN: 'open',
    ACTIVE: 'active',
    DONE: 'done',
    SETTLED: 'settled',
    ALL: 'all',
  },
  stopTypes: {
    LOSS: 'loss',
    ENTRY: 'entry',
  },
  timeInForce: {
    GOOD_TIL_CANCELED: 'GTC',
    GOOD_TIL_TIME: 'GTT',
    IMMEDIATE_OR_CANCEL: 'IOC',
    FILL_OR_KILL: 'FOK'
  },
};

export const BINA = {
  API_HOST: 'https://api.binance.com',
  EXCHANGE_CODE: 'BINA',
  stream: {
    HOSTNAME: 'stream.binance.com',
    PORT: 9443,
    CHANNEL_PREFIX: 'ws',
  },
  endpoints: {
    GET_EXCHANGE_INFO: '/api/v1/exchangeInfo',
    GET_OPEN_ORDERS: '/api/v3/openOrders',
    GET_ALL_ORDERS_FOR_SYMBOL: '/api/v3/allOrders',
    GET_SERVER_TIME: '/api/v1/time',
    GET_ACCOUNT_INFO: '/api/v3/account',
    GET_ACCOUNT_TRADES_FOR_SYMBOL: '/api/v3/myTrades',
    GET_TICKER: '/api/v3/ticker/price',
    POST_ORDER: '/api/v3/order',
    GET_ORDER: '/api/v3/order',
    DELETE_ORDER: '/api/v3/order',
  },
  intervals: {
    ONE_MINUTE: '1m',
    THREE_MINUTES: '3m',
    FIVE_MINUTES: '5m',
    FIFTEEN_MINUTES: '15m',
    THIRTY_MINUTES: '30m',
    ONE_HOUR: '1h',
    TWO_HOURS: '2h',
    FOUR_HOURS: '4h',
    SIX_HOURS: '6h',
    EIGHT_HOURS: '8h',
    TWELVE_HOURS: '12h',
    ONE_DAY: '1d',
    THREE_DAYS: '3d',
    ONE_WEEK: '1w',
    ONE_MONTH: '1M',
  },
  statusCodes: {
    OVER_REQUEST_LIMIT: 429,
    BANNED_IP_ADDRESS: 418,
    UNKNOWN_TIMEOUT: 504,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SUCCESS: 200,
    INSUFFICIENT_FUNDS: -2010,
    // malformed requests are 4XX
    // internal errors are 5XX
  },
  symbolStatuses: {
    PRE_TRADING: 'PRE_TRADING',
    TRADING: 'TRADING',
    POST_TRADING: 'POST_TRADING',
    END_OF_DAY: 'END_OF_DAY',
    HALT: 'HALT',
    AUCTION_MATCH: 'AUCTION_MATCH',
    BREAK: 'BREAK',
  },
  orderStatuses: {
    NEW: 'NEW',
    SUCCESS: 'NEW',
    PARTIALLY_FILLED: 'PARTIALLY_FILLED',
    FILLED: 'FILLED',
    CANCELED: 'CANCELED',
    REJECTED: 'REJECTED',
    ERROR: 'REJECTED',
    EXPIRED: 'EXPIRED',
  },
  orderTypes: {
    LIMIT: 'LIMIT',
    MARKET: 'MARKET',
    STOP_LOSS: 'STOP_LOSS',
    STOP_LOSS_LIMIT: 'STOP_LOSS_LIMIT',
    TAKE_PROFIT: 'TAKE_PROFIT',
    TAKE_PROFIT_LIMIT: 'TAKE_PROFIT_LIMIT',
    LIMIT_MAKER: 'LIMIT_MAKER',
  },
  orderSides: {
    BUY: 'BUY',
    SELL: 'SELL',
  },
  rateLimiters: {
    type: {
      REQUESTS: 'REQUESTS',
      ORDERS: 'ORDERS',
    },
    intervals: {
      SECOND: 'SECOND',
      MINUTE: 'MINUTE',
      DAY: 'DAY',
    },
  },
  timeInForce: {
    GOOD_TIL_CANCELED: 'GTC', // good til canceled
    IMMEDIATE_OR_CANCEL: 'IOC',
    FILL_OR_KILL: 'FOK', // fill or kill
  },
  filterTypes: {
    PRICE: 'PRICE_FILTER',
    QUANTITY: 'LOT_SIZE',
    MIN_NOTIONAL: 'MIN_NOTIONAL',
  },
  newOrderRespTypes: {
    FULL: 'FULL',
    ACK: 'ACK',
    RESULT: 'RESULT',
  }
};

export const COINIGY = {
  API_HOST: 'https://api.coinigy.com',
  endpoints: {
    GET_FAVORITES: '/api/v1/userWatchList',
    ADD_ALERT: '/api/v1/addAlert',
  },
  statusCodes: {
    OVER_REQUEST_LIMIT: 429,
  },
};

export enum ReadyStates {
  CONNECTING =	0,
  OPEN =	1,
  CLOSING =	2,
  CLOSED =	3,
};

export const TRADE_FEE = 0.001;
export const ONE_SHATOSI = 0.00000001;
export const ONE_HUNDRED_SHATOSHIS = 0.000001;
export const MIN_ASSET_BTC_VALUE = 0.001;
