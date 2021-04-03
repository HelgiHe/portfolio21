import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";
import {Cone} from './Cone';
import {Sphere} from './Sphere'

const Scene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[16, 16, 16]} />
      <Box position={[-3.2, -4, 0]} />
      <Cone position={[1,1,1]} />
      <Sphere position={[0,0,0]} />

      <Box position={[2.2, 5, 0]} />
    </Canvas>
  );
};

export { Scene };
