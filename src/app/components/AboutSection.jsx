"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

export const TAB_DATA = [
  {
    title: "Work Experience",
    id: "workexp",
    content: (
      <ul className="list-disc pl-2">
        <li>Current company: Grace - Sr Vulnerability Management Analyst</li>
        <li>Previous companies: ePLDT, Accenture</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MSCpE - ACDF  from the Polytechnic University of the Philippines, present</li>
        <li>BSCpE from the AMA Computer College, 2019</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://drive.google.com/drive/folders/13FQ-fvEAvXTl3R54Z1DRes_RuQrqOcLZ?usp=sharing" target="_blank">Palo Alto</a></li>
        <li><a href="https://drive.google.com/drive/folders/1UUs-JplKIHxqYb_b378SCvNC5kAchIHL?usp=sharing" target="_blank">Fortinet NSE</a></li>
        <li><a href="https://drive.google.com/drive/folders/1kUC6EUMvpBcERxoaeifchwkszIazLmHd?usp=sharing" target="_blank">Certified Lean Six Sigma Yellow Belt</a></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("workexp");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <div id="about" name="about" className="pt-20">
      </div>
      <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/images/about-image.png" width={500} height={500} alt="" />
          <div className="mt-4 md:mt-0 flex flex-col h-full text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
            Hey there! You can call me Ahyan. I am a committed Senior Vulnerability Management Analyst, deeply passionate about cybersecurity and infused with a sense of creativity. My enthusiasm for life drives me to constantly seek improvement. In addition to my professional endeavors, I&#39;m a multifaceted individual who thrives on expanding my knowledge, fostering innovation, and exploring various interests. When I&#39;m not immersing myself in the complexities of vulnerabilities and security solutions, you&#39;ll discover me enthusiastically pursuing my hobbies and diverse interests.
            </p>
            <div className="md:flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("workexp")}
                active={tab === "workexp"}
              >
                {" "}
                Work Experience{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
