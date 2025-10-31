import React from "react";
import { ArrowRight, Users } from "lucide-react";

const CareerHero = () => {
  const scrollToPositions = () => {
    const positionsSection = document.getElementById("open-positions");
    if (positionsSection) {
      positionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return React.createElement(
    "section",
    {
      className:
        "relative py-32 px-6 bg-gradient-to-br from-red-600 via-green-600 to-red-700 text-white overflow-hidden",
    },
    // Background Effects
    React.createElement("div", { className: "absolute inset-0 bg-black/20" }),
    React.createElement("div", {
      className:
        "absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl",
    }),
    React.createElement("div", {
      className:
        "absolute bottom-20 right-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl",
    }),
    React.createElement(
      "div",
      {
        className: "container mx-auto max-w-4xl text-center relative z-10",
      },
      React.createElement(
        "h1",
        { className: "text-4xl md:text-6xl font-bold mb-6 leading-tight" },
        "Join Our Mission to",
        React.createElement(
          "span",
          {
            className:
              "block bg-gradient-to-r from-green-400 to-red-500 bg-clip-text text-transparent",
          },
          "Shape the Future"
        )
      ),
      React.createElement(
        "p",
        {
          className:
            "text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto leading-relaxed",
        },
        "Be part of a team that's revolutionizing technology and creating meaningful impact. We're looking for passionate individuals who want to grow and innovate together."
      ),
      React.createElement(
        "div",
        { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12" },
        React.createElement(
          "button",
          {
            onClick: scrollToPositions,
            className:
              "inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 text-lg font-medium rounded-md shadow-lg hover:bg-red-50 transform hover:scale-105 transition-all duration-200",
          },
          React.createElement(Users, { className: "mr-2 w-5 h-5" }),
          "View Open Positions",
          React.createElement(ArrowRight, { className: "ml-2 w-5 h-5" })
        ),
        React.createElement(
          "button",
          {
            type: "button",
            className:
              "inline-flex items-center justify-center px-6 py-3 border border-white text-white text-lg font-medium rounded-md shadow-lg hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-200",
          },
          "Learn About Our Culture"
        )
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" },
        React.createElement(
          "div",
          { className: "text-center" },
          React.createElement(
            "div",
            { className: "text-3xl md:text-4xl font-bold mb-2" },
            "50+"
          ),
          React.createElement(
            "div",
            { className: "text-red-200" },
            "Team Members"
          )
        ),
        React.createElement(
          "div",
          { className: "text-center" },
          React.createElement(
            "div",
            { className: "text-3xl md:text-4xl font-bold mb-2" },
            "12"
          ),
          React.createElement(
            "div",
            { className: "text-red-200" },
            "Open Positions"
          )
        ),
        React.createElement(
          "div",
          { className: "text-center" },
          React.createElement(
            "div",
            { className: "text-3xl md:text-4xl font-bold mb-2" },
            "100%"
          ),
          React.createElement(
            "div",
            { className: "text-red-200" },
            "Remote Friendly"
          )
        )
      )
    )
  );
};

export default CareerHero;
