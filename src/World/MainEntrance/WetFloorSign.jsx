import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function WetfloorSign1() {
    const sign = useGLTF('/models/Misc/Wet Floor Sign (1).glb');

    // Fixed values for the model's properties
    const scale = [1, 1, 1]; // Example scale value
    const position = [40, 0, -2]; // Example position value
    const rotation = [0, 0, 0]; // Example rotation value (in radians)

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={sign.scene} 
                    scale={scale}
                    position={position} 
                    rotation={rotation}
                />
            </RigidBody>
        </>
    );
}
