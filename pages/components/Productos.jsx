import React, { useContext, useEffect, useRef, useState } from "react";
import productosDatabase from "../assets/db.json";
import Producto from "./Producto";

const Productos = ({ handleScroll }) => {
  const { productos } = productosDatabase;
  const [productoActive, setActiveProduct] = useState();

  useEffect(() => {
    const changeProductoActive = (id) => {
      const productArr = productos.filter((item) => item.id === id);

      setActiveProduct(productArr[0]);
    };

    changeProductoActive(1);
  }, [productoActive, productos]);

  return (
    <section
      id="productos"
      className="productos my-12 sm:w-11/12 md:w-10/12 mx-auto  py-12 border-b-2 border-slate-200"
    >
      <h3 className="text-center text-3xl md:text-6xl text-gray-500 uppercase font-bold ">
        Productos
      </h3>

      <div className="listado mt-12 px-2  ">
        <ul className=" md:w-5/6 lg:w-4/6  mx-auto tabs flex flex-wrap justify-around	gap-2   ">
          {productos.map((producto) => {
            return (
              <li
                className="uppercase bg-emerald-600 text-white rounded-md font-bold  p-1 sm:py-2 sm:px-4   md:px-3"
                key={producto.id}
                data-nombre={`${producto.nombre}`}
                onClick={() => changeProductoActive(producto.id)}
              >
                {producto.nombre === "Otono" ? "Otoño" : `${producto.nombre}`}
              </li>
            );
          })}
        </ul>

        <div className="wrapper_productos mt-10 text-gray-600">
          <Producto productoActive={productoActive} />
        </div>
      </div>
    </section>
  );
};

export default Productos;
