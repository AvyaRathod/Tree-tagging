import React from "react";

function EventsCard() {
  return (
    <>
        <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
            <div className="p-6">
            <header className="mb-4">
                <h3 className="text-xl font-medium text-slate-700">
                A place under the night sky
                </h3>
                <p className="text-sm text-slate-400">By George Johnson, jun3 28</p>
            </header>
            <p>
                There’s nothing better than hiking along the rocky footpaths,
                accompanied only by the noise of cicadas. As the boat docks in the
                harbor, gaze upon white and blue houses, craggy cliffs, sweeping
                olive groves, and the dazzling blues of the Aegean sea.
            </p>
            </div>
            <div className="flex justify-end gap-2 p-2 pt-0">
            <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                <span>Read more</span>
            </button>
            </div>
        </div>
    </>
  );
}

export default EventsCard;