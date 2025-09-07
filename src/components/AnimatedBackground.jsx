// src/components/DarkFluidBackground.jsx
import React, { useEffect, useRef } from "react";

export default function DarkFluidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // === Resize ===
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // === Gradient Blob Class ===
    class GradientBlob {
      constructor() {
        this.reset();
      }
      reset() {
        const palettes = [
          [
            { r: 67, g: 56, b: 202 },
            { r: 109, g: 40, b: 217 },
            { r: 126, g: 34, b: 206 },
          ],
          [
            { r: 30, g: 58, b: 138 },
            { r: 37, g: 99, b: 235 },
            { r: 59, g: 130, b: 246 },
          ],
          [
            { r: 15, g: 118, b: 110 },
            { r: 13, g: 148, b: 136 },
            { r: 20, g: 184, b: 166 },
          ],
          [
            { r: 136, g: 19, b: 55 },
            { r: 190, g: 18, b: 60 },
            { r: 225, g: 29, b: 72 },
          ],
        ];
        const palette = palettes[Math.floor(Math.random() * palettes.length)];
        this.colors = [...palette];
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 300 + 250;
        this.targetSize = this.size;
        this.speedX = (Math.random() - 0.5) * 0.9;
        this.speedY = (Math.random() - 0.5) * 0.9;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.012 + 0.008;
        this.pulseAmount = Math.random() * 0.4 + 0.2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.002;
        this.wobblePhase = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.025 + 0.015;
        this.wobbleAmount = Math.random() * 0.12 + 0.08;
        this.opacity = Math.random() * 0.12 + 0.07;
        this.blendMode = ["screen", "overlay", "soft-light"][
          Math.floor(Math.random() * 3)
        ];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += this.pulseSpeed;
        const pulse = Math.sin(this.pulsePhase);
        this.size = this.targetSize * (1 + pulse * this.pulseAmount);
        this.rotation += this.rotationSpeed;
        this.wobblePhase += this.wobbleSpeed;
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        const wobble = Math.sin(this.wobblePhase) * this.wobbleAmount;
        gradient.addColorStop(
          0,
          `rgba(${this.colors[0].r},${this.colors[0].g},${this.colors[0].b},${this.opacity})`
        );
        gradient.addColorStop(
          0.4 + wobble * 0.2,
          `rgba(${this.colors[1].r},${this.colors[1].g},${this.colors[1].b},${this.opacity * 0.9})`
        );
        gradient.addColorStop(
          0.7,
          `rgba(${this.colors[2].r},${this.colors[2].g},${this.colors[2].b},${this.opacity * 0.5})`
        );
        gradient.addColorStop(
          1,
          `rgba(${this.colors[2].r},${this.colors[2].g},${this.colors[2].b},0)`
        );
        ctx.globalCompositeOperation = this.blendMode;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.filter = "blur(6px) brightness(1.05)";
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.filter = "none";
        ctx.restore();
      }
    }

    // === Particles ===
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180,220,255,0.9)";
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#6ff";
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // === Dense Neural Connections ===
    function drawConnections(particles) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Strong close glow
          if (dist < 150) {
            const alpha = 1 - dist / 150;
            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            gradient.addColorStop(0, `rgba(0,255,255,${alpha})`);
            gradient.addColorStop(1, `rgba(255,0,255,${alpha})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }

          // Fainter long-range mesh
          else if (dist < 300) {
            const alpha = 1 - dist / 300;
            ctx.strokeStyle = `rgba(120,180,255,${alpha * 0.25})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // === Setup ===
    const blobs = Array.from({ length: 5 }, () => new GradientBlob());
    const particles = Array.from({ length: 120 }, () => new Particle());

    // === Animation Loop ===
    const animate = () => {
      ctx.fillStyle = "rgba(8,12,24,0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";

      blobs.forEach((b) => {
        b.update();
        b.draw();
      });
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawConnections(particles);

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gray-950">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-950/30 to-gray-900/40 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-gray-950/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,12,24,0.6)_75%)]"></div>
    </div>
  );
}
