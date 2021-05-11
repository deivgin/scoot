import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { animated } from "@react-spring/three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scooter_v3.glb");
  const material = props.materialType.material.data.name;
  const controls = props.materialType.controls.data.name;

  return (
    <animated.group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.scooter_glass.geometry}
        material={materials.scooter_01_glass}
      />
      <mesh
        geometry={nodes.Scooter_wheels_basic.geometry}
        material={nodes.Scooter_wheels_basic.material}
      />
      <mesh
        geometry={nodes.Scooter_components.geometry}
        material={nodes.Scooter_components.material}
      />
      <mesh
        geometry={nodes.Scooter_wheel_sides.geometry}
        material={nodes.Scooter_wheel_sides.material}
      />
      {material === "Basic material" && (
        <mesh
          geometry={nodes.Scooter_frame_basic.geometry}
          material={nodes.Scooter_frame_basic.material}
        />
      )}

      {material === "Royal Blue" && (
        <mesh
          geometry={nodes.Scooter_frame_blue.geometry}
          material={nodes.Scooter_frame_blue.material}
        />
      )}

      {material === "Copper" && (
        <mesh
          geometry={nodes.Scooter_frame_Gold.geometry}
          material={materials["Material.002"]}
        />
      )}

      {controls === "Basic controls" && (
        <mesh
          geometry={nodes.Scooter_handle.geometry}
          material={nodes.Scooter_handle.material}
        />
      )}

      {controls === "Royal Blue" && (
        <mesh
          geometry={nodes.Scooter_handle_alt.geometry}
          material={nodes.Scooter_handle_alt.material}
        />
      )}

      <mesh
        geometry={nodes.Scooter_controls.geometry}
        material={nodes.Scooter_controls.material}
      />
    </animated.group>
  );
}
