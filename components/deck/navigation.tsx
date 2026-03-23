'use client'

import { cn } from '@/lib/utils'

interface NavigationProps {
  onNext: () => void
  onPrev: () => void
  current: number
  total: number
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export function Navigation({ onNext, onPrev, current, total }: NavigationProps) {
  const isFirst = current === 0
  const isLast = current === total - 1

  return (
    <div className="fixed bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={cn(
          'rounded-full bg-foreground/10 p-2 backdrop-blur-sm transition-colors',
          'hover:bg-foreground/20',
          isFirst && 'cursor-not-allowed opacity-30'
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <span className="select-none text-xs text-muted-foreground/50">
        ← →
      </span>

      <button
        onClick={onNext}
        disabled={isLast}
        className={cn(
          'rounded-full bg-foreground/10 p-2 backdrop-blur-sm transition-colors',
          'hover:bg-foreground/20',
          isLast && 'cursor-not-allowed opacity-30'
        )}
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>
    </div>
  )
}
