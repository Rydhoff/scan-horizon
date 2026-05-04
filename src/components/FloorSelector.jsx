const FloorSelector = ({ floors, selectedFloor, onChange }) => {
  return (
    <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
      {floors.map((floor) => (
        <button
          key={floor}
          onClick={() => onChange(floor)}
          className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
            selectedFloor === floor
  ? "bg-[var(--color-horizon-red)] text-white shadow"
  : "bg-white text-slate-600 border border-slate-200"
          }`}
        >
          {floor}
        </button>
      ))}
    </div>
  );
};

export default FloorSelector;