const SearchBox = ({ value, onChange, results, onSelectRoom, onClear }) => {
  return (
    <div className="relative z-50">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari ruangan atau fasilitas..."
className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-12 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[var(--color-horizon-red)] focus:ring-4 focus:ring-red-100"
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-slate-100 px-2 py-1 text-xs font-bold text-slate-500"
        >
          ✕
        </button>
      )}

      {value && results.length > 0 && !results.some((room) => room.name === value) && (
  <div className="absolute left-0 right-0 top-14 z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
    {results.map((room) => (
      <button
        key={room.id}
        type="button"
        onClick={() => onSelectRoom(room)}
        className="block w-full border-b border-slate-100 px-4 py-3 text-left transition last:border-b-0 hover:bg-[var(--color-horizon-soft-red)]"
      >
        <p className="text-sm font-semibold text-slate-900">
          {room.name}
        </p>
        <p className="text-xs text-slate-500">
          {room.buildingName} • {room.floor} • {room.category}
        </p>
      </button>
    ))}
  </div>
)}

      {value && results.length === 0 && (
        <div className="absolute left-0 right-0 top-14 z-20 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-lg">
          Ruangan tidak ditemukan
        </div>
      )}
    </div>
  );
};

export default SearchBox;