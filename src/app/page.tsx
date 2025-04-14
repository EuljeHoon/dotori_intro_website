import React from "react";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import IconList from "@/components/IconList";
import Members from "@/components/Members";
import Story from "@/components/Story";

export default function Dotori() {
  return (
    <main className="min-h-screen bg-cover bg-fixed bg-center bg-white overflow-x-hidden">
      {/* header */}
      <Header/>

      {/* Hero Section */}
      <div className="mt-15 md:mt-[6rem]">
        <Hero/>
      </div>

      {/* About Section */}
      <div className="mt-[14rem] md:mt-[20rem]">
        <About/>
      </div>

      {/* Icon Section */}
      <div className="mt-[14rem] md:mt-[20rem]">
        <IconList/>
      </div>

      {/* Members Section */}
      <div className="mt-[14rem] md:mt-[20rem]">
        <Members/>
      </div>
      
      {/* Story section */}
      <div className="mt-[14rem] md:mt-[20rem]">
        <Story/>
      </div>

      {/* Contact section */}
      <div className="mt-[7rem] md:mt-[10rem]">
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
