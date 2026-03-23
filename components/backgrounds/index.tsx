'use client'

import { Suspense, type ComponentType } from 'react'
import { Canvas } from '@react-three/fiber'
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
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
