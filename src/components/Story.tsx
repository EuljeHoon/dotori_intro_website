import React from "react";

export default function OurStory() {
  return (
    <section id = "story" className="px-4 scroll-mt-5 md:scroll-mt-50 max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#6B3E26] mb-8">
        Our Story
      </h2>
      <p className="text-lg leading-relaxed text-gray-800">
        We are a team of <span className="font-bold text-[#C60C30]">Korean</span> <span className="font-bold text-[#003478]"> students</span> studying in the United States who personally experienced the challenges of planning for overseas education. From the financial burdens to the lack of accessible, transparent guidance — the journey was far from easy. 
        <br /><br />
        Driven by those struggles, we came together to build something better: a platform that simplifies the process and expands opportunity for <span className="font-bold text-[#5e3b1b]">future students</span> pursuing global education. We believe that no one should be held back by uncertainty or barriers that can be solved with the right information and support. 
        <br /><br />
        <span className="font-bold text-[#5e3b1b]">Dotori</span> was founded to be that support — built by students, for students.
      </p>
    </section>
  );
}