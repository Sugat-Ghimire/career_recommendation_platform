"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  r: number;
}

interface Connection {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

export default function LogoAnimation({ size = 40 }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  const centerX = 20;
  const centerY = 20;
  const radius = 16;
  

  const createNodePositions = (count: number, centerRadius: number): Node[] => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2;
      return {
        x: centerX + Math.cos(angle) * centerRadius,
        y: centerY + Math.sin(angle) * centerRadius,
        r: 1.2
      };
    });
  };

  const outerNodes = createNodePositions(8, radius);
  const innerNodes = createNodePositions(5, radius * 0.5);
  
  const centralNode: Node = { x: centerX, y: centerY, r: 2.5 };
  
  const allNodes: Node[] = [...outerNodes, ...innerNodes, centralNode];
  
  const connections: Connection[] = [];
  
  innerNodes.forEach(node => {
    connections.push({
      x1: centralNode.x,
      y1: centralNode.y,
      x2: node.x,
      y2: node.y,
      delay: 0.2 + Math.random() * 0.3
    });
  });
  
  innerNodes.forEach((innerNode, i) => {
    for (let j = 0; j < 2; j++) {
      const outerIndex = (i + j) % outerNodes.length;
      connections.push({
        x1: innerNode.x,
        y1: innerNode.y,
        x2: outerNodes[outerIndex].x,
        y2: outerNodes[outerIndex].y,
        delay: 0.5 + Math.random() * 0.3
      });
    }
  });

  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg 
        viewBox="0 0 40 40" 
        width={size} 
        height={size}
        fill="none"
      >
        {/* Connections */}
        {connections.map((conn, i) => (
          <motion.line
            key={`conn-${i}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="#6366f1"
            strokeWidth="0.8"
            strokeOpacity="0.7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{
              duration: 0.7,
              delay: conn.delay,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Nodes */}
        {allNodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={node === centralNode ? node.r : node.r * (0.8 + Math.random() * 0.4)}
            fill="#6366f1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: node === centralNode ? 1 : 0.8 + Math.random() * 0.3
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              delay: i * 0.05 + 0.3,
              duration: 0.5
            }}
          />
        ))}

        {/* Pulse effect on central node */}
        <motion.circle
          cx={centralNode.x}
          cy={centralNode.y}
          r={centralNode.r * 2}
          stroke="#6366f1"
          strokeWidth="0.5"
          fill="transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Particles moving along connections */}
        {connections.map((conn, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={conn.x1}
            cy={conn.y1}
            r="0.7"
            fill="#6366f1"
            animate={{
              cx: [conn.x1, conn.x2, conn.x1],
              cy: [conn.y1, conn.y2, conn.y1],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 2 + Math.random(),
              delay: conn.delay + 0.5,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
} 