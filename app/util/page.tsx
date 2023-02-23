"use client";
import React, { useRef } from "react";
import $ from "jquery";

interface ElementProps {
  id: string;
}

const Element = ({ id }: ElementProps) => {
  const elementRef = useRef(null);

  // função para obter posição top e left
  const getPosition = () => {
    if (elementRef.current !== null) {
      const $element = $(elementRef.current);
      const { top, left } = $element.position();
      const Top = `${top}px`;
      const Left = `${left}px`;
      console.log(`Top: ${Top}, Left: ${Left}`);
    }
  };

  return (
    <div id={id} ref={elementRef}>
      <p>Exemplo de elemento</p>
      <button onClick={getPosition}>Obter posição</button>
    </div>
  );
};

export default Element;
