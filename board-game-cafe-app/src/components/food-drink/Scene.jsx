import React, { useEffect, useMemo, useState } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";

import Model from "./Model";
import { StyledCanvas } from "../../styles/fooddrink";

function CameraSetup({ modelSize }) {
  const { camera } = useThree();

  useEffect(() => {
    if (modelSize) {
      const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z);
      const distance = maxDim * 1.2; 
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

/*

License - https://creativecommons.org/licenses/by/4.0/

Breakfast
{
Croissant - https://sketchfab.com/3d-models/croissant-food-3ee61731b08749b3ad39d0f2375e6499
Bagle - https://sketchfab.com/3d-models/bagle-b3122fc6d5f245beb37f9ff9560878c8
Classic Club Sandwich - https://sketchfab.com/3d-models/blt-sandwich-a160e3b9b8f34a23bb491495e5024607 
Banana Pancakes - https://sketchfab.com/3d-models/handpainted-pancake-c7038c990ba34a268b044839057f2a05 
Hamburger - https://sketchfab.com/3d-models/hamburger-b4cc15417d58445ebb698229d6161e61
Cheeseburger - https://sketchfab.com/3d-models/mcdonalds-double-cheeseburger-3fc5d6128b6347f39230a09217263551


}


Sides
{
Pasta - https://sketchfab.com/3d-models/pasta-bec7601a89f14d0bbe7eb40b48d14b26

Spicy Ramen Noodle - https://sketchfab.com/3d-models/spicy-ramen-noodle-101c08b5c8534944b43959b142a140b1

Pork Belly Tonkotsu Ramen - https://sketchfab.com/3d-models/pork-belly-tonkotsu-ramen-201a411da599473192e9ce7a3b7cbf31

Salmon tartine  - https://sketchfab.com/3d-models/salmon-tartine-b6dd89dadb104bfba43fc399477e5a3c

Japanese food pack sushi - https://sketchfab.com/3d-models/japanese-food-pack-sushi-free-fd2598a0b5f44e9abf9ff01fc7cb930c
}


Deserts{
Blueberry cupcake - https://sketchfab.com/3d-models/blueberry-cupcake-a6726b68b53940a892927a77b6a8b441

Donuts - https://sketchfab.com/3d-models/donuts-aeaf57373f2d44289ff1745af1b2c270 

RedVelvet - https://sketchfab.com/3d-models/redvelvet-42c94a2e912e4cfd8ba8a054453cd653

Lemon Tart - https://sketchfab.com/3d-models/lemon-tart-db0d8656b7ca4ecd8efb134e2878c477

}

for company{
YAKITORI - https://sketchfab.com/3d-models/yakitori-4de36fd537c844b5800d003c06087d17

Pizza Realistic - https://sketchfab.com/3d-models/pizza-realistic-2443db3e29c64b03853685872c15ae00

Pepperoni - https://sketchfab.com/3d-models/high-quality-salami-pizza-v3-744437e196614170874c79dbde5e0068

Plate with small sandwitches - https://sketchfab.com/3d-models/plate-with-small-sandwitches-3c60a71b1e034fde8329b1dacbd2d2e4

}

bewerages{
Beer Mug Glass-https://sketchfab.com/3d-models/beer-mug-glass-e971453ae97043a2b1348faf36065fed


Soda Can - https://sketchfab.com/3d-models/high-poly-soda-can-4ace4fbc91124683976db7e9530f98ae

Ice Tea - https://sketchfab.com/3d-models/glass-of-tea-7669b27d4e634e7b9cd114d50c33af97

Cocktail - https://sketchfab.com/3d-models/summer-drink-4336815ca8734e099399473c8669f3ba

Cup of Coffee/Tea - https://sketchfab.com/3d-models/cup-of-coffee-f82264218618431d81b8a280076a786e

}


*/
