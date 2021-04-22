import Box from "./Box";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useThree, extend } from "react-three-fiber";

extend({ OrbitControls });

export default function Scene() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return (
    <>
      <ambientLight />
      <spotLight position={[10, 10, 10]} />
      <Box />
      <orbitControls args={[camera, domElement]} />
    </>
  );
}
