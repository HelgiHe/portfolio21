import React, { useRef, useState } from 'react'
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useFrame } from '@react-three/fiber'

const Sphere = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef(0)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(0)
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  const scale = spring.to([0, 1], [1, 3]);
  const rotation = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([0, 1], ["#6246ea", "#e45858"]);

  // Rotate mesh every frame, this is outside of React without overhead

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
      <sphereGeometry args={[1, 16, 16]} />
      <a.meshStandardMaterial attach="material" roughness={0.5} color={color} />
    </a.mesh>
  )
}

export { Sphere }