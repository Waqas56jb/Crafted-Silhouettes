import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

// Positions/sizes are fractions of the current viewport so the composition
// stays proportional (and clear of the headline column) across every aspect
// ratio, from tall phones to ultrawide desktops.
function Blob({ xFrac, yFrac, sizeFrac, color, speed }) {
  const ref = useRef();

  useFrame((state) => {
    const { viewport, clock, pointer } = state;
    const t = clock.getElapsedTime();
    const targetX = xFrac * (viewport.width / 2);
    const targetY = yFrac * (viewport.height / 2);
    const targetScale = sizeFrac * viewport.width;

    ref.current.position.x = targetX + Math.sin(t * speed + pointer.y) * 0.15 * targetScale;
    ref.current.position.y = targetY + Math.cos(t * speed + pointer.x) * 0.12 * targetScale;
    ref.current.scale.setScalar(targetScale);
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.1;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          distort={0.45}
          speed={1.6}
          roughness={0.1}
          metalness={0.75}
          clearcoat={1}
          clearcoatRoughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function CameraRig() {
  useFrame((state) => {
    const { pointer, camera } = state;
    camera.position.x += (pointer.x * 0.45 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.3 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  const { viewport } = useThree();
  // Portrait / narrow screens: tuck the cluster into the right edge so it
  // never competes with the headline, which owns the left ~60% of width.
  const compact = viewport.width < viewport.height * 1.1;

  const layout = compact
    ? [
        { xFrac: 0.7, yFrac: 0.38, sizeFrac: 0.44, color: "#c9a464", speed: 0.5 },
        { xFrac: 0.76, yFrac: -0.3, sizeFrac: 0.28, color: "#f4f1ea", speed: 0.35 },
        { xFrac: 0.42, yFrac: -0.58, sizeFrac: 0.2, color: "#8a8a8f", speed: 0.6 },
      ]
    : [
        { xFrac: 0.62, yFrac: 0.22, sizeFrac: 0.34, color: "#c9a464", speed: 0.5 },
        { xFrac: 0.36, yFrac: -0.3, sizeFrac: 0.24, color: "#f4f1ea", speed: 0.35 },
        { xFrac: 0.52, yFrac: -0.55, sizeFrac: 0.16, color: "#8a8a8f", speed: 0.6 },
      ];

  return (
    <>
      <CameraRig />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 4]} intensity={1.3} />
      <pointLight position={[-3, -1.5, 2]} intensity={0.8} color="#c9a464" />
      <Suspense fallback={null}>
        {layout.map((b, i) => (
          <Blob key={i} {...b} />
        ))}
        <Sparkles
          count={70}
          scale={[viewport.width * 1.1, viewport.height * 1.1, 3]}
          size={2.2}
          speed={0.25}
          color="#dcc38f"
          opacity={0.55}
        />
        <Environment preset="city" />
      </Suspense>
      <EffectComposer multisampling={0}>
        <Bloom intensity={0.55} luminanceThreshold={0.3} luminanceSmoothing={0.9} mipmapBlur />
        <Vignette eskil={false} offset={0.22} darkness={0.65} />
      </EffectComposer>
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas dpr={[1, 1.8]} camera={{ position: [0, 0, 6], fov: 42 }} className="!absolute inset-0">
      <Scene />
    </Canvas>
  );
}
