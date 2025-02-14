import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className="navbar">
      {/**Navbar Desktop **/}
      <ul className="navbar-links hidden items-center md:flex lg:flex gap-5">
        <li>
          <Link href="/#">About</Link>
        </li>
        <li>
          <Link href="/#">Work</Link>
        </li>
        <li>
          <Link href="/#">Testimonials</Link>
        </li>
        <li>
          <Link href="/#">Contact</Link>
        </li>
      </ul>
      {/**Navbar Mobile **/}
      <ul className="navbar-links justify-start grid gap-2 md:hidden lg:hidden">
        <li>
          <Link href="/#">About</Link>
        </li>
        <li>
          <Link href="/#">Work</Link>
        </li>
        <li>
          <Link href="/#">Testimonials</Link>
        </li>
        <li>
          <Link href="/#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
