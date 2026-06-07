import React from "react";
import { Lightning } from "@phosphor-icons/react";

const Features = () => {
  return (
    <section id="features" className="py-16 px-4 md:px-8 lg:px-16">
      {/* Items-center handles the vertical centering between the image and the content block */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-[500px]">
        
        {/* Image */}
        <div className="w-full max-w-2xl xl:-ml-32 flex justify-center">
          <img
            className="w-full h-auto object-contain"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
            alt="Features Preview"
          />
        </div>

        {/* Content - flex-col and justify-center keeps everything vertically packed and centered */}
        <div className="space-y-4 flex flex-col justify-center h-full">
          
          {/* Badge */}
          <div className="flex items-self-start">
            <div className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10 border border-green-200 rounded-full px-6 py-1.5">
              <Lightning size={16} weight="fill" className="text-green-700" />
              <span>Responded to 99% applicants</span>
            </div>
          </div>

          {/* Card 1 */}
          <div className="group cursor-pointer max-w-md w-full">
            <div className="flex gap-4 p-6 rounded-xl border border-violet-100 bg-violet-50/50 transition-all duration-200 group-hover:bg-violet-100 group-hover:border-violet-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 shrink-0 stroke-violet-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>

              <div>
                <h3 className="font-semibold text-slate-700">
                  Real-Time Analytics
                </h3>
                <p className="text-sm text-slate-600">
                  Get instant insights into your finances with live dashboards.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer max-w-md w-full">
            <div className="flex gap-4 p-6 rounded-xl border border-transparent transition-all duration-200 group-hover:bg-green-100 group-hover:border-green-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 shrink-0 stroke-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
              </svg>

              <div>
                <h3 className="font-semibold text-slate-700">
                  Bank-Grade Security
                </h3>
                <p className="text-sm text-slate-600">
                  End-to-end encryption, 2FA, and GDPR compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group cursor-pointer max-w-md w-full">
            <div className="flex gap-4 p-6 rounded-xl border border-transparent transition-all duration-200 group-hover:bg-orange-100 group-hover:border-orange-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 shrink-0 stroke-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>

              <div>
                <h3 className="font-semibold text-slate-700">
                  Customizable Reports
                </h3>
                <p className="text-sm text-slate-600">
                  Export professional, audit-ready financial reports for tax
                  filing or internal review.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;