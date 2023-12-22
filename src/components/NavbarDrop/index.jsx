import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export const NavbarPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const Products = [
    {
      id: 1,
      name: "Daftar Pilar Sekarang",
      link: "/daftarpage",
    },
    {
      id: 1,
      name: "menjadi pembimbing kami",
      link: "/recruiter",
    },
  ];

  return (
    <ul className="flex flex-wrap items-end mx-10 z-30 md:mx-5 sm:mx-0 md:p-1">

        <button onClick={() => navigate("/")} className="bg-yellow-600 p-5 text-black hover:bg-black-900 hover:text-slate-100 mt-12 md:p-3">
          <a shape="square" >
            Beranda
          </a>
        </button>

      <li>
        <button className="bg-yellow-600 p-5 text-black hover:bg-black-900 hover:text-slate-100 mt-12 md:p-3">
          <a href="#" shape="square" onClick={() => navigate("/programpage")}>
            Program
          </a>
        </button>
      </li>
      <li>
        <button className="bg-yellow-600 p-5 hover:bg-black-900 hover:text-slate-100 md:p-3">
          <a shape="square" onClick={() => navigate("/fasilitaspage")}>
            Fasilitas
          </a>
        </button>
      </li>
      <li className="flex flex-col float-right">
        <button className="bg-yellow-600 p-5 hover:bg-black-900 hover:text-slate-100 md:p-3">
          <a
            shape="square"
            className="flex flex-row justify-center items-center gap-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Daftar Sekarang
            {isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
          </a>
        </button>
      {isOpen && (
        <li className="flex flex-col fixed mt-[60px] md:mt-[40px] z-20">
          {Products.map((item) => (
            <button
              id={item.id}
              className="bg-gray-700 text-yellow-600 p-5 hover:bg-black-900 hover:text-slate-100  relative w-[185px] md:w-[155px] md:p-3"
            >
              <a href={item.link} shape="square">
                {item.name}
              </a>
            </button>
          ))}
        </li>
      )}
      </li>
    </ul>
  );
};
