import React, { useContext, useEffect, useState } from "react";
import nosotrosDatabase from "../assets/db.json";
import imgGallery1 from "../assets/img/gallery1.webp";
import imgGallery2 from "../assets/img/gallery2.webp";
import imgGallery3 from "../assets/img/gallery3.webp";
import imgGallery4 from "../assets/img/gallery4.webp";
import imgGallery5 from "../assets/img/gallery5.webp";
import imgGallery6 from "../assets/img/gallery6.webp";
import imgGallery7 from "../assets/img/gallery7.webp";
import imgGallery8 from "../assets/img/gallery8.webp";
import imgGallery9 from "../assets/img/gallery9.webp";
import imgGallery10 from "../assets/img/gallery10.webp";
import imgGallery11 from "../assets/img/gallery11.webp";
import imgGallery12 from "../assets/img/gallery12.webp";
import Image from "next/image";

const Nosotros = () => {
  const { nosotros } = nosotrosDatabase;
  const ARR = Array.from(new Array(12), (valor, index) => index);

  const diccionario = {
    persona1: imgGallery1,
    persona2: imgGallery2,
    persona3: imgGallery3,
    persona4: imgGallery4,
    persona5: imgGallery5,
    persona6: imgGallery6,
    persona7: imgGallery7,
    persona8: imgGallery8,
    persona9: imgGallery9,
    persona10: imgGallery10,
    persona11: imgGallery11,
    persona12: imgGallery12,
  };

  return (
    <section
      id="nosotros"
      className="nosotros md:w-11/12 mx-auto mt-[5rem] px-2"
    >
      <h3 className="text-center text-4xl  md:text-6xl mb-10 text-gray-600 uppercase font-bold">
        Nosotros
      </h3>

      <div
        className="wrapper md:flex gap-10 justify-center items-center
      "
      >
        <div className="info-wrapper md:w-1/2 ">
          <h3 className="uppercase text-3xl mb-5 text-emerald-700 font-semibold">
            ¿Quiénes somos ?
          </h3>

          <p className="whitespace-pre-wrap sm:text-xl  text-gray-600">
            {nosotros[0]?.description}
          </p>
        </div>

        <div className=" md:w-1/2 items-center gallery grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {ARR?.map((item, index) => {
            return (
              <Image
                className="rounded-md"
                key={index}
                src={diccionario[`persona${index + 1}`]}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
