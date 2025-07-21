import { useState, useRef, useEffect } from 'react'

interface AnimatedPictureProps {
  src: string
  src2: string
  alt: string
  className?: string
}

export function AnimatedPicture({ src, src2, alt, className = "" }: AnimatedPictureProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
      }
    }

    const imageElement = imageRef.current
    if (imageElement) {
      imageElement.addEventListener('mousemove', handleMouseMove)
      return () => imageElement.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={imageRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ cursor: 'none' }}
    >
      {/* Grayscale base image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover hover:scale-105"
      />

      {/* Colored reveal circle — only that part becomes colored */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none"
        >
          <img
            src={src2}
            alt={alt}
            className="w-full h-full object-cover"
            style={{
              mask: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
              WebkitMask: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`
            }}
          />
        </div>
      )}

      {/* Border glow (unchanged) */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20 shadow-2xl shadow-primary/10" />
    </div>
  )
}
