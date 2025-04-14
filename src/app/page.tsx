import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import IconList from "@/components/IconList";
import Members from "@/components/Members";
import Story from "@/components/Story";
import DemoRegister from "@/components/DemoRegister";
import ContactForm from "@/components/ContactForm";

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

      {/* Demo Reservation */}
      <div className="mt-[10rem] md:mt-[20rem]">
        <DemoRegister />
      </div>

      {/* Contact section */}
      <div className="mt-2 md:mt-[2rem]">
        <ContactForm />
      </div>

      {/* Ending */}
      <footer className="mt-[6rem] md:mt-[10rem] mb-[6rem] md:mb-[10rem] flex flex-col justify-center items-center">
        <img
          src="/logo/Squirrel_name.png"
          alt="dotori logo"
          className="scale-75 md:w-1/2 md:max-w-md object-contain"
        />
        <p className="px-4 text-black font-extralight mt-[1rem]">Company name: dotori | Email: dotoripack@gmail.com | Minneapolis</p>
      </footer>

    </main>
  );
}
