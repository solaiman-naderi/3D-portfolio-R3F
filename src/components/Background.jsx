import { Environment, Sphere } from "@react-three/drei";
import { BackSide } from "three";
import { LayerMaterial, Gradient } from "lamina";
const Background = () => {
  return (
    <>
      <Environment
        background="both"
        files={["/textures/backgrounds/venice_sunset_1k.hdr"]}
      />
      <Sphere scale={[10, 10, 10]} rotation-y={Math.PI / 2}>
        <LayerMaterial lighting="physical" side={BackSide} transmission={1}>
          <Gradient
            colorA={"#357ca1"}
            colorB={"#fff"}
            axes="y"
            start={1}
            end={-0.5}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
export default Background;
