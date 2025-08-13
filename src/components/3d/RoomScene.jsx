// src/components/3d/RoomScene.jsx
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Plane } from '@react-three/drei';
import * as THREE from 'three';

// Smart Light Component
const SmartLight = ({ position, isHovered, onClick, color = "#10b981" }) => {
  const lightRef = useRef();
  const meshRef = useRef();
  
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.intensity = isHovered ? 2 : 0.8;
    }
    if (meshRef.current) {
      meshRef.current.material.emissive.setHex(isHovered ? 0x10b981 : 0x064e3b);
    }
  });

  return (
    <group position={position}>
      {/* Light fixture */}
      <mesh ref={meshRef} onClick={onClick}>
        <cylinderGeometry args={[0.3, 0.2, 0.1, 16]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={isHovered ? 0.3 : 0.1}
        />
      </mesh>
      
      {/* Light beam */}
      <pointLight
        ref={lightRef}
        position={[0, -0.1, 0]}
        color={color}
        intensity={isHovered ? 2 : 0.8}
        distance={8}
        decay={2}
      />
      
      {/* Glow effect */}
      {isHovered && (
        <Sphere args={[0.5]} position={[0, 0, 0]}>
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.2}
          />
        </Sphere>
      )}
    </group>
  );
};

// Lamp Component
const SmartLamp = ({ position, isHovered, onClick }) => {
  const lampRef = useRef();
  const lightRef = useRef();
  
  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.intensity = isHovered ? 1.5 : 0.5;
    }
  });

  return (
    <group position={position}>
      {/* Lamp base */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 0.4, 8]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>
      
      {/* Lamp pole */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
      
      {/* Lamp shade */}
      <mesh ref={lampRef} position={[0, 0.3, 0]} onClick={onClick}>
        <cylinderGeometry args={[0.6, 0.4, 0.8, 16]} />
        <meshStandardMaterial 
          color={isHovered ? "#f7fafc" : "#e2e8f0"}
          emissive={isHovered ? "#fef5e7" : "#000000"}
          emissiveIntensity={isHovered ? 0.2 : 0}
        />
      </mesh>
      
      {/* Light source */}
      <pointLight
        ref={lightRef}
        position={[0, 0.3, 0]}
        color="#fbbf24"
        intensity={isHovered ? 1.5 : 0.5}
        distance={6}
        decay={2}
      />
      
      {/* Warm glow */}
      {isHovered && (
        <Sphere args={[0.8]} position={[0, 0.3, 0]}>
          <meshBasicMaterial
            color="#fbbf24"
            transparent
            opacity={0.1}
          />
        </Sphere>
      )}
    </group>
  );
};

// Room Scene Component
const RoomScene = () => {
  const [hoveredLight, setHoveredLight] = useState(null);

  const lights = [
    { id: 1, position: [-3, 3, -2], type: 'ceiling' },
    { id: 2, position: [3, 3, -2], type: 'ceiling' },
    { id: 3, position: [0, 3, 2], type: 'ceiling' },
    { id: 4, position: [-2, 0, -1], type: 'lamp' },
    { id: 5, position: [2, 0, 1], type: 'lamp' }
  ];

  return (
    <Canvas camera={{ position: [8, 6, 8], fov: 60 }}>
      <ambientLight intensity={0.2} />
      
      {/* Room walls */}
      <group>
        {/* Floor */}
        <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <meshStandardMaterial color="#f7fafc" />
        </Plane>
        
        {/* Back wall */}
        <Plane args={[10, 8]} position={[0, 3, -5]}>
          <meshStandardMaterial color="#edf2f7" />
        </Plane>
        
        {/* Side wall */}
        <Plane args={[10, 8]} rotation={[0, Math.PI / 2, 0]} position={[-5, 3, 0]}>
          <meshStandardMaterial color="#e2e8f0" />
        </Plane>
      </group>

      {/* Furniture */}
      <group>
        {/* Sofa */}
        <Box args={[2, 0.8, 1]} position={[1, -0.6, -2]}>
          <meshStandardMaterial color="#4a5568" />
        </Box>
        
        {/* Coffee table */}
        <Box args={[1.5, 0.2, 0.8]} position={[1, -0.9, -0.5]}>
          <meshStandardMaterial color="#2d3748" />
        </Box>
        
        {/* TV stand */}
        <Box args={[3, 0.4, 0.6]} position={[0, -0.8, -4]}>
          <meshStandardMaterial color="#1a202c" />
        </Box>
      </group>

      {/* Smart Lights */}
      {lights.map((light) => (
        light.type === 'ceiling' ? (
          <SmartLight
            key={light.id}
            position={light.position}
            isHovered={hoveredLight === light.id}
            onClick={() => setHoveredLight(hoveredLight === light.id ? null : light.id)}
          />
        ) : (
          <SmartLamp
            key={light.id}
            position={light.position}
            isHovered={hoveredLight === light.id}
            onClick={() => setHoveredLight(hoveredLight === light.id ? null : light.id)}
          />
        )
      ))}

      <OrbitControls 
        enablePan={false}
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minDistance={5}
        maxDistance={15}
      />
    </Canvas>
  );
};

export default RoomScene;