"use client";

import { Briefcase, FileText, Brain } from "lucide-react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <FileText className="h-10 w-10 text-purple-700" />,
      title: "Resume & Profile Parsing",
      description:
        "Our AI analyzes your resume, GitHub, or LinkedIn profile to understand your skills and experience.",
    },
    {
      icon: <Brain className="h-10 w-10 text-purple-700" />,
      title: "AI-Powered Career Suggestions",
      description:
        "Get personalized career path recommendations based on your unique skill set and experience.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-purple-700" />,
      title: "Job & Course Recommendations",
      description:
        "Discover relevant job opportunities and courses to help you advance in your chosen career path.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our AI-powered platform offers everything you need to make informed
            career decisions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
