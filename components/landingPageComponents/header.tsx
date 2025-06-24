"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="border-b bg-white sticky top-0 z-10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center">
            <motion.div
              className="w-10 h-10 rounded-md bg-purple-700 flex items-center justify-center text-white font-bold text-xl mr-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CR
            </motion.div>
            <span className="text-xl font-semibold hidden sm:inline-block">
              CareerR
            </span>
          </Link>
        </motion.div>

        <motion.nav
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/"
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            How It Works
          </Link>
          <Link
            href="/login"
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            Login/Register
          </Link>
        </motion.nav>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-4xl text-white"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileTap={{ scale: 0.8 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white py-4 px-4 border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login/Register
            </Link>
            <motion.button
              className="bg-purple-700 hover:bg-purple-800 w-full text-white px-4 py-2 rounded-md mt-2"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
