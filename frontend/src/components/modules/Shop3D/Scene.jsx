import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "../../elements/model";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { useSelector } from "react-redux";
import { useSpring } from "@react-spring/three";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{Math.floor(progress)} % loaded</Html>;
}

export default function Scene() {
  const product = useSelector((state) => state.product);
  const controls = useRef();
  const findMaterial = () => ({
    material: product.options.find((item) => item.name === "material"),
    controls: product.options.find((item) => item.name === "controls"),
  });
  const tabs = useSelector((state) => state.tabs);

  const { position, rotation } = useSpring({
    position: tabs && tabs.currTab.position,
    rotation: tabs && tabs.currTab.rotation,
  });

  useEffect(() => {
    if (tabs && controls.current) {
      if (tabs.currTab.name !== "material") {
        controls.current.autoRotate = false;
        controls.current.enableRotate = false;
        controls.current.reset();
        controls.current.enableDamping = false;
      } else {
        controls.current.enableRotate = true;
        controls.current.enableDamping = true;
        controls.current.autoRotate = true;
      }
    }
  }, [tabs, controls]);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 40, position: [0, 0, 2] }}>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} position={[10, 15, 10]} castShadow />
      <Suspense fallback={<Loader />}>
        <Model
          rotation={rotation}
          position={position}
          materialType={product.options && findMaterial()}
        />
        <Environment preset="city" />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -0.6, 0]}
          opacity={0.5}
          width={10}
          height={10}
          blur={0.5}
          far={0.8}
        />
      </Suspense>

      <OrbitControls
        ref={controls}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
        dampingFactor={0.15}
      />
    </Canvas>
  );
}
