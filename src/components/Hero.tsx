import React from "react";
import { Button } from "@/components/ui/button";
import { Poppins} from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function Hero() {
    return(
      <section id = "top" className="px-4 scroll-mt-50 text-center py-16">
        <div className="pt-20 flex justify-center items-center gap-3">
          <img src="/logo/main_PNG.png" alt="dotori logo" className="scale-75 md:w-1/2 md:max-w-md object-contain"/>
        </div>
        <p className="mt-5 text-sm md:text-lg max-w-xl mx-auto text-[#5e3b1b] font-semibold">
          "Equal Opportunities for Students at a Fair Price."
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href = "https://cal.com/dotori-pack/30min" download target = "_blank" rel = "noopener noreferrer">
            <Button className="bg-[#5e3b1b] hover:bg-[#b47938] text-white">Book a free demo</Button>
          </a>
          <a href = "https://www.linkedin.com/company/106694156/admin/dashboard/" download target = "_blank" rel = "noopener noreferrer">
            <Button className="bg-[#5e3b1b] hover:bg-[#b47938] text-white">LinkedIn</Button>
          </a>
        </div>
      </section>
    );
}