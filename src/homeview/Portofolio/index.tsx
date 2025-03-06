import Image from "next/image";

export default function Portofolio() {
  return (
    <section id="portofolio" className="pt-8 pb-8 bg-slate-100">
      <div className="container mx-auto p-2">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h4 className="font-semibold text-lg text-teal-500 mb-2">
              Portofolio
            </h4>
            <h2 className="font-bold text-slate-900 text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Project
            </h2>
            <p className="font-medium text-md text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              in iste dolore, obcaecati repellendus modi itaque minima
              necessitatibus tempora nulla!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start min-h-fit px-4 mt-">
          <div className="mb-14 p-4 md:w-1/2">
            <div className="relative w-full h-96 rounded-md shadow-md overflow-hidden">
              <Image
                src="/Desktop.png"
                alt="Desktop"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl text-slate-900 mt-5 mb-3">
              Blog Preview Card
            </h3>
            <p className="font-medium text-base text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              perferendis aperiam voluptates.
            </p>
          </div>
          <div className="mb-14 p-4 md:w-1/2">
            <div className="relative w-full h-96 rounded-md shadow-md overflow-hidden">
              <Image
                src="/Desktop (1).png"
                alt="Desktop1"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl text-slate-900 mt-5 mb-3">
              Product Preview Card
            </h3>
            <p className="font-medium text-base text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              perferendis aperiam voluptates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
