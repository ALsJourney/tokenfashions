import CanvasComponent from "./partials/CanvasComponent";
import TextComponent from "./partials/TextComponent";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import Socials from "./Socials";
const MainContent: React.FC = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 md:flex-row">
      <div className="flex-1">
        <Canvas
          flat
          camera={{
            fov: 35,
            near: 0.1,
            far: 200,
            position: [1, 2, 45],
          }}
        >
          <Suspense fallback={null}>
            <CanvasComponent />
          </Suspense>
        </Canvas>
        <Loader />
      </div>

      <div className="flex-1">
        <TextComponent />
      </div>
    </div>
  );
};

export default MainContent;
