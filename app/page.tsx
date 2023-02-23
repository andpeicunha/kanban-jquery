"use client";

import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import "jquery-ui/themes/base/all.css";

interface Position {
  top?: number;
  left?: number;
}

export default function Home() {
  const Draggable1 = useRef<HTMLDivElement>(null);
  const Droppable1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Draggable1.current && Droppable1.current) {
      $(Draggable1.current).draggable({
        stack: ".draggableElement", //define o elemento que pode ser movido
        grid: [20, 20], //define o grid de movimento
      });

      $(Droppable1.current).droppable({
        accept: ".draggableElement",

        // drop é uma função chamada quando o elemento drag é solto no elemento drop
        drop: function (event, ui) {
          // let $this = $(this);
          const $elementoDestino = $("#meu-elemento");
          const { top, left } = $elementoDestino.position();
          const height = $elementoDestino.outerHeight();
          const width = $elementoDestino.outerWidth(true);
          console.log(
            `Destinho T:${top}px, L:${left}px, H:${height}px, w:${width}px`
          );

          $(".draggableElement").addClass("animate z-50");
          $("#meu-elemento").addClass("-z-50");
          $(".draggableElement").animate(
            {
              left: width * 1.5,
              top: 40,
            },
            1000
          );

          // $(".highlight").removeClass("highlight");
          // $this.addClass("highlight");

          /* anima o elemento para a posição do elemento droppable
          // ui.draggable.position({
          //   my: "top",
          //   at: "center",
          //   of: $this,
          //   using: function (pos: Position) {
          //     $(this).animate(pos, "slow", "linear");
          //   },
          // });
          */
        },
      });
    }
  }, [Draggable1, Droppable1]);

  return (
    <main className="min-h-screen w-full flex flex-row">
      <div id="k1" className="etapaKanban">
        <h1 className="tituloEtapaKanban">To Do</h1>

        <div ref={Draggable1} className="draggableElement">
          <p className="text-center cursor-move">Arraste-me!</p>
        </div>
      </div>

      <div
        id="meu-elemento"
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
