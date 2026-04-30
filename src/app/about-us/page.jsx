"use client";

import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward, MdCheckCircle } from "react-icons/md";
import { IoRocketOutline, IoPeopleOutline, IoBookOutline, IoGlobeOutline } from "react-icons/io5";

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

const team = [
  { name: "Sarah Chen", role: "Founder & CEO", image: "/banner.png" },
  { name: "Marcus Johnson", role: "Head of Education", image: "/banner.png" },
  { name: "Elena Rodriguez", role: "Lead Developer", image: "/banner.png" },
  { name: "David Kim", role: "Community Manager", image: "/banner.png" },
];

export default function AboutUsPage() {
  return (
    <div className="w-11/12 mx-auto py-12 space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
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
          <Link href="#team">
            <button className="border border-border text-text hover:bg-bg-secondary px-6 py-3 rounded-lg font-medium transition-colors">
              Meet Our Team
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-border bg-bg-secondary text-center hover:border-primary/50 transition-colors"
          >
            <stat.icon className="text-3xl text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold text-text">{stat.number}</p>
            <p className="text-text-secondary text-sm">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
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
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Our Values
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            The principles that guide everything we do at SkillSphere
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border bg-bg-secondary hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">{value.title}</h3>
              <p className="text-text-secondary text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Meet Our Team
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Passionate educators and technologists dedicated to transforming learning
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group p-4 rounded-2xl border border-border bg-bg-secondary hover:border-primary/50 transition-colors text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-semibold text-text">{member.name}</h3>
              <p className="text-text-secondary text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Ready to Start Learning?
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
