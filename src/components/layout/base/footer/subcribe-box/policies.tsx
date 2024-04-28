import Link from 'next/link'
import React, { Fragment } from 'react'
import cx from 'clsx'
import { Separator } from '@/components/ui/separator'

const policies = [
  {
    name: 'Privacy Policy',
    href: '#',
  },
  {
    name: 'Terms of Service',
    href: '#',
  },
]

const Policies = () => {
  return (
    <div className="flex items-center justify-end gap-1 w-[13.125rem] bg-primary-03 self-end relative z-[5]">
      {policies.map((item, index) => {
        return (
          <Fragment key={index}>
            <Link
              className="block p-1 text-sm transition-opacity whitespace-nowrap hover:opacity-60"
              href={item.href}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {item.name}
            </Link>
            {index !== policies.length - 1 && (
              <Separator className="h-2.5" orientation="vertical" data-aos="fade-up" data-aos-delay={index * 50} />
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

export default Policies
