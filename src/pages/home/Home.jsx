import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Kratos from '../../components/models/Kratos/Kratos';

import styles from './Home.module.css'

const Home = ()=>{
    return(
        <div className={styles.home_container}>
            <div className={styles.model_container}>                <Canvas 
                    className={styles.canvas}                    camera={{
                        position: [0, 150, 300],
                        fov: 6, // 6
                        near: 0.1,
                        far: 5000
                    }}>
                    <OrbitControls 
                        enableZoom={true}
                        enableRotate={true}
                        enablePan={false}
                        target={[-20, 170, 0]}
                        minDistance={100}
                        maxDistance={800}
                    />     

                    <ambientLight intensity={0.1} />
                    
                    <directionalLight 
                        color="#ffffff" 
                        position={[-200, 150, 200]} 
                        intensity={1}
                    />
                    <directionalLight 
                        color="#f30000" 
                        position={[200, 100, 150]} 
                        intensity={1}
                    />
                    
                    
                    <Kratos />
                </Canvas>
            </div>
            <div className={styles.home_content}>
                <section className={styles.section}>
                    <h1>God of Waraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                    <p>Conteúdo da primeira seção...</p>
                </section>
                
                <section className={styles.section}>
                    <h2>História</h2>
                    <p>Conteúdo da segunda seção...</p>
                </section>
                
                <section className={styles.section}>
                    <h2>Personagens</h2>
                    <p>Conteúdo da terceira seção...</p>
                </section>
            </div>
        </div>
    )
}

export default Home;