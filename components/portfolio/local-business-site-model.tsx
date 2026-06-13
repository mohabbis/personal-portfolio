"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, OrbitControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const NAVY = "#001b44";
const BLUE = "#4599c3";

const INFO_COPY: Record<string, { title: string; body: string }> = {
  logo: { title: "Primary sign", body: "Opening soon identity above the wash exit, the navy car under a light blue spray." },
  monument: { title: "Monument sign", body: "Roadside opening soon sign, sized to read from the street." },
  "vacuum-1": { title: "Vacuum bay", body: "Self serve vacuum under the canopy walkway for interior cleanup after the wash." },
  "vacuum-2": { title: "Vacuum bay", body: "Second bay along the canopy, spaced for easy pull through." },
  "vacuum-3": { title: "Vacuum bay", body: "Third bay, centered along the covered walkway." },
  "vacuum-4": { title: "Vacuum bay", body: "Fourth bay, keeping the lane moving." },
  "vacuum-5": { title: "Vacuum bay", body: "Fifth bay, closing out the canopy lane." },
  tunnel: { title: "Wash tunnel", body: "Full length tunnel. Foam, rinse, heat dry, then out the rollover door." },
  dryer: { title: "Heat dryers", body: "High velocity heated air strips water before the exit." },
  car: { title: "Wash cycle", body: "Rolls in dirty, gets foamed and rinsed, heat dried, and exits clean." }
};

type SelectHandler = (id: string) => void;

function useSignTexture() {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    let disposed = false;
    const imagePaths = ["/images/projects/fancy-car-wash-logo.png", "/images/projects/fancy-car-wash-logo.svg"];

    const paintTexture = (img: HTMLImageElement | null) => {
      if (disposed) return;
      const canvas = document.createElement("canvas");
      canvas.width = 1000;
      canvas.height = 500;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = NAVY;
      ctx.fillRect(0, 0, 1000, 500);
      ctx.fillStyle = BLUE;
      ctx.font = "700 50px Arial";
      ctx.textAlign = "center";
      ctx.fillText("COMING SOON", 500, 64);

      const px = 30, py = 86, pw = 940, ph = 290, r = 24;
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

      if (img && img.naturalWidth > 0 && img.naturalHeight > 0) {
        const ratio = img.naturalWidth / img.naturalHeight;
        const pad = 18;
        let dh = ph - pad * 2;
        let dw = dh * ratio;
        if (dw > pw - pad * 2) {
          dw = pw - pad * 2;
          dh = dw / ratio;
        }
        ctx.drawImage(img, px + (pw - dw) / 2, py + (ph - dh) / 2, dw, dh);
      } else {
        ctx.fillStyle = NAVY;
        ctx.font = "900 80px Arial";
        ctx.fillText("FANCY", 500, 200);
        ctx.font = "900 58px Arial";
        ctx.fillText("CAR WASH", 500, 270);
      }

      ctx.fillStyle = BLUE;
      ctx.font = "700 56px Arial";
      ctx.fillText("CLEAN.  FAST.  FANCY.", 500, 450);

      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      tex.needsUpdate = true;
      setTexture(tex);
    };

    const loadAt = (index: number) => {
      if (index >= imagePaths.length) {
        paintTexture(null);
        return;
      }
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = () => paintTexture(img);
      img.onerror = () => loadAt(index + 1);
      img.src = imagePaths[index];
    };

    loadAt(0);
    return () => {
      disposed = true;
      setTexture((old) => {
        old?.dispose();
        return null;
      });
    };
  }, []);

  return texture;
}

function Hotspot({ id, onSelect, children }: { id: string; onSelect: SelectHandler; children: ReactNode }) {
  return (
    <group
      onClick={(e) => { e.stopPropagation(); onSelect(id); }}
      onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = "pointer"; }}
      onPointerOut={() => { document.body.style.cursor = "auto"; }}
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
          <mesh position={[0, 0, -0.21]} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[width - 0.25, height - 0.25]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
          </mesh>
        </>
      ) : null}
    </group>
  );
}

function WashBuilding({ onSelect, texture }: { onSelect: SelectHandler; texture: THREE.CanvasTexture | null }) {
  return (
    <group>
      {[-15.5, -6.5].map((x) => (<mesh key={`d${x}`} castShadow receiveShadow position={[x, 3.5, 10]}><boxGeometry args={[1, 7, 8]} /><meshStandardMaterial color="#171f21" /></mesh>))}
      <mesh castShadow receiveShadow position={[-15.5, 3.5, -8]}><boxGeometry args={[1, 7, 28]} /><meshStandardMaterial color="#eef4f2" /></mesh>
      <mesh castShadow receiveShadow position={[-6.5, 0.6, -8]}><boxGeometry args={[1, 1.2, 28]} /><meshStandardMaterial color="#eef4f2" /></mesh>
      <mesh castShadow receiveShadow position={[-6.5, 6.2, -8]}><boxGeometry args={[1, 1.6, 28]} /><meshStandardMaterial color="#eef4f2" /></mesh>
      <mesh position={[-6.5, 3.3, -8]}><boxGeometry args={[0.25, 4.2, 27.6]} /><meshPhysicalMaterial color="#bfe6f0" transparent opacity={0.28} roughness={0.12} /></mesh>
      {[-20, -16, -12, -8, -4, 0, 4].map((z) => (<mesh key={z} castShadow position={[-6.5, 3.3, z]}><boxGeometry args={[0.9, 4.2, 0.45]} /><meshStandardMaterial color="#eef4f2" /></mesh>))}
      <mesh castShadow position={[-11, 7.2, 10]}><boxGeometry args={[11, 0.4, 8.4]} /><meshStandardMaterial color="#0a0f11" /></mesh>
      <mesh castShadow position={[-11, 7.2, -8]}><boxGeometry args={[11, 0.4, 28.4]} /><meshStandardMaterial color="#d8e2e0" /></mesh>
      <mesh castShadow position={[-15, 3.5, 13.8]}><boxGeometry args={[2, 7, 0.4]} /><meshStandardMaterial color="#171f21" /></mesh>
      <mesh castShadow position={[-7, 3.5, 13.8]}><boxGeometry args={[2, 7, 0.4]} /><meshStandardMaterial color="#171f21" /></mesh>
      <mesh castShadow position={[-11, 6, 13.8]}><boxGeometry args={[6, 2, 0.4]} /><meshStandardMaterial color="#11171a" /></mesh>
      <mesh castShadow position={[-15, 3.5, -21.8]}><boxGeometry args={[2, 7, 0.4]} /><meshStandardMaterial color="#eef4f2" /></mesh>
      <mesh castShadow position={[-7, 3.5, -21.8]}><boxGeometry args={[2, 7, 0.4]} /><meshStandardMaterial color="#eef4f2" /></mesh>
      <mesh castShadow position={[-11, 6, -21.8]}><boxGeometry args={[6, 2, 0.4]} /><meshStandardMaterial color="#dde7e5" /></mesh>
      <Hotspot id="tunnel" onSelect={onSelect}>
        <mesh position={[-11, 2.75, -4]}><boxGeometry args={[8, 5.5, 36]} /><meshStandardMaterial transparent opacity={0} depthWrite={false} /></mesh>
        <mesh receiveShadow position={[-11, 0.06, -4]}><boxGeometry args={[8, 0.08, 35.6]} /><meshStandardMaterial color="#0c1416" /></mesh>
        {[0, 1, 2].map((i) => (<mesh key={i} castShadow position={[-11, 4.85 - i * 0.42, 13.6]}><boxGeometry args={[5.9, 0.38, 0.18]} /><meshStandardMaterial color={i % 2 === 0 ? "#2e3a3e" : "#263134"} metalness={0.4} roughness={0.5} /></mesh>))}
        {[-13.9, -8.1].map((x) => (<mesh key={x} position={[x, 2.5, 13.6]}><boxGeometry args={[0.18, 5, 0.12]} /><meshStandardMaterial color="#3a464a" metalness={0.5} roughness={0.45} /></mesh>))}
        {[3, -2, -7, -12, -17].map((z) => (<group key={z}><SpinningBrush position={[-12.7, 2.4, z]} speed={3 + (z % 3) * 0.4} /><SpinningBrush position={[-9.3, 2.4, z]} speed={3.4 - (z % 3) * 0.3} /></group>))}
        {[1, -6, -13].map((z) => (<FoamArch key={z} z={z} />))}
        <mesh position={[-11, 4.6, 0.5]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.45, 0.45, 4.4, 16]} /><meshStandardMaterial color={BLUE} roughness={0.6} /></mesh>
      </Hotspot>
      <Hotspot id="dryer" onSelect={onSelect}>
        {[-13.5, -8.5].map((x) => (<mesh key={x} castShadow position={[x, 2.2, 7.5]}><boxGeometry args={[0.9, 4.4, 1.2]} /><meshStandardMaterial color="#232c30" /></mesh>))}
        {[-13.5, -8.5].map((x) => (<mesh key={`v${x}`} position={[x + (x < -11 ? 0.5 : -0.5), 2.6, 7.5]}><boxGeometry args={[0.1, 1.6, 0.8]} /><meshStandardMaterial color="#ff9d45" emissive="#ff8a2a" emissiveIntensity={1.8} toneMapped={false} /></mesh>))}
        <mesh position={[-11, 4.7, 7.5]}><boxGeometry args={[6, 0.5, 1.2]} /><meshStandardMaterial color="#232c30" /></mesh>
        <mesh position={[-11, 4.38, 7.5]}><boxGeometry args={[3, 0.12, 0.9]} /><meshStandardMaterial color="#ff9d45" emissive="#ff8a2a" emissiveIntensity={1.8} toneMapped={false} /></mesh>
      </Hotspot>
      <Hotspot id="logo" onSelect={onSelect}><group position={[-11, 8.9, 12.5]}><SignPanel width={8} height={4} texture={texture} /></group></Hotspot>
    </group>
  );
}

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

const CAR_PATH: Array<[number, number]> = [[0, -26], [0.5, -4], [0.78, 12], [1, 20]];

function AnimatedCar({ onSelect }: { onSelect: SelectHandler }) {
  const group = useRef<THREE.Group>(null);
  const paint = useRef<THREE.MeshPhysicalMaterial>(null);
  const bubbles = useRef<THREE.Group>(null);
  const sparkles = useRef<THREE.Group>(null);
  const wheels = useRef<Array<THREE.Group | null>>([]);
  const dirty = useMemo(() => new THREE.Color("#5d564b"), []);
  const clean = useMemo(() => new THREE.Color("#10264f"), []);
  const bubbleSpots = useMemo(() => Array.from({ length: 11 }, (_, i) => [Math.sin(i * 2.1) * 1.35, 1.2 + Math.sin(i * 3.7) * 0.65, Math.cos(i * 1.7) * 2.0] as [number, number, number]), []);

  useFrame(({ clock }, delta) => {
    const t = (clock.getElapsedTime() % 18) / 18;
    const z = sampleKeyframes(t, CAR_PATH);
    const g = group.current;
    if (!g) return;
    const inWash = z > -19 && z < -3;
    g.position.set(-11, inWash ? Math.sin(clock.elapsedTime * 4) * 0.02 : 0, z);
    g.rotation.z = inWash ? Math.sin(clock.elapsedTime * 4) * 0.008 : 0;
    const p = THREE.MathUtils.clamp((z + 18) / 16, 0, 1);
    if (paint.current) {
      paint.current.color.copy(dirty).lerp(clean, p);
      paint.current.roughness = 0.7 - 0.55 * p;
      paint.current.metalness = 0.15 + 0.65 * p;
      paint.current.clearcoat = p;
    }
    if (bubbles.current) {
      bubbles.current.visible = inWash;
      bubbles.current.scale.setScalar(inWash ? 1 + 0.12 * Math.sin(clock.elapsedTime * 5) : 0.001);
    }
    if (sparkles.current) {
      sparkles.current.visible = z > 14;
      sparkles.current.rotation.y += delta * 2;
    }
    wheels.current.forEach((w) => { if (w) w.rotation.x += delta * 2.4; });
  });

  return (
    <Hotspot id="car" onSelect={onSelect}>
      <group ref={group} position={[-11, 0, -26]}>
        <RoundedBox castShadow args={[2.5, 0.55, 4.9]} radius={0.12} smoothness={4} position={[0, 0.66, 0]}><meshStandardMaterial color="#15191c" roughness={0.8} /></RoundedBox>
        <RoundedBox castShadow args={[2.5, 0.85, 4.85]} radius={0.22} smoothness={4} position={[0, 1.22, 0]}><meshPhysicalMaterial ref={paint} color="#5d564b" roughness={0.7} metalness={0.15} clearcoat={0} clearcoatRoughness={0.08} /></RoundedBox>
        <RoundedBox castShadow args={[2.3, 0.62, 3.2]} radius={0.18} smoothness={4} position={[0, 1.92, -0.25]}><meshStandardMaterial color="#0a0f14" roughness={0.12} metalness={0.3} /></RoundedBox>
        <RoundedBox args={[2.26, 0.12, 3.1]} radius={0.05} smoothness={4} position={[0, 2.28, -0.25]}><meshStandardMaterial color="#0c0f12" roughness={0.4} /></RoundedBox>
        <mesh position={[0, 1.22, 2.44]}><boxGeometry args={[1.4, 0.32, 0.06]} /><meshStandardMaterial color="#1a2126" roughness={0.35} metalness={0.7} /></mesh>
        {[-0.85, 0.85].map((x) => (<mesh key={x} position={[x, 1.34, 2.45]}><boxGeometry args={[0.52, 0.13, 0.06]} /><meshStandardMaterial color="#eaf6ff" emissive="#dff1ff" emissiveIntensity={2.2} toneMapped={false} /></mesh>))}
        <mesh position={[0, 1.38, -2.44]}><boxGeometry args={[1.85, 0.11, 0.06]} /><meshStandardMaterial color="#ff3b30" emissive="#ff2419" emissiveIntensity={1.6} toneMapped={false} /></mesh>
        {([[-1.27, 1.6], [1.27, 1.6], [-1.27, -1.6], [1.27, -1.6]] as Array<[number, number]>).map(([x, z], i) => (<group key={i} ref={(el) => { wheels.current[i] = el; }} position={[x, 0.52, z]}><mesh castShadow rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.52, 0.52, 0.34, 28]} /><meshStandardMaterial color="#0e1216" roughness={0.9} /></mesh><mesh rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.3, 0.3, 0.36, 24]} /><meshStandardMaterial color="#c8ced2" roughness={0.25} metalness={0.9} /></mesh></group>))}
        <group ref={bubbles} visible={false}>{bubbleSpots.map((pos, i) => (<mesh key={i} position={pos}><sphereGeometry args={[0.26 + (i % 3) * 0.09, 16, 16]} /><meshStandardMaterial color="#ffffff" transparent opacity={0.75} roughness={0.25} /></mesh>))}</group>
        <group ref={sparkles} visible={false} position={[0, 2.6, 0]}>{[0, 1, 2, 3].map((i) => (<mesh key={i} position={[Math.sin((i * Math.PI) / 2) * 1.7, (i % 2) * 0.5, Math.cos((i * Math.PI) / 2) * 1.7]}><octahedronGeometry args={[0.14]} /><meshStandardMaterial color="#ffffff" emissive="#bfeef9" emissiveIntensity={2} toneMapped={false} /></mesh>))}</group>
      </group>
    </Hotspot>
  );
}

function Bush({ position, color = "#33502f", scale = 1 }: { position: [number, number, number]; color?: string; scale?: number }) {
  return <group position={position} scale={scale}><mesh castShadow position={[0, 0.55, 0]} scale={[1, 0.8, 1]}><sphereGeometry args={[0.75, 16, 16]} /><meshStandardMaterial color={color} roughness={0.95} /></mesh><mesh castShadow position={[0.6, 0.42, 0.25]} scale={[1, 0.75, 1]}><sphereGeometry args={[0.55, 16, 16]} /><meshStandardMaterial color={color} roughness={0.95} /></mesh><mesh castShadow position={[-0.55, 0.4, -0.2]} scale={[1, 0.7, 1]}><sphereGeometry args={[0.5, 16, 16]} /><meshStandardMaterial color={color} roughness={0.95} /></mesh></group>;
}

function CanopyArch({ position }: { position: [number, number, number] }) {
  return <group position={position}><mesh castShadow position={[0, 2.4, 0]}><torusGeometry args={[3, 0.13, 12, 32, Math.PI]} /><meshStandardMaterial color="#eff9f8" /></mesh>{[-3, 3].map((x) => (<mesh key={x} castShadow position={[x, 1.2, 0]}><cylinderGeometry args={[0.13, 0.13, 2.4, 12]} /><meshStandardMaterial color="#eff9f8" /></mesh>))}<mesh position={[0, 4.7, 0]}><boxGeometry args={[0.4, 0.6, 0.4]} /><meshStandardMaterial color="#f1d247" emissive="#f1d247" emissiveIntensity={1.6} toneMapped={false} /></mesh></group>;
}

function VacuumStation({ position, id, onSelect }: { position: [number, number, number]; id: string; onSelect: SelectHandler }) {
  const hose = useMemo(() => new THREE.CatmullRomCurve3([new THREE.Vector3(-0.5, 1.9, 0), new THREE.Vector3(-1.4, 1.5, 0.25), new THREE.Vector3(-1.55, 0.4, 0.3)]), []);
  return <Hotspot id={id} onSelect={onSelect}><group position={position}><mesh castShadow position={[0, 1.1, 0]}><boxGeometry args={[1.2, 2.2, 1.2]} /><meshStandardMaterial color="#0c1416" /></mesh><mesh position={[0, 2.05, 0]}><boxGeometry args={[1.25, 0.45, 1.25]} /><meshStandardMaterial color={BLUE} /></mesh><mesh><tubeGeometry args={[hose, 20, 0.09, 8]} /><meshStandardMaterial color="#1c2a2d" /></mesh><mesh position={[-1.55, 0.25, 0.3]}><cylinderGeometry args={[0.12, 0.16, 0.5, 10]} /><meshStandardMaterial color="#9aa3a1" /></mesh></group></Hotspot>;
}

function MonumentSign({ onSelect, texture }: { onSelect: SelectHandler; texture: THREE.CanvasTexture | null }) {
  return <Hotspot id="monument" onSelect={onSelect}><group position={[6, 0, 20]}><mesh castShadow position={[0, 0.25, 0]}><boxGeometry args={[2.6, 0.5, 1.2]} /><meshStandardMaterial color="#171f21" /></mesh><mesh castShadow position={[0, 0.95, 0]}><cylinderGeometry args={[0.15, 0.15, 0.9, 12]} /><meshStandardMaterial color="#6a7374" /></mesh><group position={[0, 2.9, 0]}><SignPanel width={6} height={3} texture={texture} /></group></group></Hotspot>;
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

function DrivingCar({ zLane, dir, speed, color, offset = 0 }: { zLane: number; dir: number; speed: number; color: string; offset?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const span = 84;
    const p = (clock.getElapsedTime() * speed + offset) % span;
    ref.current.position.x = dir > 0 ? -42 + p : 42 - p;
  });
  return <group ref={ref} position={[0, 0, zLane]} rotation={[0, dir > 0 ? Math.PI / 2 : -Math.PI / 2, 0]}><CarShell color={color} /></group>;
}

function SpinningBrush({ position, color = BLUE, height = 4.6, radius = 0.5, speed = 3 }: { position: [number, number, number]; color?: string; height?: number; radius?: number; speed?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * speed; });
  return (
    <group ref={ref} position={position}>
      <mesh><cylinderGeometry args={[radius * 0.5, radius * 0.5, height, 10]} /><meshStandardMaterial color="#1a2224" /></mesh>
      {Array.from({ length: 12 }, (_, i) => i).map((i) => {
        const a = (i / 12) * Math.PI * 2;
        return <mesh key={i} position={[Math.cos(a) * radius * 0.78, 0, Math.sin(a) * radius * 0.78]} rotation={[0, -a, 0]}><boxGeometry args={[0.1, height * 0.98, 0.22]} /><meshStandardMaterial color={color} roughness={1} /></mesh>;
      })}
    </group>
  );
}

function FoamArch({ z }: { z: number }) {
  return (
    <group position={[-11, 0, z]}>
      <mesh position={[0, 5.2, 0]}><boxGeometry args={[6.4, 0.3, 0.5]} /><meshStandardMaterial color="#11171a" /></mesh>
      {([["#e23b3b", -2], ["#3b7be2", 0], ["#e2c23b", 2]] as Array<[string, number]>).map(([c, x]) => (
        <mesh key={x} position={[x, 4.1, 0]}><cylinderGeometry args={[0.13, 0.2, 1.7, 8]} /><meshStandardMaterial color={c} transparent opacity={0.82} emissive={c} emissiveIntensity={0.35} toneMapped={false} /></mesh>
      ))}
    </group>
  );
}

function GradientSky({ top, horizon }: { top: string; horizon: string }) {
  const texture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 16; c.height = 256;
    const ctx = c.getContext("2d");
    if (!ctx) return null;
    const g = ctx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, top); g.addColorStop(0.62, horizon); g.addColorStop(1, horizon);
    ctx.fillStyle = g; ctx.fillRect(0, 0, 16, 256);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, [top, horizon]);
  if (!texture) return null;
  return <mesh><sphereGeometry args={[220, 32, 16]} /><meshBasicMaterial map={texture} side={THREE.BackSide} fog={false} toneMapped={false} /></mesh>;
}

function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return <group position={position} scale={scale}><mesh position={[0, 1.5, 0]} castShadow><cylinderGeometry args={[0.12, 0.2, 3, 7]} /><meshStandardMaterial color="#241c14" roughness={1} /></mesh><mesh position={[0, 3.6, 0]} castShadow><sphereGeometry args={[1.5, 12, 12]} /><meshStandardMaterial color="#1f3120" roughness={1} /></mesh><mesh position={[0.8, 3.0, 0.3]} castShadow><sphereGeometry args={[1.0, 12, 12]} /><meshStandardMaterial color="#1a2a1b" roughness={1} /></mesh><mesh position={[-0.7, 3.2, -0.4]} castShadow><sphereGeometry args={[1.05, 12, 12]} /><meshStandardMaterial color="#223420" roughness={1} /></mesh></group>;
}

function GrassTuft({ position, color = "#26371f", scale = 1 }: { position: [number, number, number]; color?: string; scale?: number }) {
  return <group position={position} scale={scale}>{([[0, 0], [0.16, 0.1], [-0.14, 0.12], [0.05, -0.16]] as Array<[number, number]>).map((p, i) => (<mesh key={i} position={[p[0], 0.32, p[1]]} rotation={[0, 0, (i - 1.5) * 0.12]} castShadow><coneGeometry args={[0.08, 0.7, 5]} /><meshStandardMaterial color={color} roughness={1} /></mesh>))}</group>;
}

function Wire({ a, b, sag = 1.1, color = "#0b0e0f" }: { a: [number, number, number]; b: [number, number, number]; sag?: number; color?: string }) {
  const geo = useMemo(() => {
    const mid = new THREE.Vector3((a[0] + b[0]) / 2, (a[1] + b[1]) / 2 - sag, (a[2] + b[2]) / 2);
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(...a), mid, new THREE.Vector3(...b));
    return new THREE.TubeGeometry(curve, 18, 0.03, 5, false);
  }, [a, b, sag]);
  return <mesh geometry={geo}><meshStandardMaterial color={color} roughness={0.9} /></mesh>;
}

function DistantSkyline({ color = "#0e1c20" }: { color?: string }) {
  const blocks = useMemo(() => ([[-46, 4, 16, 8], [-30, 3, 12, 6], [-16, 5, 10, 10], [-2, 3.5, 14, 7], [14, 4.5, 11, 9], [30, 3, 13, 6], [44, 5, 12, 10]] as Array<[number, number, number, number]>), []);
  return <group position={[0, 0, -52]}>{blocks.map(([x, h, w, d], i) => (<mesh key={i} position={[x, h / 2, (i % 2) * -4]}><boxGeometry args={[w, h, d]} /><meshStandardMaterial color={color} roughness={1} /></mesh>))}</group>;
}

function ResponsiveCamera() {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  useEffect(() => {
    const aspect = size.width / size.height;
    const portrait = aspect < 0.9;
    if (camera instanceof THREE.PerspectiveCamera) camera.fov = portrait ? 55 : 42;
    camera.position.copy(new THREE.Vector3(26, 15, 32).normalize().multiplyScalar(portrait ? 64 : 48));
    camera.updateProjectionMatrix();
  }, [camera, size]);
  return null;
}

function Scene({ onSelect, texture }: { onSelect: SelectHandler; texture: THREE.CanvasTexture | null }) {
  return <><color attach="background" args={["#0a1f2b"]} /><fog attach="fog" args={["#16363f", 60, 150]} /><GradientSky top="#08202d" horizon="#1d4450" /><Environment resolution={128} frames={1}><Lightformer intensity={1.8} position={[10, 14, 8]} scale={[12, 10, 1]} color="#dff3f7" /><Lightformer intensity={1.1} position={[-12, 10, -8]} scale={[10, 8, 1]} color="#9fd4e0" /><Lightformer form="ring" intensity={0.7} position={[0, 6, 16]} scale={[14, 5, 1]} color="#67e8f9" /></Environment><ambientLight intensity={0.85} /><hemisphereLight args={["#9fd4e0", "#0d1517", 0.55]} /><directionalLight castShadow position={[18, 24, 14]} intensity={1.4} color="#dff3f7" shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-left={-35} shadow-camera-right={35} shadow-camera-top={35} shadow-camera-bottom={-35} /><directionalLight position={[-22, 14, -16]} intensity={0.55} color="#b9d8de" /><pointLight position={[-11, 4, 6]} intensity={18} color={BLUE} distance={16} /><pointLight position={[-11, 4, -10]} intensity={18} color={BLUE} distance={16} /><mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}><planeGeometry args={[260, 240]} /><meshStandardMaterial color="#16271c" roughness={1} /></mesh><mesh receiveShadow position={[0, 0.04, 0]}><boxGeometry args={[64, 0.08, 52]} /><meshStandardMaterial color="#1a2324" /></mesh>{[0, 1, 2, 3, 4].map((i) => (<mesh key={i} position={[-18 + i * 3.5, 0.1, 20]}><boxGeometry args={[0.15, 0.02, 4]} /><meshStandardMaterial color="#ffffff" transparent opacity={0.32} /></mesh>))}<WashBuilding onSelect={onSelect} texture={texture} /><AnimatedCar onSelect={onSelect} /><group position={[-2, 0, -6]}><mesh receiveShadow position={[0, 0.09, 0]}><boxGeometry args={[9, 0.04, 24]} /><meshStandardMaterial color="#141d1f" /></mesh>{[10, 6.5, 3, -0.5, -4, -7.5, -11].map((z) => (<CanopyArch key={z} position={[0, 0, z]} />))}{[8, 4, 0, -4, -8].map((z, i) => (<VacuumStation key={z} position={[3.2, 0, z]} id={`vacuum-${i + 1}`} onSelect={onSelect} />))}</group><MonumentSign onSelect={onSelect} texture={texture} />{([[-17.5, "#13191b"], [-15.5, "#eef4f2"], [-4.5, "#eef4f2"], [-2, "#9aa3a1"], [0.5, "#eef4f2"], [3, "#13191b"]] as Array<[number, string]>).map(([x, c]) => (<mesh key={x} castShadow position={[x, 0.7, 16.2]}><sphereGeometry args={[0.9, 24, 24]} /><meshStandardMaterial color={c} roughness={0.8} /></mesh>))}<Bush position={[-4.6, 0, 14.8]} color="#7a4448" scale={1.15} /><Bush position={[-18.5, 0, 15.5]} /><Bush position={[2.5, 0, 16.8]} scale={0.85} /><Bush position={[-19.5, 0, 6]} color="#2c452b" scale={1.25} /><Bush position={[-19, 0, -6]} scale={0.9} /><Bush position={[-18, 0, -17]} color="#2c452b" scale={1.1} /><Bush position={[4.5, 0, -16]} scale={1.0} /><Bush position={[6, 0, 6]} color="#2c452b" scale={0.85} /><Bush position={[12, 0, 22]} scale={1.05} /><Bush position={[-12, 0, 23]} color="#2c452b" scale={0.9} />{([[-24, -14], [-21, -19], [-18, -23]] as Array<[number, number]>).map(([x, z]) => (<group key={x} position={[x, 0, z]}><mesh position={[0, 6, 0]}><cylinderGeometry args={[0.15, 0.15, 12, 8]} /><meshStandardMaterial color="#6a7374" /></mesh><mesh position={[0, 10.5, 0]}><boxGeometry args={[2.4, 0.18, 0.18]} /><meshStandardMaterial color="#6a7374" /></mesh></group>))}
    {/* Strung power lines across the back utility poles */}
    <Wire a={[-24, 10.5, -14]} b={[-21, 10.5, -19]} /><Wire a={[-24, 10.1, -14]} b={[-21, 10.1, -19]} /><Wire a={[-21, 10.5, -19]} b={[-18, 10.5, -23]} /><Wire a={[-21, 10.1, -19]} b={[-18, 10.1, -23]} />
    {/* Distant industrial silhouettes across the road */}
    <DistantSkyline color="#0f2228" />
    {/* Tree line wrapping the back and sides of the lot */}
    {([[-34, -30], [-26, -34], [-16, -36], [-4, -37], [8, -36], [20, -34], [30, -30], [-32, -10], [-34, 6], [16, -28], [24, 18], [-30, 20]] as Array<[number, number]>).map(([x, z], i) => (<Tree key={`t${i}`} position={[x, 0, z]} scale={1 + (i % 3) * 0.18} />))}
    {/* Overgrown weeds along pavement edges and cracks */}
    {([[-30, -24], [-26, 22], [22, -22], [28, 8], [-31, 0], [10, 26], [-8, 26], [30, -6], [-22, -28], [18, 24], [-3, 24], [-26, -2]] as Array<[number, number]>).map(([x, z], i) => (<GrassTuft key={`g${i}`} position={[x, 0, z]} color={i % 3 === 0 ? "#2c3f22" : "#26371f"} scale={0.9 + (i % 4) * 0.22} />))}
    {/* Street along the front frontage — sidewalk, asphalt, lane lines, passing traffic */}
    <mesh receiveShadow position={[0, 0.05, 27]}><boxGeometry args={[120, 0.06, 3]} /><meshStandardMaterial color="#3c4042" roughness={1} /></mesh>
    <mesh receiveShadow position={[0, 0.04, 32]}><boxGeometry args={[120, 0.08, 8]} /><meshStandardMaterial color="#14181a" roughness={1} /></mesh>
    {Array.from({ length: 22 }, (_, i) => -42 + i * 4).map((x) => (<mesh key={`ln${x}`} position={[x, 0.1, 32]}><boxGeometry args={[1.6, 0.02, 0.16]} /><meshStandardMaterial color="#c8a23a" transparent opacity={0.7} /></mesh>))}
    <DrivingCar zLane={30.4} dir={1} speed={6} color="#8a95a0" offset={0} />
    <DrivingCar zLane={30.4} dir={1} speed={5.2} color="#3b4654" offset={34} />
    <DrivingCar zLane={33.6} dir={-1} speed={6.6} color="#9aa0a6" offset={18} />
    <DrivingCar zLane={33.6} dir={-1} speed={5.6} color="#6a4a3a" offset={56} />
    {/* Cars parked in the front lot, facing the building */}
    <ParkedCar position={[-18, 0, 20]} rotation={Math.PI} color="#54606c" />
    <ParkedCar position={[-14.5, 0, 20]} rotation={Math.PI} color="#7a8087" />
    <ParkedCar position={[10, 0, 21]} rotation={Math.PI} color="#3a4a5a" />
    {/* Construction crew on site during the build-out */}
    <Worker position={[2.5, 0, 18.5]} rotation={-2.2} />
    <Worker position={[-3.5, 0, 16]} rotation={1.4} vest="#ff7a3c" hat="#f5d23a" />
    <Worker position={[6, 0, 18]} rotation={2.6} armUp />
  </>;
}

export function LocalBusinessSiteModel() {
  const [mounted, setMounted] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const texture = useSignTexture();
  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAutoRotate(false);
  }, []);
  const activeInfo = activeId ? INFO_COPY[activeId] : null;
  return <div className="relative overflow-hidden rounded-[2rem] border border-[#67e8f9]/[0.16] bg-[#041014] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-6"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(103,232,249,0.18),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(6,182,212,0.10),transparent_42%)]" /><div className="relative space-y-5"><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Interactive property model</p><h3 className="mt-3 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Fancy Car Wash site massing</h3></div><p className="max-w-xl text-sm font-light leading-6 text-white/50">A restored 3D architectural study of the opening-soon property: the full-length wash tunnel and rollover door, branded signage, covered vacuum canopy, monument sign, landscaping, pavement, and utility edge.</p></div><div role="img" aria-label="Interactive 3D model of the Fancy Car Wash property concept" className="relative h-[520px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#06171b] sm:h-[650px]">{mounted ? <Canvas shadows dpr={[1, 2]} camera={{ position: [26, 15, 32], fov: 42 }} className="touch-none" onPointerMissed={() => setActiveId(null)}><ResponsiveCamera /><Scene onSelect={setActiveId} texture={texture} /><OrbitControls makeDefault target={[-6, 3, 0]} enablePan={false} enableDamping dampingFactor={0.08} minDistance={14} maxDistance={75} maxPolarAngle={Math.PI * 0.49} autoRotate={autoRotate} autoRotateSpeed={0.5} onStart={() => setAutoRotate(false)} /></Canvas> : null}<div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/[0.08] bg-[#030c0f]/60 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/38 backdrop-blur-xl">Drag to orbit &middot; tap to inspect</div>{activeInfo ? <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#67e8f9]/20 bg-[#030c0f]/85 p-4 backdrop-blur-xl sm:max-w-sm"><div className="flex items-start justify-between gap-3"><p className="text-xs font-medium uppercase tracking-[0.14em] text-[#67e8f9]">{activeInfo.title}</p><button type="button" onClick={() => setActiveId(null)} aria-label="Close" className="text-white/40 transition-colors hover:text-white/80">&times;</button></div><p className="mt-2 text-sm font-light leading-6 text-white/65">{activeInfo.body}</p></div> : null}</div></div></div>;
}
