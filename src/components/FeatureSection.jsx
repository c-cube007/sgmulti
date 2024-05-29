import React from "react";
import { features } from "../constants";
import { MoveRight } from "lucide-react";
const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:1 lg:w-1/2">
            <div className="flex flex-col">
              <div className="flex mx-6 h-20 w-20 p-2 bg-neutral text-white-700 justify-center items-center rounded-md">
                {feature.logo}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.title}</h5>
                <p className="text.md p-2 mb-5 text-neutral-500">
                  {feature.description}
                </p>
                <a
                  href={feature.link}
                  className="flex items-center  text-white py-1 px-2 rounded-md mb-5 text-sm max-w-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website <MoveRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
