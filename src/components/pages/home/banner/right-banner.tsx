import { Images } from '@/assets/images'
import Image from 'next/image'
import cx from 'clsx'
const metrics = [
  {
    value: 100,
    unit: '%',
    desc: 'Satisfaction Guaranteed',
    variant: 'primary',
  },
  { value: 60, unit: 'K+', desc: 'Exclusive products', variant: 'secondary' },
]

const RightBanner = () => {
  return (
    <div className="flex-shrink-0 flex flex-col gap-10 relative lg:flex-1">
      <Image
        className="block w-full h-[33.375rem] object-cover object-[45%] select-none pointer-events-none rounded-[1.25rem] border border-primary-02 md:h-auto md:aspect-video lg:h-full"
        src={Images.bannerRight}
        quality={100}
        alt="Banner"
        data-aos="fade-up"
        data-aos-once="true"
      />
      <div className="flex gap-5 lg:absolute lg:w-full lg:bottom-0 lg:translate-y-1/2 lg:justify-center lg:px-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={cx(
              'flex-1 px-2 py-3 flex flex-col items-start gap-2 rounded-[0.75rem] border border-primary-02 lg:p-5 lg:max-w-[13.125rem]',
              metric.variant === 'primary' && 'bg-black text-primary-03',
              metric.variant === 'secondary' && 'bg-primary-01 text-primary-02'
            )}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span className="text-4xl block font-serif whitespace-nowrap lg:text-5xl">
              <span>{metric.value}</span>
              {metric.unit}
            </span>
            <span className="text-sm block whitespace-nowrap lg:text-base">{metric.desc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightBanner
