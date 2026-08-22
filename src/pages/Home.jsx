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
    <section className='w-full h-screen relative bg-slate-900 overflow-hidden select-none'>
      {/* Top Dynamic Stage Banner */}
      <div className='absolute top-20 sm:top-24 left-0 right-0 z-10 flex items-center justify-center px-4 pointer-events-auto'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* Interactive Controls Overlay Guide */}
      <div className="absolute top-28 sm:top-32 right-4 z-10 hidden md:flex items-center gap-2 bg-slate-900/80 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/80 shadow-lg text-xs font-semibold">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        <span>🕹️ Orbit: Drag mouse or press [◄] [►] Arrow Keys</span>
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

      {/* Bottom Floating Highlights Bar */}
      <div className="absolute bottom-16 sm:bottom-6 left-4 right-4 z-10 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 pointer-events-none">
        <div className="bg-slate-900/85 backdrop-blur-xl px-3.5 py-1.5 rounded-2xl border border-slate-700/70 text-slate-200 text-[11px] sm:text-xs font-bold shadow-xl flex items-center gap-2 pointer-events-auto">
          <span className="text-blue-400">🏢</span> D. E. Shaw & Co. (MTS)
        </div>
        <div className="bg-slate-900/85 backdrop-blur-xl px-3.5 py-1.5 rounded-2xl border border-slate-700/70 text-slate-200 text-[11px] sm:text-xs font-bold shadow-xl flex items-center gap-2 pointer-events-auto">
          <span className="text-sky-400">💻</span> Ex-Microsoft Intern
        </div>
        <div className="bg-slate-900/85 backdrop-blur-xl px-3.5 py-1.5 rounded-2xl border border-slate-700/70 text-amber-300 text-[11px] sm:text-xs font-bold shadow-xl flex items-center gap-2 pointer-events-auto">
          <span>🧩</span> Codeforces Expert (1704)
        </div>
        <div className="bg-slate-900/85 backdrop-blur-xl px-3.5 py-1.5 rounded-2xl border border-slate-700/70 text-orange-300 text-[11px] sm:text-xs font-bold shadow-xl flex items-center gap-2 pointer-events-auto">
          <span>⚡</span> LeetCode Knight (2067)
        </div>
      </div>

      {/* Jukebox Audio Toggle Button */}
      <div className='absolute bottom-4 left-4 z-20 flex items-center gap-3 bg-white/90 backdrop-blur-xl px-3.5 py-2 rounded-full border border-slate-200/80 shadow-xl hover:bg-white transition-all'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-7 h-7 cursor-pointer object-contain hover:scale-110 transition-transform'
        />
        <span className="text-xs font-bold text-slate-800 hidden sm:inline">
          {isPlayingMusic ? "Ambient Music Playing 🎵" : "Click for Music 🔇"}
        </span>
      </div>
    </section>
  );
};

export default Home;
