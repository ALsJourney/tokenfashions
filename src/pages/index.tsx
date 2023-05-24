import { type NextPage } from "next";
import HeaderComponent from "~/components/HeaderComponent";
import dynamic from "next/dynamic";
import MainContent from "~/components/MainContent";
import { Canvas } from "@react-three/fiber";

const Home: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [1, 2, 45],
        }}
      >
        <MainContent />
      </Canvas>
    </>
  );
};

export default Home;
