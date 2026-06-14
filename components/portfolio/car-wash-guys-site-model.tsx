"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/models/carwashguys-remodel.glb";

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
    <group position={[3.6726, 0.22, -4.4226]} rotation={[0, -0.08, 0]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);

function Scene() {
  return (
    <>
      <color attach="background" args={["#11141d"]} />
      <fog attach="fog" args={["#11141d", 95, 185]} />

      <Environment resolution={128} frames={1}>
        <Lightformer intensity={2.1} position={[18, 22, 12]} scale={[18, 12, 1]} color="#f6e8cf" />
        <Lightformer intensity={1.2} position={[-20, 14, -18]} scale={[16, 10, 1]} color="#d99a3a" />
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
      <ContactShadows position={[0, -0.01, 0]} opacity={0.35} scale={95} blur={2.8} far={18} color="#000000" />
    </>
  );
}

export function CarWashGuysSiteModel() {
  const [mounted, setMounted] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAutoRotate(false);
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
            A 3D study of the new location from the Car Wash Guys build: the remodeled wash structure, site layout, brand signage, pavement, frontage, and surrounding property context. Orbit the model to inspect the concept from every side.
          </p>
        </div>
        <div
          role="img"
          aria-label="Interactive 3D model of the Car Wash Guys property concept"
          className="relative h-[520px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0a0a0c] sm:h-[650px]"
        >
          {mounted ? (
            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ position: [68, 34, 72], fov: 38 }}
              className="touch-none"
            >
              <ResponsiveCamera />
              <Scene />
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
