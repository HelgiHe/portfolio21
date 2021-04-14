import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const Cone = (props) => {
  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(0)
  // Rotate mesh every frame, this is outside of React without overhead

  const { spring } = useSpring({
    spring: active,
    config: { mass: 2, tension: 900, friction: 60, precision: 0.00001 },
  });

  const scale = spring.to([0, 1], [3, 5]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([0, 1], ["#cf6679", "#a62839"]);


  // Return view, these are regular threejs elements expressed in JSX
  return (
    <a.mesh
      {...props}
      ref={mesh}
      rotation-y={rotation}
      scale-x={scale}
      scale-z={scale}  
      onClick={() => setActive(Number(!active))}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <coneGeometry args={[0.2, 0, 12]} />
      <a.meshStandardMaterial color={color} />
    </a.mesh>
  )
}

export { Cone }