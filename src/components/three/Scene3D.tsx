import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { FloatingObjects } from './FloatingObjects'
import { Suspense } from 'react'

interface Scene3DProps {
  className?: string
}

export function Scene3D({ className }: Scene3DProps) {
  console.log('Scene3D rendering...')
  
  return (
    <div className={className}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        onCreated={() => console.log('Canvas created successfully')}
        onError={(error) => console.error('Canvas error:', error)}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00bfff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9d4edd" />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* 3D Objects */}
          <FloatingObjects />
          
          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}