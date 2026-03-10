import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DNAHelix() {
  const groupRef = useRef();
  const count = 30; // Number of rungs
  const height = 12;
  const radius = 0.8;
  const turns = 3;

  // Generate helix strand positions
  const strand1Positions = useMemo(() => {
    const positions = [];
    for (let i = 0; i <= count * 2; i++) {
      const t = i / (count * 2);
      const angle = t * Math.PI * 2 * turns;
      positions.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          t * height - height / 2,
          Math.sin(angle) * radius
        )
      );
    }
    return positions;
  }, []);

  const strand2Positions = useMemo(() => {
    const positions = [];
    for (let i = 0; i <= count * 2; i++) {
      const t = i / (count * 2);
      const angle = t * Math.PI * 2 * turns + Math.PI;
      positions.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          t * height - height / 2,
          Math.sin(angle) * radius
        )
      );
    }
    return positions;
  }, []);

  // Build curve geometries
  const strand1Geo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(strand1Positions);
    return new THREE.TubeGeometry(curve, count * 6, 0.04, 8, false);
  }, [strand1Positions]);

  const strand2Geo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(strand2Positions);
    return new THREE.TubeGeometry(curve, count * 6, 0.04, 8, false);
  }, [strand2Positions]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15;
    // Sine wave floating
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.3;
  });

  // Connectors (base pairs)
  const connectors = useMemo(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const t = (i / count);
      const angle = t * Math.PI * 2 * turns;
      const y = t * height - height / 2;
      items.push({ angle, y, t });
    }
    return items;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Gold strand */}
      <mesh geometry={strand1Geo}>
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.8}
          roughness={0.2}
          emissive="#D4AF37"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Maroon strand */}
      <mesh geometry={strand2Geo}>
        <meshStandardMaterial
          color="#800000"
          metalness={0.7}
          roughness={0.3}
          emissive="#800000"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Connector links */}
      {connectors.map(({ angle, y, t }, i) => {
        const x1 = Math.cos(angle) * radius;
        const z1 = Math.sin(angle) * radius;
        const x2 = Math.cos(angle + Math.PI) * radius;
        const z2 = Math.sin(angle + Math.PI) * radius;

        const midX = (x1 + x2) / 2;
        const midZ = (z1 + z2) / 2;
        const length = Math.sqrt((x2 - x1) ** 2 + (z2 - z1) ** 2);
        const rotY = Math.atan2(z2 - z1, x2 - x1);

        return (
          <group key={i} position={[midX, y, midZ]} rotation={[0, rotY, Math.PI / 2]}>
            <mesh>
              <cylinderGeometry args={[0.02, 0.02, length, 6]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#D4AF37" : "#800000"}
                metalness={0.9}
                roughness={0.1}
                emissive={i % 2 === 0 ? "#D4AF37" : "#800000"}
                emissiveIntensity={0.2}
                transparent
                opacity={0.7}
              />
            </mesh>
            {/* Node spheres */}
            <mesh position={[0, -length / 2, 0]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[0, length / 2, 0]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshStandardMaterial color="#800000" emissive="#800000" emissiveIntensity={0.5} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function DNAScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 5, 3]} color="#D4AF37" intensity={2} distance={15} />
      <pointLight position={[-3, -5, 2]} color="#800000" intensity={1.5} distance={12} />
      <DNAHelix />
    </>
  );
}

export default function DNAComponent({ className = '' }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [3, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <DNAScene />
      </Canvas>
    </div>
  );
}
