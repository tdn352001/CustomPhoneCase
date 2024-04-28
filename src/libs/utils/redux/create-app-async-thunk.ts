import { AppDispatch, RootState } from '@/store'
import { AsyncThunk, AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit'

type AsyncThunkConfig = {
  state: RootState
  dispatch: AppDispatch
}

export const createAppAsyncThunk = <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, AsyncThunkConfig>
): AsyncThunk<Returned, ThunkArg, AsyncThunkConfig> => {
  return createAsyncThunk<Returned, ThunkArg>(typePrefix, payloadCreator)
}
