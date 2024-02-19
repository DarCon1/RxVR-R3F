import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function Pamphletholders() {
    const pottedPlant = useGLTF('/models/posterstand/posterstand.glb');

    // Fixed values for the model's properties
    const scale = [1, 1, 1]; // Example scale value
    const position = [30, 0, 20]; // Example position value
    const rotation = [0, -0.3, 0]; // Example rotation value (in radians)

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={pottedPlant.scene} 
                    scale={scale}
                    position={position} 
                    rotation={rotation}
                />
            </RigidBody>
        </>
    );
}
