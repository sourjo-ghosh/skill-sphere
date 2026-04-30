"use client";

import { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import Link from "next/link";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { IoEarthOutline, IoPersonSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex justify-between items-center p-2  rounded-full w-11/12 mx-auto mt-2 bg-bg-primary">
        {/* Left side */}

        <div>
          {/* Logo */}
          <h1 className="font-bold text-3xl text-primary">
            Skill<span className="text-secondary">Sphere</span>
          </h1>
        </div>
        {/* NavLinks */}
        <div>
          <ul className="text-primary border border-border flex justify-between items-center gap-5 p-4 rounded-full bg-bg-secondary">
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>Courses</Link>
            </li>

            <li>
              <Link href={"#"}>My Profile</Link>
            </li>
            <li>
              <Link href={"#"}>About us</Link>
            </li>
          </ul>
        </div>
        {/* Right side  */}

        <div className="flex justify-between items-center gap-3">
          <ThemeToggle />
          {/* Login/register buttons */}
          <p className="text-2xl text-accent rounded-full p-2 border border-border">
            <IoPersonSharp />
          </p>
          <Link href={"#"}>
            <button className="flex justify-center items-center gap-2 bg-primary text-white hover:bg-primary/80 px-4 py-2 rounded-lg">
            <IoEarthOutline />
              Login
            </button>
          </Link>
          <Link href={"#"}>
            <button className="bg-secondary text-white hover:bg-secondary/80 px-4 py-2 rounded-lg">
              Start Learning
            </button>
          </Link>
        </div>
      </nav>
      {/* Tablet Navbar */}
      <nav className="hidden md:flex lg:hidden justify-between items-center p-2  rounded-full w-11/12 mx-auto mt-2 bg-bg-primary">
        {/* Left side */}

        <div>
          {/* Logo */}
          <h1 className="font-bold text-3xl text-primary">
            Skill<span className="text-secondary">Sphere</span>
          </h1>
        </div>
        {/* NavLinks */}
        <div>
          <ul className="text-primary border border-border flex justify-between items-center gap-5 p-4 rounded-full bg-bg-secondary">
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>Courses</Link>
            </li>

            <li>
              <Link href={"#"}>My Profile</Link>
            </li>
            <li>
              <Link href={"#"}>About us</Link>
            </li>
          </ul>
        </div>
        {/* Right side  */}
        <div className="flex justify-between items-center gap-3">
          <ThemeToggle />
          <p className="text-2xl text-accent rounded-full p-2 border border-border">
            <IoPersonSharp />
          </p>
          {/* Login/register buttons */}
          <Link href={"#"}>
            <button className="flex justify-center items-center gap-2 bg-primary text-white hover:bg-primary/80 px-4 py-2 rounded-lg">
            <IoEarthOutline />
              Login
            </button>
          </Link>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <nav className="flex md:hidden lg:hidden justify-between items-center w-11/12 mx-auto mt-2 rounded-full bg-bg-primary p-2">
        {/* Left side */}

        <div>
          {/* Logo */}
          <h1 className="font-bold text-3xl text-primary">
            Skill<span className="text-secondary">Sphere</span>
          </h1>
        </div>
        {/* Right side  */}

        <div className="flex justify-between items-center gap-3">
          <ThemeToggle />
          {/* Login/register buttons */}
          <p className="text-2xl text-accent rounded-full p-2 border border-border">
            <IoPersonSharp />
          </p>
          <Link href={"#"}>
            <button className="flex justify-center items-center gap-2 bg-primary text-white hover:bg-primary/80 px-4 py-2 rounded-lg">
            <IoEarthOutline />
              Login
            </button>
          </Link>
          <button className="text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CiMenuBurger /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-bg md:hidden lg:hidden">
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex justify-between items-center w-11/12 mx-auto mt-3 p-2">
              <h1 className="font-bold text-3xl text-primary">
                Skill<span className="text-secondary">Sphere</span>
              </h1>
              <button
                className="text-3xl text-text"
                onClick={() => setMenuOpen(false)}
              >
                <CiMenuBurger />
              </button>
            </div>
            {/* Menu links - grid layout */}
            <div className="flex-1 flex flex-col justify-center items-center px-6">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                {[
                  { label: "Home", href: "#" },
                  { label: "Courses", href: "#" },
                  { label: "My Profile", href: "#" },
                  { label: "About us", href: "#" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group relative border border-border bg-bg-secondary rounded-2xl p-6 flex flex-col justify-between aspect-square hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <span className="text-text-secondary group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 self-end">
                      <MdArrowOutward className="text-2xl" />
                    </span>
                    <span className="text-xl font-semibold text-text group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
