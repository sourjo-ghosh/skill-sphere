import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import {
  IoBookOutline,
  IoPeopleOutline,
  IoRocketOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import FeaturedCourse from "@/components/FeaturedCourse";
import Instractors from "@/components/Instractors";

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

export default async function Home() {
  // const res = await fetch("/data.json");
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const featuredCoursesData = data
    .filter((course) => course.rating >= 4.5)
    .slice(0, 3);
  return (
    <div className="w-11/12 mx-auto">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              New courses available
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
              Learn, Build, and Share Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Knowledge
              </span>{" "}
              with Us!
            </h1>

            <p className="text-lg text-text-secondary max-w-lg">
              Level up your skills with modern, real-world learning. Join
              thousands of learners and start your journey today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/courses">
                <button className="flex items-center gap-2 bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-lg font-medium transition-colors">
                  Start Learning
                  <MdArrowOutward />
                </button>
              </Link>
              <Link href="/about-us">
                <button className="flex items-center gap-2 border border-border text-text hover:bg-bg-secondary px-6 py-3 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-text">10K+</p>
                <p className="text-text-secondary text-sm">Active Learners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text">500+</p>
                <p className="text-text-secondary text-sm">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text">50+</p>
                <p className="text-text-secondary text-sm">Expert Mentors</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/banner.png"
              alt="Learning Platform"
              width={600}
              height={500}
              className="relative rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Offer
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Everything you need to succeed in your learning journey, all in one
            place
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-bg-secondary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon className="text-2xl text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Featured Courses */}
      <FeaturedCourse data={featuredCoursesData} />
      {/* Instructors */}
      {/* <Image
      alt="sdjfasldkfjkls"
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        width={400}
        height={200}
      /> */}
      <Instractors></Instractors>
    </div>
  );
}
