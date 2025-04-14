import React from "react";
import ProfileCard from "@/components/ProfileCard";

export default function Members() {
    return (
      <section id = "members" className="px-4 scroll-mt-10 max-w-4xl mx-auto py-12">
        <div className="text-3xl font-bold mb-6 text-[#5e3b1b]">
          <h2>Our Members</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Jehoon Park */}
          <div className="flex flex-wrap justify-center gap-6">
            <ProfileCard
              name="Jehoon Park"
              role="Founder / SWE"
              university="University of Minnesota Twin Cities"
              email="nubddak2@gmail.com"
              quote="We help you keep your wallet happy."
              imageSrc="/members/dotori_jehoon.jpeg"
              linkedInUrl="https://www.linkedin.com/in/jehoon0213"
            />
          </div>

          {/* Jewook Park */}
          <div className="flex flex-wrap justify-center gap-6">
            <ProfileCard
              name="Jewook Park"
              role="Co-Founder / SWE"
              university="Georgia Institute of Technology"
              email="jewook.park.dev@gmail.com"
              quote="Screw those old-school gatekeepers."
              imageSrc="/members/dotori_jewook.JPG"
              linkedInUrl="https://www.linkedin.com/in/jewookpark/"
            />
          </div>

          {/* Seoyoon Ham */}
          <div className="flex flex-wrap justify-center gap-6">
            <ProfileCard
              name="Seoyoon Ham"
              role="Co-Founder / Data Engineer"
              university="New York University"
              email="jessicahahm4451@gmail.com"
              quote="..."
              imageSrc="/members/dotori_seoyoon.JPG"
              linkedInUrl="https://www.linkedin.com/in/seoyoon-jessica-ham0101/"
            />
          </div>

          {/* Jiyoon Shin */}
          <div className="flex flex-wrap justify-center gap-6">
            <ProfileCard
              name="Jiyoon Shin"
              role="Co-Founder / Data Engineer"
              university="Yonsei University"
              email="jyoon.shin12@gmail.com"
              quote="Built by students, for students."
              imageSrc="/members/dotori_jiyoon.jpeg"
              linkedInUrl="https://www.linkedin.com/in/jiyoon-shin-15b196299"
            />
          </div>
        </div>
      </section>
    );
}