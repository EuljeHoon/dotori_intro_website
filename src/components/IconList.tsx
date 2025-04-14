import React from "react";

export default function IconList() {
  return (
    <section
      className="px-4 py-25 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/new_background.png')" }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col items-start text-left mb-12 text-[#5e3b1b]">
          <p className="font-medium mb-8">A New Wave in Study Abroad Consulting</p>
          <h2 className="text-3xl font-semibold mb-8">
            Smart Consulting, Designed for Individuals
          </h2>
          <ul className="font-medium space-y-1">
            <li>No unnecessary extras. No wasted costs.</li>
            <li>24/7 AI-powered support, anytime students need it.</li>
            <li>Personalized to highlight student's strengths.</li>
            <li>Consulting that considers the life after admission, too.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-left">
          {/* 1 */}
          <div className="flex flex-col items-start">
            <img src="/icon/icon1.png" alt="AI Essay" className="w-16 h-16 mb-3" />
            <h3 className="text-lg font-semibold text-[#5e3b1b] mb-1">24/7 AI Essay Feedback</h3>
            <p className="text-sm text-gray-600">
              Get AI-powered essay suggestions and corrections anytime.
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-start">
            <img src="/icon/icon2.png" alt="AI Management" className="w-16 h-16 mb-3" />
            <h3 className="text-lg font-semibold text-[#5e3b1b] mb-1">Resume-Driven Essay Prompts</h3>
            <p className="text-sm text-gray-600">
              Get personalized essay topics crafted from your unique background and resume.
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-start">
            <img src="/icon/icon3.png" alt="Humanize" className="w-16 h-16 mb-3" />
            <h3 className="text-lg font-semibold text-[#5e3b1b] mb-1">Final Human Review</h3>
            <p className="text-sm text-gray-600">
              Final review done by real experts to ensure your voice stays true.
            </p>
          </div>

          {/* 4 */}
          <div className="flex flex-col items-start">
            <img src="/icon/icon4.png" alt="College Consulting" className="w-16 h-16 mb-3" />
            <h3 className="text-lg font-semibold text-[#5e3b1b] mb-1">Dream School Guidance</h3>
            <p className="text-sm text-gray-600">
              Get strategic advice on which schools best align with your profile.
            </p>
          </div>

          {/* 5 */}
          <div className="flex flex-col items-start">
            <img src="/icon/icon5.png" alt="School Analysis" className="w-16 h-16 mb-3" />
            <h3 className="text-lg font-semibold text-[#5e3b1b] mb-1">Accurate School Evaluations</h3>
            <p className="text-sm text-gray-600">
              Our insights are built on data, not guesses — giving you a clear view of each school.
            </p>
          </div>

          {/* 6 */}
          <div className="flex flex-col items-start">
            <img src="/icon/icon6.png" alt="Alumni Connection" className="w-16 h-16 mb-3" />
            <h3 className="text-lg font-semibold text-[#5e3b1b] mb-1">Peer & Alumni Connections</h3>
            <p className="text-sm text-gray-600">
              Ask questions to students and alumni who've actually experienced the school.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}