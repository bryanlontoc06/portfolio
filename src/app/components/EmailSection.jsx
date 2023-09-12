import React from "react";
import FacebookIcon from "../../../public/facebook-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GmailIcon from "../../../public/gmail-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-1 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"
      style={{
        zIndex: '99',
        top: '17rem',
      }}></div>
      <div className="z-10 flex flex-col items-center">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.linkedin.com/in/marriane-dela-ombria?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZL2sf05OTuqnMKFUF2pUgA%3D%3D">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="mailto:ayhandelaombria@gmail.com">
            <Image src={GmailIcon} alt="Gmail Icon" />
          </Link>
          <Link href="https://m.me/ahyandelaombria">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
        </div>
        <br />
        <br />
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          &quot;Defending Data, One Byte at a Time.&quot;
        </p>
      </div>
      {/* <div className="z-10">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="johndoe@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div> */}
    </section>
  );
};

export default EmailSection;
