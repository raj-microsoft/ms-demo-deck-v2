'use client'

import { useState, useCallback } from 'react'

interface UseDeckReturn {
  currentSlide: number
  totalSlides: number
  next: () => void
  prev: () => void
  goTo: (n: number) => void
  progress: number
}

export function useDeck(totalSlides: number): UseDeckReturn {
  const [currentSlide, setCurrentSlide] = useState(0)

  const clamp = useCallback(
    (n: number) => Math.max(0, Math.min(n, totalSlides - 1)),
    [totalSlides]
  )

  const next = useCallback(() => {
    setCurrentSlide((prev) => clamp(prev + 1))
  }, [clamp])

  const prev = useCallback(() => {
    setCurrentSlide((prev) => clamp(prev - 1))
  }, [clamp])

  const goTo = useCallback(
    (n: number) => {
      setCurrentSlide(clamp(n))
    },
    [clamp]
  )

  const progress = totalSlides <= 1 ? 1 : currentSlide / (totalSlides - 1)

  return { currentSlide, totalSlides, next, prev, goTo, progress }
}
