import React from 'react'
import { Environment, Gltf, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {Avatar} from '../../public/models/Emilian'
import { Classroom } from '../../public/models/Classroom'
import CameraManager from './CameraManager'


const EnvironmentComponent = () => {
  return (
    <Canvas>
    <CameraManager/>
    <Environment preset="city" color={"white"} />
    <ambientLight intensity={0.8} color={"pink"}/>
    {/* <directionalLight position={[0, 5, 0]} intensity={1} castShadow/>
    <pointLight position={[0, 2, 0]} intensity={1} castShadow/>  */}
    <Classroom position={[0, -8, 0]} rotation={[0, Math.PI, 0]}/>
    <Avatar scale={(7, 7, 7)}
        position={[-12, -7.95, -14]}
        rotation={[0, 1, 0]}/>
</Canvas>

  )
}

export default EnvironmentComponent