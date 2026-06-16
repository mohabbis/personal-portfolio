"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MARIGOLD = "#c6802a";
const AMBER = "#d99a3a";
const CREAM = "#f3e8d8";
const EDGE = "#b08a5a";

// Scattered cloud — the messy inputs.
const SCATTERED: [number, number, number][] = [
  [-1.7, 0.5, 0.2],
  [-0.4, 1.3, -0.5],
  [0.7, 0.4, 0.4],
  [1.8, 1.0, -0.3],
  [-1.2, -0.8, 0.5],
  [0.1, -1.2, -0.4],
  [1.4, -0.6, 0.3],
  [-1.9, -0.1, -0.6]
];

// Ordered 2x2x2 cube corners — the clean system it resolves into.
const S = 1.15;
const LATTICE: [number, number, number][] = [
  [-S, -S, -S],
  [S, -S, -S],
  [S, -S, S],
  [-S, -S, S],
  [-S, S, -S],
  [S, S, -S],
  [S, S, S],
  [-S, S, S]
];

const NODE_COLORS = [MARIGOLD, CREAM, AMBER, CREAM, CREAM, AMBER, MARIGOLD, CREAM];
const NODE_SCALES = [0.13, 0.1, 0.12, 0.09, 0.11, 0.1, 0.13, 0.1];

// The 12 edges of the cube.
const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7]
];

function easeInOut(x: number) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

// Loop: assemble into the cube, hold, disperse back to the cloud, hold.
function morphT(elapsed: number) {
  const period = 11;
  const p = (elapsed % period) / period;
  if (p < 0.35) return easeInOut(p / 0.35);
  if (p < 0.6) return 1;
  if (p < 0.95) return 1 - easeInOut((p - 0.6) / 0.35);
  return 0;
}

function LatticeMorph({ animate }: { animate: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);
  const edgeRefs = useRef<(THREE.LineSegments | null)[]>([]);
  const scattered = useMemo(() => SCATTERED.map((p) => new THREE.Vector3(...p)), []);
  const lattice = useMemo(() => LATTICE.map((p) => new THREE.Vector3(...p)), []);
  const tmp = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    const elapsed = clock.elapsedTime;
    const t = animate ? morphT(elapsed) : 1;

    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      tmp.lerpVectors(scattered[i], lattice[i], t);
      if (animate) {
        const drift = (1 - t) * 0.14;
        tmp.x += Math.sin(elapsed * 0.5 + i) * drift;
        tmp.y += Math.cos(elapsed * 0.4 + i * 1.3) * drift;
      }
      mesh.position.copy(tmp);
    });

    EDGES.forEach(([a, b], i) => {
      const line = edgeRefs.current[i];
      const ma = nodeRefs.current[a];
      const mb = nodeRefs.current[b];
      if (!line || !ma || !mb) return;
      const pos = line.geometry.attributes.position as THREE.BufferAttribute;
      pos.setXYZ(0, ma.position.x, ma.position.y, ma.position.z);
      pos.setXYZ(1, mb.position.x, mb.position.y, mb.position.z);
      pos.needsUpdate = true;
    });

    if (groupRef.current && animate) {
      groupRef.current.rotation.y += 0.0016;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.2, 0.5, 0]}>
      {EDGES.map(([a, b], i) => {
        const positions = new Float32Array([...LATTICE[a], ...LATTICE[b]]);
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
            <lineBasicMaterial color={EDGE} transparent opacity={0.42} />
          </lineSegments>
        );
      })}
      {SCATTERED.map((p, i) => (
        <mesh
          key={i}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          position={p}
        >
          <sphereGeometry args={[NODE_SCALES[i], 18, 18]} />
          <meshStandardMaterial color={NODE_COLORS[i]} roughness={0.45} emissive={NODE_COLORS[i]} emissiveIntensity={0.12} />
        </mesh>
      ))}
    </group>
  );
}

export function AmbientLattice() {
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimate(false);
    }
  }, []);

  return (
    <div
      role="img"
      aria-label="A scattered network of points that gathers into an ordered cube"
      className="h-56 w-full overflow-hidden rounded-[1.35rem] border border-foreground/[0.08] bg-card/40 shadow-soft sm:h-64"
    >
      {mounted ? (
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.2], fov: 42 }} gl={{ alpha: true }} style={{ background: "transparent" }}>
          <ambientLight intensity={0.95} />
          <directionalLight position={[4, 5, 6]} intensity={1.1} />
          <LatticeMorph animate={animate} />
        </Canvas>
      ) : null}
    </div>
  );
}
