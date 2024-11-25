// Tremor ProgressBar [v0.0.3]

import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

import { cx } from '../../lib/utils'

const progressBarVariants = tv({
  slots: {
    background: '',
    bar: '',
  },
  variants: {
    variant: {
      default: {
        background: 'bg-blue-100 dark:bg-blue-400/30',
        bar: 'bg-blue-500 dark:bg-blue-400',
      },
      neutral: {
        background: 'bg-gray-100 dark:bg-gray-400/40',
        bar: 'bg-gray-400 dark:bg-gray-400',
      },
      warning: {
        background: 'bg-yellow-100 dark:bg-yellow-400/30',
        bar: 'bg-yellow-400 dark:bg-yellow-400',
      },
      cyan: {
        background: 'stroke-cyan-100 dark:stroke-cyan-400/30',
        circle: 'stroke-cyan-400 dark:stroke-cyan-400',
      },
      error: {
        background: 'bg-red-100 dark:bg-red-400/30',
        bar: 'bg-red-500 dark:bg-red-400',
      },
      success: {
        background: 'bg-emerald-100 dark:bg-emerald-400/30',
        bar: 'bg-emerald-400 dark:bg-emerald-400',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface ProgressBarProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof progressBarVariants> {
  value?: number
  max?: number
  showAnimation?: boolean
  label?: string
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value = 0,
      max = 100,
      label,
      showAnimation = false,
      variant,
      className,
      ...props
    }: ProgressBarProps,
    forwardedRef,
  ) => {
    const safeValue = Math.min(max, Math.max(value, 0))
    const { background, bar } = progressBarVariants({ variant })
    return (
      <div
        ref={forwardedRef}
        className={cx('flex w-full items-center shadow', className)}
        role='progressbar'
        aria-label='Progress bar'
        aria-valuenow={value}
        aria-valuemax={max}
        tremor-id='tremor-raw'
        {...props}
      >
        <div
          className={cx(
            'relative flex h-2 w-full items-center rounded-full',
            background(),
          )}
        >
          <div
            className={cx(
              'h-full flex-col rounded-full',
              bar(),
              showAnimation &&
                'transform-gpu transition-all duration-300 ease-in-out',
            )}
            style={{
              width: max ? `${(safeValue / max) * 100}%` : `${safeValue}%`,
            }}
          />
        </div>
        {label ? (
          <span
            className={cx(
              // base
              'ml-2 whitespace-nowrap text-sm font-medium leading-none',
              // text color
              'text-gray-900 dark:text-gray-50',
            )}
          >
            {label}
          </span>
        ) : null}
      </div>
    )
  },
)

ProgressBar.displayName = 'ProgressBar'

export { ProgressBar, progressBarVariants, type ProgressBarProps }