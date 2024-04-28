import { cn } from '@/libs/utils/tw-merge'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-md bg-line', className)} {...props} />
}

export { Skeleton }
