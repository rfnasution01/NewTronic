import { buttonVariants } from '@/libs/consts/variants/button'
import type { VariantProps } from 'class-variance-authority'
import ReactLoading from 'react-loading'

export interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'color'>,
    VariantProps<typeof buttonVariants> {
  classes?: string
  loading?: boolean
}

export const Button = ({
  classes = '',
  loading = false,
  variant,
  children,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      aria-disabled={disabled}
      className={`${buttonVariants({ variant })} ${classes}`}
      {...props}
    >
      {loading ? (
        <ReactLoading type="balls" width={24} height={24} color="#202223" />
      ) : (
        children
      )}
    </button>
  )
}
