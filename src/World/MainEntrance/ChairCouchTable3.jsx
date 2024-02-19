import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function ChairCouchTable3() {
    const cornerCouchReception = useGLTF('/models/Couch/chaircouchtable - Copy (2).glb');

    // Define fixed values for scale, position, and rotation
    const scale = [7, 7, 7]; // Example scale
    const position = [5, 0, -10]; // Example position
    const rotation = [0, -1.3, 0]; // Example rotation (in radians)

    return (
        <>
            <RigidBody colliders="hull" type="fixed">
                <primitive 
                    object={cornerCouchReception.scene} 
                    scale={scale}
                    position={position}
                    rotation={rotation}
                />
            </RigidBody>
        </>
    );
}
