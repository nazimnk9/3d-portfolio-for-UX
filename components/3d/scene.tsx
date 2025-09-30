"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { PerspectiveCamera, Float, Environment, Sphere, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

function ProfileImage() {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useLoader(
    THREE.TextureLoader,
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shimul-rc8gdnAQcvJGlgfTcwhJCeeUdaXLfb.jpg",
  )

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.3}>
      <group>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <circleGeometry args={[2, 64]} />
          <meshStandardMaterial map={texture} side={THREE.DoubleSide} metalness={0.3} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, -0.1]}>
          <ringGeometry args={[2, 2.2, 64]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, 0, -0.15]}>
          <ringGeometry args={[2.2, 2.4, 64]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
        </mesh>
        <mesh position={[0, 0, -0.2]}>
          <ringGeometry args={[2.4, 2.6, 64]} />
          <meshBasicMaterial color="#ec4899" transparent opacity={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

function FloatingShapes() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.15
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-4, 2, -2]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.9}
            roughness={0.1}
            emissive="#3b82f6"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={2.5}>
        <mesh position={[4, -1, -1]}>
          <torusGeometry args={[0.6, 0.2, 16, 32]} />
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.9}
            roughness={0.1}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh position={[-3, -2, -3]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#06b6d4"
            metalness={0.9}
            roughness={0.1}
            emissive="#06b6d4"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={1.8} floatIntensity={2.2}>
        <mesh position={[3.5, 2.5, -2.5]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.9}
            roughness={0.1}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={1.4} floatIntensity={1.6}>
        <mesh position={[-4.5, -1.5, -2]}>
          <coneGeometry args={[0.4, 0.8, 32]} />
          <meshStandardMaterial
            color="#f97316"
            metalness={0.9}
            roughness={0.1}
            emissive="#f97316"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      <Float speed={2.4} rotationIntensity={2.2} floatIntensity={2.4}>
        <mesh position={[2, 3, -3]}>
          <tetrahedronGeometry args={[0.5]} />
          <meshStandardMaterial
            color="#10b981"
            metalness={0.9}
            roughness={0.1}
            emissive="#10b981"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>
    </group>
  )
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 200

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  const colors = useMemo(() => {
    const cols = new Float32Array(particleCount * 3)
    const colorPalette = [
      new THREE.Color("#3b82f6"),
      new THREE.Color("#8b5cf6"),
      new THREE.Color("#ec4899"),
      new THREE.Color("#06b6d4"),
      new THREE.Color("#f97316"),
    ]
    for (let i = 0; i < particleCount; i++) {
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      cols[i * 3] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b
    }
    return cols
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

function BackgroundSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
    }
  })

  return (
    <Sphere ref={meshRef} args={[8, 64, 64]} position={[0, 0, -5]}>
      <MeshDistortMaterial
        color="#1e1b4b"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.5}
        transparent
        opacity={0.3}
      />
    </Sphere>
  )
}

export default function Scene3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg" />
  }

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />

      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} color="#06b6d4" />

      <Environment preset="city" />

      <BackgroundSphere />
      <ProfileImage />
      <FloatingShapes />
      <Particles />
    </Canvas>
  )
}
