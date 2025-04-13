import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 scroll-mt-25 max-w-6xl mx-auto"
    >
      <div className="text-3xl font-bold mb-6 text-[#5e3b1b]">
          <h2>Our Journey</h2>
      </div>
      <div className="grid grid-rows-[auto_auto] gap-10">
        {/* Upper side - story collage */}
        <div className="grid md:grid-cols-2 auto-rows-max gap-10 text-[#5e3b1b]">
          <div className="flex flex-col gap-4 text-[16px] leading-relaxed">
            <p>
              Navigating the college admissions process can be an incredibly isolating and stressful experience for many students—especially for those applying to schools abroad.
            </p>
            <p>
              From understanding application requirements to crafting essays that stand out, students are often left to manage it all on their own, without proper guidance or support.
            </p>
            <p>
              To make matters worse, study abroad agencies frequently charge exorbitant fees for basic services, making the dream of international education feel out of reach for those without significant financial resources.
            </p>
          </div>
          <div className="flex-col gap-4 grid grid-cols-2">
            <img
              src="/commonapp_image.png"
              alt="Common App Stress"
              className="w-full h-[15rem] object-cover rounded-xl shadow-md"
            />
            <img
              src="/budget_image.png"
              alt="Financial Pressure"
              className="w-full h-[15rem] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
        {/* Bottom side - dotori solution */}
        <div className="grid md:grid-cols-2 text-[#5e3b1b]">
          <div className="flex-col ml-17">
            <img
              src="/dotori_together.png"
              alt="Happy with dotori"
              className="h-[30rem] w-flex object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="flex flex-col gap-4 text-[16px] leading-relaxed">
            <p className="mb-4">
              At <span className="font-bold text-[#5e3b1b]">dotori</span>, we are rethinking what it means to study abroad.
            </p>

            <p className="mb-4">
              Too many students are forced to rely on overpriced agencies that charge
              <span className="font-bold text-[#5e3b1b]"> an unreasonable amount of money</span> just to get help with a college essay. We believe there's a better way.
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Powered by AI</li>
              <li>Open for 24/7</li>
              <li>Smart, Affordable, and Accessible essay feedback</li>
              <li>Apply to U.S. universities without the stress</li>
              <li>Steep price tag</li>
            </ul>

            <p className="mb-4">
              We are here to make study abroad simpler, fairer, and more inclusive—for everyone.
            </p>

            <p className="mt-2 font-bold sm:text-2xl">
              Smart help. Honest prices. <span className="text-[#b47938]">Real opportunity.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
