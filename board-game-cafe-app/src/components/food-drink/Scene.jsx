import React, { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";

import Model from "./Model";
import { StyledCanvas } from "../../styles/fooddrink";

function CameraSetup({ modelSize }) {
  const { camera } = useThree();

  useEffect(() => {
    if (modelSize) {
      const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z);
      const distance = maxDim * 0.8; 
      camera.position.set(0, distance * 0.5, distance);
      camera.lookAt(0, 0, 0);
    }
  }, [camera, modelSize]);

  return null;
}

function Scene({ file_name, isHovered }) {
  const [modelSize, setModelSize] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledCanvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={1} />{" "}
        
        <directionalLight
          position={[10, 10, 5]}
          intensity={2}
          castShadow
        />{" "}
      
        <directionalLight
          position={[-10, 10, -5]}
          intensity={1}
          castShadow
        />{" "}
       
        <Model
          url={`${process.env.REACT_APP_API_BASE_URL}/file/download/${file_name}`}
          setModelSize={setModelSize}
          isHovered={isHovered}
        />
        <CameraSetup modelSize={modelSize} />{" "}
       
      </StyledCanvas>
    </div>
  );
}

export default Scene;
