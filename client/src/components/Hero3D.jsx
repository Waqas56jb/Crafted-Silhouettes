import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";

function Blob({ position, scale, color, speed }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.x =
      position[0] + Math.sin(t * speed + state.pointer.y) * 0.3;
    ref.current.position.y =
      position[1] + Math.cos(t * speed + state.pointer.x) * 0.2;
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.1;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          distort={0.45}
          speed={1.6}
          roughness={0.15}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} />
      <Suspense fallback={null}>
        <Blob position={[1.6, 0.4, 0]} scale={1.6} color="#c9a464" speed={0.5} />
        <Blob position={[-1.8, -0.6, -1]} scale={1.1} color="#f4f1ea" speed={0.35} />
        <Blob position={[0.3, -1.2, -2]} scale={0.8} color="#8a8a8f" speed={0.6} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
