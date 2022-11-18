import Image from "next/image";
import React from "react";
import imgHero from "../assets/img/hero.webp";

const Header = () => {
  return (
    <header className="md:w-10/12 mx auto md:rounded-xl mx-auto  p-1 overflow-hidden relative">
      <div className="absolute w-full h-full -z-20">
        <Image alt="img hero" fill src={imgHero} objectFit="cover" />
      </div>

      <div className="absolute w-full h-full -z-10 bg-black/[.6]	"></div>
      <div className="wrraper my-24 w-11/12 mx-auto text-center md:text-left ">
        <div className="wrapper z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white   ">
            Las mejores fragancias <br /> para tus ambientes
          </h2>
          <div className="wrapper flex flex-col my-5 ">
            <p className="my-5 text-white  text-xl sm:text-xl md:text-2xl  font-semibold">
              Aromatizantes de
            </p>
            <div className="wrapper">
              <span className="inline-block py-1 bg-emerald-600 text-white rounded-md mx-2 px-3 ">
                ambientes
              </span>
              <span className="inline-block py-1 bg-emerald-600 text-white rounded-md mx-2 px-3">
                autos
              </span>
              <span className="inline-block py-1 bg-emerald-600 text-white rounded-md mx-2 px-3">
                otros
              </span>
            </div>
          </div>

          <p className=" text-xl sm:text-xl md:text-2xl   font-semibold text-slate-200">
            Lo más importante es tener el coraje <br /> de hacer lo que dice tu
            corazón
            <ion-icon name="heart-outline"></ion-icon>
          </p>

          <div className="sociales  text-xl sm:text-xl md:text-2xl  text-slate-200 my-5">
            <p>Visita nuestras redes sociales</p>
            <div className="flex gap-4 my-5 justify-center md:justify-start text-emerald-600">
              <a href="https://instagram.com/soulproductosaromaticos?igshid=YmMyMTA2M2Y=">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://instagram.com/soulproductosaromaticos?igshid=YmMyMTA2M2Y=">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>

              <a href="https://instagram.com/soulproductosaromaticos?igshid=YmMyMTA2M2Y=">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
