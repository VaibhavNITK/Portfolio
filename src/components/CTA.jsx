import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-400/40 my-8 flex flex-col sm:flex-row items-center justify-between gap-6'>
      <div>
        <h3 className='text-2xl sm:text-3xl font-extrabold text-white font-poppins'>
          Have a high-impact project or engineering role?
        </h3>
        <p className="text-blue-100 text-sm sm:text-base mt-1 max-w-xl">
          Let's build scalable microservices, sub-millisecond real-time platforms, or innovative web solutions together.
        </p>
      </div>

      <Link 
        to='/contact' 
        className='px-6 py-3.5 bg-white text-blue-700 hover:bg-slate-100 font-bold rounded-xl shadow-lg transition-all text-sm shrink-0 whitespace-nowrap'
      >
        Get In Touch 🚀
      </Link>
    </section>
  );
};

export default CTA;
