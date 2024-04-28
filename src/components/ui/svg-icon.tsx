import React from 'react'
import { SVGIcon, SVGIcons } from '@/assets/svgs'

type SvgIconProps = {
  icon: SVGIcon
  size?: number | string
} & React.SVGProps<SVGSVGElement>

const SvgIcon = (props: SvgIconProps) => {
  const { icon, size = 24, ...data } = props
  const Icon = SVGIcons[props.icon] as any

  if (Icon) {
    return <Icon fontSize={size} {...data} />
  }
}

export default SvgIcon
