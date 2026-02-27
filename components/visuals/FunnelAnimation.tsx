import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const FunnelAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState({ meetings: 124, nurture: 850 });
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const languageRef = useRef(language);
  languageRef.current = language;

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
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Use local stats for canvas rendering to avoid closure staleness, 
    // while keeping setStats for the DOM overlay.
    let localStats = { meetings: 124, nurture: 850 };

    // --- CONFIGURATION ---
    const COLORS = {
      bg: '#050505',
      hot: '#FF5500', // Storm Orange
      nurture: '#00E5FF', // Neon Cyan
      raw: '#888888', // Neutral Gray
      glass: 'rgba(255, 255, 255, 0.02)',
      border: 'rgba(255, 255, 255, 0.1)',
      textPrimary: '#FFFFFF',
      textBubble: '#202020',
      bubbleBg: '#202020'
    };

    const MESSAGES = languageRef.current === 'it'
      ? ["Disponibile martedì?", "Mandami info", "Parliamone", "Ok per la call", "Interessante...", "Fissiamo un meeting"]
      : ["Available Tuesday?", "Send me info", "Let's talk", "Ok for the call", "Interesting...", "Let's book a meeting"];

    // --- ASSETS (PATHS) ---
    const ICONS = {
      mail: new Path2D("M-10,-7 L10,-7 L10,7 L-10,7 Z M-10,-7 L0,0 L10,-7"),
      linkedin: new Path2D("M-8,-8 L8,-8 L8,8 L-8,8 Z M-3,-3 L-3,5 M3,-3 L3,5 M-3,-5 L-3,-4"),
      phone: new Path2D("M-6,4 L-4,6 C-2,8 4,2 6,-2 L4,-4"),
      whatsapp: new Path2D("M0,-8 A8,8 0 1,1 -5,6 L-8,8 L-6,5 A8,8 0 0,1 0,-8")
    };

    // --- SYSTEM STATE ---
    type ParticleType = 'mail' | 'linkedin' | 'phone' | 'whatsapp';
    type ParticleStatus = 'raw' | 'hot' | 'nurture';

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      type: ParticleType;
      status: ParticleStatus;
      color: string;
      scale: number;
      rotation: number;
      rotSpeed: number;
      id: number;
      bubble?: {
        text: string;
        timer: number;
        opacity: number;
      };
    }

    let particles: Particle[] = [];
    const filterYRatio = 0.45; // Where the decision happens (45% down)
    let particleIdCounter = 0;

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // --- DRAWING HELPERS ---
    const drawParticle = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.scale(p.scale, p.scale);

      // Glow effect
      if (p.status === 'hot') {
        ctx.shadowColor = COLORS.hot;
        ctx.shadowBlur = 15;
      } else if (p.status === 'nurture') {
        ctx.shadowColor = COLORS.nurture;
        ctx.shadowBlur = 8;
      }

      ctx.strokeStyle = p.color;
      ctx.fillStyle = p.status === 'raw' ? 'transparent' : p.color;
      ctx.lineWidth = 2;

      // Draw Icon
      if (p.type === 'mail') ctx.stroke(ICONS.mail);
      else if (p.type === 'linkedin') ctx.stroke(ICONS.linkedin);
      else if (p.type === 'phone') ctx.stroke(ICONS.phone);
      else if (p.type === 'whatsapp') ctx.stroke(ICONS.whatsapp);

      // Solid fill for active states
      if (p.status !== 'raw') {
        ctx.globalAlpha = 0.2;
        if (p.type === 'mail') ctx.fill(ICONS.mail);
        // ... others
        ctx.globalAlpha = 1;
      }

      ctx.restore();

      // Draw Chat Bubble (UI Overlay)
      if (p.bubble && p.bubble.opacity > 0.05) {
        ctx.save();
        ctx.translate(p.x + 15, p.y - 15);
        ctx.globalAlpha = p.bubble.opacity;

        // Bubble shape
        ctx.fillStyle = COLORS.bubbleBg;
        ctx.strokeStyle = COLORS.hot;
        ctx.lineWidth = 1;

        const text = p.bubble.text;
        const textWidth = ctx.measureText(text).width + 20;

        ctx.beginPath();
        ctx.roundRect(0, -25, textWidth, 25, 6);
        ctx.fill();
        ctx.stroke();

        // Text
        ctx.fillStyle = COLORS.textPrimary;
        ctx.font = '10px "Inter", sans-serif';
        ctx.fillText(text, 10, -9);

        ctx.restore();
      }
    };

    const drawDashboard = () => {
      // 1. Filter Line (Laser)
      const fy = height * filterYRatio;

      const gradient = ctx.createLinearGradient(0, fy, width, fy);
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(0.2, COLORS.nurture);
      gradient.addColorStop(0.8, COLORS.nurture);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.beginPath();
      ctx.moveTo(width * 0.2, fy);
      ctx.lineTo(width * 0.8, fy);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Funnel Glass Shape
      ctx.save();
      const funnelTopW = width * 0.5;
      const funnelBotW = width * 0.15;
      const topX = (width - funnelTopW) / 2;
      const botX = (width - funnelBotW) / 2;

      const path = new Path2D();
      path.moveTo(topX, 0);
      path.lineTo(botX, height);
      path.lineTo(botX + funnelBotW, height);
      path.lineTo(topX + funnelTopW, 0);

      ctx.fillStyle = COLORS.glass;
      ctx.fill(path);

      // Edges
      ctx.strokeStyle = COLORS.border;
      ctx.lineWidth = 1;
      ctx.stroke(path);
      ctx.restore();

      // 3. Nurture Pool (Right Side)
      ctx.save();
      const poolX = width * 0.85;
      const poolY = height * 0.7;
      const poolRadius = width * 0.12;

      // Pool Circle
      ctx.beginPath();
      ctx.arc(poolX, poolY, poolRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Rotating ring
      ctx.beginPath();
      ctx.arc(poolX, poolY, poolRadius + 5, Date.now() / 1000, Date.now() / 1000 + Math.PI);
      ctx.strokeStyle = COLORS.nurture;
      ctx.globalAlpha = 0.5;
      ctx.stroke();

      // Label
      ctx.fillStyle = COLORS.nurture;
      ctx.globalAlpha = 1;
      ctx.font = '10px "JetBrains Mono"';
      ctx.textAlign = 'center';
      // Use localStats to prevent stale closure issues
      ctx.fillText(`NURTURE POOL [${localStats.nurture}]`, poolX, poolY + poolRadius + 20);
      ctx.restore();
    };

    // --- PHYSICS ENGINE ---
    const update = () => {
      // Spawn Logic - SLOWER RATE
      if (Math.random() < 0.02) { // Reduced from 0.05
        const types: ParticleType[] = ['mail', 'linkedin', 'phone', 'whatsapp'];
        const funnelTopW = width * 0.5;
        const startX = (width / 2) - (funnelTopW / 2) + Math.random() * funnelTopW;

        particles.push({
          x: startX,
          y: -20,
          vx: (Math.random() - 0.5) * 0.5,
          vy: 0.5 + Math.random() * 0.5, // MUCH SLOWER START (was 2 + random)
          type: types[Math.floor(Math.random() * types.length)],
          status: 'raw',
          color: COLORS.raw,
          scale: 1,
          rotation: Math.random() * Math.PI,
          rotSpeed: (Math.random() - 0.5) * 0.03, // Slower rotation
          id: particleIdCounter++
        });
      }

      const fy = height * filterYRatio;
      const poolX = width * 0.85;
      const poolY = height * 0.7;

      particles.forEach((p, i) => {
        // Basic Move
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;

        // --- FILTER LINE EVENT ---
        if (p.status === 'raw' && p.y > fy) {
          // DECISION: 30% Hot, 70% Nurture
          if (Math.random() < 0.3) {
            p.status = 'hot';
            p.color = COLORS.hot;
            p.vy *= 1.2; // Gentle acceleration (was 1.5)

            // Trigger Bubble?
            if (Math.random() < 0.7) {
              p.bubble = {
                text: MESSAGES[Math.floor(Math.random() * MESSAGES.length)],
                timer: 200, // Longer duration for slower movement
                opacity: 0
              };
            }
          } else {
            p.status = 'nurture';
            p.color = COLORS.nurture;
            p.vy *= 0.5; // Slow down
          }
        }

        // --- PATH A: HOT ---
        if (p.status === 'hot') {
          // Move towards center bottom
          const dx = (width / 2) - p.x;
          p.vx += dx * 0.005;

          // Handle Bubble Animation
          if (p.bubble) {
            p.bubble.timer--;
            // Slower fade in/out
            if (p.bubble.timer > 160) p.bubble.opacity += 0.05;
            if (p.bubble.timer < 40) p.bubble.opacity -= 0.05;

            // Clamp opacity
            if (p.bubble.opacity > 1) p.bubble.opacity = 1;
            if (p.bubble.opacity < 0) p.bubble.opacity = 0;
          }

          // Exit
          if (p.y > height) {
            particles.splice(i, 1);
            localStats.meetings++;
            setStats(prev => ({ ...prev, meetings: prev.meetings + 1 }));
          }
        }

        // --- PATH B: NURTURE ---
        if (p.status === 'nurture') {
          // Attraction to pool
          const dx = poolX - p.x;
          const dy = poolY - p.y;
          p.vx += dx * 0.002;
          p.vy += dy * 0.002;

          // Friction
          p.vx *= 0.95;
          p.vy *= 0.95;

          // Captured in pool
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 30) {
            // HIDE ICON: Remove particle immediately upon entering pool
            localStats.nurture++;
            setStats(prev => ({ ...prev, nurture: prev.nurture + 1 }));
            particles.splice(i, 1);
          }
        }
      });
    };

    // --- MAIN LOOP ---
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Grid Background
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
      for (let y = 0; y < height; y += gridSize) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
      ctx.restore();

      drawDashboard();
      update();
      particles.forEach(drawParticle);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-brand-surface/20 overflow-hidden">
      {/* Real DOM Overlay for Crisp Text Stats */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-brand-surface border border-brand-border p-3 rounded-lg shadow-xl backdrop-blur-sm">
          <div className="text-[10px] uppercase text-brand-muted font-mono tracking-widest mb-1">
            {language === 'it' ? 'Meeting Qualificati' : 'Qualified Meetings'}
          </div>
          <div className="text-2xl font-bold text-brand-text flex items-center">
            {stats.meetings}
            <span className="ml-2 w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default FunnelAnimation;