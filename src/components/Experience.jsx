import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import Airplane from "./Airplan";
import Background from "./Background";
import Cloud from "./Cloud";

const Experience = () => {
  const { scene: cloudScene, materials: cloudMaterials } = useGLTF(
    "/models/cloud/model.glb"
  );

  return (
    <>
      <OrbitControls />
      <Background />
      <Float speed={2} floatIntensity={2}>
        <Airplane
          rotation-y={Math.PI / 2}
          scale={[0.2, 0.2, 0.2]}
          position-y={0.1}
        />
      </Float>

      <Cloud
        scene={cloudScene}
        materials={cloudMaterials}
        opacity={0.9}
        position={[1, 1, -2]}
        scale={[0.53, 1, 1]}
        color="red"
      />
    </>
  );
};

export default Experience;
