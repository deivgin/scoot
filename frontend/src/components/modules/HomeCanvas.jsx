import { useRef } from "react";
import { Canvas } from "react-three-fiber";
import state from "../../canvasStore";
import { Block, useBlock } from "../fragments/Block";

function Plane({ color = "white", ...props }) {
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
}

function Content({ left, children }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock();
  const aspect = 1.75;
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2;
  return (
    <group possition={[alignRight * (left ? -1 : 1), 0, 0]}>
      <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} />
      {children}
    </group>
  );
}

export default function HomeCanvas() {
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);

  return (
    <>
      <Canvas>
        {/* {First Section} */}
        <Block factor={1.5} offset={0}>
          <Content left />
        </Block>
      </Canvas>
      <div ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  );
}
