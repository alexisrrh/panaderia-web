import React from "react";
import fondo from "../assets/fondo.jpeg";
import logo from "../assets/logo.png";

const Inicio = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-24 text-center">
      <div className="absolute inset-0">
        <img
          src={fondo}
          alt="Panadería artesanal"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <img
          src={logo}
          alt="Logo Panadería Ipanema"
          className="mx-auto mb-6 h-20 w-auto object-contain drop-shadow-xl md:h-24"
        />

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
          Panadería artesanal
        </p>

        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Sabor fresco hecho cada día
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Pan, bollería y tartas elaboradas con ingredientes de calidad,
          tradición y el cuidado de una panadería auténtica.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
          >
            Pedir por WhatsApp
          </a>

          <a
            href="#productos"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Ver productos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;