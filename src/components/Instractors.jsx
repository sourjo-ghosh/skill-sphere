import Image from "next/image";
import React from "react";
import { MdStar, MdPeople, MdWorkOutline } from "react-icons/md";

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

const Instractors = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MdWorkOutline />
            Expert Mentors
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Learn from the <span className="text-primary">Best</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our instructors are industry experts with years of real-world experience, 
            dedicated to helping you master new skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <div 
              key={instructor.id}
              className="group p-6 rounded-2xl border border-border bg-bg-secondary hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Image 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
                  src={instructor.image} 
                  alt={instructor.name} 
                  height={224} 
                  width={400}
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
      </div>
    </section>
  );
};

export default Instractors;
