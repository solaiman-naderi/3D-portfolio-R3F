import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { MeshStandardMaterial } from "three";
const Cloud = ({ scene, materials, color, ...props }) => {
  useEffect(() => {
    if (!scene) return;

    const addMaterial = scene.traverse((child) => {
      if (child.isMesh) {
        const customMaterial = new MeshStandardMaterial({
          ...materials["lambert2SG.001"],
          color,
        });
        child.material = customMaterial;
      }
    });

    return addMaterial;
  }, [scene, materials]);

  return (
    <>
      <group {...props}>
        <primitive object={scene} />
      </group>
    </>
  );
};
export default Cloud;
useGLTF.preload("/models/cloud/model.glb");
