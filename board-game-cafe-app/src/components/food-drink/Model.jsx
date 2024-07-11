import React, { useEffect, useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

export default function Model({ url, setModelSize,isHovered }) {
  const gltf = useLoader(GLTFLoader, url);
  const ref = useRef();

  const scene = useMemo(() => {
    const clonedScene = gltf.scene.clone();
    return clonedScene;
  }, [gltf]);

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const size = box.getSize(new THREE.Vector3());
      setModelSize(size); // Передаем размер модели в родительский компонент
      const center = box.getCenter(new THREE.Vector3());
      ref.current.position.sub(center); // Центрируем объект
    }
  }, [scene, setModelSize]);

  useFrame(() => {
    if (ref.current && isHovered) {
        ref.current.rotation.y += 0.01; // Вращаем модель вокруг оси Y
      }
  });


  return <primitive ref={ref} object={scene} />;
}
