import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

const Kratos = () => {
  const { scene } = useGLTF('/models/kratos-rigged.glb'); 

  
    
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = false;
        child.geometry.computeBoundingBox();
        child.geometry.computeBoundingSphere();
      }
    });
  }, [scene]);
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