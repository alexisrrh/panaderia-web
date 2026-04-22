import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contacto = () => {
  const info = [
    {
      title: "Llámanos",
      value: "+34 600 000 000",
      icon: <PhoneIcon className="h-8 w-8 text-yellow-400" />,
      sub: "Atención inmediata",
    },
    {
      title: "Escríbenos",
      value: "hola@panaderiaipanema.com",
      icon: <EnvelopeIcon className="h-8 w-8 text-yellow-400" />,
      sub: "Respondemos en 24h",
    },
    {
      title: "Visítanos",
      value: "Calle Falsa 123, Madrid",
      icon: <MapPinIcon className="h-8 w-8 text-yellow-400" />,
      sub: "Frente al parque principal",
    },
  ];

  return (
    <section className="min-h-screen bg-black px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Contacto
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Estamos aquí para ayudarte
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Escríbenos, llámanos o visítanos. Estaremos encantados de atenderte.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {info.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-2xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black">
                {item.icon}
              </div>

              <h2 className="text-2xl font-semibold text-white">
                {item.title}
              </h2>

              <p className="mt-3 break-words text-base font-medium text-yellow-400">
                {item.value}
              </p>

              <p className="mt-3 text-sm uppercase tracking-widest text-gray-400">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-yellow-500 px-8 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;