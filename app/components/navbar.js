"use client";

import Link from "next/link";
import ThemeController from "./themeController";
import DrawerRight from "./drawer-right";
import { useEffect, useState } from "react";
import ScrollToTop from "./scrollToTop";
import Image from "next/image";

const Navbar = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("quran-theme");
    }
  }, []);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const themeToggle = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "quran-theme") {
      setTheme("quran-theme-dark");
      localStorage.setItem("theme", theme);
    } else {
      setTheme("quran-theme");
      localStorage.setItem("theme", theme);
    }
  };

  const menu = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/al-quran">Al-Quran</Link>
      </li>
    </>
  );

  ScrollToTop();

  return (
    <div className="navbar bg-base-300/50 backdrop-blur-md fixed shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-300 text-primary rounded-box z-1 mt-3 w-52 h-fit p-2 pb-16 shadow"
          >
            {menu}
          </ul>
        </div>
        <Link
          href="/"
          className="text-xl font-bold text-primary flex gap-2 items-center"
        >
          <Image
            src="/al-quran-logo.png"
            alt="al-quran-logo"
            width={32}
            height={32}
          />
          Al-Quran
        </Link>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-primary">
          {menu}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex flex-row ml-auto items-center gap-2 text-primary">
          <DrawerRight />
          <ThemeController themeToggle={themeToggle} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
