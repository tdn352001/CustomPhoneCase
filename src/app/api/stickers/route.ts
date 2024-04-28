import { postApi } from '@/libs/axios'
import { cache } from 'react'

const getStickers = cache(async () => {
  return postApi('https://diy-api.indivisualhub.com/client/v1/LoadResourceGroupList')
    .then((res) => {
      console.log({ res })
      return {
        data: res[0]?.dataList ?? [],
      }
    })
    .catch(() => {
      return {
        data: [],
      }
    })
})

export const GET = async () => {
  const response = await getStickers()
  return Response.json(response)
}
