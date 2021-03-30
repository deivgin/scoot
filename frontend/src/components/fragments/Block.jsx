import { createContext, useContext, useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
import state from "../../canvasStore";
import lerp from "lerp";

const offsetContext = createContext(0);

export function Block({ children, offset, factor, ...props }) {
  const ref = useRef();
  // Fetch parent offset and the height of a single section
  const { offset: parentOffset, sectionHeight } = useBlock();
  offset = offset !== undefined ? offset : parentOffset;
  // Runs every frame and lerps the inner block into its place
  useFrame(() => {
    const curY = ref.current.position.y;
    const curTop = state.top.current;
    ref.current.position.y = lerp(curY, (curTop / state.zoom) * factor, 0.1);
  });
  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  );
}

export function useBlock() {
  const { sections, pages } = state;
  const { viewport, size } = useThree();
  const offset = useContext(offsetContext);
  const mobile = size.width < 700;
  const canvasWidth = viewport.width;
  const canvasHeight = viewport.height;
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1));
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
  const margin = canvasWidth * (mobile ? 0.2 : 0.1);

  return {
    margin,
    offset,
    canvasWidth,
    canvasHeight,
    sectionHeight,
    contentMaxWidth,
  };
}
