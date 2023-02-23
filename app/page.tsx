"use client";

import React, { useRef, useEffect, useState } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/droppable";
import "jquery-ui/themes/base/all.css";
import ElementDrag from "./elementDrag/page";

interface Position {
  top?: number;
  left?: number;
}

export default function Home() {
  const Droppable1 = useRef<HTMLDivElement>(null);
  const [widthElementDroppable, setWidthElementDroppable] = useState<number>(0); //pega o width do elemento drop

  useEffect(() => {
    if (Droppable1.current !== null) {
      setWidthElementDroppable(Droppable1.current.offsetWidth);

      $(Droppable1.current).droppable({
        accept: "#draggableElement",
        // drop é uma função chamada quando o elemento drag é solto no elemento drop
        drop: function (event, ui) {
          console.log("Drop Ativo");
          const $elementoDestino = $("#dropElement");
          const $elementoDrag = $("#draggableElement");

          const width = $elementoDestino.outerWidth(true);

          $elementoDestino.addClass("-z-20");
          $elementoDrag.addClass("animate z-20");
          $elementoDrag.animate(
            {
              left: width * 1.44,
              top: 40,
            },
            800
          );
        },
      });
    }
  }, [Droppable1]);

  const widthElementDrop = `w-[${widthElementDroppable}px]`;
  // console.log(widthElementDrop);

  return (
    <main className="min-h-screen w-full flex flex-row">
      <div className="etapaKanban">
        <h1 className="tituloEtapaKanban">To Do</h1>

        <ElementDrag
          id="draggableElement"
          className={`${widthElementDrop}`}
          titleDrag="Teste"
          bodyDrag="Body test"
        />
      </div>

      <div
        id="dropElement"
        ref={Droppable1}
        className="bg-blue-100 etapaKanban"
      >
        <h1 className="tituloEtapaKanban">
          <p id="">Doing</p>
        </h1>
      </div>
    </main>
  );
}
