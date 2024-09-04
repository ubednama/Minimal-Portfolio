import { Copy } from "lucide-react";
import React from "react";

const ContactMe: React.FC = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("kubedrn@gmail.com").then(
      () => {
        alert("Email copied to clipboard: kubedrn@gmail.com");
      },
      (err) => {
        console.error("Failed to copy email address: ", err);
      }
    );
  };

  const contactMethods = [
    {
      label: "Drop me a mail",
      icon: <Copy className="size-4" />,
      onClick: copyToClipboard,
      link: "mailto:kubedrn@gmail.com",
      imgSrc: "https://cdn.simpleicons.org/gmail",
      imgAlt: "Gmail",
    },
    {
      label: "Connect with me",
      link: "https://www.linkedin.com/in/ubed9/",
      imgSrc: "https://cdn.simpleicons.org/linkedin",
      imgAlt: "LinkedIn",
    },
    {
      label: "Follow me on Twitter",
      link: "https://twitter.com/__ubednama",
      imgSrc: "https://cdn.simpleicons.org/x",
      imgAlt: "Twitter",
    },
  ];

  const otherProfiles = [
    {
      link: "https://github.com/ubednama",
      imgSrc: "https://cdn.simpleicons.org/github",
      imgAlt: "GitHub",
      className: "text-gray-800 hover:text-gray-600",
    },
    {
      link: "https://leetcode.com/ubednama",
      imgSrc: "https://cdn.simpleicons.org/leetcode",
      imgAlt: "LeetCode",
      className: "text-orange-500 hover:text-orange-400",
    },
    {
      link: "https://codeforces.com/profile/alamgir1444",
      imgSrc: "https://cdn.simpleicons.org/codeforces",
      imgAlt: "Codeforces",
      className: "text-blue-500 hover:text-blue-400",
    },
  ];

  return (
    <div
      className="h-screen max-h-screen flex flex-col items-center justify-center"
      id="ContactMeScreen"
    >
      <div className="w-4/5 flex justify-center lg:justify-start pt-8 pb-8">
        <h1 className="text-5xl MarartSansBoldFont">Contact Me</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="pb-4">Here's all the ways we can get in touch!</p>
        <div className="mx-auto space-y-8 w-full p-6 bg-gray-100 rounded-md">
          {/* Connect me section */}
          <div className="relative bg-white rounded-lg shadow-md p-6">
            <h3 className="absolute -top-4 left-4 px-2 font-semibold text-xl">
              Contact Me
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between gap-24 ${
                    method.imgAlt === "Gmail" ? "group" : ""
                  }`}
                >
                  <div
                    className="flex items-center justify-center cursor-pointer"
                    onClick={method.onClick}
                  >
                    <div>{method.label}</div>
                    <span className="hidden ml-2 size-4 group-hover:inline">
                      {method.icon}
                    </span>
                  </div>
                  <div>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <img
                        src={method.imgSrc}
                        alt={method.imgAlt}
                        className="h-10"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other profiles section */}
          <div className="relative bg-white rounded-lg shadow-md p-6">
            <h3 className="absolute -top-3 left-4 px-2 font-semibold text-md mb-4">
              My Other profiles
            </h3>
            <div className="flex justify-center space-x-10">
              {otherProfiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={profile.className}
                >
                  <img
                    src={profile.imgSrc}
                    alt={profile.imgAlt}
                    className="h-8"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactMe };