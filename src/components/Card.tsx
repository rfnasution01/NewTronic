import { cardVariants } from '@/libs/consts/variants/card'
import { VariantProps } from 'class-variance-authority'

export interface CardProps
  extends Omit<React.ComponentProps<'div'>, 'color'>,
    VariantProps<typeof cardVariants> {
  classes?: string
  idx?: number
}

export const Card = ({
  children,
  classes = '',
  variant,
  color,
  radius,
  idx,
  ...props
}: CardProps) => {
  return (
    <div
      className={`${cardVariants({ variant, color, radius })} ${classes}`}
      {...props}
      key={idx}
    >
      {children}
    </div>
  )
}
