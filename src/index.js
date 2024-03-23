import ReactDOM from 'react-dom'
import { useState, useRef, Suspense, useEffect } from 'react'
import './styles.css'
import App from './App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Points, PointMaterial, useGLTF, OrbitControls } from '@react-three/drei'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshBasicMaterial, Color } from 'three'
useGLTF.preload("./lgo.glb")

function Logo(props) {
  const {scene} = useGLTF("./lgo.glb")

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color = new Color(0xFF00FF)
      }
    })
  }, [scene])

  return (
    <group>
      <directionalLight intensity={0.1} position={[0,0,1]} />
      <directionalLight intensity={0.25} position={[1,0,0]} />
      <primitive
        object={scene}
        scale={0.03}
        position={ [0, 0, 0] }
        rotation-y={0.1}
        {...props} />
    </group>
  )
}
function LogoCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 0.3] }}>
      <OrbitControls enableZoom={true} zoomSpeed={1.2} enableRotate={true} rotateSpeed={0.1} />
      <Suspense fallback={""}>
        <Logo/>
      </Suspense>
    </Canvas>
  )
}



function Overlay() {
  return (
    <div className='overlay'>
      <div className='overlay-container'>

        <div className='logo'>
          <LogoCanvas/>
        </div>
        <div className='border email-container'>
          <input className='input input-arrow' placeholder='subscribe' type='email' id='email'></input>
          <span><FontAwesomeIcon icon={faArrowRight} /></span>
        </div>

        <div className='border socials'>
          <a className='social-link'>
            <span className='social-link'><FontAwesomeIcon icon={faFacebook} /></span>
          </a>

          <a className='social-link'>
            <span className='social-link'><FontAwesomeIcon icon={faInstagram} /></span>
          </a>

          <a className='social-link'>
            <span className='social-link'><FontAwesomeIcon icon={faTwitter}/></span>
          </a>

          <a className='social-link'>
            <span className='social-link'><FontAwesomeIcon icon={faTiktok}/></span>
          </a>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <>
    <App /> <Overlay />
  </>,
  document.getElementById('root')
)
