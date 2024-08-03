'use client'
import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect, useState, use } from "react";
import Button from "./button.js";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const about_me = useRef(null);
  const contact=useRef(null);

  const scrollToAbout = () => {
    if (about_me.current) {
      about_me.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrolltoContact=()=>{
    if(contact.current)
    contact.current.scrollIntoView({behavior:'smooth'})
  }
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Xheneta's Web</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-4tBQ8A7+E2TgBdoQkrYtLNN0JwbqfSyYc/5BRTZaa9eOXeFNi3/oUO6nFsnU/+XkzR98H8mU5HISDDp3wbq9R7g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div className="nav-bar"></div>
      <div
        className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: "url('https://img.freepik.com/free-vector/abstract-blue-circle-black-background-technology_1142-12714.jpg')",
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex justify-between items-center p-4 fixed w-full bg-black bg-opacity-50">
          <nav className="space-x-8 text-white ml-auto flex items-center">
            <button>HOME</button>
            <button onClick={scrollToAbout}>ABOUT ME</button>
            <button onClick={scrolltoContact}>CONTACT</button>
            <Button />
          </nav>
        </div>
        <div className="flex items-center justify-center h-full">
          <h1 className={`text-white text-[72px] p-6 border-double border-4 border-white rounded-lg shadow-lg text-center transition-transform duration-1000 ${isVisible ? 'translate-x-0' : '-translate-x-full'} transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Portfolio
          </h1>
        </div>
      </div>
      <div ref={about_me} style={{ backgroundColor: "whitesmoke" }} className={`flex flex-col items-center p-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-3xl font-semibold mb-4">ABOUT MYSELF</h3>
        <Image
          id="employee_card_XhenetaHasani"
          src="/employee_card_XhenetaHasani.jpg"
          alt="Xheneta Hasani"
          width={280}
          height={280}
          className="rounded-full shadow-lg"
        />
        <h4 className="text-2xl font-semibold mt-4">Xheneta Hasani</h4>
        <strong className="text-xl text-blue-600">Software Developer</strong>
        <p className="p-3 mt-2 text-gray-700 text-center max-w-2xl leading-relaxed">
          Hello! I am Xheneta Hasani from Kosovo. I graduated from the University of Prishtina with a degree in Electrical and Computer Engineering. I completed my internship in Germany at the prestigious{" "}
          <a href="https://www.ieg.fraunhofer.de/" className="font-medium text-blue-600 underline hover:text-blue-800">
            Fraunhofer IEG
          </a>{" "}
          Institute, known for its groundbreaking research and innovation. This experience allowed me to work on an advanced engineering project in an international team. I am also proficient in German, which enabled me to communicate effectively and collaborate with my colleagues. Programming is not just a skill for me—it's my passion.
        </p>
        <div ref={contact} className="flex flex-col items-center">
          <h3 className=" text-3xl font-semibold mb-10 mt-40">Contact</h3>
         <div className="flex flex-row space-x-6"> 
          < a href=""><Image src="/icons8-github.svg" alt="github" width={70} height={70}/></a>
         <a href=""><Image src="/icons8-linkedin.svg" alt="linkedin" width={70} height={70}/></a>
         <a href="https://www.instagram.com/xhenetahasanii/" ><Image src="/icons8-instagram.svg" alt="instagram" width={70} height={70}/></a>
         </div>
         <hr className="w-[500px] mt-16 border-black"></hr>
         <a href="mailto:xheneta.hasanni@gmail.com" className="text-center text-3xl text-black-200 mt-10">xheneta.hasanni@gmail.com</a>
         
        
        </div>
      </div>
    </div>
  );
};

export default App;


