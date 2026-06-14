"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT = "#c6802a";
const INK = "#2b241c";
const CREAM = "#f3e8d8";

const NODES: { position: [number, number, number]; color: string; scale: number }[] = [
  { position: [-1.6, 0.6, 0], color: ACCENT, scale: 0.14 },
  { position: [-0.5, 1.1, -0.4], color: CREAM, scale: 0.1 },
  { position: [0.6, 0.5, 0.3], color: ACCENT, scale: 0.12 },
  { position: [1.7, 0.9, -0.2], color: CREAM, scale: 0.09 },
  { position: [-1.1, -0.7, 0.4], color: CREAM, scale: 0.11 },
  { position: [0, -1.1, -0.3], color: ACCENT, scale: 0.1 },
  { position: [1.3, -0.5, 0.2], color: CREAM, scale: 0.13 },
  { position: [-1.9, -0.2, -0.5], color: ACCENT, scale: 0.08 }
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [4, 5],
  [5, 6],
  [2, 5],
  [4, 7],
  [0, 7],
  [1, 6]
];

function NodeNetwork({ spin }: { spin: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);
  const edgeRefs = useRef<(THREE.LineSegments | null)[]>([]);

  useFrame(({ clock }) => {
    const t = spin ? clock.elapsedTime : 0;

    NODES.forEach((node, i) => {
      const mesh = nodeRefs.current[i];
      if (!mesh) return;
      const phase = i * 0.9;
      mesh.position.set(
        node.position[0] + Math.sin(t * 0.4 + phase) * 0.18,
        node.position[1] + Math.cos(t * 0.32 + phase) * 0.18,
        node.position[2] + Math.sin(t * 0.26 + phase * 1.3) * 0.18
      );
    });

    EDGES.forEach(([a, b], i) => {
      const line = edgeRefs.current[i];
      const meshA = nodeRefs.current[a];
      const meshB = nodeRefs.current[b];
      if (!line || !meshA || !meshB) return;
      const positions = line.geometry.attributes.position as THREE.BufferAttribute;
      positions.setXYZ(0, meshA.position.x, meshA.position.y, meshA.position.z);
      positions.setXYZ(1, meshB.position.x, meshB.position.y, meshB.position.z);
      positions.needsUpdate = true;
    });

    if (groupRef.current && spin) {
      groupRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <group ref={groupRef}>
      {EDGES.map(([a, b], i) => {
        const start = NODES[a].position;
        const end = NODES[b].position;
        const positions = new Float32Array([...start, ...end]);
        return (
          <lineSegments
            key={`${a}-${b}`}
            ref={(el) => {
              edgeRefs.current[i] = el;
            }}
          >
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <lineBasicMaterial color={INK} transparent opacity={0.22} />
          </lineSegments>
        );
      })}
      {NODES.map((node, i) => (
        <mesh
          key={i}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          position={node.position}
        >
          <sphereGeometry args={[node.scale, 16, 16]} />
          <meshStandardMaterial color={node.color} roughness={0.5} />
        </mesh>
      ))}
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
      aria-label="A drifting network of small connected nodes"
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
          <NodeNetwork spin={spin} />
        </Canvas>
      ) : null}
    </div>
  );
}
