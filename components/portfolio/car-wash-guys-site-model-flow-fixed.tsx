"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import {
  approachRoute,
  exitRoute,
  fullServiceRoute,
  quickExitRoute,
  tunnelRoute,
  type Point,
  vacuumRoute,
  washRoute
} from "./car-wash-guys-flow-routes";

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

function FlowSegment({ start, end, color, opacity }: { start: Point; end: Point; color: string; opacity: number }) {
  const [sx, sy, sz] = start;
  const [ex, ey, ez] = end;
  const dx = ex - sx;
  const dy = ey - sy;
  const dz = ez - sz;
  const length = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const midpoint: Point = [(sx + ex) / 2, (sy + ey) / 2, (sz + ez) / 2];
  const quaternion = useMemo(() => {
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dx, dy, dz).normalize());
    return q;
  }, [dx, dy, dz]);

  return (
    <mesh position={midpoint} quaternion={quaternion}>
      <cylinderGeometry args={[0.09, 0.09, length, 10]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} toneMapped={false} />
    </mesh>
  );
}

function FlowLine({ route, color, opacity = 0.72 }: { route: Point[]; color: string; opacity?: number }) {
  return (
    <group>
      {route.slice(0, -1).map((point, index) => (
        <FlowSegment key={`${point.join("-")}-${index}`} start={point} end={route[index + 1]} color={color} opacity={opacity} />
      ))}
    </group>
  );
}

function getPointOnPolyline(route: Point[], t: number) {
  const vectors = route.map((point) => new THREE.Vector3(...point));
  const lengths = vectors.slice(0, -1).map((point, index) => point.distanceTo(vectors[index + 1]));
  const total = lengths.reduce((sum, length) => sum + length, 0);
  let traveled = (t % 1) * total;

  for (let index = 0; index < lengths.length; index += 1) {
    if (traveled <= lengths[index]) {
      const localT = lengths[index] === 0 ? 0 : traveled / lengths[index];
      const position = vectors[index].clone().lerp(vectors[index + 1], localT);
      const tangent = vectors[index + 1].clone().sub(vectors[index]).normalize();
      return { position, tangent };
    }
    traveled -= lengths[index];
  }

  return { position: vectors[vectors.length - 1], tangent: new THREE.Vector3(0, 0, 1) };
}

function ArrowMarker({ position, rotation = 0, color = ROAD_WHITE, scale = 1 }: { position: Point; rotation?: number; color?: string; scale?: number }) {
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

function FlowCar({ route, color, offset = 0, speed = 0.035, motionEnabled }: { route: Point[]; color: string; offset?: number; speed?: number; motionEnabled: boolean }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = motionEnabled ? (clock.elapsedTime * speed + offset) % 1 : offset % 1;
    const { position, tangent } = getPointOnPolyline(route, t);
    ref.current.position.copy(position);
    ref.current.rotation.y = Math.atan2(tangent.x, tangent.z);
  });

  return (
    <group ref={ref}>
      <LowPolyCar color={color} />
    </group>
  );
}

function PayStation({ position, rotation = 0 }: { position: Point; rotation?: number }) {
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
    </group>
  );
}

function TrafficCone({ position }: { position: Point }) {
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
  return (
    <group position={MODEL_POSITION} rotation={MODEL_ROTATION}>
      <FlowLine route={approachRoute} color={GOLD} opacity={0.74} />
      <FlowLine route={tunnelRoute} color={ROAD_WHITE} opacity={0.72} />
      <FlowLine route={washRoute} color={ROAD_WHITE} opacity={0.68} />
      <FlowLine route={vacuumRoute} color={WASH_BLUE} opacity={0.5} />
      <FlowLine route={exitRoute} color={ROAD_WHITE} opacity={0.6} />

      {/* approach from west — going east (+X) */}
      <ArrowMarker position={[-36, 0.15, -6]} rotation={-Math.PI / 2} color={GOLD} scale={1.08} />
      <ArrowMarker position={[-30, 0.15, -6]} rotation={-Math.PI / 2} color={GOLD} scale={1.06} />
      {/* tunnel through building — going east (+X) */}
      <ArrowMarker position={[-14, 0.16, -6]} rotation={-Math.PI / 2} color={ROAD_WHITE} scale={1.06} />
      <ArrowMarker position={[0, 0.16, -6]} rotation={-Math.PI / 2} color={ROAD_WHITE} scale={1.06} />
      {/* exit — south (+Z) then east (+X) */}
      <ArrowMarker position={[16, 0.16, 6]} rotation={Math.PI} color={ROAD_WHITE} scale={1.02} />
      <ArrowMarker position={[22, 0.16, 20]} rotation={-Math.PI / 2} color={ROAD_WHITE} scale={1.02} />
      {/* vacuum — south (+Z) then west (-X) */}
      <ArrowMarker position={[16, 0.16, 2]} rotation={Math.PI} color={WASH_BLUE} scale={0.9} />
      <ArrowMarker position={[2, 0.16, 7]} rotation={Math.PI / 2} color={WASH_BLUE} scale={0.9} />

      {/* pay station at west entrance */}
      <PayStation position={[-28, 0.03, -3]} rotation={Math.PI / 2} />

      {/* static cars: waiting at entrance, exiting by tower, in vacuum area */}
      <group position={[-32, 0.16, -6]} rotation={[0, -Math.PI / 2, 0]} scale={1.08}>
        <LowPolyCar color="#eab308" />
      </group>
      <group position={[16, 0.16, 8]} rotation={[0, Math.PI, 0]} scale={1.04}>
        <LowPolyCar color="#475569" />
      </group>
      <group position={[-4, 0.16, 7]} rotation={[0, Math.PI / 2, 0]} scale={1.02}>
        <LowPolyCar color="#334155" />
      </group>

      <FlowCar route={quickExitRoute} color="#3b82f6" offset={0.04} motionEnabled={motionEnabled} />
      <FlowCar route={fullServiceRoute} color="#f8fafc" offset={0.38} motionEnabled={motionEnabled} speed={0.028} />
      <FlowCar route={[...washRoute, ...exitRoute.slice(1)]} color="#111827" offset={0.22} motionEnabled={motionEnabled} speed={0.032} />

      {/* cones lining the approach and exit path */}
      {[
        [-38, 0.04, -4],
        [-32, 0.04, -4],
        [-26, 0.04, -4],
        [16, 0.04, 4],
        [16, 0.04, 10],
        [22, 0.04, 20],
        [28, 0.04, 20]
      ].map((position) => (
        <TrafficCone key={position.join("-")} position={position as Point} />
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
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#d99a3a]">3D site flow</p>
            <h3 className="mt-3 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Car Wash Guys</h3>
          </div>
          <p className="max-w-xl text-sm font-light leading-6 text-white/50">
            Enter at the arch, drive east through the building, exit by the tower. Straight lines only.
          </p>
        </div>
        <div
          role="img"
          aria-label="Interactive 3D model of the Car Wash Guys property concept with orthogonal customer traffic flow"
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
