import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Airplane = (props) => {
  const gltf = useGLTF("/models/airplane/model.glb");

  const helixSpeed = 6;

  useFrame((_, delta) => {
    gltf.scene.children[1].rotation.x += delta * helixSpeed;
  }, []);

  return <primitive object={gltf.scene} {...props} />;
};
export default Airplane;
useGLTF.preload("/models/airplane/model.glb");
