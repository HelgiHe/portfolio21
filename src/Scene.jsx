import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "./Box";
import {Cone} from './Cone';
import {Sphere} from './Sphere';
import {Goo} from './Goo'

const Scene = () => {
  return (
    <div style={{height: '100%'}}>
      <Canvas>
        <ambientLight />
        <pointLight position={[16, 16, 16]} />
        <Box position={[-3.2, -4, 0]} />
        <Cone position={[3,0,1]} />
        <Sphere position={[0,0,0]} />
        <Box position={[2.2, 5, 0]} />
      </Canvas>
    </div>

  );
};

export { Scene };
