import { Environment, Sphere } from "@react-three/drei";
import { BackSide } from "three";
import { LayerMaterial, Gradient } from "lamina";
const Background = () => {
  return (
    <>
      <Environment
        background="only"
        files={["/textures/backgrounds/venice_sunset_1k.hdr"]}
      />
      <Sphere scale={[10, 10, 10]} rotation-y={Math.PI / 2}>
        <LayerMaterial lighting="physical" side={BackSide}>
          <Gradient />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
export default Background;
