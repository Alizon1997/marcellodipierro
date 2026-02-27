import React, { useEffect, useRef, useState } from 'react';

const RadarCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Pause animation when off-screen
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // --- CONFIGURATION ---
    const COLORS = {
      bg: '#050505',      // Nearly Black (Matches new brand-dark)
      cyan: '#00E5FF',    // AI / Data
      orange: '#FF5500',  // Brand Orange (Meetings / Value)
      white: '#FFFFFF',
      grid: 'rgba(255, 255, 255, 0.05)',

      // Brand Specific for Active State
      linkedin: '#0A66C2',
      whatsapp: '#25D366',
      email: '#F8FAFC',
    };

    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;
    let animationFrameId: number;
    let frame = 0;

    // --- ASSETS (SVG PATHS) ---
    // Standard 24x24 viewBox paths
    const ICONS = {
      linkedin: new Path2D("M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"),
      email: new Path2D("M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"),
      whatsapp: new Path2D("M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2M12.05 3.67c2.25 0 4.37.88 5.96 2.47 1.59 1.59 2.47 3.71 2.47 5.96 0 4.54-3.68 8.23-8.22 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.19-.31c-.82-1.32-1.26-2.87-1.26-4.38 0-4.54 3.69-8.23 8.23-8.23m4.88 11.23c-.2-.1-.19.1-.51-.06-.31-.15-1.84-.91-2.13-1.01-.29-.1-.5-.15-.71.15-.21.31-.81 1.01-1 1.22-.17.2-.35.24-.65.08-.31-.15-1.31-.48-2.49-1.53-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.47.14-.62.14-.14.31-.36.46-.54.16-.18.21-.31.31-.51.1-.2.05-.39-.03-.54-.08-.16-.7-1.69-.96-2.31-.25-.61-.51-.52-.7-.53h-.6c-.21 0-.55.08-.83.39-.29.31-1.1.1.07-1.1 2.68 1.1 1.62 1.3 2.59 2.19 2.99.74.32 1.32.51 1.77.66.75.24 1.43.2 1.97.12.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48")
    };

    // --- STATE ---
    let meetingCount = 124;
    let lastMeetingTime = 0;

    // Entities
    const channels: Channel[] = [];
    let beams: Beam[] = [];
    let particles: Particle[] = [];
    let floatingTexts: FloatingText[] = [];

    // --- CLASSES ---

    class Channel {
      id: string;
      label: string;
      icon: Path2D;
      angle: number;
      orbitRadius: number;
      baseColor: string;
      activeColor: string;
      activeTimer: number = 0;

      constructor(id: string, label: string, startAngle: number, icon: Path2D, activeColor: string) {
        this.id = id;
        this.label = label;
        this.angle = startAngle;
        this.orbitRadius = 160;
        this.icon = icon;
        this.baseColor = COLORS.cyan;
        this.activeColor = activeColor;
      }

      update() {
        this.angle += 0.0015; // Slow orbit
        if (this.activeTimer > 0) this.activeTimer--;
      }

      activate() {
        this.activeTimer = 50;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const x = cx + Math.cos(this.angle) * this.orbitRadius;
        const y = cy + Math.sin(this.angle) * this.orbitRadius;

        const isActive = this.activeTimer > 0;
        const scale = isActive ? 1.15 : 1.0;

        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);

        // 1. Node Background (Circle)
        ctx.beginPath();
        ctx.arc(0, 0, 32, 0, Math.PI * 2);
        ctx.fillStyle = '#050505'; // Dark background for contrast
        ctx.fill();

        // 2. Stroke / Glow
        ctx.beginPath();
        ctx.arc(0, 0, 32, 0, Math.PI * 2);
        ctx.strokeStyle = isActive ? this.activeColor : 'rgba(255,255,255,0.1)';
        ctx.lineWidth = isActive ? 3 : 1;
        if (isActive) {
          ctx.shadowColor = this.activeColor;
          ctx.shadowBlur = 25;
        }
        ctx.stroke();

        // 3. Icon
        ctx.save();
        ctx.translate(-16, -16);
        ctx.scale(1.33, 1.33);
        ctx.fillStyle = isActive ? this.activeColor : '#666666'; // Neutral gray when inactive
        ctx.fill(this.icon);
        ctx.restore();

        // 4. Label (Text below)
        ctx.scale(1 / scale, 1 / scale);
        ctx.fillStyle = isActive ? this.activeColor : '#666666';
        ctx.font = `bold 10px "Inter"`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(this.label, 0, 42);

        ctx.restore();
      }

      getPosition() {
        return {
          x: cx + Math.cos(this.angle) * this.orbitRadius,
          y: cy + Math.sin(this.angle) * this.orbitRadius
        };
      }
    }

    class Beam {
      target: Channel;
      progress: number = 0;
      speed: number = 0.08;
      dead: boolean = false;

      constructor(target: Channel) {
        this.target = target;
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.progress = 1;
          this.dead = true;
          this.target.activate();
          spawnParticle(this.target);
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const endPos = this.target.getPosition();
        const curX = cx + (endPos.x - cx) * this.progress;
        const curY = cy + (endPos.y - cy) * this.progress;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(curX, curY);

        // Gradient for beam
        const grad = ctx.createLinearGradient(cx, cy, curX, curY);
        grad.addColorStop(0, 'rgba(0, 229, 255, 0)');
        grad.addColorStop(1, 'rgba(0, 229, 255, 1)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Head of beam
        ctx.beginPath();
        ctx.arc(curX, curY, 4, 0, Math.PI * 2);
        ctx.fillStyle = COLORS.cyan;
        ctx.shadowColor = COLORS.cyan;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }
    }

    class Particle {
      x: number;
      y: number;
      tx: number;
      ty: number;
      vx: number;
      vy: number;
      dead: boolean = false;
      color: string;

      constructor(start: { x: number, y: number }, target: { x: number, y: number }) {
        this.x = start.x;
        this.y = start.y;
        this.tx = target.x;
        this.ty = target.y;

        const angle = Math.atan2(this.ty - this.y, this.tx - this.x);
        const speed = 6 + Math.random() * 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.color = COLORS.orange; // Particles are now Orange (Value)
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        const dx = this.tx - this.x;
        const dy = this.ty - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 15) {
          this.dead = true;
          triggerMeeting();
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.fill();
      }
    }

    class FloatingText {
      x: number;
      y: number;
      text: string;
      life: number = 50;

      constructor(x: number, y: number, text: string) {
        this.x = x;
        this.y = y;
        this.text = text;
      }

      update() {
        this.y -= 1.5;
        this.life--;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life / 50);
        ctx.fillStyle = COLORS.orange; // Text matches particle color
        ctx.font = 'bold 12px "Inter"';
        ctx.textAlign = 'center';
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
      }
    }

    // --- FUNCTIONS ---

    const spawnParticle = (source: Channel) => {
      const target = { x: cx, y: cy + 180 };
      particles.push(new Particle(source.getPosition(), target));
    };

    const triggerMeeting = () => {
      meetingCount++;
      lastMeetingTime = Date.now();
      floatingTexts.push(new FloatingText(cx, cy + 160, "+ Meeting Booked"));
    };

    const init = () => {
      channels.length = 0;
      // 3 Channels evenly spaced
      channels.push(new Channel('linkedin', 'LINKEDIN', -Math.PI / 2, ICONS.linkedin, COLORS.linkedin));
      channels.push(new Channel('email', 'EMAIL', Math.PI / 6, ICONS.email, COLORS.email));
      channels.push(new Channel('whatsapp', 'WHATSAPP', Math.PI * 5 / 6, ICONS.whatsapp, COLORS.whatsapp));
    };

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      cx = width / 2;
      cy = height / 2 - 30; // Slight upward shift
    };

    // --- DRAW HELPERS ---

    const drawGrid = () => {
      // Concentric rings
      ctx.lineWidth = 1;
      [80, 160, 240].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = COLORS.grid;
        // Dotted line for outer
        if (i === 2) ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(cx - 20, cy);
      ctx.lineTo(cx + 20, cy);
      ctx.moveTo(cx, cy - 20);
      ctx.lineTo(cx, cy + 20);
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.stroke();

      // Rotating Scan line
      const scanAngle = frame * 0.01;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(scanAngle);
      const grad = ctx.createLinearGradient(0, 0, 240, 0);
      grad.addColorStop(0, 'rgba(0, 229, 255, 0)');
      grad.addColorStop(1, 'rgba(0, 229, 255, 0.05)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 240, -0.2, 0.2);
      ctx.fill();
      ctx.restore();
    };

    const drawCore = () => {
      const pulse = Math.sin(frame * 0.1);
      ctx.save();
      ctx.translate(cx, cy);

      // Core Glow
      ctx.shadowColor = COLORS.cyan;
      ctx.shadowBlur = 15 + pulse * 5;

      // Center Circle
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, Math.PI * 2);
      ctx.fillStyle = '#050505';
      ctx.strokeStyle = COLORS.cyan;
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      // Inner Pulse
      ctx.beginPath();
      ctx.arc(0, 0, 6 + pulse * 2, 0, Math.PI * 2);
      ctx.fillStyle = COLORS.cyan;
      ctx.fill();

      ctx.restore();
    };

    const drawPipeline = () => {
      const py = cy + 180;
      ctx.save();
      ctx.translate(cx, py);

      // Bucket Container
      ctx.beginPath();
      ctx.roundRect(-50, -25, 100, 50, 10);
      ctx.fillStyle = '#050505';
      ctx.strokeStyle = COLORS.orange;
      ctx.lineWidth = 2;

      // Glow on update
      const timeSinceUpdate = Date.now() - lastMeetingTime;
      if (timeSinceUpdate < 300) {
        ctx.shadowColor = COLORS.orange;
        ctx.shadowBlur = 20;
      }

      ctx.fill();
      ctx.stroke();

      // Label
      ctx.fillStyle = COLORS.orange;
      ctx.font = 'bold 20px "JetBrains Mono"';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${meetingCount}`, 0, -2);

      ctx.font = '9px "Inter"';
      ctx.fillStyle = '#888888';
      ctx.fillText("MEETINGS BOOKED", 0, 16);

      ctx.restore();
    };


    // --- MAIN RENDER LOOP ---

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // 1. Background
      drawGrid();

      // 2. Logic: Fire beams randomly
      if (frame % 80 === 0) {
        const randomChannel = channels[Math.floor(Math.random() * channels.length)];
        beams.push(new Beam(randomChannel));
      }

      // 3. Beams (Behind channels)
      beams.forEach((b, i) => {
        b.update();
        b.draw(ctx);
        if (b.dead) beams.splice(i, 1);
      });

      // 4. Core
      drawCore();

      // 5. Channels
      channels.forEach(ch => {
        ch.update();
        ch.draw(ctx);
      });

      // 6. Particles
      particles.forEach((p, i) => {
        p.update();
        p.draw(ctx);
        if (p.dead) particles.splice(i, 1);
      });

      // 7. Pipeline / Stats
      drawPipeline();

      // 8. Floating Texts
      floatingTexts.forEach((ft, i) => {
        ft.update();
        ft.draw(ctx);
        if (ft.life <= 0) floatingTexts.splice(i, 1);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', handleResize);
    init();
    handleResize();
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="relative w-full h-[600px] md:h-full rounded-3xl overflow-hidden bg-[#050505] border border-white/10 shadow-2xl">
      <canvas ref={canvasRef} className="block w-full h-full" />

      {/* HUD Overlay Info */}
      <div className="absolute top-4 left-4 font-mono text-[9px] leading-tight text-cyan-500/50 pointer-events-none">
        <div>STORM_ENGINE_V5.0</div>
        <div className="mt-1">
          AI_STRATEGY: <span className="text-cyan-400">ACTIVE</span><br />
          CHANNEL_SYNC: <span className="text-green-500">100%</span>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2 text-[9px] font-mono text-gray-500 text-right pointer-events-none">
        <div className="flex items-center justify-end">
          <span className="mr-2">DATA FLOW</span>
          <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full shadow-[0_0_5px_#00E5FF]"></div>
        </div>
        <div className="flex items-center justify-end">
          <span className="mr-2">CONVERSION</span>
          <div className="w-1.5 h-1.5 bg-[#FF5500] rounded-full shadow-[0_0_5px_#FF5500]"></div>
        </div>
      </div>
    </div>
  );
};

export default RadarCanvas;