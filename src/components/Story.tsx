import React from "react";

export default function OurStory() {
  return (
    <section id="story" className="px-4 scroll-mt-5 md:scroll-mt-10 bg-cover py-16 bg "
             style={{ backgroundImage: "url('/new_background.png')" }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-[#5e3b1b] mb-16 text-center">
        How <img src="/logo/Squirrel_name.png" alt="Dotori Logo" className="inline h-12 mr-2 ml-2" /> began
      </h2>

      <div className="space-y-24 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img 
            src="/story/step1.png" 
            className="w-full max-w-sm mx-auto"
            alt="Step 1"
          />
          <div>
            <h3 className="text-2xl font-bold text-[#5e3b1b] mb-3">“We were overwhelmed too.”</h3>
            <p className="text-gray-700">Expensive agencies. Confusing forms. Essay nightmares. We've been there.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <img 
            src="/story/step2.png" 
            className="w-full max-w-sm mx-auto"
            alt="Step 2"
          />
          <div>
            <h3 className="text-2xl font-bold text-[#5e3b1b] mb-3">“We knew the barriers well.”</h3>
            <p className="text-gray-700">From the cost to the uncertainty, we experienced the pain points firsthand.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img 
            src="/story/step3.png" 
            className="w-full max-w-sm mx-auto"
            alt="Step 3"
          />
          <div>
            <h3 className="text-2xl font-bold text-[#5e3b1b] mb-3">“So we built Dotori.”</h3>
            <p className="text-gray-700">An honest, AI-supported platform made by students, for students.</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <img 
            src="/story/step4.png" 
            className="w-full max-w-sm mx-auto"
            alt="Step 4"
          />
          <div>
            <h3 className="text-2xl font-bold text-[#5e3b1b] mb-3">“And now we walk with you.”</h3>
            <p className="text-gray-700">Dotori is here to make sure no student walks this path alone ever again.</p>
          </div>
        </div>
      </div>
    </section>
  );
}