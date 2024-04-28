import { routers } from '@/libs/constants/routers'

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
