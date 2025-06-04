// app/streming/page.tsx
export default function HomeBody() {
  return (
    <main className="relative min-h-screen bg-gray-900 text-white font-sans">
      {/* Overlays */}
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 flex flex-col p-4 space-y-6 z-30">
        <nav className="flex flex-col space-y-4">
          <button className="text-white hover:text-gray-300 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <span className="text-xl font-bold tracking-wide">CINEMAA</span>
          </button>

          <button className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <div className="text-gray-300">
            <h4 className="font-semibold text-lg mb-2">Menu</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="./index.html"
                  className="flex items-center space-x-2 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-house-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="./moviesGenre.html"
                  className="flex items-center space-x-2 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                  <span>Movies</span>
                </a>
              </li>
              <li>
                <a
                  href="./tvShows.html"
                  className="flex items-center space-x-2 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-tv-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z" />
                  </svg>
                  <span>Shows</span>
                </a>
              </li>
              <li>
                <a
                  href="./About.html"
                  className="flex items-center space-x-2 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-info-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                  <span>About</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <section className="ml-64 p-6">
        {/* Top nav with search */}
        <nav className="flex items-center space-x-4 mb-6">
          <button className="text-white md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <input
            type="search"
            placeholder="Search movies, shows, genres..."
            className="flex-grow rounded px-4 py-2 bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </nav>

        {/* Streaming Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Streaming</h2>
          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
            <video
              src="./vid.mp4"
              controls
              className="w-full h-full object-cover"
              poster="./poster.jpg"
            ></video>
          </div>
        </section>

        {/* Cartelera Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Cartelera</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <img
              src="./imgs/film1.jpg"
              alt="Film 1"
              className="rounded shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            />
            <img
              src="./imgs/film2.jpg"
              alt="Film 2"
              className="rounded shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            />
            <img
              src="./imgs/film3.jpg"
              alt="Film 3"
              className="rounded shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            />
            <img
              src="./imgs/film4.jpg"
              alt="Film 4"
              className="rounded shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            />
          </div>
        </section>

        {/* Ofertas Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Ofertas</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Promo 1</h3>
                <p className="text-gray-400">
                  Disfruta 2x1 en entradas los miércoles.
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2">
                Ver Oferta
              </button>
            </div>
            <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Promo 2</h3>
                <p className="text-gray-400">
                  Descuento especial para estudiantes.
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2">
                Ver Oferta
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
