import React from "react";

export default function AnimatedBackground({ particleCount = 200 }) {
  // Generate completely random particles with varied properties
  const generateParticles = () => {
    return [...Array(particleCount)].map((_, i) => {
      const size = Math.floor(Math.random() * 8) + 1;
      const shapes = ['rounded-full', 'rounded-sm', 'rounded', ''];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];

      const colors = [
        "rgba(99, 102, 241, 0.6)",    // Indigo
        "rgba(139, 92, 246, 0.6)",    // Purple
        "rgba(236, 72, 153, 0.6)",    // Pink
        "rgba(16, 185, 129, 0.6)",    // Emerald
        "rgba(245, 158, 11, 0.6)",    // Amber
        "rgba(59, 130, 246, 0.6)",    // Blue
        "rgba(249, 115, 22, 0.6)"     // Orange
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      const duration = Math.floor(Math.random() * 25) + 10;
      const delay = Math.floor(Math.random() * 10);

      // Random movement patterns
      const movementTypes = ['float', 'drift', 'pulse', 'orbit', 'bounce'];
      const movement = movementTypes[Math.floor(Math.random() * movementTypes.length)];

      return (
        <div
          key={i}
          className={`absolute ${shape} animate-${movement}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.floor(Math.random() * 100)}%`,
            left: `${Math.floor(Math.random() * 100)}%`,
            backgroundColor: color,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            opacity: Math.random() * 0.7 + 0.3,
            transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
            filter: `blur(${Math.random() > 0.7 ? Math.random() * 2 : 0}px)`
          }}
        ></div>
      );
    });
  };

  // Generate random gradient blobs
  const generateBlobs = () => {
    const blobCount = 5;
    const blobs = [];

    for (let i = 0; i < blobCount; i++) {
      const size = Math.floor(Math.random() * 300) + 100;
      const colors = [
        "rgba(99, 102, 241, 0.15)",    // Indigo
        "rgba(139, 92, 246, 0.15)",    // Purple
        "rgba(236, 72, 153, 0.15)",    // Pink
        "rgba(16, 185, 129, 0.15)",    // Emerald
        "rgba(59, 130, 246, 0.15)"     // Blue
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      blobs.push(
        <div
          key={`blob-${i}`}
          className="absolute rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-random"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.floor(Math.random() * 100)}%`,
            left: `${Math.floor(Math.random() * 100)}%`,
            backgroundColor: color,
            animationDuration: `${Math.floor(Math.random() * 15) + 10}s`,
            animationDelay: `${Math.floor(Math.random() * 8)}s`,
            opacity: Math.random() * 0.2 + 0.1,
            transform: `scale(${Math.random() * 2 + 1})`
          }}
        ></div>
      );
    }

    return blobs;
  };

  // Generate dynamic grid patterns
  const generateGrids = () => {
    const gridCount = 2;
    const grids = [];

    for (let i = 0; i < gridCount; i++) {
      const sizes = [30, 40, 50, 60];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const opacity = Math.random() * 0.08 + 0.02;

      grids.push(
        <div
          key={`grid-${i}`}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(31,41,55,0.3) 1px, transparent 1px), 
                 linear-gradient(to bottom, rgba(31,41,55,0.3) 1px, transparent 1px)`,

            backgroundSize: `${size}px ${size}px`,
            opacity: opacity,
            transform: `rotate(${Math.floor(Math.random() * 10)}deg)`,
            animation: `gridMove ${Math.floor(Math.random() * 30) + 20}s linear infinite`
          }}
        ></div>
      );
    }

    return grids;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Random particles */}
      {generateParticles()}

      {/* Random gradient blobs */}
      {generateBlobs()}

      {/* Dynamic grid patterns */}
      {generateGrids()}

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-900/20"></div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) rotate(${Math.random() * 360}deg);
          }
          66% {
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) rotate(${Math.random() * 360}deg);
          }
        }
        
        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(${Math.random() * 0.5 + 1.2});
            opacity: 0.8;
          }
        }
        
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(${Math.random() * 50 + 20}px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(${Math.random() * 50 + 20}px) rotate(-360deg);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(${Math.random() * 30 - 15}px);
          }
        }
        
        @keyframes pulse-random {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.1;
          }
          33% {
            transform: scale(${Math.random() * 0.5 + 1.1}) rotate(${Math.random() * 20 - 10}deg);
            opacity: 0.2;
          }
          66% {
            transform: scale(${Math.random() * 0.5 + 0.9}) rotate(${Math.random() * 20 - 10}deg);
            opacity: 0.15;
          }
        }
        
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: ${Math.floor(Math.random() * 100)}px ${Math.floor(Math.random() * 100)}px;
          }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-drift {
          animation: drift linear infinite;
        }
        
        .animate-pulse {
          animation: pulse ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit linear infinite;
        }
        
        .animate-bounce {
          animation: bounce ease-in-out infinite;
        }
        
        .animate-pulse-random {
          animation: pulse-random ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}