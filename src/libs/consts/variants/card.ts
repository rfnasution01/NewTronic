import { cva } from 'class-variance-authority'

const variants = {
  outlined: ['bg-white', 'border'],
  light: ['bg-white', 'shadow-lg'],
  dark: ['bg-dark-tint-2', 'shadow-lg'],
}

const colors = {
  black: ['text-black', 'border-black'],
  gray: ['text-black', 'border-border'],
  warning: ['text-warning', 'border-warning'],
  success: ['text-success', 'border-success'],
  general: ['text-general', 'border-general'],
  error: ['text-[#e95050], border-[#e95050]'],
  light: ['text-black'],
  dark: ['text-white'],
}

const radius = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
}

export type CardVariants = keyof typeof variants
export type CardColors = keyof typeof colors
export type CardRadius = keyof typeof radius

export const cardVariants = cva('p-24', {
  variants: {
    variant: variants,
    color: colors,
    radius,
  },
  defaultVariants: {
    variant: 'outlined',
    color: 'black',
    radius: '2xl',
  },
})
