import React from "react";
import { useTheme } from "next-themes";
import DarkLogo from "../assets/logo/DarkLogo.svg";
import LightLogo from "../assets/logo/LightLogo.svg";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import Nav from "./Nav";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const SetLogo = () => {
  const { theme } = useTheme();
  if (theme === "dark") {
    return <Image src={DarkLogo} alt="SagarLogo" width={100} height={100} />;
  } else {
    return <Image src={LightLogo} alt="SagarLogo" width={100} height={100} />;
  }
};

function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="justify-between p-4 lg:px-20 flex md:flex lg:flex ">
      <SetLogo />
      {/*Desktop Header */}
      <div className="items-center hidden justify-center md:flex lg:flex gap-5">
        <Nav />
        <ThemeSwitcher />
        <Button className="bg-black dark:bg-white dark:text-black text-white">
          Download CV
        </Button>
      </div>
      {/*Mobile Header */}
      {/**Mobile Button**/}
      <div className="flex justify-end md:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl text-black dark:text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/**Mobile Menu**/}
      <div
        className={`absolute flex flex-col p-4 gap-4 justify-start top-0 left-0 w-full min-h-screen bg-white
       dark:bg-black ${
         open ? "translate-x-0" : "-translate-x-full"
       } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="menu-hd flex justify-between">
          <SetLogo />
          <button
            onClick={toggleMenu}
            className="text-3xl text-black dark:text-white"
          >
            <X size={24} />
          </button>
        </div>
        <Nav />
        <div className="theme-sw flex justify-between items-center">
          <span className="text-black dark:text-white justify-start">
            Switch Theme
          </span>
          <div className="justify-end">
            <ThemeSwitcher />
          </div>
        </div>
        <Button className="bg-black dark:bg-white dark:text-black text-white">
          Download CV
        </Button>
      </div>
    </header>
  );
}

export default Header;
