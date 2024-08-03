import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="absolute mx-4 mt-20 overflow-hidden text-gray-500 bg-white shadow-lg bg-clip-border rounded-xl h-61 w-96">
      <Image
        className="rounded-lg h-auto max-w-sm mx-auto"
        src="/employee_card_XhenetaHasani.jpg"
        alt="Xheneta Hasani"
        width={280}
        height={280}
      />
      <div className="p-2 text-center">
        <h4 className="block mb-2 font-sans text-1xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Xheneta Hasani
        </h4>
        <p>Software Developer</p>
      </div>

      <p className="p-3 mt-2 text-blue-black dark:text-blue-400">
        Hello! I am Xheneta Hasani from Kosovo. I graduated from the University of Prishtina with a degree in Electrical and Computer Engineering. I completed my internship in Germany at the prestigious{" "}
        <a href="https://www.ieg.fraunhofer.de/" className="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline">
          Fraunhofer IEG
        </a>{" "}
        Institute, known for its groundbreaking research and innovation. This experience allowed me to work on an advanced engineering project in an international team. I am also proficient in German, which enabled me to communicate effectively and collaborate with my colleagues. Programming is not just a skill for me—it's my passion.
      </p>
    </div>
  );
};

export default AboutMe;