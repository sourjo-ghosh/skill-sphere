import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCourse = ({ data }) => {
  return (
    <div className="my-7 flex flex-col justify-center items-center gap-4">
      <h2 className="text-3xl font-bold text-text-secondary">
        Featured Courses
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((course) => (
          <div
            className="flex flex-col grow   bg-bg-secondary space-y-3 p-3 border border-border rounded-2xl"
            key={course.id}
          >
            <Image
              className="rounded-2xl"
              src={course.image}
              alt={course.title}
              height={450}
              width={500}
            ></Image>
            <h1 className="text-lg font-semibold text-primary mt-3">
              {course.title}
            </h1>
            <p className="text-text-secondary mt-2 grow">
              {course.description}
            </p>
            <h3 className="text-xl">
              Instructor: <span className="font-bold">{course.instructor}</span>
            </h3>
            <div className="mt-4 flex justify-between text-sm">
              <span className="text-text-secondary">Category</span>
              <span className="text-text">{course.category}</span>
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <span className="text-text-secondary">Rating</span>
              <span className="text-text">{course.rating}</span>
            </div>
            <button>View Details</button>
          </div>
        ))}
      </div>
      <Link href="/courses">
        <button className="flex justify-center items-center text-center  bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-lg font-medium transition-colors">
          View All
        </button>
      </Link>
    </div>
  );
};

export default FeaturedCourse;
