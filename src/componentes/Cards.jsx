import React from "react";
import pan1 from "../assets/pan1.jpg";
import pan4 from "../assets/pan4.png";
import pan3 from "../assets/pan3.jpg";

const productos = [
  {
    id: 1,
    nombre: "Pan artesanal",
    descripcion:
      "Elaborado cada día con ingredientes seleccionados y tradición panadera.",
    imagen: pan1,
  },
  {
    id: 2,
    nombre: "Bollería fresca",
    descripcion:
      "Croissants, napolitanas y dulces recién horneados para cualquier momento.",
    imagen: pan3,
  },
  {
    id: 3,
    nombre: "Tartas especiales",
    descripcion:
      "Opciones perfectas para celebraciones, eventos y pedidos personalizados.",
    imagen: pan4,
  },
];

const Cards = () => {
  return (
    <section id="productos" className="bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Nuestros productos
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Hechos con tradición y sabor
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Descubre una selección de productos artesanales pensados para cada
            momento del día.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {productos.map((producto) => (
            <article
              key={producto.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg transition duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-white">
                  {producto.nombre}
                </h3>

                <p className="mt-3 text-gray-400">
                  {producto.descripcion}
                </p>

                <a
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
                >
                  Pedir ahora
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;