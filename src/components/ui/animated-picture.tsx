import { useState, useRef, useEffect } from 'react'

interface AnimatedPictureProps {
  src: string
  alt: string
  className?: string
}

export function AnimatedPicture({ src, alt, className = "" }: AnimatedPictureProps) {
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
      
      return () => {
        imageElement.removeEventListener('mousemove', handleMouseMove)
      }
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
      {/* Black and white base image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover filter grayscale transition-transform duration-300 hover:scale-105"
      />
      
      {/* Colored overlay that follows cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 40%, rgba(0, 0, 0, 1) 100%)`,
          backdropFilter: 'none'
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            mask: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 40%, transparent 100%)`,
            WebkitMask: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 40%, transparent 100%)`
          }}
        />
      </div>

      {/* Glow effect around cursor */}
      {isHovering && (
        <div
          className="absolute pointer-events-none transition-opacity duration-200"
          style={{
            left: mousePosition.x - 60,
            top: mousePosition.y - 60,
            width: 120,
            height: 120,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(10px)'
          }}
        />
      )}

      {/* Border glow */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20 shadow-2xl shadow-primary/10" />
    </div>
  )
}