import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);

  // Intro Mask Animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  // Main Page Animation
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.7,
      x: "-50%",
      bottom: "-50%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    // Parallax Mousemove Effect
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      {/* INTRO ANIMATION MASK */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      {showContent && (
        <div className="main w-full">
          {/* LANDING PAGE */}
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            {/* Navbar */}
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            {/* Images */}
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 text-center">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute character left-1/2 -translate-x-1/2"
                src="./girlbg.png"
                alt=""
              />
            </div>

            {/* Bottom Bar */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          {/* SECOND SECTION */}
          <div className="w-full min-h-screen flex items-center justify-center bg-black px-6">
            <div className="cntnr flex flex-col lg:flex-row items-center text-white w-full max-w-[1200px] mx-auto gap-10">

              {/* Left Image */}
              <div className="limg relative w-full lg:w-1/2 flex items-center justify-center">
                <img
                  className="max-w-full h-auto object-contain"
                  src="./imag.png"
                  alt=""
                />  
              </div>

              {/* Right Text */}
              <div className="rg w-full lg:w-1/2 py-10 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Still Running,</h1>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Not Hunting</h1>

                <p className="mt-8 text-base md:text-lg lg:text-xl font-[Helvetica_Now_Display] leading-relaxed">
                  Step into the chaos of the streets where every move counts.
                  Survival is not about chasing, it’s about staying ahead of the game.
                  Keep running, keep winning — the city never sleeps, and neither should you
                </p>

                <p className="mt-5 text-base md:text-lg lg:text-xl font-[Helvetica_Now_Display] leading-relaxed">
                  From high-speed getaways to unpredictable encounters,
                  the journey is packed with adrenaline and stories waiting to unfold.
                  Every corner hides a challenge, and every victory makes you stronger.
                </p>

                <p className="mt-5 text-base md:text-lg lg:text-xl font-[Helvetica_Now_Display] leading-relaxed">
                  Whether you rule the streets alone or rise with your crew,
                  the thrill of the chase never ends.
                  The question is — are you ready to keep running?
                </p>

                <button className="bg-yellow-500 px-8 py-4 text-black mt-10 text-xl md:text-2xl lg:text-3xl font-bold rounded-xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>

        </div>
      )}
    </>
  );
}

export default App;
