"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Find Your Perfect Career with AI
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Upload your resume or connect GitHub/LinkedIn to receive
              personalized career, skill, and job recommendations powered by AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="bg-purple-700 hover:bg-purple-800 text-lg px-6 py-4 h-auto">
                Try it Now
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-md h-80 md:h-96">
              <Image
                src="/pch.png?height=500&width=500"
                alt="AI Career Guidance Illustration"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
