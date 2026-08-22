import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import { personalInfo } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    // 1. Try EmailJS first if keys exist
    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            reply_to: form.email,
            to_name: "Vaibhav Agrawal",
            to_email: personalInfo.email,
            message: form.message,
          },
          publicKey
        );

        handleSuccess();
        return;
      } catch (error) {
        console.warn("EmailJS attempt failed, using instant fallback:", error);
      }
    }

    // 2. Bulletproof Fallback: Send directly via Formsubmit AJAX endpoint
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Portfolio Message from ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        handleSuccess();
      } else {
        throw new Error("Formsubmit response not ok");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setLoading(false);
      setCurrentAnimation("idle");
      showAlert({
        show: true,
        text: `Message couldn't be sent automatically. Please email directly to ${personalInfo.email} ✉️`,
        type: "danger",
      });

      setTimeout(() => {
        hideAlert(false);
      }, 5000);
    }
  };

  const handleSuccess = () => {
    setLoading(false);
    showAlert({
      show: true,
      text: `Thank you ${form.name}! Your message has been sent directly to Vaibhav 😃`,
      type: "success",
    });

    setTimeout(() => {
      hideAlert(false);
      setCurrentAnimation("idle");
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container pb-12 gap-10 transition-colors duration-300'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 w-fit mb-3">
          <span>💬 Direct Contact & Messaging</span>
        </div>
        <h1 className='head-text dark:text-white'>Get in Touch</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
          Whether you want to discuss software engineering roles, microservices architecture, quantitative C++ systems, or full-stack projects — reach out anytime!
        </p>

        {/* Quick Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex items-center gap-3.5 group"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl shrink-0 group-hover:scale-110 transition-transform">
              ✉️
            </div>
            <div className="overflow-hidden">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Email Address</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white truncate block group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {personalInfo.email}
              </span>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-blue-500 hover:shadow-md transition-all flex items-center gap-3.5 group"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xl shrink-0 group-hover:scale-110 transition-transform">
              📞
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">Phone / Mobile</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {personalInfo.phone}
              </span>
            </div>
          </a>
        </div>

        {/* Form Card */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-5 mt-6 bg-white dark:bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md relative overflow-hidden'
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Send Message</h3>

          <label className='text-slate-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wider'>
            Your Name
            <input
              type='text'
              name='name'
              className='input mt-1.5'
              placeholder='Full Name or Organization'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-slate-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wider'>
            Your Email Address
            <input
              type='email'
              name='email'
              className='input mt-1.5'
              placeholder='your.email@domain.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-slate-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wider'>
            Message
            <textarea
              name='message'
              rows='4'
              className='textarea mt-1.5'
              placeholder='Write your message, project idea, or inquiry here...'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all text-sm mt-2 flex items-center justify-center gap-2'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin inline-block"></span>
                <span>Sending Message...</span>
              </>
            ) : (
              "Send Message 🚀"
            )}
          </button>
        </form>
      </div>

      {/* 3D Fox Canvas */}
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] bg-slate-900/5 dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 relative shadow-inner'>
        <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 dark:text-white border border-slate-200/80 dark:border-slate-700 shadow-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>🦊 Interactive 3D Canvas</span>
        </div>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
          dpr={[1, 1.5]}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
