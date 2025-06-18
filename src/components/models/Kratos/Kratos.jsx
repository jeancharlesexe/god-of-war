import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Kratos = () => {
  const { scene } = useGLTF('/models/kratos-rigged.glb'); 
  const [spine, setSpine] = useState(null);
  const [head, setHead] = useState(null);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isBone) {
        if (child.name === 'CC_Base_Spine02') {
          setSpine(child);
        }
        if (child.name === 'CC_Base_Head') {
          setHead(child);
        }
      }
      if (child.isMesh) {
        child.frustumCulled = false;
        child.geometry.computeBoundingBox();
        child.geometry.computeBoundingSphere();
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (spine) {
      const t = state.clock.getElapsedTime();
      spine.rotation.x = Math.sin(t) * 0.01;
      spine.rotation.y = Math.sin(t * 0.5) * 0.01;
    }
    if (head) {
        const t = state.clock.getElapsedTime();
        head.rotation.y = Math.sin(t * 0.5) * 0.05;
        head.rotation.x = Math.sin(t) * 0.02;
    }
  });

    return (
    <group>
      <primitive 
        object={scene} 
        scale={0.5} 
        rotation={[0, 0, 0]}
      />
    </group>
  )
}

export default Kratos;