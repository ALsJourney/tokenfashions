import {
  Center,
  OrbitControls,
  useMatcapTexture,
  useGLTF,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
const material = new THREE.MeshMatcapMaterial();

const CanvasComponent: React.FC = () => {
  const model = useGLTF("./models/hoodie-v2.glb");

  const [matcapTexture] = useMatcapTexture("758391_BAC2CA_435263_A1ACBC", 256);

  const modelRef = useRef<THREE.Object3D>();

  const controlsRef = useRef<OrbitControls>();

  const autoRotate = useRef(true);

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  useFrame(({ clock }: { clock: THREE.Clock }) => {
    if (modelRef.current && autoRotate.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} />
      <pointLight intensity={0.8} />
      <OrbitControls
        ref={controlsRef}
        makeDefault
        onStart={() => (autoRotate.current = false)}
        onEnd={() => (autoRotate.current = true)}
      />
      <Center>
        <primitive
          object={model.scene}
          ref={modelRef}
          scale={0.2}
          position={[0, 0, 0]}
        />
      </Center>
    </>
  );
};

export default CanvasComponent;
