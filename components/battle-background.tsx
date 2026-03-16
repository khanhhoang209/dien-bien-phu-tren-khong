'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  type: 'plane' | 'missile' | 'explosion' | 'smoke' | 'debris'
  lifetime: number
  maxLifetime: number
  rotation: number
  scale: number
  color?: string
}

interface Searchlight {
  id: number
  baseX: number
  angle: number
  targetAngle: number
  speed: number
  width: number
}

export function BattleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const searchlightsRef = useRef<Searchlight[]>([])
  const idRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Re-initialize searchlights on resize
      searchlightsRef.current = Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        baseX: (canvas.width / 5) * (i + 1),
        angle: Math.PI + (Math.random() - 0.5),
        targetAngle: Math.PI + (Math.random() - 0.5),
        speed: 0.002 + Math.random() * 0.003,
        width: 40 + Math.random() * 40,
      }))
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationId: number

    const drawB52 = (
      x: number,
      y: number,
      opacity: number,
      rotation: number,
      scale: number,
      directionX: number,
      isDamaged: boolean,
    ) => {
      ctx!.save()
      ctx!.globalAlpha = opacity
      ctx!.translate(x, y)
      // Rotation for diving down when damaged
      ctx!.rotate(rotation)
      // Mirror based on travel direction: +1 (Right), -1 (Left)
      ctx!.scale(scale * directionX, scale)

      const color = isDamaged ? '#555555' : '#2d2d2d'
      ctx!.fillStyle = color

      // --- B-52 DESIGN ---
      // Nose points strictly to the RIGHT (+X)
      // Tail is completely on the LEFT (-X)

      // Fuselage (Body)
      ctx!.beginPath()
      // Left (-25) is Tail, Right (35) is Nose start
      ctx!.ellipse(5, 0, 30, 5, 0, 0, Math.PI * 2)
      ctx!.fill()

      // Pointy Nose section (+X)
      ctx!.beginPath()
      ctx!.moveTo(35, -2)
      ctx!.lineTo(50, 0) // Sharp tip
      ctx!.lineTo(35, 2)
      ctx!.fill()

      // Cockpit bump (near nose)
      ctx!.fillStyle = '#666666'
      ctx!.beginPath()
      ctx!.ellipse(30, -3, 6, 2, 0, 0, Math.PI * 2)
      ctx!.fill()
      ctx!.fillStyle = color

      // Giant swept-back Main wings
      ctx!.beginPath()
      ctx!.moveTo(10, 0)
      ctx!.lineTo(-15, -45) // Swept back toward tail
      ctx!.lineTo(-25, -45)
      ctx!.lineTo(-5, 0)
      ctx!.fill()

      ctx!.beginPath()
      ctx!.moveTo(10, 0)
      ctx!.lineTo(-15, 45)
      ctx!.lineTo(-25, 45)
      ctx!.lineTo(-5, 0)
      ctx!.fill()

      // Engines (4 pods, 2 on each wing) - Darker color
      ctx!.fillStyle = '#111'
      const drawEngine = (ex: number, ey: number) => {
        ctx!.fillRect(ex, ey, 10, 4)
      }
      drawEngine(0, -25)
      drawEngine(-5, -40)
      drawEngine(0, 20)
      drawEngine(-5, 35)
      ctx!.fillStyle = color

      // Tail horizontal stabilizers (Aft/Left)
      ctx!.beginPath()
      ctx!.moveTo(-20, 0)
      ctx!.lineTo(-35, -15)
      ctx!.lineTo(-40, -15)
      ctx!.lineTo(-30, 0)
      ctx!.fill()

      ctx!.beginPath()
      ctx!.moveTo(-20, 0)
      ctx!.lineTo(-35, 15)
      ctx!.lineTo(-40, 15)
      ctx!.lineTo(-30, 0)
      ctx!.fill()

      // Vertical tail fin
      ctx!.beginPath()
      ctx!.moveTo(-25, 0)
      ctx!.lineTo(-38, -15)
      ctx!.lineTo(-40, 0)
      ctx!.fill()

      if (isDamaged) {
        // Fire effect on damaged plane - Behind cockpit
        const fireSize = 5 + Math.random() * 8
        ctx!.fillStyle = '#ff3300'
        ctx!.beginPath()
        ctx!.arc(0, 0, fireSize, 0, Math.PI * 2)
        ctx!.fill()
        ctx!.fillStyle = '#ffaa00'
        ctx!.beginPath()
        ctx!.arc(0, 0, fireSize * 0.5, 0, Math.PI * 2)
        ctx!.fill()
      }

      ctx!.restore()
    }

    const drawMissile = (x: number, y: number, rotation: number, opacity: number) => {
      ctx!.save()
      ctx!.globalAlpha = opacity
      ctx!.translate(x, y)
      ctx!.rotate(rotation)

      // SAM-2 Missile
      ctx!.fillStyle = '#d14'
      ctx!.fillRect(-8, -1.5, 16, 3)

      // Nose cone
      ctx!.beginPath()
      ctx!.moveTo(8, -1.5)
      ctx!.lineTo(12, 0)
      ctx!.lineTo(8, 1.5)
      ctx!.fill()

      // Exhaust glow
      const gradient = ctx!.createRadialGradient(-8, 0, 0, -8, 0, 15)
      gradient.addColorStop(0, 'rgba(255, 100, 0, 0.8)')
      gradient.addColorStop(1, 'rgba(255, 100, 0, 0)')
      ctx!.fillStyle = gradient
      ctx!.beginPath()
      ctx!.arc(-8, 0, 10, 0, Math.PI * 2)
      ctx!.fill()

      ctx!.restore()
    }

    const drawExplosion = (x: number, y: number, radius: number, opacity: number) => {
      ctx!.save()
      ctx!.globalAlpha = opacity

      const grad = ctx!.createRadialGradient(x, y, 0, x, y, radius)
      grad.addColorStop(0, '#fff')
      grad.addColorStop(0.2, '#ff0')
      grad.addColorStop(0.4, '#f90')
      grad.addColorStop(1, 'transparent')

      ctx!.fillStyle = grad
      ctx!.beginPath()
      ctx!.arc(x, y, radius, 0, Math.PI * 2)
      ctx!.fill()

      ctx!.restore()
    }

    const drawSearchlight = (light: Searchlight) => {
      ctx!.save()

      const gradient = ctx!.createLinearGradient(
        light.baseX,
        canvas.height,
        light.baseX + Math.cos(light.angle) * canvas.height * 1.5,
        canvas.height + Math.sin(light.angle) * canvas.height * 1.5,
      )

      const beamColor = 'rgba(230, 230, 255, 0.08)'
      gradient.addColorStop(0, beamColor)
      gradient.addColorStop(0.5, 'rgba(230, 230, 255, 0.04)')
      gradient.addColorStop(1, 'transparent')

      ctx!.fillStyle = gradient
      ctx!.beginPath()
      ctx!.moveTo(light.baseX - 5, canvas.height)
      ctx!.lineTo(light.baseX + 5, canvas.height)
      ctx!.lineTo(
        light.baseX + Math.cos(light.angle - 0.1) * canvas.height * 1.5,
        canvas.height + Math.sin(light.angle - 0.1) * canvas.height * 1.5,
      )
      ctx!.lineTo(
        light.baseX + Math.cos(light.angle + 0.1) * canvas.height * 1.5,
        canvas.height + Math.sin(light.angle + 0.1) * canvas.height * 1.5,
      )
      ctx!.closePath()
      ctx!.fill()

      ctx!.restore()
    }

    const addParticle = (type: Particle['type'], options: any = {}) => {
      const id = idRef.current++
      if (type === 'plane') {
        const isFromLeft = Math.random() > 0.5
        particlesRef.current.push({
          id,
          x: isFromLeft ? -150 : canvas.width + 150,
          y: 50 + Math.random() * (canvas.height * 0.4),
          vx: isFromLeft ? 1.0 + Math.random() * 0.8 : -(1.0 + Math.random() * 0.8),
          vy: (Math.random() - 0.5) * 0.2,
          type: 'plane',
          lifetime: 0,
          maxLifetime: 1500,
          rotation: 0,
          scale: 0.5 + Math.random() * 0.3,
          color: 'active',
        })
      } else if (type === 'missile') {
        particlesRef.current.push({
          id,
          x: options.x || Math.random() * canvas.width,
          y: canvas.height,
          vx: (options.tx - options.x) / 60 || (Math.random() - 0.5) * 2,
          vy: -6 - Math.random() * 3,
          type: 'missile',
          lifetime: 0,
          maxLifetime: 200,
          rotation: options.rotation || -Math.PI / 2,
          scale: 1,
        })
      } else if (type === 'explosion') {
        particlesRef.current.push({
          id,
          x: options.x,
          y: options.y,
          vx: 0,
          vy: 0,
          type: 'explosion',
          lifetime: 0,
          maxLifetime: 30,
          rotation: 0,
          scale: options.scale || 1,
        })
      } else if (type === 'smoke') {
        particlesRef.current.push({
          id,
          x: options.x,
          y: options.y,
          vx: (Math.random() - 0.5) * 1,
          vy: -Math.random() * 1,
          type: 'smoke',
          lifetime: 0,
          maxLifetime: 40 + Math.random() * 30,
          rotation: Math.random() * Math.PI * 2,
          scale: options.scale || 1,
        })
      }
    }

    let frameCount = 0

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      frameCount++

      // Update Searchlights
      searchlightsRef.current.forEach((light) => {
        if (Math.abs(light.angle - light.targetAngle) < 0.01) {
          light.targetAngle = Math.PI + (Math.random() - 0.5) * 1.2
        }
        light.angle += (light.targetAngle - light.angle) * light.speed
        drawSearchlight(light)
      })

      // Add planes
      if (frameCount % 300 === 0) addParticle('plane')

      // Auto-launch missiles towards planes
      if (frameCount % 180 === 0) {
        const planes = particlesRef.current.filter(
          (p) => p.type === 'plane' && p.color === 'active',
        )
        if (planes.length > 0) {
          const target = planes[Math.floor(Math.random() * planes.length)]
          addParticle('missile', {
            x: Math.random() * canvas.width,
            tx: target.x + target.vx * 60,
            rotation: Math.atan2(-10, target.x - Math.random() * canvas.width),
          })
        }
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i]

        p.lifetime++
        p.x += p.vx
        p.y += p.vy

        // Missile gravity and logic
        if (p.type === 'missile') {
          p.rotation = Math.atan2(p.vy, p.vx)

          // Collision detection with planes
          particlesRef.current.forEach((other) => {
            if (other.type === 'plane' && other.color === 'active') {
              const dx = p.x - other.x
              const dy = p.y - other.y
              const dist = Math.sqrt(dx * dx + dy * dy)
              if (dist < 40 * other.scale) {
                // HIT!
                addParticle('explosion', { x: p.x, y: p.y, scale: other.scale * 2 })
                other.vx = other.vx * 0.3
                other.vy = 1.0 + Math.random() * 1.0
                other.color = 'destroyed'
                // Spin downwards based on initial travel direction
                other.rotation = ((other.vx > 0 ? 1 : -1) * Math.PI) / 6
                p.lifetime = p.maxLifetime
              }
            }
          })
        }

        // Draw particles
        const opacity = Math.max(0, 1 - p.lifetime / p.maxLifetime)

        if (p.type === 'plane') {
          const isDamaged = p.color === 'destroyed'

          // CRUCIAL FIX: Direction strictly based on Velocity X
          // if vx > 0 -> traveling right -> scaleX is 1
          // if vx < 0 -> traveling left  -> scaleX is -1
          const directionX = Math.sign(p.vx) || 1

          drawB52(p.x, p.y, opacity, p.rotation, p.scale, directionX, isDamaged)

          // Engine contrails for active plains (gives clear sense of movement forwards)
          if (!isDamaged && frameCount % 6 === 0) {
            // Spawn faint smoke behind the tail
            const tailXOffset = directionX * -30 * p.scale
            addParticle('smoke', { x: p.x + tailXOffset, y: p.y, scale: p.scale * 0.3 })
          }

          if (isDamaged && frameCount % 4 === 0) {
            addParticle('smoke', { x: p.x, y: p.y, scale: p.scale })
          }

          if (p.y > canvas.height + 100 || p.x < -300 || p.x > canvas.width + 300) {
            particlesRef.current.splice(i, 1)
          }
        } else if (p.type === 'missile') {
          drawMissile(p.x, p.y, p.rotation, opacity)
          if (p.y < -50 || p.lifetime > p.maxLifetime) {
            particlesRef.current.splice(i, 1)
          }
        } else if (p.type === 'explosion') {
          drawExplosion(p.x, p.y, p.lifetime * 2 * p.scale, opacity)
          if (p.lifetime > p.maxLifetime) {
            particlesRef.current.splice(i, 1)
          }
        } else if (p.type === 'smoke') {
          ctx!.save()
          ctx!.globalAlpha = opacity * 0.3
          ctx!.fillStyle = '#666'
          ctx!.beginPath()
          ctx!.arc(p.x, p.y, (1 + p.lifetime / 10) * p.scale * 5, 0, Math.PI * 2)
          ctx!.fill()
          ctx!.restore()
          if (p.lifetime > p.maxLifetime) {
            particlesRef.current.splice(i, 1)
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}
