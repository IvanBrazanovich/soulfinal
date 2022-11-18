import React, { useContext } from "react";
import imgVendedor from "../assets/img/vendedor.webp";
import Image from "next/image";

const Vender = () => {
  return (
    <section
      id="vender"
      className="my-24 w-11/12 mx-auto rounded-lg overflow-hidden relative"
    >
      <h2 className=" text-2xl md:text-6xl font-bold text-gray-600 text-center mb-8">
        Quiero Vender
      </h2>
      <div className="wrapper rounded-lg ">
        <div className="absolute w-full h-full -z-20">
          <Image alt="img hero" fill src={imgVendedor} objectFit="cover" />
        </div>

        <div className="absolute w-full h-full -z-10 bg-gradient-to-r from-sky-200	"></div>
        <div className="vendedor text-center py-10  ">
          <h3 className="font-bold text-emerald-300 uppercase text-3xl my-4">
            Si quieres ser vendedor
          </h3>

          <div className="info-contact flex flex-col md:flex-row w-3/4 mx-auto items-center justify-center mt-7 gap-6">
            <h3 className="text-2xl font-bold text-white">
              Para saber más contáctanos
            </h3>

            <div className="flex items-center gap-3 text-3xl text-emerald-300">
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
    </section>
  );
};

export default Vender;
