import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const MapViewer = ({ selectedRoom, rooms = [], visibleFloor }) => {
  const mapImage =
    selectedRoom?.mapImage || rooms[0]?.mapImage || "/maps/d-floor2.png";

  return (
    <div className="relative mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
      <div className="absolute left-3 top-3 z-20 rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow">
        {selectedRoom?.floor || visibleFloor || "Floor Map"}
      </div>

      <TransformWrapper initialScale={1} minScale={1} maxScale={4}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute right-3 top-3 z-20 flex gap-2">
              <button onClick={() => zoomOut()} className="h-9 w-9 rounded-full bg-white font-bold shadow">
                -
              </button>
              <button onClick={() => resetTransform()} className="rounded-full bg-white px-3 text-xs font-bold shadow">
                Reset
              </button>
              <button onClick={() => zoomIn()} className="h-9 w-9 rounded-full bg-white font-bold shadow">
                +
              </button>
            </div>

            <TransformComponent wrapperClass="!w-full" contentClass="!w-full">
              <div className="relative w-full">
                <img
                  src={mapImage}
                  alt="Campus map"
                  className="block w-full select-none hover:scale-[1.01] transition duration-300"
                  draggable="false"
                />

                {selectedRoom && (
                  <>
                    <div
                      className="absolute rounded-xl border-2 border-[var(--color-horizon-red)] bg-red-500/20 transition-all duration-500 shadow-[0_0_24px_rgba(168,0,23,0.5)]"
                      style={selectedRoom.highlight}
                    />

                    <div
                      className="absolute -translate-x-1/2 -translate-y-full text-3xl drop-shadow-lg"
                      style={{
                        left: `calc(${selectedRoom.highlight.left} + (${selectedRoom.highlight.width} / 2))`,
                        top: selectedRoom.highlight.top,
                      }}
                    >
                    </div>
                  </>
                )}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default MapViewer;