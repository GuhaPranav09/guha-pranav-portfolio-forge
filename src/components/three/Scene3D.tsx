import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { FloatingObjects } from './FloatingObjects'

interface Scene3DProps {
  className?: string
}

export function Scene3D({ className }: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas>
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
      </Canvas>
    </div>
  )
}