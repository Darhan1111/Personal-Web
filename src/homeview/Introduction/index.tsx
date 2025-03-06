import Image from "next/image";

export default function Introduction() {
  return (
    <section id="home" className="pt-15">
      <div className="container mx-auto p-5">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-teal-500 md:text-xl">
              Halo Semua 😄,{" "}
              <span className="block font-bold text-slate-900 text-4xl mt-1">
                {" "}
                Saya Darhan
              </span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
              Junior Web Developer
            </h2>
            <p className="font-medium text-slate-500 mb-10 leading-relaxed">
              Welcome to My Portofolio
            </p>

            <a
              href="#"
              className="text-base font-semibold text-white bg-teal-500 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10 lg:mt-9 lg:right-0">
              <Image
                src="/me.png"
                alt="Darhan"
                width={400} // Ganti dengan lebar yang diinginkan
                height={400} // Ganti dengan tinggi yang diinginkan
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
