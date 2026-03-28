'use client'

import { Suspense, type ComponentType } from 'react'
import { Canvas } from '@react-three/fiber'
import { useTheme } from 'next-themes'
import {
  CosmosScene,
  ChaosScene,
  GalaxyScene,
  ParticlesScene,
  NetworkScene,
  DnaScene,
  FlowScene,
  PulseScene,
  CoinsScene,
  GridScene,
  OrbitsScene,
  ShieldScene,
  HexgridScene,
  MatrixScene,
  TerminalScene,
  PipelineScene,
  CubesScene,
  ConnectionsScene,
  FortressScene,
  InceptionScene,
  RocketScene,
  TimelineScene,
  LaunchpadScene,
  WaveScene,
} from './scenes'

const sceneMap: Record<string, ComponentType> = {
  cosmos: CosmosScene,
  chaos: ChaosScene,
  galaxy: GalaxyScene,
  particles: ParticlesScene,
  network: NetworkScene,
  dna: DnaScene,
  flow: FlowScene,
  pulse: PulseScene,
  coins: CoinsScene,
  grid: GridScene,
  orbits: OrbitsScene,
  shield: ShieldScene,
  hexgrid: HexgridScene,
  matrix: MatrixScene,
  terminal: TerminalScene,
  pipeline: PipelineScene,
  cubes: CubesScene,
  connections: ConnectionsScene,
  fortress: FortressScene,
  inception: InceptionScene,
  rocket: RocketScene,
  timeline: TimelineScene,
  launchpad: LaunchpadScene,
  wave: WaveScene,
}

export function Background3D({ type }: { type: string }) {
  const Scene = sceneMap[type] || CosmosScene
  const { theme } = useTheme()
  const bgColor = theme === 'dark' ? '#020617' : '#e8edf4'

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 5] }}
      gl={{ alpha: true, antialias: true }}
    >
      <color attach="background" args={[bgColor]} />
      <ambientLight intensity={theme === 'dark' ? 0.3 : 0.6} />
      <pointLight position={[5, 5, 5]} intensity={theme === 'dark' ? 0.5 : 0.8} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
