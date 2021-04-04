import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Cone = (props) => {
  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (mesh.current.rotation.x += 0.001))
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01))
  useFrame((state, delta) => (mesh.current.rotation.z += 0.001))


  // Return view, these are regular threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <coneGeometry args={[1, 3, 6]} />
      <meshStandardMaterial color={hovered ? 'aliceblue' : 'purple'} />
    </mesh>
  )
}

export { Cone }