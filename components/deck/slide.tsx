'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { SlideData, SlideLayout } from '@/data/slides'

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

/* ---------- layout-specific image animation variants ---------- */

const imageVariants: Record<string, { hidden: object; visible: object }> = {
  center: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  'image-right': {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  'image-left': {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  'image-full': {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1 },
  },
  'image-top': {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
}

function SlideImage({
  src,
  alt,
  layout,
  accent,
}: {
  src: string
  alt: string
  layout: SlideLayout
  accent: string
}) {
  const [isHovered, setIsHovered] = useState(false)
  const variants = imageVariants[layout] || imageVariants.center

  const sizeClasses: Record<SlideLayout, string> = {
    center: 'max-h-48 md:max-h-64 w-auto max-w-full rounded-xl',
    'image-right': 'h-full w-full rounded-xl object-cover',
    'image-left': 'h-full w-full rounded-xl object-cover',
    'image-full': 'absolute inset-0 h-full w-full object-cover',
    'image-top': 'w-full max-h-40 md:max-h-52 object-cover rounded-xl',
  }

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden',
        layout === 'image-full' && 'absolute inset-0 z-0',
        layout === 'center' && 'mb-6 flex justify-center',
        layout === 'image-top' && 'mb-4 w-full max-w-3xl',
        (layout === 'image-left' || layout === 'image-right') &&
          'h-full w-full'
      )}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(sizeClasses[layout], 'select-none')}
        animate={{
          scale: isHovered ? 1.05 : 1,
          y: layout === 'image-full' ? (isHovered ? -4 : 0) : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          boxShadow: isHovered
            ? `0 8px 30px ${accent}33`
            : '0 4px 12px rgba(0,0,0,0.3)',
        }}
      />
      {/* gradient overlay for image-full layout */}
      {layout === 'image-full' && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      )}
    </motion.div>
  )
}

export function Slide({ data, isActive, direction }: SlideProps) {
  if (!isActive) return null

  const accentColor = data.accent || 'hsl(217 91% 60%)'
  const layout: SlideLayout = data.layout || 'center'
  const hasImage = !!data.image
  const isSplitLayout = layout === 'image-left' || layout === 'image-right'

  /* ---- image-full: background image with content overlaid ---- */
  if (hasImage && layout === 'image-full') {
    return (
      <motion.div
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden px-8 md:px-16"
      >
        <SlideImage
          src={data.image!}
          alt={data.imageAlt || data.title}
          layout={layout}
          accent={accentColor}
        />
        <div className="relative z-10 flex flex-col items-center">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="gradient-text mb-4 text-center text-4xl font-bold drop-shadow-lg md:text-6xl"
          >
            {data.title}
          </motion.h1>
          {data.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="mb-8 max-w-3xl text-center text-lg text-white/90 drop-shadow md:text-xl"
            >
              {data.subtitle}
            </motion.p>
          )}
          {data.bullets && data.bullets.length > 0 && (
            <motion.ul
              variants={bulletContainerVariants}
              initial="hidden"
              animate="visible"
              className="mt-4 max-w-2xl space-y-3"
            >
              {data.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  variants={bulletVariants}
                  className="flex items-start gap-3 text-base drop-shadow md:text-lg"
                >
                  <span
                    className="mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                  <span className="text-white/90">{bullet}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
          {data.note && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-xs text-white/40"
            >
              {data.note}
            </motion.p>
          )}
        </div>
      </motion.div>
    )
  }

  /* ---- split layouts: image-left / image-right ---- */
  if (hasImage && isSplitLayout) {
    const imagePanel = (
      <div className="relative hidden h-full w-2/5 flex-shrink-0 md:block">
        <SlideImage
          src={data.image!}
          alt={data.imageAlt || data.title}
          layout={layout}
          accent={accentColor}
        />
      </div>
    )

    const contentPanel = (
      <div className="flex w-full flex-col items-center justify-center px-6 md:w-3/5 md:items-start md:px-10">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="gradient-text mb-4 text-center text-3xl font-bold md:text-left md:text-5xl"
        >
          {data.title}
        </motion.h1>
        {data.subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="mb-6 max-w-xl text-center text-base text-muted-foreground md:text-left md:text-lg"
          >
            {data.subtitle}
          </motion.p>
        )}
        {data.code && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
            className="mb-4 w-full max-w-xl"
          >
            <pre className="code-block">
              <code>{data.code}</code>
            </pre>
          </motion.div>
        )}
        {data.bullets && data.bullets.length > 0 && (
          <motion.ul
            variants={bulletContainerVariants}
            initial="hidden"
            animate="visible"
            className={cn('max-w-xl space-y-2', data.code ? 'mt-1' : 'mt-2')}
          >
            {data.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                variants={bulletVariants}
                className="flex items-start gap-3 text-sm md:text-base"
              >
                <span
                  className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                <span className="text-foreground/90">{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
        {data.note && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-xs text-muted-foreground/50"
          >
            {data.note}
          </motion.p>
        )}
      </div>
    )

    return (
      <motion.div
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex h-screen w-screen flex-row items-stretch gap-0 overflow-hidden p-6 md:p-10"
      >
        {layout === 'image-left' ? (
          <>
            {imagePanel}
            {contentPanel}
          </>
        ) : (
          <>
            {contentPanel}
            {imagePanel}
          </>
        )}
      </motion.div>
    )
  }

  /* ---- center & image-top layouts (and fallback when no image) ---- */
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
      {/* image-top banner */}
      {hasImage && layout === 'image-top' && (
        <SlideImage
          src={data.image!}
          alt={data.imageAlt || data.title}
          layout={layout}
          accent={accentColor}
        />
      )}

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

      {/* center image */}
      {hasImage && layout === 'center' && (
        <SlideImage
          src={data.image!}
          alt={data.imageAlt || data.title}
          layout={layout}
          accent={accentColor}
        />
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
