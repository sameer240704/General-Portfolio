import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { VaniVikasWeb } from "@/public";
import { GoTrophy } from "react-icons/go";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const [showListView, setShowListView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const projectCategories = {
    "Web Development": [
      {
        id: 1,
        title: "VaniVikas - Speech Language Therapy Clinical Services",
        year: "2024",
        description:
          "Vani Vikas is a comprehensive digital platform which aims to digitize and manage the entire speech language therapy process from patient registration to therapy completion. A website and an application together make the entire speech therapy process a seamless one.",
        image: VaniVikasWeb,
        isWinner: true,
        hackathon: "Smart India Hackathon 2024",
        technologies: [
          "Next.js",
          "Python",
          "TailwindCSS",
          "ShadCN",
          "Node.js",
          "TrOCR",
          "OpenAI",
          "Flutter",
          "MongoDB",
          "Three.js",
          "Mixtral-8x7b",
        ],
        link: "https://vanivikas.com",
        madeAt: "Personal Project",
      },
    ],
    "App Development": [
      // {
      //   id: 3,
      //   title: "POSTKRESOL",
      //   year: "2023",
      //   description: "Postal service optimization platform",
      //   image: VaniVikasWeb,
      //   isWinner: false,
      //   technologies: ["React Native", "Node.js", "GraphQL"],
      //   madeAt: "Startup Incubator",
      // },
      // {
      //   id: 4,
      //   title: "JANSCAPT",
      //   year: "2022",
      //   description: "AI-powered screenshot annotation tool",
      //   image: VaniVikasWeb,
      //   isWinner: true,
      //   hackathon: "AI Builder Hackathon",
      //   technologies: ["Flutter", "Firebase", "AI"],
      //   link: "https://apps.apple.com/janscapt",
      //   madeAt: "Tech Company",
      // },
    ],
    "Game Development": [
      // {
      //   id: 5,
      //   title: "GIS",
      //   year: "2021",
      //   description: "Geographic information system for urban planning",
      //   image: VaniVikasWeb,
      //   isWinner: true,
      //   hackathon: "GeoInnovation Challenge",
      //   technologies: ["Unity", "C#", "Mapbox"],
      //   madeAt: "University Project",
      // },
      // {
      //   id: 6,
      //   title: "TYPESCRIPT",
      //   year: "2021",
      //   description: "Type-safe utility library for TypeScript developers",
      //   image: VaniVikasWeb,
      //   isWinner: false,
      //   technologies: ["TypeScript", "Game Engine", "WebGL"],
      //   link: "https://typescript-lib.example.com",
      //   madeAt: "Open Source",
      // },
    ],
  };

  const categories = Object.keys(projectCategories);
  const visibleProjects = 3;

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="h-[90vh] w-full px-4 sm:px-8 py-12 bg-transparent relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="px-40 mx-auto relative z-10 h-full flex flex-col max-lg:px-2">
        <div className="flex justify-center mb-12 space-x-6 relative">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowListView(false);
              }}
              className={`relative px-6 py-3 text-lg font-medium transition-colors focus:outline-none ${
                activeCategory === category
                  ? "text-white"
                  : "text-purple-100 hover:text-white"
              }`}
            >
              <h1 className="uppercase tracking-wide font-montserrat">
                {category}
              </h1>
              {activeCategory === category && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-400"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {!showListView ? (
            <motion.div
              key="horizontal-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow overflow-hidden relative"
            >
              <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
                {projectCategories[activeCategory]
                  .slice(0, visibleProjects)
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      className="min-w-[350px] max-w-[400px] flex-shrink-0 mx-4 relative group bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent group-hover:left-full transition-all duration-1000" />
                      </div>

                      <div className="relative h-60 w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {project.isWinner && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                            <GoTrophy className="h-4 w-auto mr-1" />
                            {project?.hackathon}
                          </div>
                        )}
                      </div>

                      <div className="font-montserrat p-6 bg-gradient-to-br from-gray-900/95 to-purple-900/20">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">
                            {project.title}
                          </h3>
                          <span className="text-sm text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full">
                            {project.year}
                          </span>
                        </div>

                        <p className="text-purple-100/80 mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-medium bg-purple-900/40 text-purple-200 px-3 py-1 rounded-full border border-purple-800/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                {projectCategories[activeCategory].length > visibleProjects && (
                  <div className="min-w-[300px] flex items-center justify-center px-4">
                    <button
                      onClick={() => setShowListView(true)}
                      className="px-8 py-4 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 hover:from-purple-600 hover:to-indigo-600 rounded-2xl hover:scale-105 transition-all text-white font-bold shadow-lg flex flex-col items-center"
                    >
                      <span className="text-2xl mb-1">
                        +
                        {projectCategories[activeCategory].length -
                          visibleProjects}
                      </span>
                      <span>View All Projects</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-x-auto"
            >
              <table className="w-full text-left text-purple-100 border-collapse">
                <thead className="border-b border-purple-900/50">
                  <tr>
                    <th className="pb-4 font-semibold">Year</th>
                    <th className="pb-4 font-semibold">Project</th>
                    <th className="pb-4 font-semibold">Made At</th>
                    <th className="pb-4 font-semibold">Built With</th>
                    <th className="pb-4 font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {projectCategories[activeCategory].map((project) => (
                    <tr
                      key={project.id}
                      className="border-b border-purple-900/30 hover:bg-purple-900/10 transition-colors"
                      onMouseEnter={() => setHoveredProject(project)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <td className="py-4 pr-4">{project.year}</td>
                      <td className="py-4 pr-4">
                        <div className="font-medium">
                          {project.title}
                          {project.isWinner && (
                            <span className="ml-2 text-xs bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-2 py-1 rounded-full align-middle">
                              Winner
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-purple-200/70 mt-1">
                          {project.description}
                        </div>
                      </td>
                      <td className="py-4 pr-4">{project.madeAt}</td>
                      <td className="py-4 pr-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-purple-900/40 text-purple-200 px-2 py-0.5 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs bg-purple-900/40 text-purple-200 px-2 py-0.5 rounded-full">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4">
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-300 hover:text-white flex items-center"
                          >
                            {
                              project.link
                                .replace(/^https?:\/\//, "")
                                .split("/")[0]
                            }
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        ) : (
                          <span className="text-purple-900/70">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button
                onClick={() => setShowListView(false)}
                className="mt-8 px-6 py-3 bg-purple-900/50 hover:bg-purple-800/60 text-purple-200 rounded-lg transition-colors self-center border border-purple-800/50 hover:border-purple-500/50"
              >
                ← Back to Overview
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
