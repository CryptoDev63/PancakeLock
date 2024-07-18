import { createReducer } from '@reduxjs/toolkit'
import { updateUserDarkMode } from './actions'

export interface UserState {
  userDarkMode: boolean // the user's choice for dark mode or light mode
}

export const initialState: UserState = {
  userDarkMode: false,
}

export default createReducer(initialState, builder =>
  builder
    .addCase(updateUserDarkMode, (state, action) => {
      state.userDarkMode = action.payload.userDarkMode
    })
)
