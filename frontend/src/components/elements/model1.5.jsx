import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scooterV1.5.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.scooter_01_glass.geometry}
        material={materials.scooter_01_glass}
      />

      <mesh
        geometry={nodes.front_wheel.geometry}
        material={nodes.front_wheel.material}
      />
      <mesh
        geometry={nodes.back_wheel.geometry}
        material={nodes.back_wheel.material}
      />
      <mesh
        geometry={nodes.scooter_01003.geometry}
        material={nodes.scooter_01003.material}
      />
      {props.materialType === "Basic material" && (
        <mesh
          geometry={nodes.scooter_basic.geometry}
          material={nodes.scooter_basic.material}
        />
      )}
      {props.materialType === "Hot Pink Steel" && (
        <mesh
          geometry={nodes.scooter_01003_1.geometry}
          material={materials.Pink}
        />
      )}
    </group>
  );
}
