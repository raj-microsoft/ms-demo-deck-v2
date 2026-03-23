'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function spherePositions(count: number, radius: number): Float32Array {
  const p = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random())
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    p[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    p[i * 3 + 2] = r * Math.cos(phi)
  }
  return p
}

function randomInBox(count: number, size: number): Float32Array {
  const p = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    p[i * 3] = (Math.random() - 0.5) * size
    p[i * 3 + 1] = (Math.random() - 0.5) * size
    p[i * 3 + 2] = (Math.random() - 0.5) * size
  }
  return p
}

/* ------------------------------------------------------------------ */
/*  1. CosmosScene – starfield, blue/purple                           */
/* ------------------------------------------------------------------ */

export function CosmosScene() {
  const ref = useRef<THREE.Points>(null)
  const count = 800
  const positions = useMemo(() => spherePositions(count, 3.5), [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.elapsedTime * 0.04
    ref.current.rotation.x = clock.elapsedTime * 0.015
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#818cf8" transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

/* ------------------------------------------------------------------ */
/*  2. ChaosScene – chaotic orbiting particles, red/orange            */
/* ------------------------------------------------------------------ */

export function ChaosScene() {
  const r1 = useRef<THREE.Points>(null!)
  const r2 = useRef<THREE.Points>(null!)
  const r3 = useRef<THREE.Points>(null!)
  const n = 300
  const p1 = useMemo(() => spherePositions(n, 2), [])
  const p2 = useMemo(() => spherePositions(n, 1.5), [])
  const p3 = useMemo(() => spherePositions(n, 2.5), [])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (r1.current) { r1.current.rotation.x = t * 0.3; r1.current.rotation.z = t * 0.2 }
    if (r2.current) { r2.current.rotation.y = t * 0.4; r2.current.rotation.x = -t * 0.15 }
    if (r3.current) { r3.current.rotation.z = t * 0.35; r3.current.rotation.y = -t * 0.1 }
  })

  return (
    <group>
      <points ref={r1}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[p1, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#ef4444" transparent opacity={0.55} sizeAttenuation />
      </points>
      <points ref={r2}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[p2, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.025} color="#f97316" transparent opacity={0.55} sizeAttenuation />
      </points>
      <points ref={r3}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[p3, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.018} color="#fbbf24" transparent opacity={0.45} sizeAttenuation />
      </points>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  3. GalaxyScene – spiral galaxy, cyan/blue                         */
/* ------------------------------------------------------------------ */

export function GalaxyScene() {
  const ref = useRef<THREE.Points>(null)
  const count = 900
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    const arms = 3
    for (let i = 0; i < count; i++) {
      const arm = i % arms
      const t = (i / count) * 2.5
      const angle = t * 4 + (arm / arms) * Math.PI * 2
      const spread = 0.25 * (t / 2.5)
      p[i * 3] = Math.cos(angle) * t + (Math.random() - 0.5) * spread
      p[i * 3 + 1] = (Math.random() - 0.5) * 0.08
      p[i * 3 + 2] = Math.sin(angle) * t + (Math.random() - 0.5) * spread
    }
    return p
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.06
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#22d3ee" transparent opacity={0.65} sizeAttenuation />
    </points>
  )
}

/* ------------------------------------------------------------------ */
/*  4. ParticlesScene – floating upward, blue/white                   */
/* ------------------------------------------------------------------ */

export function ParticlesScene() {
  const ref = useRef<THREE.Points>(null)
  const count = 500
  const positions = useMemo(() => randomInBox(count, 6), [])

  useFrame(() => {
    if (!ref.current) return
    const attr = ref.current.geometry.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < count; i++) {
      let y = attr.getY(i)
      y += 0.003
      if (y > 3) y = -3
      attr.setY(i, y)
    }
    attr.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#93c5fd" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

/* ------------------------------------------------------------------ */
/*  5. NetworkScene – connected grid nodes, blue                      */
/* ------------------------------------------------------------------ */

export function NetworkScene() {
  const groupRef = useRef<THREE.Group>(null)
  const cols = 6
  const rows = 4

  const { nodes, linePositions } = useMemo(() => {
    const n: [number, number, number][] = []
    const lp: number[] = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c - (cols - 1) / 2) * 0.9
        const y = (r - (rows - 1) / 2) * 0.9
        n.push([x, y, 0])
        const idx = r * cols + c
        if (c < cols - 1) { lp.push(x, y, 0, x + 0.9, y, 0) }
        if (r < rows - 1) { lp.push(x, y, 0, x, y + 0.9, 0) }
      }
    }
    return { nodes: n, linePositions: new Float32Array(lp) }
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      if ((child as THREE.Mesh).isMesh) {
        const s = 1 + Math.sin(clock.elapsedTime * 2 + i * 0.5) * 0.3
        child.scale.setScalar(s)
      }
    })
  })

  return (
    <group>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.2} />
      </lineSegments>
      <group ref={groupRef}>
        {nodes.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.7} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  6. DnaScene – double helix, green                                 */
/* ------------------------------------------------------------------ */

export function DnaScene() {
  const ref = useRef<THREE.Group>(null)
  const n = 30

  const helixData = useMemo(() => {
    const data: { a: [number, number, number]; b: [number, number, number] }[] = []
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 4
      const y = (i / n) * 4 - 2
      data.push({
        a: [Math.cos(t) * 0.8, y, Math.sin(t) * 0.8],
        b: [Math.cos(t + Math.PI) * 0.8, y, Math.sin(t + Math.PI) * 0.8],
      })
    }
    return data
  }, [])

  const rungs = useMemo(() => {
    const lp: number[] = []
    for (const d of helixData) {
      lp.push(...d.a, ...d.b)
    }
    return new Float32Array(lp)
  }, [helixData])

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.3
  })

  return (
    <group ref={ref}>
      {helixData.map((d, i) => (
        <group key={i}>
          <mesh position={d.a}>
            <sphereGeometry args={[0.06, 10, 10]} />
            <meshBasicMaterial color="#4ade80" transparent opacity={0.7} />
          </mesh>
          <mesh position={d.b}>
            <sphereGeometry args={[0.06, 10, 10]} />
            <meshBasicMaterial color="#22c55e" transparent opacity={0.7} />
          </mesh>
        </group>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[rungs, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#86efac" transparent opacity={0.25} />
      </lineSegments>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  7. FlowScene – sine wave ribbon, blue                             */
/* ------------------------------------------------------------------ */

export function FlowScene() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute
    const t = clock.elapsedTime
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      pos.setZ(i, Math.sin(x * 1.5 + t) * 0.3 + Math.sin(y * 2 + t * 0.7) * 0.15)
    }
    pos.needsUpdate = true
  })

  return (
    <mesh ref={ref} rotation={[-0.4, 0, 0]}>
      <planeGeometry args={[6, 3, 48, 24]} />
      <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.25} />
    </mesh>
  )
}

/* ------------------------------------------------------------------ */
/*  8. PulseScene – concentric pulsing rings, orange                  */
/* ------------------------------------------------------------------ */

export function PulseScene() {
  const refs = [
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
    useRef<THREE.Mesh>(null),
  ]

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    refs.forEach((r, i) => {
      if (!r.current) return
      const phase = (t * 0.5 + i * 0.8) % 4
      const s = 0.3 + phase * 0.7
      r.current.scale.setScalar(s)
      const mat = r.current.material as THREE.MeshBasicMaterial
      mat.opacity = Math.max(0, 0.5 - phase * 0.12)
    })
  })

  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      {refs.map((r, i) => (
        <mesh ref={r} key={i}>
          <ringGeometry args={[0.9, 1.0, 64]} />
          <meshBasicMaterial color="#f97316" transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  9. CoinsScene – floating gold discs                               */
/* ------------------------------------------------------------------ */

export function CoinsScene() {
  const groupRef = useRef<THREE.Group>(null)
  const coins = useMemo(() => {
    const arr: { pos: [number, number, number]; speed: number; axis: number }[] = []
    for (let i = 0; i < 10; i++) {
      arr.push({
        pos: [(Math.random() - 0.5) * 4, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 2],
        speed: 0.3 + Math.random() * 0.5,
        axis: Math.random() * Math.PI,
      })
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = clock.elapsedTime * coins[i].speed
      child.rotation.z = coins[i].axis
    })
  })

  return (
    <group ref={groupRef}>
      {coins.map((c, i) => (
        <mesh key={i} position={c.pos}>
          <cylinderGeometry args={[0.2, 0.2, 0.03, 24]} />
          <meshStandardMaterial color="#eab308" emissive="#eab308" emissiveIntensity={0.3} metalness={0.8} roughness={0.3} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  10. GridScene – wireframe grid with wave, cyan                    */
/* ------------------------------------------------------------------ */

export function GridScene() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute
    const t = clock.elapsedTime
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      pos.setZ(i, Math.sin(x + t) * 0.25 + Math.cos(y + t * 0.8) * 0.25)
    }
    pos.needsUpdate = true
  })

  return (
    <mesh ref={ref} rotation={[-Math.PI / 3, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[8, 8, 32, 32]} />
      <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.2} />
    </mesh>
  )
}

/* ------------------------------------------------------------------ */
/*  11. OrbitsScene – torus rings around a sphere, purple             */
/* ------------------------------------------------------------------ */

export function OrbitsScene() {
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  const ring3 = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (ring1.current) { ring1.current.rotation.x = t * 0.3; ring1.current.rotation.y = t * 0.1 }
    if (ring2.current) { ring2.current.rotation.y = t * 0.25; ring2.current.rotation.z = t * 0.15 }
    if (ring3.current) { ring3.current.rotation.z = t * 0.2; ring3.current.rotation.x = t * 0.12 }
  })

  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.3, 20, 20]} />
        <meshBasicMaterial color="#c084fc" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring1}>
        <torusGeometry args={[1.2, 0.015, 12, 80]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[1.6, 0.012, 12, 80]} />
        <meshBasicMaterial color="#c084fc" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[2.0, 0.01, 12, 80]} />
        <meshBasicMaterial color="#d8b4fe" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  12. ShieldScene – wireframe icosahedron, green                    */
/* ------------------------------------------------------------------ */

export function ShieldScene() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.elapsedTime * 0.15
    ref.current.rotation.x = clock.elapsedTime * 0.08
  })

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshBasicMaterial color="#4ade80" wireframe transparent opacity={0.35} />
    </mesh>
  )
}

/* ------------------------------------------------------------------ */
/*  13. HexgridScene – hexagonal grid, magenta                       */
/* ------------------------------------------------------------------ */

export function HexgridScene() {
  const ref = useRef<THREE.Group>(null)

  const hexes = useMemo(() => {
    const arr: [number, number, number][] = []
    const size = 0.35
    const h = size * Math.sqrt(3)
    for (let row = -3; row <= 3; row++) {
      for (let col = -4; col <= 4; col++) {
        const x = col * size * 1.55 + (row % 2 !== 0 ? size * 0.775 : 0)
        const y = row * h * 0.5
        arr.push([x, y, 0])
      }
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.elapsedTime * 0.03
  })

  return (
    <group ref={ref}>
      {hexes.map((pos, i) => (
        <mesh key={i} position={pos} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.005, 6]} />
          <meshBasicMaterial color="#ec4899" wireframe transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  14. MatrixScene – falling small boxes, green                      */
/* ------------------------------------------------------------------ */

export function MatrixScene() {
  const groupRef = useRef<THREE.Group>(null)

  const items = useMemo(() => {
    const arr: { col: number; y: number; speed: number }[] = []
    for (let c = 0; c < 10; c++) {
      for (let r = 0; r < 8; r++) {
        arr.push({
          col: (c - 4.5) * 0.5,
          y: (r - 3.5) * 0.5 + Math.random() * 0.3,
          speed: 0.3 + Math.random() * 0.4,
        })
      }
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      const item = items[i]
      child.position.y = item.y - ((clock.elapsedTime * item.speed) % 4)
      if (child.position.y < -3) child.position.y += 6
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial
      mat.opacity = 0.15 + Math.abs(Math.sin(clock.elapsedTime * 2 + i)) * 0.35
    })
  })

  return (
    <group ref={groupRef}>
      {items.map((item, i) => (
        <mesh key={i} position={[item.col, item.y, 0]}>
          <boxGeometry args={[0.06, 0.06, 0.06]} />
          <meshBasicMaterial color="#4ade80" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  15. TerminalScene – grid of cubes flickering, cyan                */
/* ------------------------------------------------------------------ */

export function TerminalScene() {
  const groupRef = useRef<THREE.Group>(null)

  const grid = useMemo(() => {
    const arr: [number, number, number][] = []
    for (let r = -3; r <= 3; r++) {
      for (let c = -5; c <= 5; c++) {
        arr.push([c * 0.35, r * 0.35, 0])
      }
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.elapsedTime
    groupRef.current.children.forEach((child, i) => {
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial
      // Deterministic pseudo-random flicker based on time and index
      const flicker = Math.sin(t * 3.7 + i * 17.3) * Math.cos(t * 2.1 + i * 7.1)
      mat.opacity = flicker > 0.5 ? 0.6 : 0.08
    })
  })

  return (
    <group ref={groupRef}>
      {grid.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.12, 0.12, 0.12]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.1} />
        </mesh>
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  16. PipelineScene – tubes with flowing particle, blue             */
/* ------------------------------------------------------------------ */

export function PipelineScene() {
  const sphere1 = useRef<THREE.Mesh>(null)
  const sphere2 = useRef<THREE.Mesh>(null)

  const curves = useMemo(() => {
    const c1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3, -0.5, 0),
      new THREE.Vector3(-1, 0.8, 0.5),
      new THREE.Vector3(1, -0.3, -0.3),
      new THREE.Vector3(3, 0.5, 0),
    ])
    const c2 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3, 0.5, 0),
      new THREE.Vector3(-0.5, -0.8, 0.3),
      new THREE.Vector3(1.5, 0.6, -0.5),
      new THREE.Vector3(3, -0.5, 0),
    ])
    return [c1, c2]
  }, [])

  useFrame(({ clock }) => {
    const t1 = (clock.elapsedTime * 0.15) % 1
    const t2 = (clock.elapsedTime * 0.12 + 0.5) % 1
    if (sphere1.current) sphere1.current.position.copy(curves[0].getPoint(t1))
    if (sphere2.current) sphere2.current.position.copy(curves[1].getPoint(t2))
  })

  return (
    <group>
      {curves.map((curve, i) => (
        <mesh key={i}>
          <tubeGeometry args={[curve, 48, 0.025, 8, false]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.25} />
        </mesh>
      ))}
      <mesh ref={sphere1}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color="#93c5fd" transparent opacity={0.9} />
      </mesh>
      <mesh ref={sphere2}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color="#93c5fd" transparent opacity={0.9} />
      </mesh>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  17. CubesScene – floating rotating cubes, light blue              */
/* ------------------------------------------------------------------ */

export function CubesScene() {
  const groupRef = useRef<THREE.Group>(null)

  const cubes = useMemo(() => {
    const arr: { pos: [number, number, number]; speed: [number, number] }[] = []
    for (let i = 0; i < 18; i++) {
      arr.push({
        pos: [(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 3.5, (Math.random() - 0.5) * 2],
        speed: [0.1 + Math.random() * 0.4, 0.1 + Math.random() * 0.3],
      })
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      child.rotation.x = clock.elapsedTime * cubes[i].speed[0]
      child.rotation.y = clock.elapsedTime * cubes[i].speed[1]
    })
  })

  return (
    <group ref={groupRef}>
      {cubes.map((c, i) => (
        <mesh key={i} position={c.pos}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshBasicMaterial color="#93c5fd" wireframe transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  18. ConnectionsScene – random nodes + lines, cyan                 */
/* ------------------------------------------------------------------ */

export function ConnectionsScene() {
  const ref = useRef<THREE.Group>(null)
  const count = 40

  const { nodes, linePositions } = useMemo(() => {
    const n: [number, number, number][] = []
    for (let i = 0; i < count; i++) {
      n.push([(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 3.5, (Math.random() - 0.5) * 2])
    }
    const lp: number[] = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = n[i][0] - n[j][0]
        const dy = n[i][1] - n[j][1]
        const dz = n[i][2] - n[j][2]
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 1.5) {
          lp.push(...n[i], ...n[j])
        }
      }
    }
    return { nodes: n, linePositions: new Float32Array(lp) }
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.04
  })

  return (
    <group ref={ref}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#06b6d4" transparent opacity={0.15} />
      </lineSegments>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  19. FortressScene – wireframe octahedron, blue/steel              */
/* ------------------------------------------------------------------ */

export function FortressScene() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.elapsedTime * 0.1
    ref.current.rotation.x = clock.elapsedTime * 0.06
  })

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[2, 0]} />
      <meshBasicMaterial color="#64748b" wireframe transparent opacity={0.35} />
    </mesh>
  )
}

/* ------------------------------------------------------------------ */
/*  20. InceptionScene – nested rotating boxes, purple                */
/* ------------------------------------------------------------------ */

export function InceptionScene() {
  const b1 = useRef<THREE.Mesh>(null)
  const b2 = useRef<THREE.Mesh>(null)
  const b3 = useRef<THREE.Mesh>(null)
  const b4 = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (b1.current) { b1.current.rotation.y = t * 0.1; b1.current.rotation.x = t * 0.05 }
    if (b2.current) { b2.current.rotation.y = -t * 0.15; b2.current.rotation.z = t * 0.08 }
    if (b3.current) { b3.current.rotation.z = t * 0.2; b3.current.rotation.x = -t * 0.1 }
    if (b4.current) { b4.current.rotation.x = t * 0.25; b4.current.rotation.y = t * 0.12 }
  })

  return (
    <group>
      <mesh ref={b1}><boxGeometry args={[3, 3, 3]} /><meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.2} /></mesh>
      <mesh ref={b2}><boxGeometry args={[2.2, 2.2, 2.2]} /><meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.25} /></mesh>
      <mesh ref={b3}><boxGeometry args={[1.5, 1.5, 1.5]} /><meshBasicMaterial color="#c084fc" wireframe transparent opacity={0.3} /></mesh>
      <mesh ref={b4}><boxGeometry args={[0.8, 0.8, 0.8]} /><meshBasicMaterial color="#d8b4fe" wireframe transparent opacity={0.35} /></mesh>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  21. RocketScene – upward exhaust particles, orange/yellow         */
/* ------------------------------------------------------------------ */

export function RocketScene() {
  const ref = useRef<THREE.Points>(null)
  const count = 500

  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 1.2
      p[i * 3 + 1] = Math.random() * 6 - 3
      p[i * 3 + 2] = (Math.random() - 0.5) * 1.2
    }
    return p
  }, [])

  useFrame(() => {
    if (!ref.current) return
    const attr = ref.current.geometry.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < count; i++) {
      let y = attr.getY(i)
      y += 0.015
      if (y > 3) {
        y = -3
        attr.setX(i, (Math.random() - 0.5) * 0.4)
        attr.setZ(i, (Math.random() - 0.5) * 0.4)
      }
      // Spread out as they rise
      const x = attr.getX(i) * 1.0005
      const z = attr.getZ(i) * 1.0005
      attr.setX(i, x)
      attr.setZ(i, z)
      attr.setY(i, y)
    }
    attr.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#fb923c" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

/* ------------------------------------------------------------------ */
/*  22. TimelineScene – horizontal line with spheres, cyan            */
/* ------------------------------------------------------------------ */

export function TimelineScene() {
  const groupRef = useRef<THREE.Group>(null)
  const count = 8

  const linePositions = useMemo(
    () => new Float32Array([-4, 0, 0, 4, 0, 0]),
    [],
  )

  const nodes = useMemo(() => {
    const arr: [number, number, number][] = []
    for (let i = 0; i < count; i++) {
      arr.push([(i / (count - 1)) * 8 - 4, 0, 0])
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      const s = 1 + Math.sin(clock.elapsedTime * 2 + i * 0.8) * 0.4
      child.scale.setScalar(s)
    })
  })

  return (
    <group>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#06b6d4" transparent opacity={0.25} />
      </lineSegments>
      <group ref={groupRef}>
        {nodes.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.08, 14, 14]} />
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.7} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  23. LaunchpadScene – ring of sequentially pulsing spheres, green  */
/* ------------------------------------------------------------------ */

export function LaunchpadScene() {
  const groupRef = useRef<THREE.Group>(null)
  const count = 12

  const positions = useMemo(() => {
    const arr: [number, number, number][] = []
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      arr.push([Math.cos(angle) * 1.8, Math.sin(angle) * 1.8, 0])
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const activeFloat = (clock.elapsedTime * 2) % count
    groupRef.current.children.forEach((child, i) => {
      const dist = Math.abs(i - activeFloat)
      const nearness = Math.max(0, 1 - Math.min(dist, count - dist) / 2)
      const s = 0.6 + nearness * 1.2
      child.scale.setScalar(s)
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial
      mat.opacity = 0.2 + nearness * 0.6
    })
  })

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.1, 14, 14]} />
          <meshBasicMaterial color="#4ade80" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  24. WaveScene – large wave mesh surface, magenta/purple           */
/* ------------------------------------------------------------------ */

export function WaveScene() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute
    const t = clock.elapsedTime
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      pos.setZ(
        i,
        Math.sin(x * 0.8 + t * 0.8) * 0.4 +
        Math.sin(y * 0.6 + t * 0.5) * 0.3 +
        Math.sin((x + y) * 0.5 + t * 0.3) * 0.2,
      )
    }
    pos.needsUpdate = true
  })

  return (
    <mesh ref={ref} rotation={[-Math.PI / 4, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[8, 6, 40, 30]} />
      <meshBasicMaterial color="#d946ef" wireframe transparent opacity={0.2} />
    </mesh>
  )
}
