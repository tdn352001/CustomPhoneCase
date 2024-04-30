import { Input } from '@/components/ui/input'
import { cn } from '@/libs/utils/tw-merge'
import { Search } from 'lucide-react'
import { forwardRef, InputHTMLAttributes } from 'react'

const SearchBox = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn('relative', className)}>
        <Input className="pr-10 shadow-none " ref={ref} {...props} />
        <Search className="absolute top-1/2 right-3 -translate-y-1/2 size-5 text-disabled" />
      </div>
    )
  }
)

SearchBox.displayName = 'SearchBox'

export default SearchBox
