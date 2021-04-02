import { useRef, useEffect } from "react";
import styled from "styled-components";
import { Canvas } from "react-three-fiber";
import state from "./store";

export default function HomePageScroll() {
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
      <Canvas></Canvas>
      <ScrollArea ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </ScrollArea>
    </>
  );
}

const ScrollArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;
