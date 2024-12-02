import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'
import { OrbitControls, Text, Box } from '@react-three/drei'

function RotatingCube() {
  const meshRef = useRef<Mesh>(null!)
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <Box ref={meshRef} args={[1, 1, 1]} scale={[1.5, 1.5, 1.5]}>
      <meshStandardMaterial color="#8b5cf6" />
    </Box>
  )
}

export default function ThreeDScene() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <RotatingCube />
        <Text
          position={[0, 2, 0]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          NeoGrid
        </Text>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

