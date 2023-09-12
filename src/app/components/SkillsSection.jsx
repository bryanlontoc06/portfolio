"use client";
import React, { useState, useRef } from "react";
import SkillCard from "./SkillCard";
import SkillTag from "./SkillTag";
import { motion, useInView } from "framer-motion";

const skillsData = [
  {
    id: 1,
    title: "Security Information and Event Management, or SIEM",
    description: "Is a security solution that helps organizations recognize and address potential security threats and vulnerabilities before they have a chance to disrupt business operations.",
    image: "/images/projects/siem.jpg",
    tag: ["All", "CyberSecurity"],
    url: "https://www.ibm.com/topics/siem",
  },
  {
    id: 2,
    title: "Security Orchestration, Automation and Response (SOAR)",
    description: "Technology helps coordinate, execute and automate tasks between various people and tools all within a single platform.",
    image: "/images/projects/soar3.jpg",
    tag: ["All", "CyberSecurity"],
    url: "https://www.ibm.com/topics/security-orchestration-automation-response#:~:text=SOAR%E2%80%94for%20security%20orchestration%2C%20automation,track%20and%20respond%20to%20cyberthreats.",
  },
  {
    id: 3,
    title: "Firewall",
    description: "Is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.",
    image: "/images/projects/firewall.jpg",
    tag: ["All", "CyberSecurity"],
    url: "https://www.checkpoint.com/cyber-hub/network-security/what-is-firewall/#:~:text=A%20Firewall%20is%20a%20network,network%20and%20the%20public%20Internet.",
  },
  {
    id: 4,
    title: "Vulnerability Management",
    description: "Is the process of continuously identifying, evaluating, treating, and reporting vulnerabilities.",
    image: "/images/projects/vulnmang.png",
    tag: ["All", "CyberSecurity"],
    url: "https://www.rapid7.com/fundamentals/vulnerability-management-and-scanning/#:~:text=Vulnerability%20management%20is%20the%20process,minimizing%20their%20%22attack%20surface.%22",
  },
  {
    id: 5,
    title: "Cooking",
    description: "",
    image: "/images/projects/h1.jpg",
    tag: ["All", "Hobbies"],
    url: "",
  },
  {
    id: 6,
    title: "Research and Innovation",
    description: "",
    image: "/images/projects/h2.jpg",
    tag: ["All", "Hobbies"],
    url: "",
  },
  {
    id: 7,
    title: "Enjoying K-Dramas, listening, and occasionally engaging in singing.",
    description: "",
    image: "/images/projects/h3.jpg",
    tag: ["All", "Hobbies"],
    url: "",
  },
  {
    id: 8,
    title: "Nature Lover",
    description: "",
    image: "/images/projects/h4.jpg",
    tag: ["All", "Hobbies"],
    url: "",
  },
];

const SkillsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredSkills = skillsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div id="skills" className="pt-20">
      </div>
      <section >
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Skills and Hobbies
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <SkillTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <SkillTag
            onClick={handleTagChange}
            name="CyberSecurity"
            isSelected={tag === "CyberSecurity"}
          />
          <SkillTag
            onClick={handleTagChange}
            name="Hobbies"
            isSelected={tag === "Hobbies"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredSkills.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <SkillCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                url={project.url}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SkillsSection;
