import { SVGIcon } from '@/assets/svgs'
import SvgIcon from '@/components/ui/svg-icon'
import React from 'react'

const contacts: { icon: SVGIcon; label: string; value: string }[] = [
  {
    icon: 'Mail',
    label: 'Our Mailbox',
    value: 'tdn352001@gmail.com',
  },
  {
    icon: 'Phone',
    label: 'Phone Number',
    value: '+84 123 456 789',
  },
  {
    icon: 'PinMap',
    label: 'Our Address',
    value: 'Thu Duc, Ho Chi Minh City, Viet Nam',
  },
]

const Contacts = () => {
  return (
    <div className="w-full py-5 flex flex-col items-center gap-5 lg:pt-14 lg:flex-row lg:justify-between">
      {contacts.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 md:gap-3"
          data-aos="fade-up"
          data-aos-delay={index * 50}
        >
          <SvgIcon icon={item.icon} size={24} />
          <span className="text-sm md:text-base">{item.value}</span>
          <span className="text-xs text-disabled md:text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default Contacts
