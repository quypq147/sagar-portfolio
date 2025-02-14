// page.tsx
"use client";

import Image from "next/image";
import Header from "./components/Header";
import { MapPin } from "lucide-react";
import GithubSvg from "./assets/hero/col-1/actions/github.svg";
import TwitterSvg from "./assets/hero/col-1/actions/twitter.svg";
import FigmaSvg from "./assets/hero/col-1/actions/figma.svg";
import HeroPng from "./assets/hero/col-2/SagarAva.png";
import { Badge } from "@/components/ui/badge";
import AboutMeHeroPng from "./assets/about-me/col-1/about-me-pic.png";
import UpworkSVG from "./assets/upwork.svg";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import WorkSVG from "./assets/work/Work.svg";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Footer from "./components/Footer";

export default function Home() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const skills = useSkills();
  function useSkills() {
    const { theme } = useTheme();

    return [
      {
        index: 1,
        name: "Javascript",
        icon: "/skills/js.svg",
      },
      {
        index: 2,
        name: "Typescript",
        icon: "/skills/ts.svg",
      },
      {
        index: 3,
        name: "React",
        icon: "/skills/react.svg",
      },
      {
        index: 4,
        name: "Next.js",
        icon:
          theme === "light"
            ? "/skills/light-next.svg"
            : "/skills/dark-next.svg",
      },
      {
        index: 5,
        name: "Node.js",
        icon: "/skills/nodejs.svg",
      },
      {
        index: 6,
        name: "Express.js",
        icon:
          theme === "light"
            ? "/skills/light-express.svg"
            : "/skills/dark-express.svg",
      },
      {
        index: 7,
        name: "Nest.js",
        icon: "/skills/nestjs.svg",
      },
      {
        index: 8,
        name: "Socket.io",
        icon:
          theme === "light"
            ? "/skills/light-socketio.svg"
            : "/skills/dark-socketio.svg",
      },
      {
        index: 9,
        name: "PostgreSQL",
        icon: "/skills/postgresql.svg",
      },
      {
        index: 10,
        name: "MongoDB",
        icon: "/skills/mongodb.svg",
      },
      {
        index: 11,
        name: "Sass/Scss",
        icon: "/skills/sass.svg",
      },
      {
        index: 12,
        name: "Tailwindcss",
        icon: "/skills/tailwind.svg",
      },
      {
        index: 13,
        name: "Figma",
        icon: "/skills/figma.svg",
      },
      {
        index: 14,
        name: "Cypress",
        icon:
          theme === "light"
            ? "/skills/light-cypress.svg"
            : "/skills/dark-cypress.svg",
      },
      {
        index: 15,
        name: "Storybook",
        icon: "/skills/storybook.svg",
      },
      {
        index: 16,
        name: "Git",
        icon: "/skills/git.svg",
      },
    ];
  }

  return (
    <div className="min-h-screen flex flex-col py-5 ">
      <Header />
      
      <motion.section 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="hero lg:px-20 p-2 flex flex-col-reverse lg:flex-row justify-between w-full max-w-5xl items-center mt-10">
        <div className="col-1 space-y-5 lg:my-20">
          <h1 className="text-5xl font-bold flex items-center gap-2">
            Hi, I’m Sagar <span className="wave">👋</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <MapPin size={20} />
            <span>Ahmedabad, India</span>
          </div>
          <div className="flex items-center space-x-2 text-green-600 font-semibold">
            <span className="w-3 h-3 bg-green-600 rounded-full"></span>
            <span>Available for new projects</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <Image
              className="dark:text-white"
              src={GithubSvg}
              alt="Github"
              width={32}
              height={32}
            />
            <Image
              className="dark:text-white"
              src={TwitterSvg}
              alt="Twitter"
              width={32}
              height={32}
            />
            <Image
              className="dark:text-white"
              src={FigmaSvg}
              alt="Figma"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="col-2 flex">
          <Image
            src={HeroPng}
            alt="Hero"
            height={320}
            width={280}
            className="m-40 dark:border-gray-600 shadow-(5px 5px green)"
          />
        </div>
      </motion.section>
      <motion.section 
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="about-me lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10 py-16 bg-gray-100 dark:bg-gray-900">
        {/* Image with Shadow */}
        <div className="relative">
          <div className="absolute top-4 -left-4 w-1/2 h-full bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg"></div>
          <Image
            src={AboutMeHeroPng}
            alt="About Me Png"
            width={400}
            height={480}
            className="relative rounded-lg shadow-xl"
          />
        </div>
 
        {/* About Me Content */}
        <div>
          <Badge className="bg-gray-400 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-md">
            About me
          </Badge>
          <h2 className="text-2xl font-bold mt-4">
            Curious about me? Here you have it:
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
            I'm a passionate,{" "}
            <a href="#" className="text-blue-600 dark:text-blue-400">
              self-proclaimed designer
            </a>
            <br></br>who specializes in full stack development (React.js &
            Node.js). I love creating pixel-perfect designs, writing
            high-performance code, and delivering smooth user experiences.
          </p>
          <ul className="mt-5 list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>B.E. in Computer Engineering</li>
            <li>Full-time freelancer</li>
            <li>Avid learner</li>
            <li>Aspiring indie hacker</li>
          </ul>
        </div>
      </motion.section>
      <section className="skills py-20 flex flex-col items-center gap-6">
        <div className="row-1 text-center">
          <Badge className="bg-gray-400 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-md">
            Skills
          </Badge>
          <h1 className="text-lg font-semibold mt-2">
            The skills, tools and technologies I am really good at:
          </h1>
        </div>
        {/* Skills Grid */}
        <div className="row-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.index} className="flex flex-col items-center">
              <Image src={skill.icon} alt={skill.name} width={32} height={32} />
              <span className="text-sm mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="experience py-20 flex flex-col items-center gap-6 bg-gray-50 dark:bg-gray-900">
        <Badge className="bg-gray-300 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-full">
          Experience
        </Badge>
        <h1 className="text-lg p-2 font-semibold mt-2 text-gray-800 dark:text-gray-200">
          Here is a quick summary of my most recent experiences:
        </h1>
        <div className="flex p-2 flex-col gap-6 max-w-3xl w-full">
          {[
            {
              title: "Sr. Frontend Developer",
              date: "Nov 2021 - Present",
              details: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Ut pretium arcu et massa semper, id fringilla leo semper.",
                "Sed quis justo ac magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              ],
            },
            {
              title: "Team Lead",
              date: "Jul 2017 - Oct 2021",
              details: [
                "Sed quis justo ac magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Sed quis justo ac magna.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              ],
            },
            {
              title: "Full Stack Developer",
              date: "Dec 2015 - May 2017",
              details: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              ],
            },
          ].map((job, index) => (
            <Card
              key={index}
              className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-3">
                  <Image
                    src={UpworkSVG}
                    alt="Upwork Logo"
                    className="w-12 h-12"
                  />
                  <h2 className="font-semibold text-gray-800 dark:text-gray-200">
                    {job.title}
                  </h2>
                  <span className="ml-auto text-sm text-gray-600 dark:text-gray-400">
                    {job.date}
                  </span>
                </div>
                <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
                  {job.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="work py-20 flex flex-col items-center gap-6">
        <Badge className="bg-gray-300 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-full">
          Work
        </Badge>
        <h1 className="text-lg p-2 font-semibold mt-2 text-gray-800 dark:text-gray-200">
          Some of the noteworthy projects I have built:
        </h1>
        <div className="flex p-2 flex-col gap-6 max-w-5xl w-full">
          {[1, 2, 3].map((_, index) => (
            <Card
              key={index}
              className="flex flex-col lg:flex-row p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              {/* Left Side - Image */}
              <div className="lg:w-1/2 flex justify-center items-center">
                <Image
                  src={WorkSVG}
                  alt="Work PNG"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Right Side - Project Details */}
              <div className="lg:w-1/2 flex flex-col gap-3 p-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  Fiskil
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Typescript",
                    "PostgreSQL",
                    "TailwindCSS",
                    "Figma",
                    "Cypress",
                    "Storybook",
                    "Git",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* External Link Icon */}
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300 mt-2"
                >
                  ↗
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="testimonials bg-gray-50 dark:bg-gray-900 py-20 flex flex-col items-center gap-6">
        <Badge className="bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 px-3 py-1 rounded-full">
          Testimonials
        </Badge>
        <h1 className="text-lg font-semibold mt-2 text-gray-800 dark:text-gray-200">
          Nice things people have said about me:
        </h1>

        {/* Testimonials Container */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-5xl w-full justify-center">
          {[1, 2, 3].map((_, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center w-full lg:w-1/3"
            >
              {/* Profile Icon */}
              <div className="bg-gray-300 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-800 dark:text-gray-200 text-lg">
                  👤
                </span>
              </div>

              {/* Testimonial Text */}
              <CardContent className="flex flex-col gap-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  “Great guy, highly recommended for any COMPLEX front-end
                  development job! His skills are top-notch and he will be an
                  amazing addition to any team.”
                </p>

                {/* Name & Designation */}
                <div className="mt-3">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                    John Doe
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Founder - abc.com
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
