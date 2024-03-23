import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, useGLTF } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export default function App() {
  return (
    <Suspense>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Logo />
        <Stars />
    </Canvas>
    </Suspense>
  )
}

function Logo() {
  const logoObject = useGLTF('./models/logo1.gltf')

  return (
    <group>
      <primitive
        object={logoObject.scene}
        scale={0.2}
        position={ [-2.5, 0, 2.5] }
        rotation-y={0.3} />
    </group>
  )
}

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20
    ref.current.rotation.y -= delta / 20
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#f3f6f4" size={0.01} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
