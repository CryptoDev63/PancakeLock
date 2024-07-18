import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getStakingAddress = (plock) => {
  return plock && plock.stakingAddress
}

export const getPlockAddress = (plock) => {
  return plock && plock.plockAddress
}

export const getStakingContract = (plock) => {
  return plock && plock.contracts && plock.contracts.staking
}

export const getPlockContract = (plock) => {
  return plock && plock.contracts && plock.contracts.plock
}

export const getFarms = (plock) => {
  return plock
    ? plock.contracts.pools.map(
        ({
          pid,
          name,
          symbol,
          icon,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          lpAddress,
          lpContract,
        }) => ({
          pid,
          id: symbol,
          name,
          lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          earnToken: 'plock',
          earnTokenAddress: plock.contracts.plock.options.address,
          icon,
        }),
      )
    : []
}

export const getPoolWeight = async (stakingContract, pid) => {
  const { allocPoint } = await stakingContract.methods.poolInfo(pid).call()
  const totalAllocPoint = await stakingContract.methods
    .totalAllocPoint()
    .call()
  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (stakingContract, pid, account) => {
  return stakingContract.methods.pendingCrops(pid, account).call()
}

export const getTotalLPWethValue = async (
  stakingContract,
  wethContract,
  lpContract,
  tokenContract,
  pid,
) => {
  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that stakingContract owns
  const balance = await lpContract.methods
    .balanceOf(stakingContract.options.address)
    .call()
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  // Get total weth value for the lpContract = w1
  const lpContractWeth = await wethContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const lpWethWorth = new BigNumber(lpContractWeth)
  const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  const wethAmount = new BigNumber(lpContractWeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))
  return {
    tokenAmount,
    wethAmount,
    totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWeth: wethAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(stakingContract, pid),
  }
}

export const approve = async (lpContract, stakingContract, account) => {
  return lpContract.methods
    .approve(stakingContract, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const getPlockSupply = async (plock) => {
  return new BigNumber(await plock.contracts.plock.methods.totalSupply().call())
}

export const stake = async (stakingContract, pid, amount, account) => {
  return stakingContract.methods
    .stake(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const unstake = async (stakingContract, pid, amount, account) => {
  return stakingContract.methods
    .unStake(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const claim = async (stakingContract, pid, account) => {
  return stakingContract.methods
    .claim(
      pid,
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const getStaked = async (stakingContract, pid, account) => {
  try {
    const { amount } = await stakingContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const totalBurn = async (plock) => {
  try {

    console.log(plock.contracts.plock.methods.totalBurn())
    const state = await plock.contracts.plock.methods
      .totalBurn()
      .call()
      console.log(state)
    return true
  } catch {
    return false
  }
}

export const redeem = async (stakingContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return stakingContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}
