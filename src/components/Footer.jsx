import { Link } from "react-router-dom";
import { socialLinks, personalInfo } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins py-8 px-6 bg-slate-900 text-slate-400 border-t border-slate-800'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm'>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span className="font-bold text-slate-200">Vaibhav Agrawal</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span>Software Engineer @ D. E. Shaw & Co.</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span>© 2026. All rights reserved.</span>
        </div>

        <div className='flex gap-4 justify-center items-center'>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
