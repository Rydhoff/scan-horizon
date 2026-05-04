import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import { rooms } from "../data/rooms";
import MapViewer from "../components/MapViewer";
import FloorSelector from "../components/FloorSelector";
import RoomDetailCard from "../components/RoomDetailCard";
import { ArrowLeft } from "lucide-react";

const BuildingMap = () => {
  const { buildingId } = useParams();

  const [search, setSearch] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState("");

  const buildingRooms = rooms.filter((room) => room.building === buildingId);

  const buildingName =
    buildingId === "d" ? "Gedung D" : "Gedung A, B, C";

const searchResults = useMemo(() => {
  if (!search.trim()) return [];

  const keyword = search.toLowerCase();

  return buildingRooms.filter((room) => {
    const searchableText = `
      ${room.name}
      ${room.category}
      ${room.floor}
      ${room.buildingName}
    `.toLowerCase();

    return searchableText.includes(keyword);
  });
}, [search, buildingRooms]);

  const floors = [...new Set(buildingRooms.map((room) => room.floor))];

const visibleFloor = selectedRoom?.floor || selectedFloor || floors[0];

const currentFloorRooms = buildingRooms.filter(
  (room) => room.floor === visibleFloor
);

const handleSelectRoom = (room) => {
  setSelectedRoom(room);
  setSelectedFloor(room.floor);
  setSearch(room.name);
};

  return (
<main className="min-h-screen bg-slate-100">
  <section className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 py-5 shadow-sm">
   <div className="rounded-b-3xl bg-[var(--color-horizon-red)] px-4 pb-5 pt-5 text-white shadow-md -mx-4 -mt-5 mb-5">
  <div className="flex items-center justify-between gap-3">
    <Link
  to="/"
  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shadow-sm backdrop-blur transition hover:bg-white/30 active:scale-95"
>
  <ArrowLeft size={20} />
</Link>

    <div className="flex-1">
      <p className="text-xs font-bold uppercase tracking-wide text-white/80">
        SCAN Horizon
      </p>
      <h1 className="text-xl font-bold">
        {buildingName}
      </h1>
    </div>
  </div>
</div>

        <div className="mt-4">
          <SearchBox
  value={search}
  onChange={setSearch}
  results={searchResults}
  onSelectRoom={handleSelectRoom}
  onClear={() => {
    setSearch("");
    setSelectedRoom(null);
  }}
/>
        </div>

        <FloorSelector
  floors={floors}
  selectedFloor={visibleFloor}
  onChange={(floor) => {
    setSelectedFloor(floor);
    setSelectedRoom(null);
    setSearch("");
  }}
/>

        <MapViewer
  selectedRoom={selectedRoom}
  rooms={currentFloorRooms}
  visibleFloor={visibleFloor}
/>

        <RoomDetailCard room={selectedRoom} />
      </section>
    </main>
  );
};

export default BuildingMap;