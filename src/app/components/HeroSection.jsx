"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {

  const file = 'http://localhost:3000/download-test.jpg';

  const downloadFile = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <>
      <div style={{position: 'relative'}}>
        <video
              muted
              autoPlay={true}
              loop
              playsInline
              preload="preload"

              style={{
                width: '100vw',
                height: '100vh',
                objectFit: 'cover',
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: -1,
              }}
          >
              <source src={'/cyber_security_opener.mp4'} type="video/mp4" />
              Your browser does not support HTML5 video.
        </video>
      </div>
      <section name="hero" className="lg:py-16 flex container h-screen mx-auto pt-20 px-12 py-4" style={{background: "rgba(0, 0, 0, 0.8);"}}>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Ahyan",
                  1000,
                  "Sr Vulnerability",
                  100,
                  "Management",
                  100,
                  "Analyst",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            &quot;I am a work in progress, driven by a relentless thirst for knowledge and innovation.&quot;
            </p>
            <div>
              <Link
                href="mailto:ayhandelaombria@gmail.com"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >
                Hire Me
              </Link>
              <Link
                onClick={() => downloadFile(file)}
                href={''}
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative" style={{background: "rgba(0, 0, 0, 0.8);"}}>
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
                priority={true}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
