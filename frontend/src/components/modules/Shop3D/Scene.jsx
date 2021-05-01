import { useRef, Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useThree, extend } from "react-three-fiber";
import { useGLTF, ContactShadows, Environment } from "@react-three/drei";

extend({ OrbitControls });

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scooterV1.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.scooter_01_glass.geometry}
        material={materials.scooter_01_glass}
      />
      <mesh
        geometry={nodes.scooter_01.geometry}
        material={materials.scooter_01}
      />
    </group>
  );
}

export default function Scene() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return (
    <>
      <ambientLight />
      <spotLight position={[10, 10, 10]} />
      <orbitControls args={[camera, domElement]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </>
  );
}
