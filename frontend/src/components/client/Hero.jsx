import React from "react";
import Button from "../common/Button";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex min-h-screen w-full overflow-hidden rounded-md bg-white dark:bg-zinc-900 antialiased items-center justify-center"
    >
      <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] select-none [background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"></div>
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 flex items-center justify-center md:mt-0">
        <div className="text-center">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-center text-5xl font-extrabold text-transparent md:text-8xl xl:text-7xl mb-4">
            Shohag Miah
          </h1>

          <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            {" "}
            Computing and Information Technology student with 3.5 years of web
            development experience. Passionate about building scalable and
            user-friendly applications.
          </p>

          <div className="flex items-center justify-center mt-6 gap-1 md:gap-4">
            <div className="scale-90 md:scale-100 orgin-center">
              <a href="">
                <button className="cursor-pointer btn relative btn flex items-center gap-1 border border-secondary backdrop-blur-xl px-6 py-3 rounded-full text-gray-800 bg-white  dark:bg-background dark:text-muted-foreground shadow">
                  <RiLogoutCircleRLine size={18} />
                  <span className="capitalize font-medium text-sm">
                    Get started
                  </span>
                </button>
              </a>
            </div>

            <div className="scale-90 md:scale-100 orgin-center">
              <a href="">
                <button className=" cursor-pointer btn_download relative btn flex items-center gap-1 border border-secondary backdrop-blur-xl px-6 py-3 rounded-full  bg-white dark:bg-background dark:text-muted-foreground shadow">
                  <MdOutlineFileDownload size={18} />
                  <span className="capitalize font-medium text-sm">
                    Download CV
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
