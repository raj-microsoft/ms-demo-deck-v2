'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'
import { slides } from '@/data/slides'
import { useDeck } from '@/components/deck/use-deck'
import { Slide } from '@/components/deck/slide'
import { ProgressBar } from '@/components/deck/progress-bar'
import { SlideCounter } from '@/components/deck/slide-counter'
import { Navigation } from '@/components/deck/navigation'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const Background3D = dynamic(
  () => import('@/components/backgrounds').then((mod) => mod.Background3D),
  { ssr: false }
)

export function DeckShell() {
  const { currentSlide, totalSlides, next, prev, goTo, progress } = useDeck(slides.length)
  const [direction, setDirection] = useState(1)
  const touchStartX = useRef(0)

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1)
      next()
    }
  }, [currentSlide, totalSlides, next])

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      prev()
    }
  }, [currentSlide, prev])

  // Keyboard handling
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault()
          handleNext()
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          handlePrev()
          break
        case 'Home':
          e.preventDefault()
          setDirection(-1)
          goTo(0)
          break
        case 'End':
          e.preventDefault()
          setDirection(1)
          goTo(totalSlides - 1)
          break
        case 'f':
          if (!e.metaKey && !e.ctrlKey) {
            e.preventDefault()
            if (document.fullscreenElement) {
              document.exitFullscreen()
            } else {
              document.documentElement.requestFullscreen()
            }
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrev, goTo, totalSlides])

  // Touch / swipe handling
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNext()
        } else {
          handlePrev()
        }
      }
    },
    [handleNext, handlePrev]
  )

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-background"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Background3D type={slides[currentSlide].background} />
      </div>

      {/* Slide content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <Slide
            key={currentSlide}
            data={slides[currentSlide]}
            isActive={true}
            direction={direction}
          />
        </AnimatePresence>
      </div>

      {/* UI Controls */}
      <div className="relative z-20">
        <ProgressBar progress={progress} />
        <SlideCounter current={currentSlide + 1} total={totalSlides} />
        <Navigation
          onNext={handleNext}
          onPrev={handlePrev}
          current={currentSlide}
          total={totalSlides}
        />
        <div className="fixed right-4 top-4">
          <ThemeToggle />
        </div>
        <a
          href="https://ms-demo-deck-v2.azurestaticapps.net"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-black/50 hover:text-white"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          Live App
        </a>
      </div>
    </div>
  )
}
