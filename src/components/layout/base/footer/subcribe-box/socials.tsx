import { SVGIcon } from '@/assets/svgs'
import SvgIcon from '@/components/ui/svg-icon'

const socials: { icon: SVGIcon; href: string }[] = [
  {
    icon: 'Facebook',
    href: '#',
  },
  {
    icon: 'Instagram',
    href: '#',
  },
  {
    icon: 'Twitter',
    href: '#',
  },
]

const Socials = () => {
  return (
    <div className="flex items-center gap-2 w-[13.125rem] bg-primary-03">
      {socials.map((item, index) => {
        return (
          <a
            className="flex items-center justify-center gap-0.5 rounded-sm border border-primary-02 bg-primary-03 text-primary-02 transition-colors hover:text-primary-03 hover:bg-primary-02"
            key={index}
            href={item.href}
            aria-label={item.icon}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <SvgIcon className="text-[1.125rem] lg:text-[1.25rem]" icon={item.icon} />
          </a>
        )
      })}
    </div>
  )
}

export default Socials
