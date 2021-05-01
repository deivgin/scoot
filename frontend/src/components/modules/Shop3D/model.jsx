import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
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
