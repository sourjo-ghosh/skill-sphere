"use client";

import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward, MdCheckCircle, MdStar, MdPeople, MdWorkOutline } from "react-icons/md";
import { IoRocketOutline, IoPeopleOutline, IoBookOutline, IoGlobeOutline } from "react-icons/io5";

const instructors = [
  {
    id: 1,
    name: "Alex Morgan",
    expertise: "Full Stack Web Development",
    experience: "8+ years",
    rating: 4.9,
    students: 12000,
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    bio: "Expert in MERN stack, helping students build real-world projects.",
  },
  {
    id: 2,
    name: "Sophia Lee",
    expertise: "UI/UX Design",
    experience: "6+ years",
    rating: 4.8,
    students: 9000,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Design mentor focused on clean UI and user-centered design.",
  },
  {
    id: 3,
    name: "David Kim",
    expertise: "Data Science & AI",
    experience: "7+ years",
    rating: 4.7,
    students: 8000,
    image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Teaches machine learning and data analysis with practical examples.",
  },
];

const stats = [
  { number: "10K+", label: "Active Learners", icon: IoPeopleOutline },
  { number: "500+", label: "Courses", icon: IoBookOutline },
  { number: "50+", label: "Expert Mentors", icon: IoRocketOutline },
  { number: "100+", label: "Countries", icon: IoGlobeOutline },
];

const values = [
  {
    title: "Learn by Doing",
    description: "We believe in hands-on learning through real-world projects and practical exercises.",
  },
  {
    title: "Community First",
    description: "Learning is better together. Connect with peers and mentors worldwide.",
  },
  {
    title: "Quality Content",
    description: "Every course is crafted by industry experts to ensure relevance and depth.",
  },
  {
    title: "Accessible Learning",
    description: "Quality education should be available to everyone, everywhere.",
  },
];


export default function AboutUsPage() {
  return (
    <div className="w-11/12 mx-auto py-12 space-y-20">
      {/* Hero Section */}
      <section className="py-20 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          About SkillSphere
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
          Empowering Learners{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Worldwide
          </span>
        </h1>
        <p className="text-lg text-text-secondary mb-8">
          SkillSphere is on a mission to make quality education accessible to everyone. 
          We connect passionate learners with expert mentors through interactive, project-based courses.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/courses">
            <button className="flex items-center gap-2 bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-lg font-medium transition-colors">
              Explore Courses
              <MdArrowOutward />
            </button>
          </Link>
          <Link href="#instructors">
            <button className="border border-border text-text hover:bg-bg-secondary px-6 py-3 rounded-lg font-medium transition-colors">
              Meet Our Team
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-bg-secondary text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <stat.icon className="text-2xl text-primary group-hover:text-white transition-colors" />
              </div>
              <p className="text-3xl font-bold text-text">{stat.number}</p>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
          <Image
            src="/banner.png"
            alt="Our Mission"
            width={500}
            height={400}
            className="relative rounded-2xl shadow-xl w-full"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Our Mission
          </h2>
          <p className="text-text-secondary text-lg">
            We believe education is the key to unlocking human potential. Our platform 
            bridges the gap between traditional learning and industry demands, providing 
            practical skills that matter in today&apos;s world.
          </p>
          <ul className="space-y-3">
            {[
              "Project-based learning approach",
              "Industry-relevant curriculum",
              "Expert mentorship and support",
              "Global community of learners",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-text">
                <MdCheckCircle className="text-primary text-xl flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Our Principles
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Values</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            The principles that guide everything we do at SkillSphere
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-bg-secondary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">{value.title}</h3>
              <p className="text-text-secondary text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Expert Instructors
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            Learn from Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Experts</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our instructors bring real-world experience and passion to every course, 
            helping you master skills that matter.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group p-6 rounded-2xl border border-border bg-bg-secondary hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-bg/90 backdrop-blur-sm">
                  <MdStar className="text-yellow-500" />
                  <span className="text-sm font-semibold text-text">{instructor.rating}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-text">{instructor.name}</h3>
                  <p className="text-primary font-medium text-sm">{instructor.expertise}</p>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {instructor.bio}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-1 text-text-secondary text-sm">
                    <MdWorkOutline className="text-primary" />
                    <span>{instructor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-secondary text-sm">
                    <MdPeople className="text-primary" />
                    <span>{instructor.students.toLocaleString()}+ students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-6 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
          Ready to Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Learning</span>?
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto mb-8">
          Join thousands of learners already on their journey. Start today and transform your career.
        </p>
        <Link href="/courses">
          <button className="flex items-center gap-2 bg-primary text-white hover:bg-primary-dark px-8 py-4 rounded-lg font-medium transition-colors mx-auto">
            Get Started Free
            <MdArrowOutward />
          </button>
        </Link>
      </section>
    </div>
  );
}
