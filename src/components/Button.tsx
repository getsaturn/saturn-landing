import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef } from 'react'

type ButtonAsButton = React.ComponentPropsWithoutRef<'button'> & {
  href?: never
}

type ButtonAsLink = React.ComponentPropsWithoutRef<typeof Link> & {
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

export const buttonStyles =
  'inline-flex justify-center cursor-pointer items-center rounded-md px-8 py-3 text-sm font-semibold text-white shadow-xs bg-blue-600 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors'

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({ className, ...props }, ref) => {
  const classes = cn(buttonStyles, className)

  if ('href' in props && props.href) {
    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...props}>
        {props.children}
      </Link>
    )
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps}>
      {buttonProps.children}
    </button>
  )
})

Button.displayName = 'Button'
