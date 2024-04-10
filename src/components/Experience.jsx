import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import Airplane from "./Airplan";
import Background from "./Background";
import Cloud from "./Cloud";
import * as THREE from "three";
const Experience = () => {
  const { scene: originalCloudScene, materials: cloudMaterials } = useGLTF(
    "/models/cloud/model.glb"
  );

  const cloudData = [
    {
      id: 1,
      model: originalCloudScene.clone(),
      material: cloudMaterials,
      position: [1, 1.2, -4],
      scale: [0.5, 0.4, 0.5],
      opacity: 0.9,
    },
    {
      id: 2,
      model: originalCloudScene.clone(),
      material: cloudMaterials,
      position: [2, 1.2, -8],
      scale: [0.5, 0.4, 0.5],
      opacity: 0.5,
    },
    {
      id: 3,
      model: originalCloudScene.clone(),
      material: cloudMaterials,
      position: [1, 1.5, -12],
      scale: [0.5, 0.4, 0.5],
      opacity: 0.3,
    },
  ];

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

      {cloudData.map((item) => (
        <Cloud
          scene={item.model}
          materials={item.material}
          opacity={item.opacity}
          key={item.id}
          position={item.position}
          scale={item.scale}
        />
      ))}
    </>
  );
};

export default Experience;
