import { Link } from "react-router-dom";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Kratos from '../../components/models/Kratos/Kratos';

import styles from './Home.module.css'

const Home = ()=>{
    return(
        <div className={styles.home_container}>
            <div className={styles.model_container}>                <Canvas 
                    className={styles.canvas}                    camera={{
                        position: [0, 270, 300],
                        fov: 8,
                        near: 0.1,
                        far: 1000
                    }}>
                    <OrbitControls 
                        enableZoom={true} 
                        enablePan={false}
                        target={[0, 180, 0]}
                    />
                    <pointLight position={[10, 10, 10]} />
                    <ambientLight intensity={1.5} />
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