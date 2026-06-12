"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, OrbitControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const DARK = "#0c0c0e";
const GOLD = "#d99a3a";
const WALL = "#e2dac9";
const TRIM = "#16181c";
const RED = "#d6402c";
const WOOD = "#caa36c";

const INFO_COPY: Record<string, { title: string; body: string }> = {
  logo: {
    title: "Roof sign",
    body: "Brand sign above the entry, the gold car mark and Car Wash Guys wordmark."
  },
  monument: {
    title: "Monument sign",
    body: "Roadside sign sized to read from the street."
  },
  "vacuum-1": {
    title: "Vacuum bay",
    body: "Arched canopy bay for self serve vacuums and interior cleanup."
  },
  "vacuum-2": {
    title: "Vacuum bay",
    body: "Second arched bay, spaced for easy pull through."
  },
  tunnel: {
    title: "Wash tunnel",
    body: "Single story tunnel guided by red rollers, with brushes and a rollover exit door."
  },
  car: {
    title: "Wash cycle",
    body: "Rolls in along the red guides, gets washed and rinsed, and exits clean."
  }
};

type SelectHandler = (id: string) => void;

/** Composes the sign face: dark field, "NEW LOCATION COMING SOON", white plate with the brand mark. */
function useSignTexture() {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    let disposed = false;
    const img = new window.Image();
    img.src = "/images/projects/car-wash-guys-logo.svg";
    img.onload = () => {
      if (disposed) return;
      const canvas = document.createElement("canvas");
      canvas.width = 1000;
      canvas.height = 500;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = DARK;
      ctx.fillRect(0, 0, 1000, 500);

      ctx.fillStyle = GOLD;
      ctx.font = "700 50px Arial";
      ctx.textAlign = "center";
      ctx.fillText("NEW LOCATION COMING SOON", 500, 68);

      const px = 60, py = 96, pw = 880, ph = 360, r = 24;
      ctx.beginPath();
      ctx.moveTo(px + r, py);
      ctx.lineTo(px + pw - r, py);
      ctx.quadraticCurveTo(px + pw, py, px + pw, py + r);
      ctx.lineTo(px + pw, py + ph - r);
      ctx.quadraticCurveTo(px + pw, py + ph, px + pw - r, py + ph);
      ctx.lineTo(px + r, py + ph);
      ctx.quadraticCurveTo(px, py + ph, px, py + ph - r);
      ctx.lineTo(px, py + r);
      ctx.quadraticCurveTo(px, py, px + r, py);
      ctx.closePath();
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      const ratio = (img.naturalWidth || 3113.65) / (img.naturalHeight || 1690.15);
      const pad = 30;
      let dw = pw - pad * 2;
      let dh = dw / ratio;
      if (dh > ph - pad * 2) {
        dh = ph - pad * 2;
        dw = dh * ratio;
      }
      ctx.drawImage(img, px + (pw - dw) / 2, py + (ph - dh) / 2, dw, dh);

      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      setTexture(tex);
    };
    return () => {
      disposed = true;
    };
  }, []);

  return texture;
}

function Hotspot({ id, onSelect, children }: { id: string; onSelect: SelectHandler; children: ReactNode }) {
  return (
    <group
      onClick={(e) => {
        e.stopPropagation();
        onSelect(id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
      }}
    >
      {children}
    </group>
  );
}

function SignPanel({ width, height, texture }: { width: number; height: number; texture: THREE.CanvasTexture | null }) {
  return (
    <group>
      <mesh castShadow>
        <boxGeometry args={[width, height, 0.4]} />
        <meshStandardMaterial color={DARK} />
      </mesh>
      {texture ? (
        <>
          <mesh position={[0, 0, 0.21]}>
            <planeGeometry args={[width - 0.25, height - 0.25]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
          </mesh>
          <mesh position={[0, 0, -0.21]} rotation-y={Math.PI}>
            <planeGeometry args={[width - 0.25, height - 0.25]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
          </mesh>
        </>
      ) : null}
    </group>
  );
}

function CanopyArch({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Branded gold arch beam */}
      <mesh castShadow position={[0, 2.4, 0]}>
        <torusGeometry args={[3, 0.14, 12, 32, Math.PI]} />
        <meshStandardMaterial color={GOLD} metalness={0.4} roughness={0.45} />
      </mesh>
      {/* Dark steel posts */}
      {[-3, 3].map((x) => (
        <mesh key={x} castShadow position={[x, 1.2, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 2.4, 12]} />
          <meshStandardMaterial color="#1a1a1d" metalness={0.3} roughness={0.6} />
        </mesh>
      ))}
      <mesh position={[0, 4.7, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color="#ffe6ad" emissive={GOLD} emissiveIntensity={1.8} toneMapped={false} />
      </mesh>
    </group>
  );
}

function VacuumStation({ position, id, onSelect }: { position: [number, number, number]; id: string; onSelect: SelectHandler }) {
  const hose = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.5, 1.9, 0),
        new THREE.Vector3(1.4, 1.5, 0.25),
        new THREE.Vector3(1.55, 0.4, 0.3)
      ]),
    []
  );

  return (
    <Hotspot id={id} onSelect={onSelect}>
      <group position={position}>
        <mesh castShadow position={[0, 1.1, 0]}>
          <boxGeometry args={[1.2, 2.2, 1.2]} />
          <meshStandardMaterial color="#16191c" />
        </mesh>
        <mesh position={[0, 2.05, 0]}>
          <boxGeometry args={[1.25, 0.45, 1.25]} />
          <meshStandardMaterial color={GOLD} />
        </mesh>
        <mesh>
          <tubeGeometry args={[hose, 20, 0.09, 8]} />
          <meshStandardMaterial color="#1c2226" />
        </mesh>
        <mesh position={[1.55, 0.25, 0.3]}>
          <cylinderGeometry args={[0.12, 0.16, 0.5, 10]} />
          <meshStandardMaterial color="#9aa3a1" />
        </mesh>
      </group>
    </Hotspot>
  );
}

/** Piecewise keyframe sampler with smoothstep easing between stops. */
function sampleKeyframes(t: number, path: Array<[number, number]>) {
  for (let i = 1; i < path.length; i++) {
    if (t <= path[i][0]) {
      const [t0, z0] = path[i - 1];
      const [t1, z1] = path[i];
      const u = (t - t0) / (t1 - t0);
      const s = u * u * (3 - 2 * u);
      return z0 + (z1 - z0) * s;
    }
  }
  return path[path.length - 1][1];
}

const CAR_PATH: Array<[number, number]> = [
  [0, -19],
  [0.5, -3],
  [0.78, 10],
  [1, 19]
];

/** Sedan running the wash loop down the red-guided tunnel, picking up shine as it goes. */
function AnimatedCar({ onSelect }: { onSelect: SelectHandler }) {
  const group = useRef<THREE.Group>(null);
  const paint = useRef<THREE.MeshPhysicalMaterial>(null);
  const bubbles = useRef<THREE.Group>(null);
  const sparkles = useRef<THREE.Group>(null);
  const wheels = useRef<Array<THREE.Group | null>>([]);
  const dirty = useMemo(() => new THREE.Color("#5d564b"), []);
  const clean = useMemo(() => new THREE.Color("#9aa3a8"), []);

  const bubbleSpots = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => [
        Math.sin(i * 2.1) * 1.3,
        1.15 + Math.sin(i * 3.7) * 0.6,
        Math.cos(i * 1.7) * 1.9
      ] as [number, number, number]),
    []
  );

  useFrame(({ clock }, delta) => {
    const loop = 16;
    const t = (clock.getElapsedTime() % loop) / loop;
    const z = sampleKeyframes(t, CAR_PATH);
    const g = group.current;
    if (!g) return;

    const inWash = z > -14 && z < 4;
    g.position.set(-12, inWash ? Math.sin(clock.elapsedTime * 4) * 0.02 : 0, z);
    g.rotation.z = inWash ? Math.sin(clock.elapsedTime * 4) * 0.008 : 0;

    const p = THREE.MathUtils.clamp((z + 14) / 14, 0, 1);
    if (paint.current) {
      paint.current.color.copy(dirty).lerp(clean, p);
      paint.current.roughness = 0.7 - 0.5 * p;
      paint.current.metalness = 0.15 + 0.6 * p;
      paint.current.clearcoat = p;
    }

    if (bubbles.current) {
      bubbles.current.visible = inWash;
      bubbles.current.scale.setScalar(inWash ? 1 + 0.12 * Math.sin(clock.elapsedTime * 5) : 0.001);
    }
    if (sparkles.current) {
      sparkles.current.visible = z > 12;
      sparkles.current.rotation.y += delta * 2;
    }
    wheels.current.forEach((w) => {
      if (w) w.rotation.x += delta * 2.4;
    });
  });

  return (
    <Hotspot id="car" onSelect={onSelect}>
      <group ref={group} position={[-12, 0, -19]}>
        <RoundedBox castShadow args={[2.3, 0.5, 4.6]} radius={0.1} smoothness={4} position={[0, 0.6, 0]}>
          <meshStandardMaterial color="#15191c" roughness={0.8} />
        </RoundedBox>
        <RoundedBox castShadow args={[2.3, 0.8, 4.5]} radius={0.2} smoothness={4} position={[0, 1.1, 0]}>
          <meshPhysicalMaterial
            ref={paint}
            color="#5d564b"
            roughness={0.7}
            metalness={0.15}
            clearcoat={0}
            clearcoatRoughness={0.08}
          />
        </RoundedBox>
        <RoundedBox castShadow args={[2.1, 0.56, 2.9]} radius={0.16} smoothness={4} position={[0, 1.74, -0.2]}>
          <meshStandardMaterial color="#0a0f14" roughness={0.12} metalness={0.3} />
        </RoundedBox>
        {[-0.8, 0.8].map((x) => (
          <mesh key={x} position={[x, 1.22, 2.3]}>
            <boxGeometry args={[0.48, 0.12, 0.06]} />
            <meshStandardMaterial color="#eaf6ff" emissive="#dff1ff" emissiveIntensity={2.2} toneMapped={false} />
          </mesh>
        ))}
        <mesh position={[0, 1.26, -2.3]}>
          <boxGeometry args={[1.7, 0.1, 0.06]} />
          <meshStandardMaterial color={RED} emissive={RED} emissiveIntensity={1.6} toneMapped={false} />
        </mesh>
        {([
          [-1.18, 1.5],
          [1.18, 1.5],
          [-1.18, -1.5],
          [1.18, -1.5]
        ] as Array<[number, number]>).map(([x, z], i) => (
          <group
            key={i}
            ref={(el) => {
              wheels.current[i] = el;
            }}
            position={[x, 0.48, z]}
          >
            <mesh castShadow rotation-z={Math.PI / 2}>
              <cylinderGeometry args={[0.48, 0.48, 0.32, 28]} />
              <meshStandardMaterial color="#0e1216" roughness={0.9} />
            </mesh>
            <mesh rotation-z={Math.PI / 2}>
              <cylinderGeometry args={[0.27, 0.27, 0.34, 24]} />
              <meshStandardMaterial color="#c8ced2" roughness={0.25} metalness={0.9} />
            </mesh>
          </group>
        ))}
        <group ref={bubbles} visible={false}>
          {bubbleSpots.map((pos, i) => (
            <mesh key={i} position={pos}>
              <sphereGeometry args={[0.24 + (i % 3) * 0.08, 16, 16]} />
              <meshStandardMaterial color="#ffffff" transparent opacity={0.75} roughness={0.25} />
            </mesh>
          ))}
        </group>
        <group ref={sparkles} visible={false} position={[0, 2.4, 0]}>
          {[0, 1, 2, 3].map((i) => (
            <mesh
              key={i}
              position={[Math.sin((i * Math.PI) / 2) * 1.6, (i % 2) * 0.45, Math.cos((i * Math.PI) / 2) * 1.6]}
            >
              <octahedronGeometry args={[0.13]} />
              <meshStandardMaterial color="#ffffff" emissive={GOLD} emissiveIntensity={2} toneMapped={false} />
            </mesh>
          ))}
        </group>
      </group>
    </Hotspot>
  );
}

function Bush({ position, color = "#33502f", scale = 1 }: { position: [number, number, number]; color?: string; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow position={[0, 0.4, 0]} scale={[1, 0.75, 1]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.95} />
      </mesh>
      <mesh castShadow position={[0.42, 0.32, 0.18]} scale={[1, 0.7, 1]}>
        <sphereGeometry args={[0.38, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.95} />
      </mesh>
      <mesh castShadow position={[-0.4, 0.3, -0.15]} scale={[1, 0.65, 1]}>
        <sphereGeometry args={[0.34, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.95} />
      </mesh>
    </group>
  );
}

function MonumentSign({ onSelect, texture }: { onSelect: SelectHandler; texture: THREE.CanvasTexture | null }) {
  return (
    <Hotspot id="monument" onSelect={onSelect}>
      <group position={[10, 0, 12]}>
        <mesh castShadow position={[0, 0.25, 0]}>
          <boxGeometry args={[2.6, 0.5, 1.2]} />
          <meshStandardMaterial color={TRIM} />
        </mesh>
        <mesh castShadow position={[0, 0.95, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.9, 12]} />
          <meshStandardMaterial color="#6a7374" />
        </mesh>
        <group position={[0, 2.9, 0]}>
          <SignPanel width={6} height={3} texture={texture} />
        </group>
        {/* low iron fence in front of the sign */}
        {Array.from({ length: 9 }, (_, i) => -3.2 + i * 0.8).map((x) => (
          <mesh key={x} position={[x, 0.55, 1.3]}>
            <cylinderGeometry args={[0.03, 0.03, 1.1, 6]} />
            <meshStandardMaterial color="#1c1c1f" />
          </mesh>
        ))}
        <mesh position={[0, 1.05, 1.3]}>
          <boxGeometry args={[7.2, 0.05, 0.05]} />
          <meshStandardMaterial color="#1c1c1f" />
        </mesh>
      </group>
    </Hotspot>
  );
}

/**
 * Single story wash building: a long bay with red-guided tunnel running its length,
 * arched canopy bays for vacuums along the front, and a taller glass entry block
 * carrying the roof sign at one end.
 */
function WashBuilding({ onSelect, texture }: { onSelect: SelectHandler; texture: THREE.CanvasTexture | null }) {
  return (
    <group>
      {/* Main bay — hollow tunnel, open at both ends */}
      {[-16, -8].map((x) => (
        <mesh key={x} castShadow receiveShadow position={[x, 3, 0]}>
          <boxGeometry args={[0.4, 6, 32]} />
          <meshStandardMaterial color={WALL} />
        </mesh>
      ))}
      <mesh castShadow position={[-12, 6.2, 0]}>
        <boxGeometry args={[8.4, 0.4, 32.4]} />
        <meshStandardMaterial color={TRIM} />
      </mesh>
      {/* Lintel framing the rear tunnel mouth */}
      <mesh castShadow position={[-12, 5.5, -16.2]}>
        <boxGeometry args={[8, 1, 0.4]} />
        <meshStandardMaterial color="#dde0db" />
      </mesh>
      {/* Transom closing the roof step where the entry block meets the bay */}
      <mesh castShadow position={[-12, 8, 16.2]}>
        <boxGeometry args={[8, 4, 0.4]} />
        <meshStandardMaterial color={WALL} />
      </mesh>

      {/* Corner signage tower at the street end — masonry side walls */}
      {[-16.2, -7.8].map((x) => (
        <mesh key={x} castShadow receiveShadow position={[x, 5.5, 19]}>
          <boxGeometry args={[0.4, 11, 6]} />
          <meshStandardMaterial color={WALL} />
        </mesh>
      ))}
      {/* Mono-slope shed roof: low at the street, rising toward the bay */}
      <mesh castShadow position={[-12, 11.4, 19]} rotation-x={0.16}>
        <boxGeometry args={[8.8, 0.32, 6.6]} />
        <meshStandardMaterial color="#101216" roughness={0.35} metalness={0.45} />
      </mesh>
      {/* Warm wood soffit under the front overhang */}
      <mesh position={[-12, 11.0, 22.4]} rotation-x={Math.PI / 2 + 0.16}>
        <planeGeometry args={[8.4, 2.4]} />
        <meshStandardMaterial color={WOOD} roughness={0.85} />
      </mesh>
      {/* Black aluminum fascia wrapping the roof edge */}
      <mesh castShadow position={[-12, 10.7, 23.1]}>
        <boxGeometry args={[8.8, 1.0, 0.3]} />
        <meshStandardMaterial color="#101216" roughness={0.35} metalness={0.45} />
      </mesh>

      {/* Black MCM base panel + garage door at the street face */}
      <mesh castShadow position={[-12, 1.5, 22.05]}>
        <boxGeometry args={[7.6, 3, 0.3]} />
        <meshStandardMaterial color="#101216" />
      </mesh>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[-12, 0.6 + i * 0.78, 22.22]}>
          <boxGeometry args={[3.2, 0.7, 0.08]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#2a2d31" : "#212427"} metalness={0.4} roughness={0.5} />
        </mesh>
      ))}
      {/* Dark glass storefront above the base */}
      <mesh position={[-12, 6.4, 22.05]}>
        <boxGeometry args={[7.6, 6.2, 0.2]} />
        <meshPhysicalMaterial color="#0c1418" transparent opacity={0.82} roughness={0.08} metalness={0.2} />
      </mesh>
      {[-2.8, -0.93, 0.93, 2.8].map((x) => (
        <mesh key={x} position={[-12 + x, 6.4, 22.16]}>
          <boxGeometry args={[0.12, 6.2, 0.1]} />
          <meshStandardMaterial color={TRIM} />
        </mesh>
      ))}
      {[4.5, 6.4, 8.3].map((y) => (
        <mesh key={y} position={[-12, y, 22.16]}>
          <boxGeometry args={[7.6, 0.1, 0.1]} />
          <meshStandardMaterial color={TRIM} />
        </mesh>
      ))}

      {/* Primary sign band on the street face of the tower */}
      <Hotspot id="logo" onSelect={onSelect}>
        <group position={[-12, 9.7, 22.3]}>
          <SignPanel width={7.2} height={1.8} texture={texture} />
        </group>
      </Hotspot>
      {/* Second sign band wrapping the lot-facing side of the tower */}
      <Hotspot id="logo" onSelect={onSelect}>
        <group position={[-7.55, 9.4, 19]} rotation-y={Math.PI / 2}>
          <SignPanel width={5} height={1.8} texture={texture} />
        </group>
      </Hotspot>

      {/* Wash tunnel interior — clickable, runs the full bay */}
      <Hotspot id="tunnel" onSelect={onSelect}>
        <mesh position={[-12, 2.5, 0]}>
          <boxGeometry args={[7.6, 5, 31.6]} />
          <meshStandardMaterial transparent opacity={0} depthWrite={false} />
        </mesh>
        <mesh receiveShadow position={[-12, 0.06, 0]}>
          <boxGeometry args={[7.6, 0.08, 31.6]} />
          <meshStandardMaterial color="#13171a" />
        </mesh>
        {/* Gold floor guide rails, two rows down the tunnel floor */}
        {[-13.6, -10.4].map((x) =>
          Array.from({ length: 8 }, (_, i) => -13 + i * 3.7).map((z) => (
            <mesh key={`${x}-${z}`} position={[x, 0.2, z]}>
              <sphereGeometry args={[0.22, 16, 16]} />
              <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.5} roughness={0.4} />
            </mesh>
          ))
        )}
        {/* Brush roller pairs spaced down the tunnel — dark charcoal mitters */}
        {[-10, -2, 6].map((z) => (
          <group key={z}>
            <mesh position={[-14.4, 2.2, z]}>
              <cylinderGeometry args={[0.4, 0.4, 4.2, 16]} />
              <meshStandardMaterial color="#2a2c30" roughness={0.7} />
            </mesh>
            <mesh position={[-9.6, 2.2, z]}>
              <cylinderGeometry args={[0.4, 0.4, 4.2, 16]} />
              <meshStandardMaterial color="#2a2c30" roughness={0.7} />
            </mesh>
          </group>
        ))}
        {/* Partially raised rollover exit door at the +z end of the bay */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} castShadow position={[-12, 4.55 - i * 0.4, 15.6]}>
            <boxGeometry args={[5.8, 0.36, 0.16]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#2e3a3e" : "#263134"} metalness={0.4} roughness={0.5} />
          </mesh>
        ))}
        {/* Overhead drum */}
        <mesh position={[-12, 4.3, 2]} rotation-z={Math.PI / 2}>
          <cylinderGeometry args={[0.4, 0.4, 4, 16]} />
          <meshStandardMaterial color="#2a2c30" roughness={0.7} />
        </mesh>
      </Hotspot>

      {/* Arched canopy bays along the front of the building */}
      <group position={[-2.5, 0, -6]}>
        {[10, 4, -2, -8].map((z) => (
          <CanopyArch key={z} position={[0, 0, z]} />
        ))}
        <VacuumStation position={[3, 0, 7]} id="vacuum-1" onSelect={onSelect} />
        <VacuumStation position={[3, 0, -5]} id="vacuum-2" onSelect={onSelect} />
      </group>
    </group>
  );
}

function Worker({ position, rotation = 0, vest = "#e6ff44", hat = "#ff8a2a", armUp = false }: { position: [number, number, number]; rotation?: number; vest?: string; hat?: string; armUp?: boolean }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[-0.12, 0.45, 0]} castShadow><cylinderGeometry args={[0.09, 0.1, 0.9, 8]} /><meshStandardMaterial color="#1f2630" /></mesh>
      <mesh position={[0.12, 0.45, 0]} castShadow><cylinderGeometry args={[0.09, 0.1, 0.9, 8]} /><meshStandardMaterial color="#1f2630" /></mesh>
      <mesh position={[0, 1.15, 0]} castShadow><capsuleGeometry args={[0.22, 0.5, 4, 10]} /><meshStandardMaterial color={vest} roughness={0.8} /></mesh>
      <mesh position={[-0.3, armUp ? 1.5 : 1.12, armUp ? 0.18 : 0.04]} rotation={[armUp ? -1.1 : 0.2, 0, 0.25]} castShadow><capsuleGeometry args={[0.07, 0.5, 4, 8]} /><meshStandardMaterial color={vest} roughness={0.8} /></mesh>
      <mesh position={[0.3, 1.12, 0.04]} rotation={[0.2, 0, -0.25]} castShadow><capsuleGeometry args={[0.07, 0.5, 4, 8]} /><meshStandardMaterial color={vest} roughness={0.8} /></mesh>
      <mesh position={[0, 1.62, 0]} castShadow><sphereGeometry args={[0.16, 12, 12]} /><meshStandardMaterial color="#c79b73" /></mesh>
      <mesh position={[0, 1.71, 0]} castShadow><sphereGeometry args={[0.185, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color={hat} roughness={0.7} /></mesh>
    </group>
  );
}

function CarShell({ color }: { color: string }) {
  return (
    <>
      <mesh position={[0, 0.5, 0]} castShadow><boxGeometry args={[1.9, 0.55, 4.2]} /><meshStandardMaterial color={color} metalness={0.5} roughness={0.4} /></mesh>
      <mesh position={[0, 0.95, -0.2]} castShadow><boxGeometry args={[1.7, 0.55, 2.2]} /><meshStandardMaterial color={color} metalness={0.5} roughness={0.35} /></mesh>
      <mesh position={[0, 0.97, -0.2]}><boxGeometry args={[1.74, 0.42, 2.0]} /><meshStandardMaterial color="#0a0f14" roughness={0.1} metalness={0.3} /></mesh>
      <mesh position={[0, 0.6, 2.12]}><boxGeometry args={[1.4, 0.22, 0.05]} /><meshStandardMaterial color="#e8f2ff" emissive="#cfe6ff" emissiveIntensity={1.2} toneMapped={false} /></mesh>
      {([[-0.95, 1.4], [0.95, 1.4], [-0.95, -1.4], [0.95, -1.4]] as Array<[number, number]>).map(([x, z], i) => (
        <mesh key={i} position={[x, 0.32, z]} rotation={[0, 0, Math.PI / 2]} castShadow><cylinderGeometry args={[0.34, 0.34, 0.24, 16]} /><meshStandardMaterial color="#0e1216" roughness={0.9} /></mesh>
      ))}
    </>
  );
}

function ParkedCar({ position, rotation = 0, color = "#5a6470" }: { position: [number, number, number]; rotation?: number; color?: string }) {
  return <group position={position} rotation={[0, rotation, 0]}><CarShell color={color} /></group>;
}

/** Car driving by along the roadside lane (moves down the z axis). */
function DrivingCar({ xLane, dir, speed, color, offset = 0 }: { xLane: number; dir: number; speed: number; color: string; offset?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const span = 84;
    const p = (clock.getElapsedTime() * speed + offset) % span;
    ref.current.position.z = dir > 0 ? -42 + p : 42 - p;
  });
  return <group ref={ref} position={[xLane, 0, 0]} rotation={[0, dir > 0 ? 0 : Math.PI, 0]}><CarShell color={color} /></group>;
}

/** Leaning extension ladder for the sign technician. */
function Ladder({ position, rotation = 0, height = 8 }: { position: [number, number, number]; rotation?: number; height?: number }) {
  const rungs = Math.floor(height / 0.7);
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {[-0.32, 0.32].map((x) => (
        <mesh key={x} position={[x, height / 2, -height * 0.09]} rotation={[0.18, 0, 0]} castShadow><boxGeometry args={[0.08, height, 0.08]} /><meshStandardMaterial color="#c2ab3e" metalness={0.4} roughness={0.5} /></mesh>
      ))}
      {Array.from({ length: rungs }, (_, i) => i).map((i) => {
        const y = 0.5 + i * 0.7;
        return <mesh key={i} position={[0, y, -y * 0.18 + 0.72 * 0.18]}><boxGeometry args={[0.72, 0.05, 0.05]} /><meshStandardMaterial color="#c2ab3e" /></mesh>;
      })}
    </group>
  );
}

/** A vacuum hose run from a station to a car, held by a worker. */
function VacuumHoseToCar() {
  const hose = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 2.0, 0),
        new THREE.Vector3(-0.8, 1.4, 0.6),
        new THREE.Vector3(-1.6, 0.9, 1.2),
        new THREE.Vector3(-2.3, 1.1, 1.5)
      ]),
    []
  );
  return (
    <mesh>
      <tubeGeometry args={[hose, 24, 0.07, 8]} />
      <meshStandardMaterial color="#1c2226" />
    </mesh>
  );
}

/** Graduated dusk sky dome so the site sits in a real horizon instead of a void. */
function GradientSky({ top, horizon }: { top: string; horizon: string }) {
  const texture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 16;
    c.height = 256;
    const ctx = c.getContext("2d");
    if (!ctx) return null;
    const g = ctx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, top);
    g.addColorStop(0.62, horizon);
    g.addColorStop(1, horizon);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 16, 256);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, [top, horizon]);
  if (!texture) return null;
  return (
    <mesh>
      <sphereGeometry args={[220, 32, 16]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} fog={false} toneMapped={false} />
    </mesh>
  );
}

function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 1.5, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.2, 3, 7]} />
        <meshStandardMaterial color="#241c14" roughness={1} />
      </mesh>
      <mesh position={[0, 3.6, 0]} castShadow>
        <sphereGeometry args={[1.5, 12, 12]} />
        <meshStandardMaterial color="#1f3120" roughness={1} />
      </mesh>
      <mesh position={[0.8, 3.0, 0.3]} castShadow>
        <sphereGeometry args={[1.0, 12, 12]} />
        <meshStandardMaterial color="#1a2a1b" roughness={1} />
      </mesh>
      <mesh position={[-0.7, 3.2, -0.4]} castShadow>
        <sphereGeometry args={[1.05, 12, 12]} />
        <meshStandardMaterial color="#223420" roughness={1} />
      </mesh>
    </group>
  );
}

function GrassTuft({ position, color = "#26371f", scale = 1 }: { position: [number, number, number]; color?: string; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      {([
        [0, 0],
        [0.16, 0.1],
        [-0.14, 0.12],
        [0.05, -0.16]
      ] as Array<[number, number]>).map((p, i) => (
        <mesh key={i} position={[p[0], 0.32, p[1]]} rotation-z={(i - 1.5) * 0.12} castShadow>
          <coneGeometry args={[0.08, 0.7, 5]} />
          <meshStandardMaterial color={color} roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

function Wire({ a, b, sag = 1.1, color = "#0b0e0f" }: { a: [number, number, number]; b: [number, number, number]; sag?: number; color?: string }) {
  const geo = useMemo(() => {
    const mid = new THREE.Vector3((a[0] + b[0]) / 2, (a[1] + b[1]) / 2 - sag, (a[2] + b[2]) / 2);
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(...a), mid, new THREE.Vector3(...b));
    return new THREE.TubeGeometry(curve, 18, 0.03, 5, false);
  }, [a, b, sag]);
  return (
    <mesh geometry={geo}>
      <meshStandardMaterial color={color} roughness={0.9} />
    </mesh>
  );
}

function DistantSkyline({ color = "#1a1712" }: { color?: string }) {
  const blocks = useMemo(
    () =>
      ([
        [-46, 4, 16, 8],
        [-30, 3, 12, 6],
        [-16, 5, 10, 10],
        [-2, 3.5, 14, 7],
        [14, 4.5, 11, 9],
        [30, 3, 13, 6],
        [44, 5, 12, 10]
      ] as Array<[number, number, number, number]>),
    []
  );
  return (
    <group position={[0, 0, -52]}>
      {blocks.map(([x, h, w, d], i) => (
        <mesh key={i} position={[x, h / 2, (i % 2) * -4]}>
          <boxGeometry args={[w, h, d]} />
          <meshStandardMaterial color={color} roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

/** Utility pole with crossarm, matching the road edge in the reference photos. */
function UtilityPole({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 6, 0]}>
        <cylinderGeometry args={[0.15, 0.18, 12, 8]} />
        <meshStandardMaterial color="#3a342c" roughness={1} />
      </mesh>
      <mesh position={[0, 10.5, 0]}>
        <boxGeometry args={[2.4, 0.18, 0.18]} />
        <meshStandardMaterial color="#3a342c" roughness={1} />
      </mesh>
      <mesh position={[0.7, 9.4, 0.2]}>
        <boxGeometry args={[0.8, 1.4, 0.7]} />
        <meshStandardMaterial color="#4a4a4f" roughness={0.8} />
      </mesh>
    </group>
  );
}

/** Tall flagpole with a stylized US flag — a real feature of the road frontage. */
function FlagPole({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 6, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 12, 10]} />
        <meshStandardMaterial color="#b8bcc0" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, 11.6, 0]}>
        <sphereGeometry args={[0.16, 10, 10]} />
        <meshStandardMaterial color="#d9b44a" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Canton */}
      <mesh position={[0.7, 10.7, 0]}>
        <boxGeometry args={[1.0, 0.8, 0.04]} />
        <meshStandardMaterial color="#1c2a5e" roughness={0.9} />
      </mesh>
      {/* Stripes */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[1.45, 11.0 - i * 0.36, 0]}>
          <boxGeometry args={[2.5, 0.18, 0.04]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#b3322c" : "#e9e9ea"} roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

/** Pulls the camera back on narrow/portrait canvases so the full site stays in frame. */
function ResponsiveCamera() {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);

  useEffect(() => {
    const aspect = size.width / size.height;
    const portrait = aspect < 0.9;
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = portrait ? 55 : 42;
    }
    camera.position.copy(new THREE.Vector3(28, 16, 30).normalize().multiplyScalar(portrait ? 62 : 46));
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

function Scene({ onSelect, texture }: { onSelect: SelectHandler; texture: THREE.CanvasTexture | null }) {
  return (
    <>
      <color attach="background" args={["#11141d"]} />
      <fog attach="fog" args={["#241f17", 60, 150]} />
      <GradientSky top="#0f1320" horizon="#3a3225" />

      <Environment resolution={128} frames={1}>
        <Lightformer intensity={1.8} position={[10, 14, 8]} scale={[12, 10, 1]} color="#f6e8cf" />
        <Lightformer intensity={1.1} position={[-12, 10, -8]} scale={[10, 8, 1]} color="#d99a3a" />
        <Lightformer form="ring" intensity={0.7} position={[0, 6, 16]} scale={[14, 5, 1]} color="#f0c878" />
      </Environment>

      <ambientLight intensity={0.8} />
      <hemisphereLight args={["#e8c98a", "#0a0a0c", 0.5]} />
      <directionalLight
        castShadow
        position={[18, 24, 14]}
        intensity={1.4}
        color="#f6e8cf"
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-35}
        shadow-camera-right={35}
        shadow-camera-top={35}
        shadow-camera-bottom={-35}
      />
      <directionalLight position={[-22, 14, -16]} intensity={0.5} color="#d8c39a" />
      <pointLight position={[-12, 4, 6]} intensity={16} color={GOLD} distance={16} />
      <pointLight position={[-12, 4, -10]} intensity={14} color="#ffcaa0" distance={16} />

      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
        <planeGeometry args={[260, 240]} />
        <meshStandardMaterial color="#18241a" roughness={1} />
      </mesh>
      <mesh receiveShadow position={[0, 0.04, 0]}>
        <boxGeometry args={[64, 0.08, 52]} />
        <meshStandardMaterial color="#1b1b1e" />
      </mesh>

      {/* Parking stall lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[0 + i * 3.5, 0.1, 18]}>
          <boxGeometry args={[0.15, 0.02, 4]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
        </mesh>
      ))}

      <WashBuilding onSelect={onSelect} texture={texture} />
      <AnimatedCar onSelect={onSelect} />

      <MonumentSign onSelect={onSelect} texture={texture} />

      {/* Bushes along the fence near the monument sign and building front */}
      <Bush position={[7, 0, 9]} color="#2c452b" scale={0.9} />
      <Bush position={[8.6, 0, 9]} color="#33502f" scale={0.85} />
      <Bush position={[12, 0, 9]} color="#2c452b" scale={0.9} />
      <Bush position={[-16.5, 0, 14]} scale={1.1} />
      <Bush position={[-16, 0, -14]} color="#2c452b" scale={1.05} />
      <Bush position={[16, 0, -2]} scale={0.95} />

      {/* Distant commercial buildings across the road */}
      <DistantSkyline color="#1b1812" />

      {/* Tall flagpole at the road frontage */}
      <FlagPole position={[16, 0, 20]} />

      {/* Utility poles with strung power lines along the road edge */}
      <UtilityPole position={[20, 0, 8]} />
      <UtilityPole position={[22, 0, -8]} />
      <UtilityPole position={[24, 0, -22]} />
      <Wire a={[20, 10.5, 8]} b={[22, 10.5, -8]} />
      <Wire a={[20, 10.1, 8]} b={[22, 10.1, -8]} />
      <Wire a={[22, 10.5, -8]} b={[24, 10.5, -22]} />
      <Wire a={[22, 10.1, -8]} b={[24, 10.1, -22]} />

      {/* Tree line wrapping the back and sides of the lot */}
      {([
        [-34, -30], [-26, -34], [-16, -36], [-4, -37], [8, -36], [20, -34], [30, -30],
        [-32, -10], [-34, 8], [-30, 20], [22, 16], [28, 2]
      ] as Array<[number, number]>).map(([x, z], i) => (
        <Tree key={`t${i}`} position={[x, 0, z]} scale={1 + (i % 3) * 0.18} />
      ))}

      {/* Overgrown weeds along the grass strips and pavement cracks */}
      {([
        [-30, -24], [-26, 22], [22, -2], [14, 22], [-31, 0], [10, 26], [-8, 26],
        [18, -18], [-22, -28], [6, 22], [-3, 24], [-26, -2]
      ] as Array<[number, number]>).map(([x, z], i) => (
        <GrassTuft key={`g${i}`} position={[x, 0, z]} color={i % 3 === 0 ? "#2c3f22" : "#26371f"} scale={0.9 + (i % 4) * 0.22} />
      ))}

      {/* Roadside frontage — sidewalk, asphalt, lane lines, passing traffic on Washington Rd */}
      <mesh receiveShadow position={[27, 0.05, 0]}>
        <boxGeometry args={[3, 0.06, 120]} />
        <meshStandardMaterial color="#3c4042" roughness={1} />
      </mesh>
      <mesh receiveShadow position={[32, 0.04, 0]}>
        <boxGeometry args={[8, 0.08, 120]} />
        <meshStandardMaterial color="#14181a" roughness={1} />
      </mesh>
      {Array.from({ length: 22 }, (_, i) => -42 + i * 4).map((z) => (
        <mesh key={`ln${z}`} position={[32, 0.1, z]}>
          <boxGeometry args={[0.16, 0.02, 1.6]} />
          <meshStandardMaterial color="#c8a23a" transparent opacity={0.7} />
        </mesh>
      ))}
      <DrivingCar xLane={30.4} dir={1} speed={6} color="#8a95a0" offset={0} />
      <DrivingCar xLane={30.4} dir={1} speed={5.2} color="#3b4654" offset={34} />
      <DrivingCar xLane={33.6} dir={-1} speed={6.6} color="#9aa0a6" offset={18} />
      <DrivingCar xLane={33.6} dir={-1} speed={5.6} color="#6a4a3a" offset={56} />

      {/* A worker on a ladder wiring up the new sign light on the tower */}
      <Ladder position={[-13.4, 0, 23]} rotation={0} height={8.5} />
      <Worker position={[-13.4, 4.4, 22.4]} rotation={Math.PI} vest="#1c2a5e" hat="#d99a3a" armUp />
      <pointLight position={[-12, 9.7, 23]} intensity={6} color={GOLD} distance={8} />
      <mesh position={[-12.4, 6.4, 23.2]}>
        <sphereGeometry args={[0.12, 10, 10]} />
        <meshStandardMaterial color="#fff2cf" emissive={GOLD} emissiveIntensity={2.5} toneMapped={false} />
      </mesh>

      {/* Auto wash, but an attendant vacuums the interior for you at the canopy */}
      <ParkedCar position={[2.5, 0, 4]} rotation={0} color="#46505c" />
      <Worker position={[4.4, 0, 5.4]} rotation={-2.4} vest="#d99a3a" hat="#1c1c1f" />
      <group position={[2.5, 0, 4]}>
        <VacuumHoseToCar />
      </group>

      {/* Cars parked in the lot stalls */}
      <ParkedCar position={[6, 0, 19]} rotation={Math.PI / 2} color="#5a6470" />
      <ParkedCar position={[6, 0, 22]} rotation={Math.PI / 2} color="#7a8087" />
      <ParkedCar position={[2.5, 0, -10]} rotation={0} color="#3a4a5a" />

      {/* Construction crew on site during the remodel */}
      <Worker position={[-4, 0, 18]} rotation={2.4} vest="#ff7a3c" hat="#f5d23a" />
      <Worker position={[8, 0, 14]} rotation={-1.6} />
    </>
  );
}

export function CarWashGuysSiteModel() {
  const [mounted, setMounted] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const texture = useSignTexture();

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAutoRotate(false);
    }
  }, []);

  const activeInfo = activeId ? INFO_COPY[activeId] : null;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#d99a3a]/[0.18] bg-[#0a0a0c] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(217,154,58,0.16),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(217,154,58,0.08),transparent_42%)]" />
      <div className="relative space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#d99a3a]">Interactive property model</p>
            <h3 className="mt-3 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Car Wash Guys site massing</h3>
          </div>
          <p className="max-w-xl text-sm font-light leading-6 text-white/50">A 3D study of the new location: a single story wash bay with a red guided tunnel, arched vacuum canopies along the front, a glass entry block carrying the roof sign, and a roadside monument sign. Orbit the site, and tap the signage, vacuums, or tunnel for details.</p>
        </div>
        <div
          role="img"
          aria-label="Interactive 3D model of the Car Wash Guys property concept"
          className="relative h-[520px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0a0a0c] sm:h-[650px]"
        >
          {mounted ? (
            <Canvas
              shadows="soft"
              dpr={[1, 2]}
              camera={{ position: [28, 16, 30], fov: 42 }}
              className="touch-none"
              onPointerMissed={() => setActiveId(null)}
            >
              <ResponsiveCamera />
              <Scene onSelect={setActiveId} texture={texture} />
              <OrbitControls
                makeDefault
                target={[-8, 3, 0]}
                enablePan={false}
                enableDamping
                dampingFactor={0.08}
                minDistance={14}
                maxDistance={75}
                maxPolarAngle={Math.PI * 0.49}
                autoRotate={autoRotate}
                autoRotateSpeed={0.5}
                onStart={() => setAutoRotate(false)}
              />
            </Canvas>
          ) : null}
          <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/[0.08] bg-[#0a0a0c]/60 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/38 backdrop-blur-xl">Drag to orbit &middot; tap to inspect</div>
          {activeInfo ? (
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#d99a3a]/20 bg-[#0a0a0c]/85 p-4 backdrop-blur-xl sm:max-w-sm">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#d99a3a]">{activeInfo.title}</p>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  aria-label="Close"
                  className="text-white/40 transition-colors hover:text-white/80"
                >
                  &times;
                </button>
              </div>
              <p className="mt-2 text-sm font-light leading-6 text-white/65">{activeInfo.body}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
