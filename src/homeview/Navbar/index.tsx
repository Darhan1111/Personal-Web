"use client";

import { useEffect } from "react";

export default function NavBar() {
  useEffect(() => {
    // Sticky header logic
    window.onscroll = () => {
      const header = document.querySelector("header") as HTMLElement | null;
      if (!header) return;

      if (window.pageYOffset > header.offsetTop) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    // Hamburger logic
    const hamburger = document.querySelector<HTMLElement>("#hamburger");
    const navMenu = document.querySelector<HTMLElement>("#nav-menu");

    const handleClick = () => {
      hamburger?.classList.toggle("hamburger-active");
      navMenu?.classList.toggle("hidden");
    };

    hamburger?.addEventListener("click", handleClick);
    return () => {
      hamburger?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      {/*
        Menggunakan "container max-w-full px-0" agar:
        - max-w-full membuat lebar container 100%
        - px-0 menghilangkan padding horizontal default
      */}
      <div className="container max-w-full px-0">
        {/*
          Menghapus "px-4" di sini, atau minimal set ke "px-0" jika tidak mau ada padding.
          Juga pastikan “justify-between” masih dipertahankan jika ingin konten kiri-kanan.
        */}
        <div className="flex items-center justify-between relative">
          <div className="px-4 ml-30">
            <a
              href="#home"
              className="font-bold text-xl text-teal-500 block py-6"
            >
              Darhan Portofolio
            </a>
          </div>

          {/*
            Jika tombol hamburger diinginkan tetap di sisi kanan,
            bisa ganti "right-4" jadi "right-0" atau dihapus jika tidak perlu absolute di situ.
          */}
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-0 lg:hidden" // misalnya ubah jadi right-0
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute py-5 bg-slate-300 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base font-semibold text-slate-500 py-2 mx-8 flex group-hover:text-primary"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="text-base font-semibold text-slate-500 py-2 mx-8 flex group-hover:text-primary"
                  >
                    About Me
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="text-base font-semibold text-slate-500 py-2 mx-8 flex group-hover:text-primary"
                  >
                    My Skills
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="text-base font-semibold text-slate-500 py-2 mx-8 flex group-hover:text-primary"
                  >
                    Portofolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="text-base font-semibold text-slate-500 py-2 mx-8 flex group-hover:text-primary"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="text-base font-semibold text-slate-500 py-2 mx-8 flex group-hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
