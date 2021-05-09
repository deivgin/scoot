import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import Model from "../../elements/model";
import Model from "../../elements/model1.5";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { useSelector } from "react-redux";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{Math.floor(progress)} % loaded</Html>;
}

export default function Scene() {
  const [camera, setCamera] = useState([0, 0, 2]);
  const product = useSelector((state) => state.product);
  const tabs = useSelector((state) => state.tabs);
  const findMaterial = () =>
    product.options.find((item) => item.name === "material");

  useEffect(() => {
    tabs && handleCameraPosition(tabs.currTab.name);
  }, [tabs]);

  const handleCameraPosition = (tabName) => {
    switch (tabName) {
      case "wheels":
        setCamera([0, 5, 0]);
        console.log(camera);
        break;
      default:
        return;
    }
  };

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 40, position: camera }}>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} position={[10, 15, 10]} castShadow />
      <Suspense fallback={<Loader />}>
        <Model
          position={[0, -0.5, 0]}
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
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}
