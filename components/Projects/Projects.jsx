import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GoTrophy } from "react-icons/go";
import { projectsData } from "@/constants/projectsData";
import { BsLink45Deg } from "react-icons/bs";

const Projects = () => {
  const [showListView, setShowListView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, tilt: 0 });

  const visibleProjects = 3;
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;

      const tilt = ((x - centerX) / centerX) * 10;

      setCursorPos({
        x: x - 200,
        y: y - 80,
        tilt,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-[85vh] w-full px-4 sm:px-8 py-12 bg-transparent relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="lg:px-40 mx-auto relative z-10 h-full flex flex-col max-lg:px-2">
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
              <div className="flex flex-wrap lg:flex-nowrap overflow-x-auto pb-6 pt-10 -mx-4 px-4">
                {projectsData.slice(0, visibleProjects).map((project) => (
                  <motion.div
                    key={project.id}
                    className="h-[640px] min-w-[300px] sm:min-w-[350px] max-w-[400px] flex-shrink-0 mx-auto lg:mx-4 mb-8 lg:mb-0 relative group rounded-2xl overflow-hidden shadow-2xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 flex flex-col"
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
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {project.isWinner && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                          <GoTrophy className="h-4 w-auto mr-1" />
                          {project?.hackathon}
                        </div>
                      )}
                    </div>

                    <div className="font-montserrat p-6 bg-gradient-to-br from-gray-900/95 to-purple-900/20 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">
                          {project.title}
                        </h3>
                        <span className="text-sm text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-purple-100/80 mb-4 text-sm leading-relaxed flex-grow overflow-hidden">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map(
                          (tech, index) =>
                            index < 10 && (
                              <span
                                key={tech}
                                className="text-xs font-medium bg-purple-900/40 text-purple-200 px-3 py-1 rounded-full border border-purple-800/50"
                              >
                                {tech}
                              </span>
                            )
                        )}
                        {project.technologies.length > 10 && (
                          <span className="text-xs font-medium bg-purple-900/40 text-purple-200 px-3 py-1 rounded-full border border-purple-800/50">
                            +{project.technologies.length - 10}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {projectsData.length > visibleProjects && (
                  <div className="flex items-center justify-center px-4 mx-auto lg:mx-0">
                    <button
                      onClick={() => setShowListView(true)}
                      className="px-8 py-4 text-white font-bold duration-300 flex flex-col items-center mt-8 bg-purple-900/20 hover:bg-purple-800/30 backdrop-blur-xl rounded-xl transition-all border border-purple-500/20 hover:border-purple-400/40"
                    >
                      <span className="text-2xl mb-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">
                        +{projectsData.length - visibleProjects}
                      </span>
                      <span className="tracking-wider text-sm font-medium text-purple-100/90">
                        View All Projects
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-400/5 rounded-xl pointer-events-none" />
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
              className="relative overflow-y-scroll overflow-x-hidden pr-4 hide-scrollbar"
            >
              <div className="flex justify-start mb-6">
                <button
                  onClick={() => setShowListView(false)}
                  className="px-3 py-1 bg-gradient-to-r from-purple-900/50 to-indigo-900/40 hover:from-purple-800/60 hover:to-indigo-800/50 text-purple-100 rounded-xl transition-all duration-300 self-center border border-purple-800/50 hover:border-purple-500/50 flex items-center gap-2 group shadow-lg hover:shadow-purple-500/20"
                >
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [-2, 2, -2] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="group-hover:-translate-x-1 transition-transform duration-300"
                  >
                    ←
                  </motion.span>
                  <span className="font-medium">Back to Projects</span>
                </button>
              </div>

              {hoveredProject && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.7, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute rounded-xl overflow-hidden pointer-events-none"
                  style={{
                    width: "260px",
                    height: "160px",
                    top: cursorPos.y - 100,
                    left: cursorPos.x + 50,
                    zIndex: -1,
                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Image
                    src={hoveredProject.image}
                    alt={hoveredProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                </motion.div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full text-left text-purple-100 border-collapse">
                  <thead className="border-b border-purple-900/50">
                    <tr>
                      <th className="pb-4 font-semibold whitespace-nowrap px-4">
                        Year
                      </th>
                      <th className="pb-4 font-semibold whitespace-nowrap px-4">
                        Project
                      </th>
                      <th className="pb-4 font-semibold whitespace-nowrap px-4 hidden md:table-cell">
                        Made At
                      </th>
                      <th className="pb-4 font-semibold whitespace-nowrap px-4 hidden lg:table-cell">
                        Built With
                      </th>
                      <th className="pb-4 font-semibold whitespace-nowrap px-4 hidden md:table-cell">
                        Link
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectsData.map((project) => (
                      <tr
                        key={project.id}
                        className="border-b border-purple-900/30 hover:bg-purple-900/20 transition-colors"
                        onMouseEnter={() => setHoveredProject(project)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <td className="py-4 px-4 whitespace-nowrap">
                          {project.year}
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-medium">
                            {project.title}
                            {project.isWinner && (
                              <span className="ml-2 inline-block text-xs bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-2 py-1 rounded-full align-middle">
                                Winner
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-purple-200/70 mt-1 md:max-w-2xl line-clamp-2">
                            {project.description}
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2 md:hidden">
                            {project.technologies.slice(0, 2).map((tech) => (
                              <span
                                key={tech}
                                className="text-xs bg-purple-900/40 text-purple-200 px-2 py-0.5 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 2 && (
                              <span className="text-xs bg-purple-900/40 text-purple-200 px-2 py-0.5 rounded-full">
                                +{project.technologies.length - 2}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap hidden md:table-cell">
                          {project.madeAt}
                        </td>
                        <td className="py-4 px-4 hidden lg:table-cell">
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
                        <td className="py-4 px-4 whitespace-nowrap hidden md:table-cell">
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
                              <BsLink45Deg className="ml-1 h-5 w-auto" />
                            </a>
                          ) : (
                            <span className="text-purple-900/70">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
