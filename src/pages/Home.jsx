import { Link } from "react-router-dom";
import logo from "/logo.png";

const buildings = [
  {
    id: "old",
    name: "Gedung A, B, C",
    description: "Old Building - kelas, kantor, fasilitas kampus",
  },
  {
    id: "d",
    name: "Gedung D",
    description: "New Building - layout linear dan corridor-based",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-100">
      <section className="relative mx-auto min-h-screen max-w-md overflow-hidden text-white shadow-sm">

        {/* 🔥 Background Image */}
        <img
          src="/horizon-building-bg.png"
          alt="Horizon Building"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* 🔥 Overlay biar text kebaca */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50" />

        {/* 🔥 Content */}
        <div className="relative z-10 flex min-h-screen flex-col px-4 py-6">

          {/* LOGO */}
          <img
            src={logo}
            alt="Horizon University Indonesia"
            width={220}
            className="mx-auto mb-4 drop-shadow"
          />

          {/* TEXT */}
          <div className="mb-6 text-center">
            <h1 className="mt-1 text-3xl font-bold text-white text-shadow-lg">
              SCAN Horizon
            </h1>

            <p className="mt-1 text-lg text-[var(--color-horizon-red)] font-semibold">
              Smart Campus Navigation
            </p>

            <p className="mt-1 text-sm text-white/80 text-shadow-lg">
              Cari ruangan dan fasilitas dengan mudah.
            </p>
          </div>

          {/* CARD SECTION */}
          <div className="mt-36 space-y-4">
            {buildings.map((building) => (
              <Link
                key={building.id}
                to={`/map/${building.id}`}
                className="block rounded-2xl border border-white/20 bg-white/90 p-5 text-slate-900 shadow-lg backdrop-blur transition active:scale-[0.98]"
              >
                <h2 className="text-lg font-bold">
                  {building.name}
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  {building.description}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Home;