import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function HandSanitiser1() {
    const sanistiser = useGLTF('/models/Misc/poppy_sanatize_station/scene.gltf');

    // Fixed values for the model's properties
    const scale = [0.005, 0.005, 0.005]; // Example scale value
    const position = [12, 1.2, -6]; // Example position value
    const rotation = [0, 1.85, 0]; // Example rotation value (in radians)

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={sanistiser.scene} 
                    scale={scale}
                    position={position} 
                    rotation={rotation}
                />
            </RigidBody>
        </>
    );
}
