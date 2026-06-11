"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const NAVY = "#001b44";
const BLUE = "#4599c3";

const INFO_COPY: Record<string, { title: string; body: string }> = {
  logo: {
    title: "Primary sign",
    body: "Launch identity above the wash exit, the navy car under a light blue spray."
  },
  monument: {
    title: "Monument sign",
    body: "Roadside brand sign, sized to read from the street."
  },
  "vacuum-1": {
    title: "Vacuum bay",
    body: "Self serve vacuum for interior cleanup after the wash."
  },
  "vacuum-2": {
    title: "Vacuum bay",
    body: "Second island, spaced for easy pull through."
  },
  "vacuum-3": {
    title: "Vacuum bay",
    body: "Third bay, closing out the canopy lane."
  },
  tunnel: {
    title: "Wash tunnel",
    body: "Full length tunnel. Foam, rinse, heat dry, then out the rollover door."
  },
  dryer: {
    title: "Heat dryers",
    body: "High velocity heated air strips water before the exit."
  },
  car: {
    title: "Wash cycle",
    body: "Rolls in dirty, gets foamed and rinsed, heat dried, and exits clean."
  }
};

type SelectHandler = (id: string) => void;

/** Composes the sign face — navy field, "COMING SOON", white plate with the real brand logo. */
function useSignTexture() {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    let disposed = false;
    const img = new window.Image();
    img.src = "/images/projects/fancy-car-wash-logo.png";
    img.onload = () => {
      if (disposed) return;
      const canvas = document.createElement("canvas");
      canvas.width = 1000;
      canvas.height = 500;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = NAVY;
      ctx.fillRect(0, 0, 1000, 500);

      ctx.fillStyle = BLUE;
      ctx.font = "700 54px Arial";
      ctx.textAlign = "center";
      ctx.fillText("COMING SOON", 500, 70);

      const px = 30, py = 96, pw = 940, ph = 374, r = 24;
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

      const ratio = (img.naturalWidth || 1280) / (img.naturalHeight || 720);
      const pad = 14;
      let dh = ph - pad * 2;
      let dw = dh * ratio;
      if (dw > pw - pad * 2) {
        dw = pw - pad * 2;
        dh = dw / ratio;
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
        <meshStandardMaterial color={NAVY} />
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

/**
 * One long tunnel building: the dark street-facing end carries the sign and the
 * rollover exit door; the white wash section runs back from it, and the tunnel
 * itself is a real opening down the building's full length.
 */
function WashBuilding({ onSelect, texture }: { onSelect: SelectHandler; texture: THREE.CanvasTexture | null }) {
  return (
    <group>
      {/* Side walls — dark front segment */}
      {[-15.5, -6.5].map((x) => (
        <mesh key={`d${x}`} castShadow receiveShadow position={[x, 3.5, 10]}>
          <boxGeometry args={[1, 7, 8]} />
          <meshStandardMaterial color="#171f21" />
        </mesh>
      ))}
      {/* Side wall — white wash segment, solid on the far side */}
      <mesh castShadow receiveShadow position={[-15.5, 3.5, -8]}>
        <boxGeometry args={[1, 7, 28]} />
        <meshStandardMaterial color="#eef4f2" />
      </mesh>
      {/* Canopy-side wall is a glass curtain so the wash bay reads from outside */}
      <mesh castShadow receiveShadow position={[-6.5, 0.6, -8]}>
        <boxGeometry args={[1, 1.2, 28]} />
        <meshStandardMaterial color="#eef4f2" />
      </mesh>
      <mesh castShadow receiveShadow position={[-6.5, 6.2, -8]}>
        <boxGeometry args={[1, 1.6, 28]} />
        <meshStandardMaterial color="#eef4f2" />
      </mesh>
      <mesh position={[-6.5, 3.3, -8]}>
        <boxGeometry args={[0.25, 4.2, 27.6]} />
        <meshPhysicalMaterial color="#bfe6f0" transparent opacity={0.28} roughness={0.12} metalness={0} />
      </mesh>
      {[-20, -16, -12, -8, -4, 0, 4].map((z) => (
        <mesh key={z} castShadow position={[-6.5, 3.3, z]}>
          <boxGeometry args={[0.9, 4.2, 0.45]} />
          <meshStandardMaterial color="#eef4f2" />
        </mesh>
      ))}
      {/* Roof slabs */}
      <mesh castShadow position={[-11, 7.2, 10]}>
        <boxGeometry args={[11, 0.4, 8.4]} />
        <meshStandardMaterial color="#0a0f11" />
      </mesh>
      <mesh castShadow position={[-11, 7.2, -8]}>
        <boxGeometry args={[11, 0.4, 28.4]} />
        <meshStandardMaterial color="#d8e2e0" />
      </mesh>

      {/* Front face — pillars and header framing the garage door */}
      <mesh castShadow position={[-15, 3.5, 13.8]}>
        <boxGeometry args={[2, 7, 0.4]} />
        <meshStandardMaterial color="#171f21" />
      </mesh>
      <mesh castShadow position={[-7, 3.5, 13.8]}>
        <boxGeometry args={[2, 7, 0.4]} />
        <meshStandardMaterial color="#171f21" />
      </mesh>
      <mesh castShadow position={[-11, 6, 13.8]}>
        <boxGeometry args={[6, 2, 0.4]} />
        <meshStandardMaterial color="#11171a" />
      </mesh>

      {/* Rear face — tunnel entry at the back of the building */}
      <mesh castShadow position={[-15, 3.5, -21.8]}>
        <boxGeometry args={[2, 7, 0.4]} />
        <meshStandardMaterial color="#eef4f2" />
      </mesh>
      <mesh castShadow position={[-7, 3.5, -21.8]}>
        <boxGeometry args={[2, 7, 0.4]} />
        <meshStandardMaterial color="#eef4f2" />
      </mesh>
      <mesh castShadow position={[-11, 6, -21.8]}>
        <boxGeometry args={[6, 2, 0.4]} />
        <meshStandardMaterial color="#dde7e5" />
      </mesh>

      {/* Wash tunnel interior — clickable, runs the full building length */}
      <Hotspot id="tunnel" onSelect={onSelect}>
        <mesh position={[-11, 2.75, -4]}>
          <boxGeometry args={[8, 5.5, 36]} />
          <meshStandardMaterial transparent opacity={0} depthWrite={false} />
        </mesh>
        <mesh receiveShadow position={[-11, 0.06, -4]}>
          <boxGeometry args={[8, 0.08, 35.6]} />
          <meshStandardMaterial color="#0c1416" />
        </mesh>
        {/* Partially raised rollover door + tracks at the exit */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} castShadow position={[-11, 4.85 - i * 0.42, 13.6]}>
            <boxGeometry args={[5.9, 0.38, 0.18]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#2e3a3e" : "#263134"} metalness={0.4} roughness={0.5} />
          </mesh>
        ))}
        {[-13.9, -8.1].map((x) => (
          <mesh key={x} position={[x, 2.5, 13.6]}>
            <boxGeometry args={[0.18, 5, 0.12]} />
            <meshStandardMaterial color="#3a464a" metalness={0.5} roughness={0.45} />
          </mesh>
        ))}
        {/* Brush roller pairs spaced down the tunnel */}
        {[3, -2, -7, -12, -17].map((z) => (
          <group key={z}>
            <mesh position={[-13.6, 2.4, z]}>
              <cylinderGeometry args={[0.45, 0.45, 4.6, 16]} />
              <meshStandardMaterial color={BLUE} roughness={0.6} />
            </mesh>
            <mesh position={[-8.4, 2.4, z]}>
              <cylinderGeometry args={[0.45, 0.45, 4.6, 16]} />
              <meshStandardMaterial color={BLUE} roughness={0.6} />
            </mesh>
          </group>
        ))}
        {/* Overhead drum */}
        <mesh position={[-11, 4.6, 0.5]} rotation-z={Math.PI / 2}>
          <cylinderGeometry args={[0.45, 0.45, 4.4, 16]} />
          <meshStandardMaterial color={BLUE} roughness={0.6} />
        </mesh>
      </Hotspot>

      {/* Heat dryer towers near the tunnel exit */}
      <Hotspot id="dryer" onSelect={onSelect}>
        {[-13.5, -8.5].map((x) => (
          <mesh key={x} castShadow position={[x, 2.2, 7.5]}>
            <boxGeometry args={[0.9, 4.4, 1.2]} />
            <meshStandardMaterial color="#232c30" />
          </mesh>
        ))}
        {[-13.5, -8.5].map((x) => (
          <mesh key={`v${x}`} position={[x + (x < -11 ? 0.5 : -0.5), 2.6, 7.5]}>
            <boxGeometry args={[0.1, 1.6, 0.8]} />
            <meshStandardMaterial color="#ff9d45" emissive="#ff8a2a" emissiveIntensity={1.8} toneMapped={false} />
          </mesh>
        ))}
        <mesh position={[-11, 4.7, 7.5]}>
          <boxGeometry args={[6, 0.5, 1.2]} />
          <meshStandardMaterial color="#232c30" />
        </mesh>
        <mesh position={[-11, 4.38, 7.5]}>
          <boxGeometry args={[3, 0.12, 0.9]} />
          <meshStandardMaterial color="#ff9d45" emissive="#ff8a2a" emissiveIntensity={1.8} toneMapped={false} />
        </mesh>
      </Hotspot>

      {/* Primary brand sign above the tunnel exit */}
      <Hotspot id="logo" onSelect={onSelect}>
        <group position={[-11, 8.9, 12.5]}>
          <SignPanel width={8} height={4} texture={texture} />
        </group>
      </Hotspot>
    </group>
  );
}

/**
 * Car running the wash loop: enters the tunnel dirty at the rear, picks up
 * foam through the rollers, hits the heat dryers, and exits clean and glossy
 * through the rollover door before respawning.
 */
function AnimatedCar({ onSelect }: { onSelect: SelectHandler }) {
  const group = useRef<THREE.Group>(null);
  const body = useRef<THREE.MeshStandardMaterial>(null);
  const bubbles = useRef<THREE.Group>(null);
  const sparkles = useRef<THREE.Group>(null);
  const wheels = useRef<Array<THREE.Group | null>>([]);
  const dirty = useMemo(() => new THREE.Color("#6b6257"), []);
  const clean = useMemo(() => new THREE.Color("#16335f"), []);

  const bubbleSpots = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => [
        Math.sin(i * 2.1) * 1.3,
        1.1 + Math.sin(i * 3.7) * 0.6,
        Math.cos(i * 1.7) * 1.9
      ] as [number, number, number]),
    []
  );

  useFrame(({ clock }, delta) => {
    const loop = 16;
    const t = (clock.getElapsedTime() % loop) / loop;
    const z = -26 + t * 46;
    const g = group.current;
    if (!g) return;
    g.position.set(-11, 0, z);

    // Dirty-to-clean transition across the roller section
    const p = THREE.MathUtils.clamp((z + 18) / 16, 0, 1);
    if (body.current) {
      body.current.color.copy(dirty).lerp(clean, p);
      body.current.roughness = 0.85 - 0.6 * p;
      body.current.metalness = 0.1 + 0.5 * p;
    }

    const inWash = z > -19 && z < -3;
    if (bubbles.current) {
      bubbles.current.visible = inWash;
      bubbles.current.scale.setScalar(inWash ? 1 + 0.12 * Math.sin(clock.elapsedTime * 5) : 0.001);
    }
    if (sparkles.current) {
      sparkles.current.visible = z > 14;
      sparkles.current.rotation.y += delta * 2;
    }
    wheels.current.forEach((w) => {
      if (w) w.rotation.x += delta * 3;
    });
  });

  return (
    <Hotspot id="car" onSelect={onSelect}>
      <group ref={group} position={[-11, 0, -26]}>
        <mesh castShadow position={[0, 0.95, 0]}>
          <boxGeometry args={[2.5, 0.85, 4.6]} />
          <meshStandardMaterial ref={body} color="#6b6257" roughness={0.85} metalness={0.1} />
        </mesh>
        <mesh castShadow position={[0, 1.62, -0.3]}>
          <boxGeometry args={[2.2, 0.65, 2.3]} />
          <meshStandardMaterial color="#0e1c33" roughness={0.3} metalness={0.4} />
        </mesh>
        {([
          [-1.25, 1.55],
          [1.25, 1.55],
          [-1.25, -1.55],
          [1.25, -1.55]
        ] as Array<[number, number]>).map(([x, z], i) => (
          <group
            key={i}
            ref={(el) => {
              wheels.current[i] = el;
            }}
            position={[x, 0.48, z]}
          >
            <mesh rotation-z={Math.PI / 2}>
              <cylinderGeometry args={[0.45, 0.45, 0.32, 16]} />
              <meshStandardMaterial color="#10151a" roughness={0.9} />
            </mesh>
          </group>
        ))}
        {[-0.8, 0.8].map((x) => (
          <mesh key={x} position={[x, 0.95, 2.32]}>
            <boxGeometry args={[0.45, 0.2, 0.08]} />
            <meshStandardMaterial color="#ffe9b8" emissive="#ffd372" emissiveIntensity={1.4} toneMapped={false} />
          </mesh>
        ))}
        {/* Foam bubbles during the wash section */}
        <group ref={bubbles} visible={false}>
          {bubbleSpots.map((pos, i) => (
            <mesh key={i} position={pos}>
              <sphereGeometry args={[0.26 + (i % 3) * 0.09, 12, 12]} />
              <meshStandardMaterial color="#ffffff" transparent opacity={0.8} roughness={0.3} />
            </mesh>
          ))}
        </group>
        {/* Sparkles once it rolls out clean */}
        <group ref={sparkles} visible={false} position={[0, 2.4, 0]}>
          {[0, 1, 2, 3].map((i) => (
            <mesh
              key={i}
              position={[Math.sin((i * Math.PI) / 2) * 1.6, (i % 2) * 0.5, Math.cos((i * Math.PI) / 2) * 1.6]}
            >
              <octahedronGeometry args={[0.14]} />
              <meshStandardMaterial color="#ffffff" emissive="#bfeef9" emissiveIntensity={2} toneMapped={false} />
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
      <mesh castShadow position={[0, 0.55, 0]} scale={[1, 0.8, 1]}>
        <sphereGeometry args={[0.75, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.95} />
      </mesh>
      <mesh castShadow position={[0.6, 0.42, 0.25]} scale={[1, 0.75, 1]}>
        <sphereGeometry args={[0.55, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.95} />
      </mesh>
      <mesh castShadow position={[-0.55, 0.4, -0.2]} scale={[1, 0.7, 1]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.95} />
      </mesh>
    </group>
  );
}

function CanopyArch({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh castShadow position={[0, 2.4, 0]}>
        <torusGeometry args={[3, 0.13, 12, 32, Math.PI]} />
        <meshStandardMaterial color="#eff9f8" />
      </mesh>
      {[-3, 3].map((x) => (
        <mesh key={x} castShadow position={[x, 1.2, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 2.4, 12]} />
          <meshStandardMaterial color="#eff9f8" />
        </mesh>
      ))}
      <mesh position={[0, 4.7, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color="#f1d247" emissive="#f1d247" emissiveIntensity={1.6} toneMapped={false} />
      </mesh>
    </group>
  );
}

function VacuumStation({ position, id, onSelect }: { position: [number, number, number]; id: string; onSelect: SelectHandler }) {
  const hose = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.5, 1.9, 0),
        new THREE.Vector3(-1.4, 1.5, 0.25),
        new THREE.Vector3(-1.55, 0.4, 0.3)
      ]),
    []
  );

  return (
    <Hotspot id={id} onSelect={onSelect}>
      <group position={position}>
        <mesh castShadow position={[0, 1.1, 0]}>
          <boxGeometry args={[1.2, 2.2, 1.2]} />
          <meshStandardMaterial color="#0c1416" />
        </mesh>
        <mesh position={[0, 2.05, 0]}>
          <boxGeometry args={[1.25, 0.45, 1.25]} />
          <meshStandardMaterial color={BLUE} />
        </mesh>
        <mesh>
          <tubeGeometry args={[hose, 20, 0.09, 8]} />
          <meshStandardMaterial color="#1c2a2d" />
        </mesh>
        <mesh position={[-1.55, 0.25, 0.3]}>
          <cylinderGeometry args={[0.12, 0.16, 0.5, 10]} />
          <meshStandardMaterial color="#9aa3a1" />
        </mesh>
      </group>
    </Hotspot>
  );
}

function MonumentSign({ onSelect, texture }: { onSelect: SelectHandler; texture: THREE.CanvasTexture | null }) {
  return (
    <Hotspot id="monument" onSelect={onSelect}>
      <group position={[6, 0, 20]}>
        <mesh castShadow position={[0, 0.25, 0]}>
          <boxGeometry args={[2.6, 0.5, 1.2]} />
          <meshStandardMaterial color="#171f21" />
        </mesh>
        <mesh castShadow position={[0, 0.95, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.9, 12]} />
          <meshStandardMaterial color="#6a7374" />
        </mesh>
        <group position={[0, 2.9, 0]}>
          <SignPanel width={6} height={3} texture={texture} />
        </group>
      </group>
    </Hotspot>
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
    camera.position.copy(new THREE.Vector3(26, 15, 32).normalize().multiplyScalar(portrait ? 64 : 48));
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

function Scene({ onSelect, texture }: { onSelect: SelectHandler; texture: THREE.CanvasTexture | null }) {
  return (
    <>
      <color attach="background" args={["#06171b"]} />
      <fog attach="fog" args={["#06171b", 52, 120]} />

      <ambientLight intensity={0.85} />
      <hemisphereLight args={["#9fd4e0", "#0d1517", 0.55]} />
      <directionalLight
        castShadow
        position={[18, 24, 14]}
        intensity={1.4}
        color="#dff3f7"
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-35}
        shadow-camera-right={35}
        shadow-camera-top={35}
        shadow-camera-bottom={-35}
      />
      <directionalLight position={[-22, 14, -16]} intensity={0.55} color="#b9d8de" />
      {/* Tunnel interior glow */}
      <pointLight position={[-11, 4, 6]} intensity={18} color={BLUE} distance={16} />
      <pointLight position={[-11, 4, -10]} intensity={18} color={BLUE} distance={16} />

      {/* Ground + asphalt lot */}
      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
        <planeGeometry args={[110, 100]} />
        <meshStandardMaterial color="#0d1517" />
      </mesh>
      <mesh receiveShadow position={[0, 0.04, 0]}>
        <boxGeometry args={[64, 0.08, 52]} />
        <meshStandardMaterial color="#1a2324" />
      </mesh>

      {/* Parking stall lines in the front lot */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[-18 + i * 3.5, 0.1, 20]}>
          <boxGeometry args={[0.15, 0.02, 4]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.32} />
        </mesh>
      ))}

      <WashBuilding onSelect={onSelect} texture={texture} />
      <AnimatedCar onSelect={onSelect} />

      {/* Vacuum canopy lane along the white side of the building */}
      <group position={[-2, 0, -6]}>
        <mesh receiveShadow position={[0, 0.09, 0]}>
          <boxGeometry args={[9, 0.04, 24]} />
          <meshStandardMaterial color="#141d1f" />
        </mesh>
        {[10, 6, 2, -2, -6, -10].map((z) => (
          <CanopyArch key={z} position={[0, 0, z]} />
        ))}
        {[8, 0, -4].map((z, i) => (
          <VacuumStation key={z} position={[3.2, 0, z]} id={`vacuum-${i + 1}`} onSelect={onSelect} />
        ))}
      </group>

      <MonumentSign onSelect={onSelect} texture={texture} />

      {/* Landscape spheres along the building front, clear of the exit lane */}
      {([
        [-17.5, "#13191b"],
        [-15.5, "#eef4f2"],
        [-4.5, "#eef4f2"],
        [-2, "#9aa3a1"],
        [0.5, "#eef4f2"],
        [3, "#13191b"]
      ] as Array<[number, string]>).map(([x, c]) => (
        <mesh key={x} castShadow position={[x, 0.7, 16.2]}>
          <sphereGeometry args={[0.9, 24, 24]} />
          <meshStandardMaterial color={c} roughness={0.8} />
        </mesh>
      ))}

      {/* Bushes — greenery along the edges, reddish one at the building corner */}
      <Bush position={[-4.6, 0, 14.8]} color="#7a4448" scale={1.15} />
      <Bush position={[-18.5, 0, 15.5]} />
      <Bush position={[2.5, 0, 16.8]} scale={0.85} />
      <Bush position={[-19.5, 0, 6]} color="#2c452b" scale={1.25} />
      <Bush position={[-19, 0, -6]} scale={0.9} />
      <Bush position={[-18, 0, -17]} color="#2c452b" scale={1.1} />
      <Bush position={[4.5, 0, -16]} scale={1.0} />
      <Bush position={[6, 0, 6]} color="#2c452b" scale={0.85} />
      <Bush position={[12, 0, 22]} scale={1.05} />
      <Bush position={[-12, 0, 23]} color="#2c452b" scale={0.9} />

      {/* Utility poles at the back edge */}
      {([
        [-24, -14],
        [-21, -19],
        [-18, -23]
      ] as Array<[number, number]>).map(([x, z]) => (
        <group key={x} position={[x, 0, z]}>
          <mesh position={[0, 6, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 12, 8]} />
            <meshStandardMaterial color="#6a7374" />
          </mesh>
          <mesh position={[0, 10.5, 0]}>
            <boxGeometry args={[2.4, 0.18, 0.18]} />
            <meshStandardMaterial color="#6a7374" />
          </mesh>
        </group>
      ))}
    </>
  );
}

export function LocalBusinessSiteModel() {
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
    <div className="relative overflow-hidden rounded-[2rem] border border-[#67e8f9]/[0.16] bg-[#041014] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(103,232,249,0.18),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(6,182,212,0.10),transparent_42%)]" />
      <div className="relative space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Interactive property model</p>
            <h3 className="mt-3 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Fancy Car Wash site massing</h3>
          </div>
          <p className="max-w-xl text-sm font-light leading-6 text-white/50">A 3D architectural study of the launch-stage property: the full-length wash tunnel and rollover door, branded signage, vacuum canopy along the white side of the building, monument sign, landscaping, pavement, and utility edge. Orbit the site, and tap the signage, vacuums, or tunnel for details.</p>
        </div>
        <div
          role="img"
          aria-label="Interactive 3D model of the Fancy Car Wash property concept"
          className="relative h-[520px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#06171b] sm:h-[650px]"
        >
          {mounted ? (
            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ position: [26, 15, 32], fov: 42 }}
              className="touch-none"
              onPointerMissed={() => setActiveId(null)}
            >
              <ResponsiveCamera />
              <Scene onSelect={setActiveId} texture={texture} />
              <OrbitControls
                makeDefault
                target={[-6, 3, 0]}
                enablePan={false}
                minDistance={14}
                maxDistance={75}
                maxPolarAngle={Math.PI * 0.49}
                autoRotate={autoRotate}
                autoRotateSpeed={0.7}
                onStart={() => setAutoRotate(false)}
              />
            </Canvas>
          ) : null}
          <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/[0.08] bg-[#030c0f]/60 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/38 backdrop-blur-xl">Drag to orbit &middot; tap to inspect</div>
          {activeInfo ? (
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#67e8f9]/20 bg-[#030c0f]/85 p-4 backdrop-blur-xl sm:max-w-sm">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#67e8f9]">{activeInfo.title}</p>
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
