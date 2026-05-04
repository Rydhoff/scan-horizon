import { MapPin, Building2, Layers, Tag } from "lucide-react";
import { Search } from "lucide-react";

const RoomDetailCard = ({ room }) => {
  if (!room) {
  return (
    <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center">
      <Search className="mx-auto mb-2 text-slate-400" size={28} />
      <p className="text-sm font-semibold text-slate-700">
        Cari Ruangan
      </p>
      <p className="text-xs text-slate-500 mt-1">
        Ketik nama ruangan atau pilih dari daftar
      </p>
    </div>
  );
}

  return (
    <div className="mt-5 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm animate-[fadeIn_0.4s_ease]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-horizon-red)]">
            Selected Location
          </p>
          <h2 className="mt-1 text-xl font-bold text-slate-900">
            {room.name}
          </h2>
        </div>

      <div className="flex items-center gap-1 rounded-full bg-[var(--color-horizon-soft-red)] px-3 py-1 text-xs font-bold text-[var(--color-horizon-red)]">
        <MapPin size={14} />
        Found
        </div>
      </div>

      <div className="rounded-xl p-3 flex items-center gap-3 mt-2">
  <Building2 size={16} className="text-slate-500" />
  <div>
    <p className="text-xs text-slate-500">Gedung</p>
    <p className="text-sm font-semibold text-slate-800">
      {room.buildingName}
    </p>
  </div>
</div>

<div className="rounded-xl p-3 flex items-center gap-3">
  <Layers size={16} className="text-slate-500" />
  <div>
    <p className="text-xs text-slate-500">Lantai</p>
    <p className="text-sm font-semibold text-slate-800">
      {room.floor}
    </p>
  </div>
</div>

<div className="rounded-xl p-3 flex items-center gap-3">
  <Tag size={16} className="text-slate-500" />
  <div>
    <p className="text-xs text-slate-500">Kategori</p>
    <p className="text-sm font-semibold text-slate-800">
      {room.category}
    </p>
  </div>
</div>
    </div>
  );
};

export default RoomDetailCard;