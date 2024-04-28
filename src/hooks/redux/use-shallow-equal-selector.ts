import { useAppSelector } from '@/hooks/redux/use-app-selector'
import { RootState } from '@/store'
import { EqualityFn, shallowEqual } from 'react-redux'

type Selector<T> = (state: RootState) => T

export const useShallowEqualSelector = <TSelected>(
  selector: Selector<TSelected>,
  equalityFn?: EqualityFn<TSelected>
) => {
  return useAppSelector(selector, equalityFn ?? shallowEqual)
}
