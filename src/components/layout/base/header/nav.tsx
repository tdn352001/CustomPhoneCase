'use client'
import { routers } from '@/libs/constants/routers'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/libs/utils/tw-merge'
import SvgIcon from '@/components/ui/svg-icon'

export const navItems = [
  {
    href: routers.home,
    label: 'Home',
  },
  {
    href: routers.products,
    label: 'Products',
  },
  {
    href: routers.customize,
    label: 'Customize',
    target: '_blank',
  },
  {
    href: routers.blog,
    label: 'Blog',
  },
  {
    href: routers.collections,
    label: 'Collections',
  },
]

interface HeaderNavProps {
  onItemClick?: () => void
}

const HeaderNav = ({ onItemClick }: HeaderNavProps) => {
  const pathname = usePathname()

  return (
    <nav className="w-full h-full flex flex-col lg:w-auto lg:flex-row lg:items-center">
      <ul className="w-full p-5 flex flex-col gap-1 border-b border-b-line lg:p-0 lg:flex-row lg:items-center lg:border-none lg:gap-5">
        {navItems.map((item, index) => {
          const active = item.href === routers.home ? pathname === item.href : pathname.includes(item.href)

          return (
            <li key={index} className="w-full lg:w-auto">
              <Link
                className={cn(
                  'block w-full px-3 py-2 bg-white rounded-xl transition-colors duration-200 text-xl text-disabled hover:text-primary-02 lg:rounded-3xl',
                  active && 'text-primary-03 bg-primary-02 hover:text-primary-03'
                )}
                href={item.href}
                target={item.target}
                onClick={onItemClick}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
      <Link
        className="flex items-center gap-3 text-base text-primary-02 m-5 px-5 py-0 h-9 rounded-xl border border-primary-02 lg:hidden"
        href={routers.wishlist}
        onClick={onItemClick}
      >
        <SvgIcon icon="Heart" />
        <span className="block text-xl">Wishlist</span>
      </Link>
    </nav>
  )
}

export default HeaderNav
