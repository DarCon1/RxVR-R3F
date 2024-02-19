import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function Monitor2() {
    const tv = useGLTF('/models/Monitors/Tv - Copy (2).glb');

    // Fixed values for the model's properties
    const scale = [1.3, 1.3, 1.3]; // Example scale value
    const position = [18, 2.5, -14.0]; // Example position value
    const rotation = [0, 0.28, 0]; // Example rotation value (in radians)

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={tv.scene} 
                    scale={scale}
                    position={position} 
                    rotation={rotation}
                />
            </RigidBody>
        </>
    );
}
