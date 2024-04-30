import { cn } from '@/libs/utils/tw-merge'
import { HTMLAttributes } from 'react'

const Title = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return <h1 className={cn('font-serif text-5xl text-center lg:text-6xl', className)} {...props} />
}

export default Title
