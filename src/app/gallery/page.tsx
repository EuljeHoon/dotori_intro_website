import React from "react";

export default function Dotori() {
    return (
       <main className="min-h-screen bg-cover bg-fixed bg-center bg-white overflow-x-hidden flex flex-col">
        <div className="flex justify-center text-3xl font-bold mb-6">
          <img
            src="/logo/Squirrel_name.png"
            alt="Dotori name"
            className="h-[7rem] mt-[2rem] mb-[3rem] w-auto object-contain mr-3"
          />
        </div>
        {/* School Logos */}
        <div className="flex justify-center text-3xl font-bold mb-[3rem] gap-x-40">
            <img
                src="/gallery/schools/UMN.png"
                alt="UMN"
                className="h-[7rem] w-auto object-contain"
            />
            <img
                src="/gallery/schools/GT.png"
                alt="GT"
                className="h-[7rem] w-auto object-contain"
            />
            <img
                src="/gallery/schools/NYU.png"
                alt="NYU"
                className="h-[7rem] w-auto object-contain"
            />
            <img
                src="/gallery/schools/Y.png"
                alt="Y"
                className="h-[7rem] w-auto object-contain"
            />
        </div>
        <div className="flex justify-center">
            No images yet.
        </div>
       </main>
    );
}