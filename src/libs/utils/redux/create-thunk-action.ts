import { AppDispatch, RootState } from '@/store'

type ThunkActionCallback<T = void, R = void> = (
  dispatch: AppDispatch,
  getState: () => RootState,
  payload: T
) => R

export const createThunkAction = <T = void, R = void>(callback: ThunkActionCallback<T, R>) => {
  return (payload: T) => {
    return (dispatch: AppDispatch, getState: () => RootState) => {
      return callback(dispatch, getState, payload)
    }
  }
}
