import React from "react";
import imageInvierno1 from "../assets/img/imgInvierno1.webp";
import imageInvierno2 from "../assets/img/imgInvierno2.webp";
import imageInvierno3 from "../assets/img/imgInvierno3.webp";
import imageOtono1 from "../assets/img/imgOtono1.webp";
import imageOtono2 from "../assets/img/imgOtono2.webp";
import imageOtono3 from "../assets/img/imgOtono3.webp";
import imageVerano1 from "../assets/img/imgVerano1.webp";
import imageVerano2 from "../assets/img/imgVerano2.webp";
import imageVerano3 from "../assets/img/imgVerano3.webp";
import imagePrimavera1 from "../assets/img/imgPrimavera1.webp";
import imagePrimavera2 from "../assets/img/imgPrimavera2.webp";
import imagePrimavera3 from "../assets/img/imgPrimavera3.webp";
import imageChicle1 from "../assets/img/imgChicle1.webp";
import imageChicle2 from "../assets/img/imgChicle2.webp";
import imageChicle3 from "../assets/img/imgChicle3.webp";
import Image from "next/image";
const Producto = ({ productoActive }) => {
  if (productoActive && productoActive?.nombre) {
    productoActive.nombre =
      productoActive?.nombre === "Tutti Frutti"
        ? "Chicle"
        : productoActive?.nombre;
  }

  const diccionario = {
    invierno: [imageInvierno1, imageInvierno2, imageInvierno3],
    verano: [imageVerano1, imageVerano2, imageVerano3],
    otono: [imageOtono1, imageOtono2, imageOtono3],
    primavera: [imagePrimavera1, imagePrimavera2, imagePrimavera3],
    chicle: [imageChicle1, imageChicle2, imageChicle3],
  };

  const chooseString = (index) => {
    let string;
    switch (index) {
      case 0:
        string = "Textil";
        break;
      case 1:
        string = "Difusor";
        break;
      case 2:
        string = "Auto/repuesto";
        break;

      default:
        break;
    }
    return string;
  };
  return (
    <article>
      <h2 className="text-center font-extrabold text-4xl text-gray-500 ">
        {productoActive?.nombre === "Otono"
          ? "Otoño"
          : `${productoActive?.nombre}`}
      </h2>
      <h3 className="text-center text-emerald-600  uppercase font-bold mt-2">
        {productoActive?.linea}
      </h3>
      <p className="w-5/6 mx-auto mt-1 mb-6 text-xl">
        {productoActive?.description}
      </p>
      <div className="items justify-center flex mt-5 flex-col md:flex-row">
        {diccionario[`${productoActive?.nombre.toLowerCase()}`]?.map(
          (item, index) => {
            return (
              <div className="item flex flex-col justify-between " key={index}>
                <div className="sm:w-10/12 min-w-[13rem] max-w-[25rem] mx-auto ">
                  <Image src={item} className="w-full h-full" alt="" />
                </div>
                <p className="text-3xl mt-4 text-center font-bold ">
                  {chooseString(index)}
                </p>
              </div>
            );
          }
        )}
      </div>
    </article>
  );
};

export default Producto;
