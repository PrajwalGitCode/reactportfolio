// src/components/CatsEyeNebulaBackground.jsx
import React, { useRef, useEffect } from "react";

export default function CatsEyeNebulaBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const noise = (x, y, t) =>
      Math.sin(x * 0.015 + t * 0.0005) +
      Math.cos(y * 0.015 - t * 0.0003) +
      Math.sin((x + y) * 0.01 + t * 0.0008);

    const render = (time) => {
      const w = canvas.width;
      const h = canvas.height;
      const imgData = ctx.createImageData(w, h);
      const data = imgData.data;

      const pulse = 0.4 + 0.6 * Math.sin(time * 0.0012);

      // Base dark procedural nebula
      for (let y = 0; y < h; y += 2) {
        for (let x = 0; x < w; x += 2) {
          const n = noise(x, y, time) * 0.5 + 0.5;

          const r = Math.floor(20 + 40 * n * pulse);   // very subtle red
          const g = Math.floor(30 + 60 * n * pulse);   // faint cyan/teal
          const b = Math.floor(50 + 100 * n * pulse);  // deep dark blue

          const idx = (y * w + x) * 4;
          data[idx] = r;
          data[idx + 1] = g;
          data[idx + 2] = b;
          data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imgData, 0, 0);

      // Central deep radial nebula
      const radial = ctx.createRadialGradient(
        w / 2,
        h / 2,
        150 + 50 * pulse,
        w / 2,
        h / 2,
        Math.min(w, h) / 1.1
      );
      radial.addColorStop(0, `rgba(60,30,120,${0.4 + 0.2 * pulse})`); // deep violet
      radial.addColorStop(0.3, `rgba(0,100,180,${0.15 + 0.05 * pulse})`); // neon cyan subtle
      radial.addColorStop(0.6, `rgba(150,20,100,0.1)`); // faint pink/red
      radial.addColorStop(1, "rgba(0,0,10,0.95)"); // very dark blue/black
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, w, h);

      // Wisps / flowing dark clouds
      for (let i = 0; i < 5; i++) {
        const angle = time * 0.00012 + i * (Math.PI / 2.5);
        const driftX = Math.sin(time * 0.0004 + i) * 120;
        const driftY = Math.cos(time * 0.00025 + i) * 120;

        const cx = w / 2 + Math.cos(angle) * (w / 2.6) + driftX;
        const cy = h / 2 + Math.sin(angle) * (h / 2.6) + driftY;

        const wispGrad = ctx.createRadialGradient(cx, cy, 60, cx, cy, 450);
        wispGrad.addColorStop(0, "rgba(0,120,200,0.2)");   // neon cyan faint
        wispGrad.addColorStop(0.3, "rgba(60,30,120,0.15)"); // deep violet
        wispGrad.addColorStop(0.6, "rgba(150,20,100,0.08)"); // subtle pink/red
        wispGrad.addColorStop(1, "rgba(0,0,10,0)");          // fade to dark
        ctx.fillStyle = wispGrad;
        ctx.fillRect(0, 0, w, h);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "black" }}
    />
  );
}
