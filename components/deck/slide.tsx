'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { SlideData } from '@/data/slides'

interface SlideProps {
  data: SlideData
  isActive: boolean
  direction: number
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
}

const titleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
  },
}

const bulletContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export function Slide({ data, isActive, direction }: SlideProps) {
  if (!isActive) return null

  const accentColor = data.accent || 'hsl(217 91% 60%)'

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex h-screen w-screen flex-col items-center justify-center px-8 md:px-16"
    >
      {/* Title */}
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="gradient-text mb-4 text-center text-4xl font-bold md:text-6xl"
      >
        {data.title}
      </motion.h1>

      {/* Subtitle */}
      {data.subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mb-8 max-w-3xl text-center text-lg text-muted-foreground md:text-xl"
        >
          {data.subtitle}
        </motion.p>
      )}

      {/* Code block */}
      {data.code && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
          className="mb-6 w-full max-w-3xl"
        >
          <pre className="code-block">
            <code>{data.code}</code>
          </pre>
        </motion.div>
      )}

      {/* Bullets */}
      {data.bullets && data.bullets.length > 0 && (
        <motion.ul
          variants={bulletContainerVariants}
          initial="hidden"
          animate="visible"
          className={cn(
            'max-w-2xl space-y-3',
            data.code ? 'mt-2' : 'mt-4'
          )}
        >
          {data.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              variants={bulletVariants}
              className="flex items-start gap-3 text-base md:text-lg"
            >
              <span
                className="mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              <span className="text-foreground/90">{bullet}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}

      {/* Speaker note indicator */}
      {data.note && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-xs text-muted-foreground/50"
        >
          {data.note}
        </motion.p>
      )}
    </motion.div>
  )
}
