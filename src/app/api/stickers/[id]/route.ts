import { postApi } from '@/libs/axios'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const stickerDetail = await postApi('https://diy-api.indivisualhub.com/client/v1/LoadResourceItemList', {
    sourGroupID: Number(id),
  })
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

  return Response.json(stickerDetail)
}
