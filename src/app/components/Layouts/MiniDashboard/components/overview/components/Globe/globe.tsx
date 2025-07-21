"use client";
import React from "react";

import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

const Globe = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      style={{ background: "black", height: "100vh", width: "100vw" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[2, 2, 2]} intensity={1} />

      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#28014d"
          attach="material"
          distort={0.3} // Adjust for wobble effect
          speed={2} // Adjust distortion speed
          roughness={0.8}
          metalness={0.5}
        />
      </Sphere>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Globe;
