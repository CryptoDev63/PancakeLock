import { useCallback, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { AppDispatch, AppState } from '../index'
import { updateUserDarkMode } from './actions'

export function useIsDarkMode(): boolean {
  const { userDarkMode } = useSelector<AppState, { userDarkMode: boolean }>(
    ({ user: { userDarkMode } }) => ({userDarkMode})
  )
  return userDarkMode
}

export function useDarkModeManager(): [() => void] {
  const dispatch = useDispatch<AppDispatch>()
  const { userDarkMode } = useSelector<AppState, { userDarkMode: boolean }>(
    ({ user: { userDarkMode } }) => ({
      userDarkMode,
    })
  )

  const toggleSetDarkMode = useCallback(() => {
    dispatch(updateUserDarkMode({ userDarkMode: !userDarkMode }))
  }, [userDarkMode, dispatch])

  return [toggleSetDarkMode]
}