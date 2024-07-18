import { useContext } from 'react'
import { Context } from '../contexts/PlockProvider'

const usePlock = () => {
  const { plock } = useContext(Context)
  return plock
}

export default usePlock
