import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useAppSearchParams = () => {
  const pathname = usePathname()
  const router = useRouter()

  const searchParams = useSearchParams()!

  return {
    ...searchParams,
    get: (name: string, defaultValue?: string) => {
      const value = searchParams.get(name)

      if (defaultValue && !value) {
        return defaultValue
      }

      return value
    },
    getString: (name: string, fallback = '') => {
      const value = searchParams.get(name)
      return value ?? fallback
    },
    getNumber: (name: string, condition?: (value: number) => boolean, fallback = 0) => {
      const value = searchParams.get(name)
      if (!value) {
        return fallback
      }
      const num = Number(value)

      if (condition && condition(num)) {
        return num
      }
      return Number.isNaN(num) ? fallback : num
    },
    update: (name: string, value: string | number) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()))
      params.set(name, value.toString())
      router.push(pathname + '?' + params.toString())
    },
    delete: (name: string, replace?: boolean) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()))
      params.delete(name)
      if (replace) {
        router.replace(pathname + '?' + params.toString())
      } else router.push(pathname + '?' + params.toString())
    },
    set: (name: string, value: string | number) => {
      const params = new URLSearchParams()
      params.set(name, value.toString())
      router.push(pathname + '?' + params.toString())
    },
  }
}
