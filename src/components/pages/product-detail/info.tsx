'use client'

import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import SvgIcon from '@/components/ui/svg-icon'
import { phones } from '@/libs/constants/customize'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'

const ProductInfo = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (copied) {
      return false
    }

    navigator.clipboard.writeText('P0123456789')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="flex-1 lg:max-w-[32.5rem] flex-shrink-0">
      <div className="w-full flex flex-col">
        <div className="space-y-2 lg:space-y-3">
          <span className="block text-xs text-disabled whitespace-nowrap text-ellipsis lg:text-xl">
            Collection name
          </span>
          <h1 className="text-2xl font-serif lg:text-5xl">Phone case name</h1>
          <div className="flex items-center text-base gap-2">
            <span>SKU:</span>
            <span className="text-disabled">P0123456789</span>
            <button
              className="size-5 relative transition-colors hover:text-disabled"
              onClick={handleCopy}
              disabled={copied}
            >
              {copied ? <Check className="size-5 text-note-success" /> : <SvgIcon className="size-5" icon="Copy" />}
            </button>
          </div>
          <span className="block text-xl font-bold">$90 USD</span>
          <p className="text-xs text-disabled lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat
            sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
          </p>
        </div>
        <div className="mt-5 space-y-2">
          <span className="block text-xl">Select Device:</span>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="max-h-[20rem]">
              {phones.map((phone) => (
                <SelectItem key={phone.id} value={phone.id.toString()}>
                  {phone.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full mt-5 flex items-center gap-3 lg:mt-6">
          <Button className="flex-1" variant="outline">
            Custom
          </Button>
          <Button className="flex-[2]">Buy now</Button>
        </div>
        <p className="mt-2 text-sm italic text-note-error lg:text-base lg:mt-3">
          Note: Please copy the product code to purchase
        </p>
        <div className="mt-5 space-y-2 lg:mt-6">
          <div className="flex items-center gap-2 text-base ">
            <SvgIcon className="size-5" icon="Delivery" />
            <span>Estimated Delivery:</span>
            <span className="text-disabled">Within 5-7 days</span>
          </div>
          <div className="flex items-center gap-2 text-base ">
            <SvgIcon className="size-5" icon="ShoppingCart" />
            <span>Free shipping: </span>
            <span className="text-disabled">On orders over $199 and above</span>
          </div>
        </div>
        <Separator className="w-full h-px mt-2 lg:mt-4" />
        <div className="w-full py-3 flex items-center gap-2 lg:py-4">
          <span>Share:</span>
          <SvgIcon className="size-5 text-disabled hover:text-primary-02" icon="Facebook" />
          <SvgIcon className="size-5 text-disabled hover:text-primary-02" icon="Twitter" />
          <SvgIcon className="size-5 text-disabled hover:text-primary-02" icon="Instagram" />
        </div>
      </div>
    </div>
  )
}
export default ProductInfo
