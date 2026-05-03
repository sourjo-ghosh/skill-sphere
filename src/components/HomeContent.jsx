"use client";

import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import {
  IoBookOutline,
  IoPeopleOutline,
  IoRocketOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";
import FeaturedCourse from "@/components/FeaturedCourse";
import Instractors from "@/components/Instractors";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const offerings = [
  {
    icon: IoBookOutline,
    title: "Expert-Led Courses",
    description:
      "Learn from industry professionals with real-world experience and practical insights.",
  },
  {
    icon: IoPeopleOutline,
    title: "Community Learning",
    description:
      "Connect with peers, join study groups, and learn together in a supportive environment.",
  },
  {
    icon: IoRocketOutline,
    title: "Project-Based Learning",
    description:
      "Build real projects for your portfolio while mastering new skills hands-on.",
  },
  {
    icon: IoTrophyOutline,
    title: "Recognized Certificates",
    description:
      "Earn certificates that validate your skills and boost your career prospects.",
  },
];

export default function HomeContent({ featuredCoursesData }) {
  return (
    <div className="w-11/12 mx-auto">
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div className="flex flex-col justify-center gap-6" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              New courses available
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight" variants={itemVariants}>
              Learn, Build, and Share Your{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                Knowledge
              </motion.span>{" "}
              with Us!
            </motion.h1>

            <motion.p className="text-lg text-text-secondary max-w-lg" variants={itemVariants}>
              Level up your skills with modern, real-world learning. Join thousands of learners and start your journey today.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/courses">
                  <button className="flex items-center gap-2 bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-lg font-medium transition-colors">
                    Start Learning
                    <MdArrowOutward />
                  </button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/about-us">
                  <button className="flex items-center gap-2 border border-border text-text hover:bg-bg-secondary px-6 py-3 rounded-lg font-medium transition-colors">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="flex gap-8 pt-4" variants={itemVariants}>
              <motion.div className="text-center" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <motion.p className="text-3xl font-bold text-text" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.5 }}>
                  10K+
                </motion.p>
                <p className="text-text-secondary text-sm">Active Learners</p>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <motion.p className="text-3xl font-bold text-text" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.5 }}>
                  500+
                </motion.p>
                <p className="text-text-secondary text-sm">Courses</p>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <motion.p className="text-3xl font-bold text-text" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4, duration: 0.5 }}>
                  50+
                </motion.p>
                <p className="text-text-secondary text-sm">Expert Mentors</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="relative" variants={itemVariants} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div whileHover={{ rotateY: 5, rotateX: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Image
                src="/banner.png"
                alt="Learning Platform"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Why Choose Us
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4" variants={itemVariants}>
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Offer</span>
          </motion.h2>
          <motion.p className="text-text-secondary max-w-2xl mx-auto" variants={itemVariants}>
            Everything you need to succeed in your learning journey, all in one place
          </motion.p>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-bg-secondary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon className="text-2xl text-primary group-hover:text-white transition-colors" />
              </motion.div>
              <motion.h3 className="text-xl font-semibold text-text mb-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                {item.title}
              </motion.h3>
              <motion.p className="text-text-secondary text-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1 + 0.2 }}>
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <FeaturedCourse data={featuredCoursesData} />
      <Instractors />
    </div>
  );
}
