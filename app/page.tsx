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
        scroll: false,
        stack: ".draggable", //define o elemento que pode ser movido
      });

      $(Droppable1.current).droppable({
        accept: ".draggable",

        drop: function (event, ui) {
          // let $this = $(this);
          const $elementoDestino = $("#meu-elemento");
          const { top, left } = $elementoDestino.position();
          const height = $elementoDestino.outerHeight();
          const width = $elementoDestino.outerWidth();
          console.log(
            `Destinho T:${top}px, L:${left}px, H:${height}px, w:${width}px`
          );

          $(".draggable").addClass("animate");
          $(".draggable").animate(
            {
              left: width * 1.5,
              top: 40,
            },
            1000
          );
          console.log(`Posição #Meu-Elemento: ${width * 1}`);

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
      <div id="k1" className="relative basis-1/2 bg-red-100 p-2">
        <h1 className="bg-black/10 min-w-full -m-2 -mx-1 flex text-xs p-2 rounded-b-lg justify-center align-middle items-center">
          To Do
        </h1>

        <div
          ref={Draggable1}
          className="absolute draggable border rounded-md bg-white/50 p-2 inset-x-1/2 transform -translate-x-1/2 w-[30%] top-[3rem]"
        >
          <p className="text-center cursor-move">Arraste-me!</p>
        </div>
      </div>

      <div
        id="meu-elemento"
        ref={Droppable1}
        className="basis-1/2 bg-purple-200 justify-center items-start p-2"
      >
        <h1 className="bg-black/20 min-w-full -m-2 -mx-1 flex text-xs p-2 rounded-b-lg justify-center align-middle items-center">
          <p id="">Doing</p>
        </h1>
      </div>
    </main>
  );
}
