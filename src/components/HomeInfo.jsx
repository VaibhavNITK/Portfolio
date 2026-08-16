import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-6 sm:px-8 text-white mx-4 shadow-2xl rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 border border-blue-400/40 backdrop-blur-md'>
        <h1 className="font-semibold text-lg sm:text-2xl">
          Hi, I'm <span className='font-bold text-yellow-300 drop-shadow-md'>Vaibhav Agrawal</span> 👋
        </h1>
        <p className="text-xs sm:text-base text-blue-100 font-normal mt-1.5 leading-relaxed">
          Software Engineer @ <strong>D. E. Shaw & Co.</strong> | Ex-<strong>Microsoft</strong> Intern
          <br className="hidden sm:inline" /> B.Tech CSE NITK '25 • Codeforces Expert (1704) & LeetCode Knight (2067)
        </p>
        <div className="mt-2.5 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-blue-200">
          <span className="animate-pulse w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
          <span>Drag the island or use arrow keys to explore</span>
        </div>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box bg-slate-900/90 text-white border border-slate-700/80 shadow-2xl backdrop-blur-md'>
        <div className="flex items-center gap-2 mb-1 justify-center">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
            Work Experience
          </span>
        </div>
        <p className='font-medium text-sm sm:text-lg text-center text-slate-100 leading-snug'>
          Engineered high-concurrency microservices @ <strong>D. E. Shaw & Co.</strong> & 
          built 79 PB analytics @ <strong>Microsoft</strong>.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn bg-white hover:bg-slate-100 text-blue-700 font-semibold shadow-md'>
          Explore Experience
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain ml-1' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box bg-slate-900/90 text-white border border-slate-700/80 shadow-2xl backdrop-blur-md'>
        <div className="flex items-center gap-2 mb-1 justify-center">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Featured Systems & Quant Projects
          </span>
        </div>
        <p className='font-medium text-center text-sm sm:text-lg text-slate-100 leading-snug'>
          Built a <strong>High-Frequency Limit Order Book Engine (C++)</strong>, <strong>NITK IP Geolocation CLI</strong>, & <strong>Codebook</strong>.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn bg-white hover:bg-slate-100 text-blue-700 font-semibold shadow-md'>
          View All Projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain ml-1' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box bg-slate-900/90 text-white border border-slate-700/80 shadow-2xl backdrop-blur-md'>
        <div className="flex items-center gap-2 mb-1 justify-center">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
            Get In Touch
          </span>
        </div>
        <p className='font-medium text-sm sm:text-lg text-center text-slate-100 leading-snug'>
          Looking to collaborate on high-impact software, microservices, or full-stack systems?
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn bg-white hover:bg-slate-100 text-blue-700 font-semibold shadow-md'>
          Let's Connect
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain ml-1' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
