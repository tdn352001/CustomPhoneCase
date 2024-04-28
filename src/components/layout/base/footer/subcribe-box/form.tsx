'use client'

import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

const SubcribeForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }, [isSubmitted])

  return (
    <form
      className="w-full h-[10rem] px-3 py-5 flex flex-col gap-2 bg-base-footer bg-cover bg-no-repeat rounded-[1.25rem] md:h-[15.5rem] md:p-10 md:gap-8 lg:h-[17.5rem]"
      onSubmit={handleSubmitForm}
    >
      <h4 className="text-xl font-serif md:text-4xl lg:text-5xl">
        Subscribe our <br /> newsletter
      </h4>
      <div className="[--button-width:6.25rem] [--button-height:2rem] relative w-full max-w-[18.75rem] md:min-w-[25rem] lg:min-w-[32.5rem] lg:[--button-height:2.5rem]">
        <input
          className="w-full h-[calc(0.5rem+var(--button-height))] pl-3 pr-[calc(0.75rem+var(--button-width))] rounded-[2.5rem] border backdrop-blur-sm bg-transparent text-xs placeholder:text-disabled focus:outline-none lg:text-base lg:pl-4"
          ref={inputRef}
          placeholder="Email Address"
          type="email"
          required
        />
        <Button className="w-[--button-width] h-[--button-height] min-h-[--button-height] absolute top-1/2 right-1 -translate-y-1/2 smu:text-xs">
          Subcribe
        </Button>
      </div>
    </form>
  )
}

export default SubcribeForm
