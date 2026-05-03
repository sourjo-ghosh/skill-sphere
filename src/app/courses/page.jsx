"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CourseUI from "@/components/CourseUI";

const allCoursersPage = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`https://skillsphere-sandy-three.vercel.app/data.json`);;
        if (!res.ok) {
          throw new Error(`Failed to load courses: ${res.status}`);
        }
        const data = await res.json();
        setCourseData(data);
      } catch (err) {
        setError(err.message || "Unable to load courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="w-11/12 mx-auto my-3 gap-3 flex flex-col justify-center items-center">
      <motion.h2
        className="font-bold text-3xl text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        All Courses
      </motion.h2>
      <motion.p
        className="text-lg text-text/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Everything you need to learn
      </motion.p>
      {loading && <p className="mt-4 text-text/70">Loading courses...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {!loading && !error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CourseUI courseData={courseData} />
        </motion.div>
      )}
    </div>
  );
};

export default allCoursersPage;
