import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdStar, MdAccessTime, MdSchool, MdKeyboardArrowLeft } from "react-icons/md";

const courseDetailsPage = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:3000/data.json");
  const courseData = await res.json();
  const course = courseData.find((course) => course.id === Number(id));

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-8">
      hello world 
    </div>
  );
};

export default courseDetailsPage;
