"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/models/carwashguys-remodel.glb";
const GOLD = "#d99a3a";
const ROAD_WHITE = "#f8fafc";
const WASH_BLUE = "#67e8f9";
const MODEL_POSITION: [number, number, number] = [3.6726, 0.22, -4.4226];
const MODEL_ROTATION: [number, number, number] = [0, -0.08, 0];

function ResponsiveCamera() {
  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);

  useEffect(() => {
    const aspect = size.width / size.height;
    const portrait = aspect < 0.9;

    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = portrait ? 50 : 38;
      camera.position.set(portrait ? 74 : 68, portrait ? 44 : 34, portrait ? 88 : 72);
      camera.lookAt(0, 4.6, 0);
      camera.updateProjectionMatrix();
    }
  }, [camera, size]);

  return null;
}

function CarWashGuysModel() {
  const gltf = useGLTF(MODEL_PATH);
  const scene = useMemo(() => {
    const clonedScene = gltf.scene.clone(true);
    clonedScene.updateMatrixWorld(true);

    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((material) => {
          if ("envMapIntensity" in material) {
            material.envMapIntensity = 1.15;
          }
        });
      }
    });

    return clonedScene;
  }, [gltf.scene]);

  return (
    <group position={MODEL_POSITION} rotation={MODEL_ROTATION}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);

function FlowLine({ route, color, opacity = 0.72 }: { route: Array<[number, number, number]>; color: string; opacity?: number }) {
  const curve = useMemo(() => new THREE.CatmullRomCurve3(route.map((point) => new THREE.Vector3(...point))), [route]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 96, 0.09, 8]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} toneMapped={false} />
    </mesh>
  );
}

function ArrowMarker({ position, rotation = 0, color = ROAD_WHITE, scale = 1 }: { position: [number, number, number]; rotation?: number; color?: string; scale?: number }) {
  const shape = useMemo(() => {
    const arrow = new THREE.Shape();
    arrow.moveTo(0, 1.55);
    arrow.lineTo(-0.58, 0.52);
    arrow.lineTo(-0.22, 0.52);
    arrow.lineTo(-0.22, -1.45);
    arrow.lineTo(0.22, -1.45);
    arrow.lineTo(0.22, 0.52);
    arrow.lineTo(0.58, 0.52);
    arrow.closePath();
    return arrow;
  }, []);

  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, rotation]} scale={[scale, scale, scale]}>
      <shapeGeometry args={[shape]} />
      <meshBasicMaterial color={color} transparent opacity={0.78} toneMapped={false} side={THREE.DoubleSide} />
    </mesh>
  );
}

function LowPolyCar({ color = "#64748b" }: { color?: string }) {
  return (
    <group>
      <mesh castShadow position={[0, 0.35, 0]}>
        <boxGeometry args={[1.55, 0.42, 3.1]} />
        <meshStandardMaterial color={color} metalness={0.35} roughness={0.42} />
      </mesh>
      <mesh castShadow position={[0, 0.74, -0.18]}>
        <boxGeometry args={[1.25, 0.42, 1.55]} />
        <meshStandardMaterial color={color} metalness={0.32} roughness={0.36} />
      </mesh>
      <mesh position={[0, 0.77, -0.18]}>
        <boxGeometry args={[1.28, 0.32, 1.38]} />
        <meshStandardMaterial color="#0b1220" roughness={0.16} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.43, 1.58]}>
        <boxGeometry args={[1.05, 0.12, 0.05]} />
        <meshBasicMaterial color="#e8f2ff" toneMapped={false} />
      </mesh>
      {([
        [-0.82, 1.05],
        [0.82, 1.05],
        [-0.82, -1.05],
        [0.82, -1.05]
      ] as Array<[number, number]>).map(([x, z], i) => (
        <mesh key={i} position={[x, 0.2, z]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.26, 0.26, 0.18, 16]} />
          <meshStandardMaterial color="#0f1115" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function FlowCar({ route, color, offset = 0, speed = 0.035, motionEnabled }: { route: Array<[number, number, number]>; color: string; offset?: number; speed?: number; motionEnabled: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(route.map((point) => new THREE.Vector3(...point))), [route]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = motionEnabled ? (clock.elapsedTime * speed + offset) % 1 : offset % 1;
    const position = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t);
    ref.current.position.copy(position);
    ref.current.rotation.y = Math.atan2(tangent.x, tangent.z);
  });

  return (
    <group ref={ref}>
      <LowPolyCar color={color} />
    </group>
  );
}

function PayStation({ position, rotation = 0 }: { position: [number, number, number]; rotation?: number }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow position={[0, 0.9, 0]}>
        <boxGeometry args={[1.05, 1.8, 1.05]} />
        <meshStandardMaterial color="#15171b" roughness={0.52} metalness={0.12} />
      </mesh>
      <mesh position={[0, 1.28, 0.54]}>
        <boxGeometry args={[0.78, 0.46, 0.04]} />
        <meshBasicMaterial color={GOLD} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.82, 0.58]}>
        <boxGeometry args={[0.56, 0.34, 0.08]} />
        <meshBasicMaterial color="#38bdf8" toneMapped={false} />
      </mesh>
      <mesh castShadow position={[1.05, 1.4, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 2.8, 10]} />
        <meshStandardMaterial color="#20242a" roughness={0.65} />
      </mesh>
      <group position={[1.05, 2.75, 0]} rotation={[0, 0, -0.65]}>
        <mesh position={[0, -1.55, 0]}>
          <boxGeometry args={[0.1, 3.1, 0.1]} />
          <meshBasicMaterial color="#f8fafc" toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

function TrafficCone({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[0.38, 0.08, 0.38]} />
        <meshStandardMaterial color="#151515" roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.36, 0]} castShadow>
        <coneGeometry args={[0.19, 0.58, 12]} />
        <meshStandardMaterial color="#f97316" roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.39, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.13, 0.05, 12]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
    </group>
  );
}

function OperationalLayer({ motionEnabled }: { motionEnabled: boolean }) {
  const approachRoute: Array<[number, number, number]> = [
    [31, 0.16, 22],
    [27, 0.16, 18.8],
    [23, 0.16, 15.4],
    [19, 0.16, 12.2]
  ];

  const queueRoute: Array<[number, number, number]> = [
    [19, 0.18, 12.2],
    [15.4, 0.18, 8.8],
    [10.8, 0.18, 3.5],
    [5.2, 0.18, -1.6],
    [-2.5, 0.18, -5.8],
    [-10.5, 0.18, -7.4]
  ];

  const washRoute: Array<[number, number, number]> = [
    [-10.5, 0.2, -7.4],
    [-5.8, 0.2, -5.2],
    [0.4, 0.2, -2.2],
    [6.8, 0.2, 1.6],
    [12.6, 0.2, 6.4]
  ];

  const postWashRoute: Array<[number, number, number]> = [
    [12.6, 0.18, 6.4],
    [6.8, 0.18, -2.8],
    [0.6, 0.18, -9.4],
    [-6.8, 0.18, -12.8]
  ];

  const exitRoute: Array<[number, number, number]> = [
    [12.6, 0.16, 6.4],
    [17.5, 0.16, 10.8],
    [23.5, 0.16, 16.4],
    [30, 0.16, 22.6]
  ];

  return (
    <group position={MODEL_POSITION} rotation={MODEL_ROTATION}>
      <FlowLine route={approachRoute} color={GOLD} opacity={0.74} />
      <FlowLine route={queueRoute} color={GOLD} opacity={0.68} />
      <FlowLine route={washRoute} color={ROAD_WHITE} opacity={0.62} />
      <FlowLine route={postWashRoute} color={WASH_BLUE} opacity={0.52} />
      <FlowLine route={exitRoute} color={ROAD_WHITE} opacity={0.58} />

      <ArrowMarker position={[27, 0.15, 18.8]} rotation={-0.82} color={GOLD} scale={1.16} />
      <ArrowMarker position={[17.5, 0.15, 10.2]} rotation={-0.72} color={GOLD} scale={1.08} />
      <ArrowMarker position={[7.2, 0.15, 0.4]} rotation={-0.72} color={GOLD} scale={1.02} />
      <ArrowMarker position={[-5.4, 0.16, -6.2]} rotation={1.05} color={ROAD_WHITE} scale={1.02} />
      <ArrowMarker position={[8.8, 0.16, 2.8]} rotation={1.02} color={ROAD_WHITE} scale={1.02} />
      <ArrowMarker position={[3.4, 0.16, -6.2]} rotation={-2.35} color={WASH_BLUE} scale={0.9} />
      <ArrowMarker position={[22, 0.16, 15.2]} rotation={-0.82} color={ROAD_WHITE} scale={1.02} />

      <PayStation position={[19.2, 0.03, 12.4]} rotation={-0.55} />

      <group position={[19.6, 0.16, 13.6]} rotation={[0, -0.72, 0]} scale={1.08}>
        <LowPolyCar color="#eab308" />
      </group>
      <group position={[-6.8, 0.16, -12.8]} rotation={[0, -2.3, 0]} scale={1.05}>
        <LowPolyCar color="#475569" />
      </group>

      <FlowCar route={[...approachRoute, ...queueRoute.slice(1), ...washRoute.slice(1), ...exitRoute.slice(1)]} color="#3b82f6" offset={0.05} motionEnabled={motionEnabled} />
      <FlowCar route={[...approachRoute, ...queueRoute.slice(1), ...washRoute.slice(1), ...postWashRoute.slice(1)]} color="#f8fafc" offset={0.42} motionEnabled={motionEnabled} speed={0.028} />
      <FlowCar route={[...washRoute, ...exitRoute.slice(1)]} color="#111827" offset={0.18} motionEnabled={motionEnabled} speed={0.032} />

      {[
        [19.8, 0.04, 12.8],
        [17.4, 0.04, 10.4],
        [14.2, 0.04, 7.1],
        [10.3, 0.04, 2.8],
        [3.8, 0.04, -2.4],
        [-4.5, 0.04, -6.5],
        [13.8, 0.04, 7.3]
      ].map((position) => (
        <TrafficCone key={position.join("-")} position={position as [number, number, number]} />
      ))}
    </group>
  );
}

function Scene({ motionEnabled }: { motionEnabled: boolean }) {
  return (
    <>
      <color attach="background" args={["#11141d"]} />
      <fog attach="fog" args={["#11141d", 95, 185]} />

      <Environment resolution={128} frames={1}>
        <Lightformer intensity={2.1} position={[18, 22, 12]} scale={[18, 12, 1]} color="#f6e8cf" />
        <Lightformer intensity={1.2} position={[-20, 14, -18]} scale={[16, 10, 1]} color={GOLD} />
        <Lightformer form="ring" intensity={0.75} position={[4, 10, 24]} scale={[18, 6, 1]} color="#f0c878" />
      </Environment>

      <ambientLight intensity={0.9} />
      <hemisphereLight args={["#f0d28f", "#09090b", 0.65]} />
      <directionalLight
        castShadow
        position={[24, 32, 24]}
        intensity={1.35}
        color="#fff0cf"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-60}
        shadow-camera-right={60}
        shadow-camera-top={60}
        shadow-camera-bottom={-60}
      />
      <directionalLight position={[-32, 18, -28]} intensity={0.55} color="#d8c39a" />

      <Suspense fallback={null}>
        <CarWashGuysModel />
      </Suspense>
      <OperationalLayer motionEnabled={motionEnabled} />
      <ContactShadows position={[0, -0.01, 0]} opacity={0.35} scale={95} blur={2.8} far={18} color="#000000" />
    </>
  );
}

export function CarWashGuysSiteModel() {
  const [mounted, setMounted] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAutoRotate(false);
      setMotionEnabled(false);
    }
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#d99a3a]/[0.18] bg-[#0a0a0c] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(217,154,58,0.16),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(217,154,58,0.08),transparent_42%)]" />
      <div className="relative space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#d99a3a]">Interactive property model</p>
            <h3 className="mt-3 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Car Wash Guys site massing</h3>
          </div>
          <p className="max-w-xl text-sm font-light leading-6 text-white/50">
            A corrected 3D study of the Washington Road customer path: drivers enter from the road-facing approach, reach payment first, queue into the wash equipment, come out clean by the tower, and then continue to vacuum or exit without crossing incoming traffic.
          </p>
        </div>
        <div
          role="img"
          aria-label="Interactive 3D model of the Car Wash Guys property concept with corrected customer traffic flow"
          className="relative h-[520px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0a0a0c] sm:h-[650px]"
        >
          {mounted ? (
            <Canvas shadows dpr={[1, 2]} camera={{ position: [68, 34, 72], fov: 38 }} className="touch-none">
              <ResponsiveCamera />
              <Scene motionEnabled={motionEnabled} />
              <OrbitControls
                makeDefault
                target={[0, 4.6, 0]}
                enablePan={false}
                enableDamping
                dampingFactor={0.08}
                minDistance={36}
                maxDistance={150}
                maxPolarAngle={Math.PI * 0.49}
                autoRotate={autoRotate}
                autoRotateSpeed={0.45}
                onStart={() => setAutoRotate(false)}
              />
            </Canvas>
          ) : null}
          <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/[0.08] bg-[#0a0a0c]/60 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/38 backdrop-blur-xl">
            Drag to orbit
          </div>
        </div>
      </div>
    </div>
  );
}
