import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const contractAddresses = {
  plock: {
    56: '0xCE0f314013Dc814F2da9d58160C54231fb2dDae2',
    97: '0x2f90235d03686e7953291bae4036415b16560ddf'
  },
  staking: {
    56: '0x1b0929094Ef96442d6f7E6CfD9012d6430478E34',
    97: '0x9F013fD13dB8987C92e1dAf454D8971B90264853',
  },
}

export const supportedPools = [
  // {
  //   pid: 12,
  //   lpAddresses: {
  //     3: '0x0c78e1ea488ae759082ea9b7e1f7656823fccc20',
  //   },
  //   tokenAddresses: {
  //     // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9', // contract address
  //     3: '0x94d9f606b8821921fd12279fc7e55976e4f43fac',
  //   },
  //   name: 'CROPS-ETH',
  //   symbol: 'CROPS-ETH UNI-V2 LP',
  //   tokenSymbol: 'CROPS',
  //   icon: '🥕',
  // },
  // {
  //   pid: 0,
  //   lpAddresses: {
  //     3: '0x0c78e1ea488ae759082ea9b7e1f7656823fccc20',
  //   },
  //   tokenAddresses: {
  //     // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9',
  //     3: '0x94d9f606b8821921fd12279fc7e55976e4f43fac',
  //   },
  //   name: 'CROPS-ETH',
  //   symbol: 'CROPS-ETH UNI-V2 LP',
  //   tokenSymbol: 'CROPS',
  //   icon: '🥕',
  // },
  // {
  //   pid: 1,
  //   lpAddresses: {
  //     3: '0x0c78e1ea488ae759082ea9b7e1f7656823fccc20',
  //   },
  //   tokenAddresses: {
  //     // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9',
  //     3: '0x94d9f606b8821921fd12279fc7e55976e4f43fac',
  //   },
  //   name: 'CROPS-ETH',
  //   symbol: 'CROPS-ETH UNI-V2 LP',
  //   tokenSymbol: 'CROPS',
  //   icon: '🥕',
  // },
]
