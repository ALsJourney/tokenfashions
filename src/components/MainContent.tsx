import CanvasComponent from "./partials/CanvasComponent";
import TextComponent from "./partials/TextComponent";
import { Canvas } from "@react-three/fiber";
const MainContent: React.FC = () => {
  return (
    <>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [1, 2, 45],
        }}
      >
        <CanvasComponent />
      </Canvas>
      <TextComponent />
    </>
  );
};

export default MainContent;
