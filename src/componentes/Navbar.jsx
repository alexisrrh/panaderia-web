import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Historia", href: "/Historia" },
  { name: "Horario", href: "/Horario" },
  { name: "Contacto", href: "/Contacto" },
];

const Navbar = () => {
  const leftLinks = navigation.slice(0, 2);
  const rightLinks = navigation.slice(2, 4);

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 transition hover:bg-white/10 hover:text-yellow-400">
              <Bars3Icon className="block h-6 w-6 group-data-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="hidden items-center gap-8 sm:flex">
              <div className="flex gap-6">
                {leftLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-lg font-medium text-gray-300 transition hover:text-yellow-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link to="/" className="flex items-center justify-center">
                <img
                  src={logo}
                  alt="Panadería Ipanema"
                  className="h-16 w-auto rounded-md bg-white/10 px-3 py-2 object-contain shadow-lg"
                />
              </Link>

              <div className="flex gap-6">
                {rightLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-lg font-medium text-gray-300 transition hover:text-yellow-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-yellow-500 px-5 py-2 font-semibold text-black transition hover:bg-yellow-400"
              >
                Pedir
              </a>
            </div>

            <div className="flex items-center sm:hidden">
              <Link to="/">
                <img
                  src={logo}
                  alt="Panadería Ipanema"
                  className="h-12 w-auto rounded-md bg-white/10 px-2 py-1 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="border-t border-white/10 bg-zinc-950/95 backdrop-blur-md sm:hidden">
        <div className="space-y-2 px-4 py-4">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition hover:bg-white/10 hover:text-yellow-400"
            >
              {item.name}
            </DisclosureButton>
          ))}

          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block rounded-xl bg-yellow-500 px-4 py-3 text-center font-semibold text-black transition hover:bg-yellow-400"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;