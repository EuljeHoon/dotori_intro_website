import React from "react";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Members from "@/components/Members";
import Story from "@/components/Story";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-cover bg-fixed bg-center bg-white">
      {/* header */}
      <Header/>

      {/* Hero Section */}
      <div className="mt-20 md:mt-[7rem]">
        <Hero/>
      </div>

      {/* About Section */}
      <div className="mt-[14rem] md:mt-[30rem]">
        <About/>
      </div>

      {/* Projects Section */}
      <div className="mt-20 md:mt-[30rem]">
        <Members/>
      </div>
      
      {/* Skills section */}
      <div className="mt-20 md:mt-[30rem]">
        <Story/>
      </div>

      {/* Contact section */}
      <div className="mt-10 md:mt-[30rem]">
        <ContactForm />
      </div>

      {/* Ending */}
      <div className="mt-[2rem] md:mt-[2rem] mb-[8rem] md:mb-[20rem] flex justify-center items-center">
        <img
          src="/logo/Squirrel_name.png"
          alt="dotori logo"
          className="scale-75 md:w-1/2 md:max-w-md object-contain"
        />
      </div>

    </main>
  );
}
