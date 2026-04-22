import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-xl font-serif tracking-widest text-white">
          IPANEMA
          <span className="block text-center text-xs text-yellow-400 md:text-left">
            DESDE 1900
          </span>
        </div>

        <div className="text-center text-sm md:text-left">
          © {new Date().getFullYear()} Panadería Ipanema. Todos los derechos reservados.
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/TU_USUARIO"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-125 hover:text-yellow-400"
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="https://facebook.com/TU_PAGINA"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-125 hover:text-yellow-400"
          >
            <FaFacebook size={28} />
          </a>

          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-125 hover:text-yellow-400"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;