"use client";

import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";

interface Props {
  id?: string;
  className: string;
  titleDrag: string;
  bodyDrag: string;
}

export default function ElementDrag(props: Props) {
  const Draggable1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Draggable1.current !== null) {
      $(Draggable1.current).draggable({
        start: function () {
          $(this).addClass("opacity-20");
        },
        stop: function () {
          $(this).removeClass("opacity-20");
        },

        stack: "#draggableElement", //define o elemento que pode ser movido
        grid: [20, 20], //define o grid de movimento
      });
    }
  }, [Draggable1]);

  const validaWidthZero = () => {
    if (props.className === "w-[0px]") {
      return "w-[30%]";
    } else {
      return props.className;
    }
  };

  console.log(validaWidthZero());

  return (
    <>
      <div
        id="draggableElement"
        ref={Draggable1}
        className={`${validaWidthZero()} z-50 absolute border rounded-md bg-white/50 p-2 top-[3rem]`}
      >
        <p className="text-center cursor-move bg-black/10 rounded-md -m-1 ">
          {props.titleDrag}
        </p>
        <p className="text-sm mt-2">{props.bodyDrag}</p>
      </div>
    </>
  );
}
