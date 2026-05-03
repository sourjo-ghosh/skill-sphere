"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { MdStar } from "react-icons/md";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const CourseUI = ({ courseData }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filteredCourses = useMemo(() => {
    return courseData.filter((course) =>
      course.title?.toLowerCase().includes(value?.toLowerCase()?? "")
    );
  }, [value, courseData]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex justify-center items-center my-5"
      >
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          aria-label="Name"
          className="w-64"
          placeholder="Search course"
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {filteredCourses.map((course) => (
          <motion.div
            className="relative flex flex-col grow rounded-2xl border border-border bg-bg p-3 shadow-sm"
            key={course.id}
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 18px 32px rgba(14, 30, 37, 0.08)", transition: { duration: 0.2 } }}
          >
            <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-bg/90 backdrop-blur-sm">
              <MdStar className="text-yellow-500" />
              <span className="text-sm font-semibold text-text">
                {course.rating}
              </span>
            </div>
            <Image
              className="w-full object-cover rounded-lg"
              src={course.image}
              alt={course.title}
              height={450}
              width={500}
            />

            <h2 className="mt-3 text-primary text-2xl font-semibold">
              {course.title}
            </h2>
            <p className="mt-3 text-text grow">{course.description}</p>
            <div>
              <p className="mt-3 text-secondary-dark font-bold">
                {course.instructor}
              </p>
              <p className="mt-1 text-text-secondary text-sm">
                {course.duration}
              </p>
            </div>
            <Link href={`/courses/${course.id}`}>
              <button className="cursor-pointer w-full mt-4 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">
                View Details
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CourseUI;
