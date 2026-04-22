import React from "react";

const horarios = [
  { dia: "Lunes a viernes", hora: "7:00 - 20:00" },
  { dia: "Sábados", hora: "8:00 - 14:00" },
  { dia: "Domingos", hora: "Cerrado" },
];

const Horario = () => {
  return (
    <section className="min-h-screen bg-black px-6 pt-32 pb-20 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
          Horarios
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Nuestro horario de atención
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Estamos disponibles para atenderte y preparar tus pedidos en el
          siguiente horario.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-zinc-900 p-8 shadow-2xl">
          <div className="space-y-4">
            {horarios.map((item) => (
              <div
                key={item.dia}
                className="flex flex-col items-center justify-between gap-2 rounded-2xl border border-white/10 bg-black px-6 py-5 text-center md:flex-row md:text-left"
              >
                <p className="text-xl font-semibold text-white">{item.dia}</p>
                <p className="text-lg font-medium text-yellow-400">{item.hora}</p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
          >
            Hacer un pedido
          </a>
        </div>
      </div>
    </section>
  );
};

export default Horario;