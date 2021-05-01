import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./model";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} position={[10, 15, 10]} castShadow />
      <Suspense fallback={null}>
        <Model />

        <Environment preset="city" />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -0.8, 0]}
          opacity={0.25}
          width={10}
          height={10}
          blur={1.5}
          far={0.8}
        />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}
