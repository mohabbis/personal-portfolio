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
      <mesh castShadow position={[0, 2.4, 0]}>
        <torusGeometry args={[3, 0.13, 12, 32, Math.PI]} />
        <meshStandardMaterial color={WALL} />
      </mesh>
      {[-3, 3].map((x) => (
        <mesh key={x} castShadow position={[x, 1.2, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 2.4, 12]} />
          <meshStandardMaterial color={WALL} />
        </mesh>
      ))}
      <mesh position={[0, 4.7, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={1.6} toneMapped={false} />
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
        {/* Red guide rails, two rows down the tunnel floor */}
        {[-13.6, -10.4].map((x) =>
          Array.from({ length: 8 }, (_, i) => -13 + i * 3.7).map((z) => (
            <mesh key={`${x}-${z}`} position={[x, 0.2, z]}>
              <sphereGeometry args={[0.22, 16, 16]} />
              <meshStandardMaterial color={RED} roughness={0.4} />
            </mesh>
          ))
        )}
        {/* Brush roller pairs spaced down the tunnel */}
        {[-10, -2, 6].map((z) => (
          <group key={z}>
            <mesh position={[-14.4, 2.2, z]}>
              <cylinderGeometry args={[0.4, 0.4, 4.2, 16]} />
              <meshStandardMaterial color="#1f3a52" roughness={0.6} />
            </mesh>
            <mesh position={[-9.6, 2.2, z]}>
              <cylinderGeometry args={[0.4, 0.4, 4.2, 16]} />
              <meshStandardMaterial color="#1f3a52" roughness={0.6} />
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
          <meshStandardMaterial color="#1f3a52" roughness={0.6} />
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
      <color attach="background" args={["#0a0a0c"]} />
      <fog attach="fog" args={["#0a0a0c", 50, 116]} />

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
      <pointLight position={[-12, 4, -10]} intensity={16} color="#1f3a52" distance={16} />

      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
        <planeGeometry args={[110, 100]} />
        <meshStandardMaterial color="#0f0f11" />
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
