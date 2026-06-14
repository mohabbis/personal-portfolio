"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT = "#c6802a";
const INK = "#2b241c";
const CREAM = "#f3e8d8";

function AmbientCluster({ spin }: { spin: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!spin || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x += delta * 0.05;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.3, 0]} />
        <meshStandardMaterial color={CREAM} roughness={0.6} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.32, 0]} />
        <meshBasicMaterial color={INK} wireframe transparent opacity={0.18} />
      </mesh>
      <mesh position={[1.7, -0.6, -0.6]} rotation={[0.6, 0.3, 0]}>
        <torusGeometry args={[0.7, 0.16, 16, 48]} />
        <meshStandardMaterial color={ACCENT} roughness={0.35} metalness={0.15} />
      </mesh>
      <mesh position={[-1.6, 0.9, 0.4]}>
        <sphereGeometry args={[0.36, 24, 24]} />
        <meshStandardMaterial color={ACCENT} roughness={0.5} />
      </mesh>
    </group>
  );
}

export function PerspectivesAmbientScene() {
  const [mounted, setMounted] = useState(false);
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSpin(false);
    }
  }, []);

  return (
    <div
      role="img"
      aria-label="Slowly rotating abstract geometric forms"
      className="mt-8 h-56 w-full overflow-hidden rounded-[1.35rem] border border-border bg-card/40 sm:h-64"
    >
      {mounted ? (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5], fov: 40 }}
          gl={{ alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[4, 5, 6]} intensity={1.1} />
          <AmbientCluster spin={spin} />
        </Canvas>
      ) : null}
    </div>
  );
}
