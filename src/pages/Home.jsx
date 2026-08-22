import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play().catch(() => setIsPlayingMusic(false));
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.3, 1.3, 1.3];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.85, 0.85, 0.85];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative bg-slate-950 overflow-hidden select-none'>
      {/* Top Dynamic Stage Banner */}
      <div className='absolute top-20 sm:top-24 left-0 right-0 z-10 flex items-center justify-center px-4 pointer-events-auto'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* Interactive Controls Overlay Guide */}
      <div className="absolute top-24 sm:top-28 right-4 z-10 hidden md:flex items-center gap-2 bg-slate-900/90 text-white backdrop-blur-xl px-4 py-2 rounded-full border border-slate-700 shadow-2xl text-xs font-bold ring-1 ring-white/20">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>🕹️ Drag mouse or press [◄] [►] Arrow Keys to rotate</span>
      </div>

      {/* 3D WebGL Interactive Canvas */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      {/* High-Contrast Bottom Highlights Bar */}
      <div className="absolute bottom-16 sm:bottom-6 left-4 right-4 z-10 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 pointer-events-none">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl px-3.5 py-1.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white text-[11px] sm:text-xs font-black shadow-2xl flex items-center gap-2 pointer-events-auto ring-1 ring-slate-900/10 dark:ring-white/10">
          <span className="w-5 h-5 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs">🏢</span>
          <span>D. E. Shaw & Co. (MTS)</span>
        </div>
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl px-3.5 py-1.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white text-[11px] sm:text-xs font-black shadow-2xl flex items-center gap-2 pointer-events-auto ring-1 ring-slate-900/10 dark:ring-white/10">
          <span className="w-5 h-5 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center text-xs">💻</span>
          <span>Ex-Microsoft Intern</span>
        </div>
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl px-3.5 py-1.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white text-[11px] sm:text-xs font-black shadow-2xl flex items-center gap-2 pointer-events-auto ring-1 ring-slate-900/10 dark:ring-white/10">
          <span className="w-5 h-5 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-xs">🧩</span>
          <span>CF Expert (1704)</span>
        </div>
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl px-3.5 py-1.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white text-[11px] sm:text-xs font-black shadow-2xl flex items-center gap-2 pointer-events-auto ring-1 ring-slate-900/10 dark:ring-white/10">
          <span className="w-5 h-5 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center text-xs">⚡</span>
          <span>LC Knight (2067)</span>
        </div>
      </div>

      {/* High-Contrast Jukebox Audio Toggle Button */}
      <div className='absolute bottom-4 left-4 z-20 flex items-center gap-2.5 bg-white dark:bg-slate-900 backdrop-blur-2xl px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 shadow-2xl hover:scale-105 active:scale-95 transition-all ring-1 ring-slate-900/10 dark:ring-white/10'>
        <button
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="flex items-center gap-2 font-black text-xs text-slate-900 dark:text-white"
        >
          <img
            src={!isPlayingMusic ? soundoff : soundon}
            alt='jukebox'
            className='w-6 h-6 cursor-pointer object-contain shrink-0'
          />
          <span className="font-extrabold tracking-tight">
            {isPlayingMusic ? "Music ON 🎵" : "Music OFF 🔇"}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Home;
