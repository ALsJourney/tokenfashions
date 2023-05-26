import { Canvas } from "@react-three/fiber";
import {
  Center,
  OrbitControls,
  useMatcapTexture,
  useGLTF,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";

const material = new THREE.MeshMatcapMaterial();

const CanvasComponent: React.FC = () => {
  const model = useGLTF("./models/hoodie-v2.glb");

  const [matcapTexture] = useMatcapTexture("758391_BAC2CA_435263_A1ACBC", 256);

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} />
      <pointLight intensity={0.8} />
      <OrbitControls makeDefault />
      <Center>
        <primitive object={model.scene} scale={0.2} position={[0, 0, 0]} />
      </Center>
    </>
  );
};

export default CanvasComponent;
