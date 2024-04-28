import { serverUrl } from '@/libs/constants/api'

export const getServerFile = (filePath: string) => {
  return `${serverUrl}/getFile?filePath=${filePath}`
}
