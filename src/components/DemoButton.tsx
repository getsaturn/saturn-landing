'use client'

import { useCalendly } from '@/contexts/CalendlyContext'
import { cn } from '@/lib/utils'
import { buttonStyles } from '@/components/Button'

interface DemoButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: (e: React.MouseEvent) => void
}

export function DemoButton({ className, children, href, onClick, ...props }: DemoButtonProps) {
  const { openCalendly } = useCalendly()

  const classes = cn(buttonStyles, className)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openCalendly()
    if (onClick) {
      onClick(e)
    }
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={handleClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={handleClick} {...props}>
      {children}
    </button>
  )
}
