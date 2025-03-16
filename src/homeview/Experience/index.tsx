import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  timeline: string;
  responsibilities: string[];
}

interface Props {
  experiences: ExperienceItem[];
}

const Experience: React.FC<Props> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#3674B5] text-center mb-12">
          Experiences
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-sm text-gray-500">{exp.timeline}</span>
                </div>
              </div>
              <ul className="mt-4 list-disc list-inside">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
