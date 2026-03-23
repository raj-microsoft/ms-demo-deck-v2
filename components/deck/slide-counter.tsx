'use client'

interface SlideCounterProps {
  current: number
  total: number
}

export function SlideCounter({ current, total }: SlideCounterProps) {
  return (
    <div className="fixed bottom-4 right-4 select-none text-sm text-muted-foreground/70">
      {current} / {total}
    </div>
  )
}
