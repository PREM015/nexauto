import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

function generateSphere(count, minR, maxR) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = minR + Math.random() * (maxR - minR);
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
}

function ParticleLayer({ count, color, size, speed, minR, maxR }) {
  const ref = useRef();
  const positions = useMemo(() => generateSphere(count, minR, maxR), [count, minR, maxR]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * speed * 0.3;
      ref.current.rotation.y -= delta * speed * 0.2;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
}

function Particles() {
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Cyan — primary, sparse, medium dots */}
      <ParticleLayer count={250} color="#00E5FF" size={0.12} speed={0.3} minR={8} maxR={25} />
      {/* Amber — warm accent, fewer, slightly larger */}
      <ParticleLayer count={120} color="#FFB300" size={0.1} speed={0.2} minR={10} maxR={28} />
      {/* Violet — subtle depth, tiny dots far away */}
      <ParticleLayer count={150} color="#7C4DFF" size={0.08} speed={0.15} minR={12} maxR={30} />
      {/* White — star-like twinkle, very few, small */}
      <ParticleLayer count={80} color="#FFFFFF" size={0.06} speed={0.1} minR={14} maxR={32} />
    </group>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <Particles />
      </Canvas>
    </div>
  );
}

