import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  MeshDistortMaterial, 
  Float, 
  PerspectiveCamera, 
  Environment, 
  ContactShadows,
  MeshTransmissionMaterial // The "Elite" secret for realistic glass
} from '@react-three/drei';
import * as THREE from 'three';

const Bubble = ({ isDark }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();
    
    // Elite mouse lag: follows the mouse but with a classy "weight"
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 0.8, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.8, 0.05);
    
    // Complex rotation: rotating on multiple axes at different speeds
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = Math.sin(time * 0.4) * 0.5;
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.4 : 1.3}
      >
        <sphereGeometry args={[1, 128, 128]} /> {/* Increased segments for smooth distortion */}
        
        {/* We use MeshTransmissionMaterial for that "Expensive Apple/Luxury" Glass effect */}
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={1.5}
          chromaticAberration={0.06}
          anisotropy={0.3}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.2}
          iridescence={isDark ? 0.5 : 0.2}
          iridescenceIOR={1.5}
          toneMapped={false}
          color={isDark ? (hovered ? "#800000" : "#D4AF37") : (hovered ? "#D4AF37" : "#ffffff")}
          roughness={isDark ? 0.1 : 0.05}
          transmission={isDark ? 0.8 : 0.95}
        />
      </mesh>
    </Float>
  );
};

const Particles = ({ count, isDark }) => {
  const mesh = useRef();
  const color = isDark ? "#D4AF37" : "#800000";

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        t: Math.random() * 100,
        factor: 20 + Math.random() * 60,
        speed: 0.005 + Math.random() / 500,
        xFactor: -10 + Math.random() * 20,
        yFactor: -10 + Math.random() * 20,
        zFactor: -10 + Math.random() * 20,
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed;
      const s = Math.cos(t);
      mesh.current.setMatrixAt(
        i,
        new THREE.Matrix4().makeTranslation(
          xFactor + Math.cos(t) * factor * 0.1,
          yFactor + Math.sin(t) * factor * 0.1,
          zFactor + Math.cos(t) * factor * 0.1
        ).multiply(new THREE.Matrix4().makeScale(s, s, s))
      );
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <dodecahedronGeometry args={[0.04, 0]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={isDark ? 2 : 0.5} 
        toneMapped={false}
      />
    </instancedMesh>
  );
};

const Hero3D = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        
        {/* Lights */}
        <ambientLight intensity={isDark ? 0.1 : 0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} color={isDark ? "#D4AF37" : "#ffffff"} />
        <pointLight position={[-5, 5, -5]} color={isDark ? "#800000" : "#D4AF37"} intensity={5} />
        
        {/* Environments give the "Glass" something to reflect, making it look real */}
        <Environment preset="city" />

        <Bubble isDark={isDark} />
        <Particles count={isDark ? 100 : 40} isDark={isDark} />
        
        {/* Grounds the bubble with a soft shadow */}
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={isDark ? 0.4 : 0.2} 
          scale={10} 
          blur={2.5} 
          far={4} 
        />
        
        <fog attach="fog" args={[isDark ? '#050505' : '#ffffff', 5, 15]} />
      </Canvas>
    </div>
  );
};

export default Hero3D;