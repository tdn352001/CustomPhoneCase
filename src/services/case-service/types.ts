import { getPhoneCasesSortOptions } from '@/libs/constants/api'
import { BaseQueryParams } from '@/libs/types'

type PhoneCase = {
  id: string
  name: string
  type: string
  desc: string
  price: number
  is_sold_out: boolean
  number_of_sold: number
  point: number
  drafts: any[]
  collection_id: string
  custom_id: string
  created_at: string
  updated_at: string
}

export type GetPhoneCasesSortOptions = (typeof getPhoneCasesSortOptions)[number]

export type GetPhoneCasesQueryParams = BaseQueryParams<GetPhoneCasesSortOptions>

export type GetPhoneCasesResponse = {
  data: {
    cases: PhoneCase[]
    total: number
  }
}
