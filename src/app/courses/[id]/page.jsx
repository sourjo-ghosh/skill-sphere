import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MdStar,
  MdAccessTime,
  MdSchool,
  MdPerson,
  MdOutlineShoppingCart,
  MdFavoriteBorder,
  MdShare,
} from "react-icons/md";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();

  const ExpectedCourse = data.find((c) => c.id === Number(id));
  if (!ExpectedCourse) {
    notFound();
  }
  // console.log(ExpectedCourse);
  return (
    <div className="min-h-screen pt-3">
      <div className="w-11/12 mx-auto my-5 flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2">
          <Image
            src={ExpectedCourse.image}
            alt={ExpectedCourse.title}
            width={800}
            height={450}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-5">
          <h1 className="text-3xl font-bold">{ExpectedCourse.title}</h1>
          <p className="text-lg text-muted-foreground">
            {ExpectedCourse.description}
          </p>
          <div className="flex items-center gap-3">
            <MdStar className="text-yellow-500" />
            <span>
              {ExpectedCourse.rating} ({ExpectedCourse.reviews} reviews)
            </span>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <MdAccessTime />
              <span>{ExpectedCourse.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MdSchool />
              <span>{ExpectedCourse.level}</span>
            </div>
            <div className="flex items-center gap-2">
              <MdPerson />
              <span>{ExpectedCourse.students} students</span>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90">
              <MdOutlineShoppingCart />
              Enroll Now
            </button>
            <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90">
              <MdFavoriteBorder />
              Add to Wishlist
            </button>
            <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90">
              <MdShare />
              Share
            </button>
          </div>
        </div>
      </div>
      <Link
        href="/courses"
        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 w-max mx-auto mb-10"
      >
        <MdOutlineShoppingCart />
        Back to Courses
      </Link> 


    </div>
  );
};

export default CourseDetailsPage;
