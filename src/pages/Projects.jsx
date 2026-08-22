import { useState } from "react";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  const allTechStack = ["All", "React", "C++", "Shell Scripting", "Node.js", "Express", "JWT"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTech =
      selectedTech === "All" ||
      (project.tech && project.tech.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase())));

    return matchesSearch && matchesTech;
  });

  return (
    <section className='max-container pb-12 px-4 sm:px-8 overflow-hidden transition-colors duration-300'>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 mb-8 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
            <span>🚀 Featured Work & Software Engineering Systems</span>
          </div>
          <h1 className='head-text text-white text-3xl sm:text-5xl font-extrabold tracking-tight'>
            My <span className='blue-gradient_text drop-shadow-md font-extrabold'>Projects</span>
          </h1>
          <p className='text-slate-300 mt-2.5 leading-relaxed text-sm sm:text-base'>
            Explore open-source network CLI utilities, contest aggregators, role-based web platforms, OS memory allocation simulators, and WebGL applications.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-8 bg-white dark:bg-slate-900/90 p-4 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search projects by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white"
          />
          <span className="absolute left-3.5 top-3 text-slate-400 text-xs">🔍</span>
        </div>

        {/* Tech Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {allTechStack.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedTech === tech
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredProjects.map((project) => (
          <div
            className='bg-white dark:bg-slate-900/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden'
            key={project.name}
          >
            <div>
              {/* Top Row: Icon & Period */}
              <div className="flex items-center justify-between mb-4">
                <div className='block-container w-11 h-11'>
                  <div className={`btn-back rounded-2xl ${project.theme}`} />
                  <div className='btn-front rounded-2xl flex justify-center items-center'>
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>
                {project.period && (
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {project.period}
                  </span>
                )}
              </div>

              {/* Title & Performance Metric */}
              <h3 className='text-lg font-bold font-poppins text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                {project.name}
              </h3>

              {project.metrics && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50">
                  <span>⚡</span> {project.metrics}
                </div>
              )}

              <p className='mt-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed'>
                {project.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              {/* Tech Stack Pills */}
              {project.tech && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Live Link Button */}
              <div className='flex items-center justify-between font-poppins'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-bold text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform'
                >
                  View Repository
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-3.5 h-3.5 object-contain'
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">No projects match your search criteria.</p>
          <button
            onClick={() => { setSearchTerm(""); setSelectedTech("All"); }}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

      <hr className='border-slate-200 dark:border-slate-800 my-8' />

      <CTA />
    </section>
  );
};

export default Projects;
