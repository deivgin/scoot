import Box from "./Box";

export default function Scene() {
  return (
    <>
      <ambientLight />
      <spotLight position={[10, 10, 10]} />
      <Box />
    </>
  );
}
