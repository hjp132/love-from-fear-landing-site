import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <RotatingModel modelPath="./models/logo.obj" />
    </Canvas>
  );
}

const RotatingModel = ({ modelPath }) => {
  const obj = useLoader(OBJLoader, modelPath); // Load the .obj model
  const ref = useRef();

  // Apply rotation
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 20;
  });

  return <primitive object={obj} ref={ref} />;
};
