"use client";

import Link from "next/link";
import { Github, Facebook, Twitter, Linkedin } from "lucide-react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="py-12 bg-gray-900 text-gray-300" ref={footerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4">CareerR</h3>
            <p className="text-gray-400 text-sm">
              AI-powered career recommendations to help you find your perfect
              professional path.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Team
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/cookies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookies
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://github.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>&copy; {currentYear} CareerRec. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
