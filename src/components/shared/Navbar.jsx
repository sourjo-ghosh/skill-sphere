"use client";

import { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import Link from "next/link";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { IoEarthOutline, IoPersonSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex justify-between items-center p-2 rounded-full w-11/12 mx-auto mt-2 bg-bg-primary">
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
              <Link href={"/"} className={pathname === "/" ? "font-bold underline underline-offset-4 decoration-2" : "hover:text-primary transition-colors"}>Home</Link>
            </li>
            <li>
              <Link href={"/courses"} className={pathname === "/courses" ? "font-bold underline underline-offset-4 decoration-2" : "hover:text-primary transition-colors"}>Courses</Link>
            </li>
            <li>
              <Link href={"/user-profile"} className={pathname === "/user-profile" ? "font-bold underline underline-offset-4 decoration-2" : "hover:text-primary transition-colors"}>My Profile</Link>
            </li>
            <li>
              <Link href={"/about-us"} className={pathname === "/about-us" ? "font-bold underline underline-offset-4 decoration-2" : "hover:text-primary transition-colors"}>About us</Link>
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
          <Link href={"/login"}>
            <button className={'flex justify-center items-center gap-2 bg-primary text-white hover:bg-primary/80 px-4 py-2 rounded-lg  ${pathname === "/" ? "bg-primary" : "bg-primary/80"}'}>
              <IoEarthOutline />
              Login
            </button>
          </Link>
          <Link href={"/courses"}>
            <button className="bg-secondary text-white hover:bg-secondary/80 px-4 py-2 rounded-lg">
              Start Learning
            </button>
          </Link>
        </div>
      </nav>
      {/* Tablet Navbar */}
      <nav className="hidden md:flex lg:hidden justify-between items-center p-2 rounded-full w-11/12 mx-auto mt-2 bg-bg-primary">
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
              <Link href={"/"} className={pathname === "/" ? "font-bold underline underline-offset-4 decoration-2" : "hover:text-primary transition-colors"}>Home</Link>
            </li>
            <li>
              <Link href={"/courses"} className={pathname === "/courses" ? "font-bold underline underline-offset-4 decoration-2" : "hover:text-primary transition-colors"}>Courses</Link>
            </li>
            <li>
              <Link href={"/user-profile"} className={pathname === "/user-profile" ? "font-bold underline underline-offset-4 decoration-2" : "hover:text-primary transition-colors"}>My Profile</Link>
            </li>
            <li>
              <Link href={"/about-us"} className={pathname === "/about-us" ? "font-bold underline underline-offset-4 decoration-2" : "hover:text-primary transition-colors"}>About us</Link>
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
          <Link href={"/login"}>
            <button className="flex justify-center items-center gap-2 bg-primary text-white hover:bg-primary/80 px-4 py-2 rounded-lg">
              <IoEarthOutline />
              Login
            </button>
          </Link>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <nav className="flex md:hidden lg:hidden justify-between items-center w-11/12 mx-auto mt-3">
        {/* Logo */}
        <h1 className="font-bold text-2xl text-primary">
          Skill<span className="text-secondary">Sphere</span>
        </h1>

        {/* Right side - Person icon + Menu Button */}
        <div className="flex items-center gap-2">
          <p className="text-xl text-accent rounded-full p-2 border border-border bg-bg-secondary">
            <IoPersonSharp />
          </p>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-bg-secondary border border-border text-text"
            onClick={() => setMenuOpen(true)}
          >
            <CiMenuBurger className="text-xl" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div className="fixed top-0 right-0 h-full w-[280px] bg-bg z-50 md:hidden flex flex-col shadow-2xl">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-5 border-b border-border">
              <h1 className="font-bold text-xl text-primary">
                Skill<span className="text-secondary">Sphere</span>
              </h1>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-bg-secondary text-text"
                onClick={() => setMenuOpen(false)}
              >
                <CiMenuFries className="text-lg" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 py-4">
              {[
                { label: "Home", href: "/" },
                { label: "Courses", href: "/courses" },
                { label: "My Profile", href: "/user-profile" },
                { label: "About us", href: "/about-us" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between px-5 py-4 transition-colors border-b border-border/50 ${
                    pathname === item.href 
                      ? "text-primary font-bold underline underline-offset-4 decoration-2" 
                      : "text-text hover:text-primary hover:bg-bg-secondary"
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                  <MdArrowOutward className={pathname === item.href ? "text-primary" : "text-text-secondary"} />
                </Link>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="p-5 border-t border-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">Theme</span>
                <ThemeToggle />
              </div>

              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-medium">
                  <IoEarthOutline />
                  Login
                </button>
              </Link>
              <Link href="/courses" onClick={() => setMenuOpen(false)}>
                <button className="mt-3 w-full bg-secondary text-white py-3 rounded-lg font-medium">
                  Start Learning
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
