import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Box, Octahedron } from '@react-three/drei'
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
      <Sphere ref={sphere1Ref} args={[0.8, 32, 32]} position={[-2, 0, 0]}>
        <meshStandardMaterial
          color="#00bfff"
          roughness={0.2}
          metalness={0.8}
          emissive="#00bfff"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      {/* Secondary sphere */}
      <Sphere ref={sphere2Ref} args={[0.5, 32, 32]} position={[2.5, 1, -1]}>
        <meshStandardMaterial
          color="#9d4edd"
          roughness={0.3}
          metalness={0.7}
          emissive="#9d4edd"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      {/* Rotating box */}
      <Box ref={boxRef} args={[0.6, 0.6, 0.6]} position={[0, -1.5, 1]}>
        <meshStandardMaterial
          color="#50fa7b"
          roughness={0.4}
          metalness={0.6}
          emissive="#50fa7b"
          emissiveIntensity={0.05}
        />
      </Box>
      
      {/* Octahedron */}
      <Octahedron ref={octahedronRef} args={[0.4]} position={[-1, 1.5, 1.5]}>
        <meshStandardMaterial
          color="#ff6b6b"
          roughness={0.2}
          metalness={0.9}
          emissive="#ff6b6b"
          emissiveIntensity={0.1}
        />
      </Octahedron>
      
      {/* Ambient particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.02, 8, 8]}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <meshStandardMaterial
            color="#00bfff"
            emissive="#00bfff"
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  )
}