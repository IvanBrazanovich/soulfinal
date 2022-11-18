import React, { useState } from "react";
import logoImg from "../assets/img/logo_soul.webp";
import { Link } from "react-scroll";
import Image from "next/image";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const changeNav = (value) => {
    setNav(value);
  };

  return (
    <nav className=" flex h-20   justify-between w-11/12 mx-auto items-center mb-4">
      <div className="h-full">
        <Image
          src={logoImg}
          alt="Logo de la empresa"
          className="w-full h-full"
        />
      </div>
      <div
        onClick={() => changeNav(false)}
        className={`${
          nav ? "block" : "hidden"
        } burger    gap-1 w-12 fixed top-3 right-7 text-5xl  text-slate-600 z-30`}
      >
        <ion-icon name="close-outline"></ion-icon>
      </div>

      <div
        onClick={() => changeNav(true)}
        className={`burger sm:hidden flex flex-col gap-1 w-12 absolute top-3 right-7 text-6xl  text-slate-400`}
      >
        <ion-icon name="reorder-three-outline"></ion-icon>
      </div>
      <ul
        className={` ${
          nav
            ? "flex flex-col fixed top-0 left-0 right-0 bottom-0 justify-center items-center bg-slate-200 text-2xl gap-10 uppercase text-gray-600 font-black z-20"
            : "hidden sm:flex hero-list  gap-4 font-bold md:text-xl text-gray-500"
        } `}
      >
        <li className="hero-li  ">
          <Link
            onClick={() => changeNav(false)}
            activeClass="active"
            to="productos"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            href="productos"
          >
            Productos{" "}
          </Link>
        </li>

        <li className="hero-li">
          <Link
            onClick={() => changeNav(false)}
            activeClass="active"
            to="nosotros"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            href="nosotros"
          >
            Historia{" "}
          </Link>
        </li>
        <li className="hero-li">
          <Link
            onClick={() => changeNav(false)}
            activeClass="active"
            to="vender"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            href="vender"
          >
            Quiero vender
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
