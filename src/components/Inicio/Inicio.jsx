import React from "react";
import tv from "../../assets/tv.png";

export function Inicio() {
  return (
    <div className="grid grid-cols-1 gap-y-2 bg-stone-800  overflow-x-hidden">
      <div className="relative flex flex-col justify-center items-center overflow-hidden lg:h-screen">
        <img
          className="absolute h-auto w-screen transform scale-110 -translate-y-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/96956889-cd58-48f4-930e-f43fad686c0d/US-es-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-screen w-screen bg-gradient-to-t from-black via-black60 to-black opacity-80" />
        <div className="z-20 m-auto flex flex-col items-center text-white">
          <h2 className="text-5xl font-extrabold pb-5 mt-32">
            Películas y series ilimitadas y mucho más
          </h2>
          <h5 className="text-2xl pb-5 font-medium">
            Disfruta donde quieras. Cancela cuando quieras.
          </h5>
          <p className="text-xl pb-5">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
          </p>
          <div className="flex">
            <input
              className="bg-stone-900 opacity-80 mr-3 w-80 px-5 border-2 border-stone-400 rounded-md placeholder:text-lg"
              placeholder="Email"
            />
            <button className="bg-primary text-white text-2xl font-semibold flex px-4 py-3 object-center justify-center items-center rounded-md">
              Comenzar{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="pt-1 h-9 w-9 fill-white"
              >
                <path d="m375-240-43-43 198-198-198-198 43-43 241 241-241 241Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="h-full lg:grid lg:grid-cols-2 gap-x-2 bg-black lg:py-8 py-20 xl:pl-60 xl:pr-48">
        <section className="text-white h-full lg:text-left text-center">
          <h2 className="lg:text-5xl text-3xl font-extrabold pb-5 lg:mt-32 lg:px-0 px-20">
            Disfruta en tu TV
          </h2>
          <h5 className="lg:text-2xl text-xl lg:pb-52">
            Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
            reproductores de Blu-ray y más.
          </h5>
        </section>
        <section className="relative">
          {/* Imagen */}
          <img
            src={tv}
            alt=""
            className="w-full h-auto absolute top-0"
            // style={{ zIndex: 10 }}
          />

          {/* Video */}
          <div className="absolute lg:bottom-20 -bottom-96 transform lg:translate-y-0 translate-y-20 inset-0 flex items-center justify-center">
            <video
              className="w-4/6 h-auto"
              // style={{ zIndex: -10 }}
              autoPlay={true}
              muted={true}
              loop={true}
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
      </div>
      <div></div>
    </div>
  );
}
