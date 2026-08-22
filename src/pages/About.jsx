import { useState } from "react";

import { CTA } from "../components";
import {
  experiences,
  personalInfo,
  interestsAndHobbies,
  cpRatings,
  honorsAndRanks,
  education,
  leadership,
  robustSkills,
  coreCSFundamentals,
} from "../constants";

const About = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState("All");

  const skillCategoriesList = [
    "All",
    "Languages",
    "Frameworks & Frontend",
    "Backend & Databases",
    "Tools & DevOps",
  ];

  const filteredSkills =
    activeSkillCategory === "All"
      ? robustSkills
      : robustSkills.filter((s) => s.category === activeSkillCategory);

  return (
    <section className='max-container pb-12 px-4 sm:px-8 overflow-hidden transition-colors duration-300'>
      {/* 1. Hero Header & Personal Bio Card */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Software Engineer @ D. E. Shaw & Co.
            </div>
            <h1 className='head-text text-white text-3xl sm:text-5xl font-extrabold tracking-tight'>
              Hi, I'm{" "}
              <span className='blue-gradient_text font-semibold drop-shadow-lg'>
                Vaibhav Agrawal
              </span>{" "}
              👋
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl font-normal leading-relaxed">
              Software Engineer specializing in high-throughput microservices, low-latency financial systems, and full-stack web platforms. Ex-<strong>Microsoft</strong> intern & competitive programmer.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-col gap-2.5 w-full lg:w-auto min-w-[200px]">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex-1 lg:flex-none px-5 py-3 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white text-center shadow-lg shadow-blue-600/30 transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              ✉️ Contact Vaibhav
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-none px-5 py-3 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 text-center border border-slate-700 transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              ⚡ GitHub ↗
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-none px-5 py-3 rounded-xl font-bold bg-indigo-900/60 hover:bg-indigo-800/80 text-indigo-200 text-center border border-indigo-700/50 transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              💼 LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Quick Details Chips */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Location</span>
            <span className="font-semibold text-slate-200">{personalInfo.location}</span>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Education</span>
            <span className="font-semibold text-slate-200">NITK Surathkal (CSE '25)</span>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">CP Highlights</span>
            <span className="font-semibold text-amber-300">CF Expert | LC Knight</span>
          </div>
        </div>
      </div>

      {/* 2. About Me Narrative & Sports/Hobbies Section */}
      <div className="py-10">
        <div className="mb-6">
          <span className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
            GET TO KNOW ME
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            About Me & Personal Passions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Story Card */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-3.5 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              {personalInfo.bioParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-extrabold rounded-xl border border-blue-200/60 dark:border-blue-800/50">
                🏓 Sports & Fitness
              </span>
              <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-extrabold rounded-xl border border-purple-200/60 dark:border-purple-800/50">
                🧠 Problem Solving
              </span>
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-extrabold rounded-xl border border-emerald-200/60 dark:border-emerald-800/50">
                💡 High-Performance Code
              </span>
            </div>
          </div>

          {/* Sports & Passions Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {interestsAndHobbies.map((item) => (
              <div
                key={item.name}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-md hover:border-blue-500/50 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3 font-normal">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Competitive Programming & Achievements */}
      <div className="py-8">
        <div className="mb-6">
          <span className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
            ALGORITHMIC EXCELLENCE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Competitive Programming & Ranks
          </h2>
        </div>

        {/* Ratings Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cpRatings.map((cp) => (
            <a
              key={cp.platform}
              href={cp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r ${cp.color}`}></div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-2">
                <span className="font-extrabold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cp.platform}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-black border ${cp.badgeBg}`}>
                  {cp.title}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {cp.rating}
                </span>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-400 block mt-0.5 uppercase tracking-wider">Rating Score</span>
              </div>
            </a>
          ))}
        </div>

        {/* Ranks & Honors Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {honorsAndRanks.map((item) => (
            <div
              key={item.title}
              className="bg-gradient-to-r from-amber-50 to-orange-50/50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-200 dark:border-amber-900/60 rounded-2xl p-5 shadow-md flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-amber-500/20 shrink-0">
                🏆
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  {item.category}
                </span>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-xs text-slate-700 dark:text-slate-200 font-medium">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Robust Technical Skills Section */}
      <div className='py-10'>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
              PROFICIENCY & TOOLS
            </span>
            <h2 className='text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1'>
              Robust Technical Skills
            </h2>
          </div>

          {/* Skill Filter Buttons */}
          <div className="flex flex-wrap gap-1.5">
            {skillCategoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSkillCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                  activeSkillCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filteredSkills.map((skill) => (
            <div
              className='bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-all flex flex-col justify-between group'
              key={skill.name}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className='w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex justify-center items-center p-2 border border-slate-200/80 dark:border-slate-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors shrink-0'>
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold block">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50">
                    {skill.level}
                  </span>
                </div>

                {/* Proficiency Bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400 font-bold mt-1">
                  <span>Proficiency</span>
                  <span>{skill.proficiency}%</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                {skill.experience}
              </p>
            </div>
          ))}
        </div>

        {/* Core CS Fundamentals Box */}
        <div className="mt-8 bg-slate-900 dark:bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl border border-blue-500/30">
              🧠
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white">Core Computer Science Fundamentals</h3>
              <p className="text-xs text-slate-300 font-normal">Deep theoretical grounding and practical systems knowledge</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {coreCSFundamentals.map((cs) => (
              <div key={cs.name} className="bg-slate-800/80 dark:bg-slate-900/90 p-4 rounded-2xl border border-slate-700/60">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-extrabold text-white">{cs.name}</h4>
                  <span className="text-[10px] font-black text-emerald-400 px-2 py-0.5 bg-emerald-950/80 rounded border border-emerald-800/40">
                    {cs.level}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-normal">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Work Experience Section */}
      <div className='py-10'>
        <div className="mb-6">
          <span className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
            PROFESSIONAL TRACK
          </span>
          <h2 className='text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1'>
            Work Experience
          </h2>
        </div>

        <div className='flex flex-col gap-6'>
          {experiences.map((exp) => (
            <div
              key={exp.company_name}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
            >
              <div
                className="w-2 h-full absolute top-0 left-0"
                style={{ backgroundColor: exp.iconBg }}
              ></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-extrabold text-sm mt-1">
                    <span>{exp.company_name}</span>
                    <span>•</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium text-xs">{exp.location}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-xl text-xs font-extrabold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 w-fit shrink-0 border border-slate-200 dark:border-slate-700">
                  📅 {exp.date}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="mt-3 space-y-2.5 text-slate-700 dark:text-slate-200 text-xs sm:text-sm leading-relaxed list-disc ml-5 font-normal">
                {exp.points.map((pt, i) => (
                  <li key={i} className="pl-0.5">
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Education & Leadership Grid */}
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center font-extrabold text-lg shrink-0">
                🎓
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Education</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">Academic Foundation</span>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
              <h4 className="text-base font-extrabold text-slate-900 dark:text-white">{education.institution}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">{education.location}</p>
              <p className="text-xs sm:text-sm font-extrabold text-blue-600 dark:text-blue-400 mt-2">{education.degree}</p>
              
              <div className="mt-3 flex items-center justify-between bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-200 px-3.5 py-2 rounded-xl text-xs font-extrabold border border-blue-200/60 dark:border-blue-800/50">
                <span>Degree: B.Tech Computer Science</span>
                <span>Period: {education.period}</span>
              </div>

              <ul className="mt-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-200 font-medium">
                {education.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership & Mentorship Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 flex items-center justify-center font-extrabold text-lg shrink-0">
                👥
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Leadership & Mentorship</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">Community Contributions</span>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-5">
              {leadership.map((item) => (
                <div key={item.organization}>
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">{item.organization}</h4>
                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs font-extrabold text-purple-600 dark:text-purple-400 mt-0.5">{item.role}</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-700 dark:text-slate-200 font-medium">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-purple-500 font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className='border-slate-200 dark:border-slate-800 my-6' />

      <CTA />
    </section>
  );
};

export default About;
