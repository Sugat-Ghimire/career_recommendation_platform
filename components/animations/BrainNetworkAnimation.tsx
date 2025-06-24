"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
}

interface Path {
  d: string;
  delay: number;
  duration: number;
}

interface Node {
  cx: number;
  cy: number;
  r: number;
  label: string;
  delay: number;
}

interface BackgroundNeuron {
  cx: number;
  cy: number;
  r: number;
  duration: number;
  delay: number;
}

interface Particle {
  path: string;
  duration: number;
  delay: number;
}

export default function BrainNetworkAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const core: Point = { x: 250, y: 250 };

  const paths: Path[] = [
    { d: "M250,250 C150,200 100,150 80,100", delay: 0.2, duration: 1.5 },
    { d: "M250,250 C350,200 400,150 420,100", delay: 0.3, duration: 2 },
    { d: "M250,250 C150,300 100,350 80,400", delay: 0.6, duration: 1.5 },
    { d: "M250,250 C350,300 400,350 420,400", delay: 0.8, duration: 1.5 },
    { d: "M250,250 C200,150 150,100 100,80", delay: 1, duration: 1.5 },
    { d: "M250,250 C300,150 350,100 400,80", delay: 1.2, duration: 1.5 },
    { d: "M250,250 C200,350 150,400 100,420", delay: 1.3, duration: 1.5 },
    { d: "M250,250 C300,350 350,400 400,420", delay: 1.6, duration: 1.5 },
  ];

  const secondaryPaths: Path[] = [
    { d: "M250,250 C200,200 180,150 150,120", delay: 0.3, duration: 2 },
    { d: "M250,250 C300,200 320,150 350,120", delay: 0.4, duration: 2 },
    { d: "M250,250 C200,300 180,350 150,380", delay: 0.7, duration: 2 },
    { d: "M250,250 C300,300 320,350 350,380", delay: 0.8, duration: 2 },
  ];

  const nodes: Node[] = [
    { cx: 80, cy: 100, r: 8, label: "Technology", delay: 1.8 },
    { cx: 420, cy: 100, r: 8, label: "Science", delay: 2 },
    { cx: 80, cy: 400, r: 8, label: "Creative", delay: 2.2 },
    { cx: 420, cy: 400, r: 8, label: "Business", delay: 2.4 },
    { cx: 100, cy: 80, r: 5, label: "", delay: 2.6 },
    { cx: 400, cy: 80, r: 5, label: "", delay: 2.8 },
    { cx: 100, cy: 420, r: 5, label: "", delay: 3 },
    { cx: 400, cy: 420, r: 5, label: "", delay: 3.2 },
    // Nodes for secondary paths
    { cx: 150, cy: 120, r: 4, label: "", delay: 2.5 },
    { cx: 350, cy: 120, r: 4, label: "", delay: 2.7 },
    { cx: 150, cy: 380, r: 4, label: "", delay: 2.9 },
    { cx: 350, cy: 380, r: 4, label: "", delay: 3.1 },
  ];

  const allPaths = [...paths, ...secondaryPaths];
  const particles: Particle[] = allPaths.flatMap((path) =>
    Array.from({ length: 2 }).map(() => ({
      // 2 particles per path
      path: path.d,
      duration: 3 + Math.random() * 2,
      delay: path.delay + 1.5 + Math.random(),
    }))
  );

  const backgroundNeurons: BackgroundNeuron[] = Array.from({ length: 30 }).map(
    () => ({
      cx: Math.random() * 500,
      cy: Math.random() * 500,
      r: Math.random() * 1.5 + 0.5,
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 5,
    })
  );

  return (
    <div className="h-full w-full flex items-center justify-center overflow-visible">
      <motion.svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="1" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Neurons */}
        {backgroundNeurons.map((neuron, i) => (
          <motion.circle
            key={`bg-neuron-${i}`}
            cx={neuron.cx}
            cy={neuron.cy}
            r={neuron.r}
            fill="#A855F7"
            opacity={0.5}
            animate={{
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: neuron.duration,
              delay: neuron.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central Core */}
        <motion.circle
          cx={core.x}
          cy={core.y}
          r={12}
          fill="#7E22CE"
          filter="url(#glow)"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx={core.x}
          cy={core.y}
          r={12}
          fill="transparent"
          stroke="#C084FC"
          strokeWidth={2}
          animate={{
            scale: [1, 2, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Connection Paths */}
        {paths.map((path, i) => (
          <motion.path
            key={`path-${i}`}
            d={path.d}
            stroke="#A855F7"
            strokeWidth={1.5}
            strokeOpacity={0.8}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: path.duration,
              delay: path.delay,
              ease: "circOut",
            }}
          />
        ))}
        {secondaryPaths.map((path, i) => (
          <motion.path
            key={`sec-path-${i}`}
            d={path.d}
            stroke="#A855F7"
            strokeWidth={0.8}
            strokeOpacity={0.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: path.duration,
              delay: path.delay,
              ease: "circOut",
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={`node-${i}`}
            whileHover={{ scale: 1.2, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="#7E22CE"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: node.delay,
              }}
            />
            {node.label && (
              <motion.text
                x={node.cx}
                y={node.cy - node.r - 8}
                fontSize="11"
                fontWeight="500"
                fill="#7E22CE"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: node.delay + 0.4 }}
              >
                {node.label}
              </motion.text>
            )}
          </motion.g>
        ))}

        {/* Particles */}
        {particles.map((particle, i) => (
          <motion.circle
            key={`particle-${i}`}
            r={2}
            fill="#C084FC"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <animateMotion
              dur={`${particle.duration}s`}
              begin={`${particle.delay}s`}
              fill="freeze"
              path={particle.path}
              repeatCount="indefinite"
            />
          </motion.circle>
        ))}
      </motion.svg>
    </div>
  );
}
