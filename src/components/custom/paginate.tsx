'use client'

import ReactPaginate from 'react-paginate'
import { cn } from '@/libs/utils/tw-merge'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import cx from 'clsx'

interface PaginateProps {
  className?: string
  pageCount: number
}

const linkClassnames = cx(
  'flex items-center justify-center size-6 rounded-sm text-primary-02 bg-transparent transition-all',
  'hover:text-primary-03 hover:bg-primary-02',
  'lg:size-9'
)

const activeClassnames = cx('!text-primary-03 !bg-primary-02')

const Paginate = ({ className, pageCount }: PaginateProps) => {
  return (
    <ReactPaginate
      className={cn('w-full flex items-center justify-center gap-0.5 lg:gap-1', className)}
      previousLinkClassName={linkClassnames}
      nextLinkClassName={linkClassnames}
      pageLinkClassName={linkClassnames}
      activeLinkClassName={activeClassnames}
      disabledLinkClassName="pointer-events-none opacity-40"
      pageCount={pageCount}
      previousLabel={<ChevronLeft className="size-4 lg:size-6" />}
      nextLabel={<ChevronRight className="size-4 lg:size-6" />}
    />
  )
}

export default Paginate
