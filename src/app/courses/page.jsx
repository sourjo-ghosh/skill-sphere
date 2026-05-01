import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdStar } from "react-icons/md";

const allCoursersPage = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const courseData = await res.json();
//   console.log(courseData);
  return (
    <div className="w-11/12 mx-auto my-3 gap-3 flex flex-col justify-center items-center">
      <h2 className="font-bold text-3xl text-primary">All Courses </h2>
      <p className="text-lg text-text/50">Everything you need to learn</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseData.map((course) => (
          <div
            className="relative flex flex-col grow rounded-2xl border border-border bg-bg p-3"
            key={course.id}
          >
            <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-bg/90 backdrop-blur-sm">
              <MdStar className="text-yellow-500" />
              <span className="text-sm font-semibold text-text">
                {course.rating}
              </span>
            </div>
            <Image
              //   className="rounded-2xl"
              className="w-full object-cover rounded-lg"
              src={course.image}
              alt={course.title}
              height={450}
              width={500}
            ></Image>

            <h2 className="mt-3  text-primary text-2xl font-semibold">
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
            {/* <div>
              <div className="flex justify-between items-center mt-3 border-t border-border p-3">
                <span className="text-text-secondary text-sm">Level</span>
                <span className="text-text text-sm bg-accent/70 p-2 rounded-2xl">
                  {course.level}
                </span>
              </div>
              <div className="flex justify-between items-center mt-3 border-t border-border p-3">
                <span className="text-text-secondary text-sm">Category</span>
                <span className="text-text text-sm">{course.category}</span>
              </div>
            </div> */}
            <Link href={`/courses/${course.id}`}>
              <button className="cursor-pointer w-full mt-4 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default allCoursersPage;

