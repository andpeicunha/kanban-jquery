"use client";

import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/themes/base/all.css";

export default function Home() {
  const draggableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("load", () => {
      if (draggableRef.current && $("#k1").length > 0) {
        $(draggableRef.current).draggable({
          grid: [50, 20],
          cursor: "crosshair",
          containment: "#k1, #k2",
        });
      }
    });
  }, [draggableRef]);

  return (
    <main className="min-h-screen w-full flex flex-row">
      <div
        id="k1"
        className="basis-1/2 bg-red-100 justify-center items-start p-2"
      >
        <h1 className="bg-black/30 min-w-full -m-2 justify-center flex text-xs p-2 rounded-b-lg">
          To Do
        </h1>
        <div
          ref={draggableRef}
          className="flex justify-center border rounded-md bg-white/50 p-2 w-[80%]"
        >
          Arraste-me!
        </div>
      </div>
      <div id="k2" className=" basis-1/2 bg-blue-100">
        <h1>Doing</h1>
      </div>
    </main>
  );
}
