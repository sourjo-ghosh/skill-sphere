import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="w-11/12 mx-auto min-h-screen flex flex-col justify-center items-center py-20">
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
            Level up your skills with modern, real-world learning. Join thousands of learners and start your journey today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="#courses">
              <button className="flex items-center gap-2 bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-lg font-medium transition-colors">
                Start Learning
                <MdArrowOutward />
              </button>
            </Link>
            <Link href="#demo">
              <button className="flex items-center gap-2 border border-border text-text hover:bg-bg-secondary px-6 py-3 rounded-lg font-medium transition-colors">
                <IoPlayCircleOutline className="text-xl" />
                Watch Demo
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
    </div>
  );
}
