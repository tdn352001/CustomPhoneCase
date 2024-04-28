import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import cx from 'clsx'
import { cn } from '@/libs/utils/tw-merge'

const buttonVariants = cva(
  cx(
    'inline-flex items-center justify-center gap-2 ',
    'whitespace-nowrap text-xl',
    'ring-offset-background rounded-[2.5rem]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-40'
  ),
  {
    variants: {
      variant: {
        primary: 'text-primary-01 bg-primary-02 relative transition-opacity btn-primary overflow-hidden',
        secondary: cx('text-primary-02 bg-transparent transition-all hover:text-disabled disabled:opacity-60'),
        text: 'text-disabled transtion-colors hover:text-primary-02 active:text-primary-02 active:opacity-90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',

        // The `default` variant is the default variant for the component.
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        // outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        // secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: cx('min-h-10 px-5 py-2'),
        unset: cx('w-auto h-auto'),
        icon: 'size-10',
        'icon-sm': 'size-8',

        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
