import { Float, Line, OrbitControls, useGLTF } from "@react-three/drei";
import Airplane from "./Airplan";
import Background from "./Background";
import Cloud from "./Cloud";
import * as THREE from "three";
import { useMemo } from "react";

const LINE_NB_POINTS = 2000;
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

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
        new THREE.Vector3(-3, 0, -30),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(5, 0, -50),
        new THREE.Vector3(7, 0, -60),
        new THREE.Vector3(5, 0, -70),
        new THREE.Vector3(0, 0, -80),
        new THREE.Vector3(0, 0, -90),
        new THREE.Vector3(0, 0, -100),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const linePoint = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);

    return shape;
  }, [curve]);

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

      {/* Cloud */}
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

      {/* Line */}
      <group position-y={-2}>
        <Line
          points={linePoint}
          color={"white"}
          opacity={0.7}
          transparent
          lineWidth={16}
        />
      </group>
    </>
  );
};

export default Experience;
