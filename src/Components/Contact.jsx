import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/ae41ed25-0baf-4f26-ab50-80167baeefea"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 flex justify-between ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p>
            <a
              className=" ml-[15px] items-center w-full text-gray-300"
              href="mailto:bishnoi.mohit@icloud.com"
            >
              <EmailIcon />{" "}
            </a>
            <a
              className=" ml-[15px] items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mohit--bishnoi"
            >
              <LinkedInIcon />
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
