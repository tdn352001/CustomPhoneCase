import { getApi } from '@/libs/axios'
import { GetPhoneCasesQueryParams, GetPhoneCasesResponse } from './types'

export * from './types'

const getPhoneCases = (params?: GetPhoneCasesQueryParams) => {
  return getApi<GetPhoneCasesResponse>('/case', {
    params,
  })
}

export const caseService = {
  getPhoneCases,
}
