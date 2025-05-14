"use client";

import { Upload, Search, CheckCircle, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-purple-700" />,
      title: "Upload Resume / Connect GitHub/LinkedIn",
      description:
        "Start by uploading your resume or connecting your GitHub or LinkedIn profile.",
    },
    {
      icon: <Search className="h-8 w-8 text-purple-700" />,
      title: "AI analyzes your skills & experience",
      description:
        "Our AI engine analyzes your background to identify your strengths and potential.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-purple-700" />,
      title: "Platform suggests careers and courses",
      description:
        "Receive personalized career paths and learning opportunities tailored to your profile.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-700" />,
      title: "You track progress and apply to jobs",
      description:
        "Track your career development and apply to recommended positions with confidence.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our simple four-step process helps you find your ideal career path
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex mb-12 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="mr-6 flex-shrink-0">
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700"
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                >
                  {index + 1}
                </motion.div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  <motion.div
                    className="mr-3"
                    initial={{ rotate: -10, opacity: 0 }}
                    animate={
                      isInView
                        ? { rotate: 0, opacity: 1 }
                        : { rotate: -10, opacity: 0 }
                    }
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
