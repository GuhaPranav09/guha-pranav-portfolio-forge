import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function FloatingObjects() {
  const groupRef = useRef<THREE.Group>(null)
  const sphere1Ref = useRef<THREE.Mesh>(null)
  const sphere2Ref = useRef<THREE.Mesh>(null)
  const boxRef = useRef<THREE.Mesh>(null)
  const octahedronRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1
    }
    
    if (sphere1Ref.current) {
      sphere1Ref.current.position.y = Math.sin(time * 0.5) * 0.5
      sphere1Ref.current.rotation.x = time * 0.3
    }
    
    if (sphere2Ref.current) {
      sphere2Ref.current.position.y = Math.cos(time * 0.7) * 0.3
      sphere2Ref.current.rotation.z = time * 0.2
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.4
      boxRef.current.rotation.y = time * 0.2
    }
    
    if (octahedronRef.current) {
      octahedronRef.current.rotation.x = time * 0.6
      octahedronRef.current.position.y = Math.sin(time * 0.8) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main floating sphere */}
      <mesh ref={sphere1Ref} position={[-2, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#00bfff"
          roughness={0.2}
          metalness={0.8}
          emissive="#00bfff"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Secondary sphere */}
      <mesh ref={sphere2Ref} position={[2.5, 1, -1]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#9d4edd"
          roughness={0.3}
          metalness={0.7}
          emissive="#9d4edd"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Rotating box */}
      <mesh ref={boxRef} position={[0, -1.5, 1]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color="#50fa7b"
          roughness={0.4}
          metalness={0.6}
          emissive="#50fa7b"
          emissiveIntensity={0.05}
        />
      </mesh>
      
      {/* Octahedron */}
      <mesh ref={octahedronRef} position={[-1, 1.5, 1.5]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial
          color="#ff6b6b"
          roughness={0.2}
          metalness={0.9}
          emissive="#ff6b6b"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Ambient particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial
            color="#00bfff"
            emissive="#00bfff"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}