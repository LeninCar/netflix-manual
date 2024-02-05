import React from "react";
import tv from "../../assets/tv.png";

export function Inicio() {
  return (
    <div className="grid grid-cols-1 gap-y-2 bg-stone-800  overflow-hidden ">
      <section className="relative flex flex-col justify-center items-center overflow-hidden lg:h-screen w-screen text-center">
        <img
          className="absolute h-auto w-screen transform scale-110 -translate-y-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/96956889-cd58-48f4-930e-f43fad686c0d/US-es-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-screen w-screen bg-gradient-to-t from-black via-black60 to-black opacity-80" />
        <div className="z-20 m-auto flex flex-col items-center text-white">
          <h2 className="md:text-5xl text-2xl md:font-extrabold font-bold pb-5 mt-32 tracking-wide">
            Películas y series ilimitadas y mucho más
          </h2>
          <h5 className="text-2xl pb-5 font-medium">
            Disfruta donde quieras. Cancela cuando quieras.
          </h5>
          <p className="text-xl pb-5">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
          </p>
          <div className="flex lg:flex-row flex-col">
            <input
              className="bg-stone-900 opacity-80 mr-3 lg:w-80 w-full lg:py-o py-2 lg:my-0 my-5 px-5 border-2 border-stone-400 rounded-md placeholder:text-lg"
              placeholder="Email"
            />
            <button className="bg-primary text-white lg:text-2xl text-lg font-semibold flex px-4 lg:py-3 py-2 object-center justify-center items-center rounded-md">
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
      </section>
      <section className="flex lg:flex-row flex-col w-full justify-center items-center bg-black text-white lg:px-40 px-5 lg:pb-20 lg:pt-o py-20">
        <section className="basis-1/2 text-white h-full lg:text-left text-center">
          <h2 className="lg:text-5xl text-3xl font-extrabold pb-5 lg:mt-32 lg:px-0 px-20">
            Disfruta en tu TV
          </h2>
          <h5 className="lg:text-2xl text-xl lg:pb-52">
            Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
            reproductores de Blu-ray y más.
          </h5>
        </section>
        <section className="relative basis-1/2 flex flex-col">
          {/* Imagen */}
          <img
            src={tv}
            alt=""
            className="w-full z-10"
            // style={{ zIndex: 10 }}
          />
          {/* Video */}
          <div className="absolute left-20 top-20 flex items-center justify-center">
            <video
              className="w-auto h-auto"
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
      </section>
      <section className="flex lg:flex-row flex-col-reverse w-full justify-center items-center bg-black text-white lg:px-40 px-5 lg:pb-20 lg:pt-o py-20">
        <div className="relative flex justify-center basis-1/2 ">
          <div className="absolute bottom-0 flex flex-row border bg-black text-white rounded-lg p-3">
            <div>
              <img
                className="w-14"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt="poster de stranger things"
              />
            </div>
            <div className="flex flex-col px-5 justify-center">
              <span className="text-lg">Stranger Things</span>
              <span>Descargando...</span>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-16 h-16"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt=""
              />
            </div>
          </div>
          <div>
            <img
              className="w-8/9 h-auto"
              alt="imagen de demostración en movil "
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
          </div>
        </div>
        <div className="basis-1/2">
          <h2 className="lg:text-6xl text-3xl font-extrabold">
            Descarga tus series para verlas offline
          </h2>
          <p className="lg:text-2xl text-xl pt-4">
            Guarda tu contenido favorito y tendrás siempre algo para ver.
          </p>
        </div>
      </section>
      <section className="flex lg:flex-row flex-col w-full bg-black text-white lg:px-40 px-5 lg:pb-20 lg:pt-o py-20">
        <div className="basis-1/2 flex flex-col px-5 justify-center items-center">
          <span className="lg:text-6xl text-3xl font-extrabold">
            Disfruta donde quieras
          </span>
          <span className="lg:text-2xl text-xl pt-4">
            Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.
          </span>
        </div>
        <div className="relative basis-1/2 flex flex-col">
          <img
            className="w-full h-auto z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            alt="imagenes de netflix en celulares y pc"
          />

          <div className="absolute md:left-36 left-14 lg:top-8 top-14 flex items-center justify-center">
            <video
              className="md:w-80 w-52 h-auto"
              autoPlay={true}
              muted={true}
              loop={true}
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
