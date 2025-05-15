"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="w-96 max-w-md"
      >
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 mx-auto mb-4 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl"
            >
              CR
            </motion.div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500">
              Login to access personalized career recommendations
            </p>
          </div>

          {/* Google Login Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <div className="left-1 w-5 h-5 relative">
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            Continue with Google
          </motion.button>

          {/* others */}
          <div className="mt-5 pt-6 border-t border-gray-200 text-center">
            <div className="space-x-4">
              <Link
                href="/privacy"
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
