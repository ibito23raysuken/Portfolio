import React, { useState, useEffect } from "react";
import s from "./style.module.css";

export default function Neurone({
  BaseIcon,
  LeftIcon,
  RightIcon,
  LeftLabel,
  RightLabel,
  onclickleftArrow,
  onclickrightArrow,
  NeuroneName,
  reference,
}) {
  const [showArrows, setShowArrows] = useState(false);
  const [hoveredArrow, sethoveredArrow] = useState();
  /////////////////////liste des fonction//////////////////////
  function handlerShowArrows() {
    setShowArrows(true);
  }
  function handlerCloseArrows() {
    setShowArrows(false);
  }
  function changearrowdform(arrow) {
    sethoveredArrow(arrow);
  }

  return (
    <div
      className=" text-gray-700 justify-self-center"
      onMouseEnter={handlerShowArrows}
      onMouseLeave={handlerCloseArrows}
    >
      <div className="grid grid-cols-3">
        <div className="">
          {showArrows && (
            <div
              className="flex flex-col"
              style={{
                opacity: hoveredArrow === "left" ? 1 : 0.4,
                cursor: "pointer",
              }}
              onClick={() => onclickleftArrow(NeuroneName)}
              onMouseEnter={() => changearrowdform("left")}
              onMouseLeave={() => changearrowdform(null)}
            >
              {LeftLabel}
              <LeftIcon
                style={{
                  fontSize: hoveredArrow === "left" ? 90 : 40,
                  opacity: hoveredArrow === "left" ? 1 : 0.4,
                  cursor: "pointer",
                }}
              />
            </div>
          )}
        </div>
        <div className={`${s.iconetheme}  justify-self-center mt-20`}>
          <BaseIcon style={{ fontSize: 40 }} ref={reference} />
        </div>
        <div className="">
          {showArrows && (
            <div
              className="flex flex-col "
              style={{
                opacity: hoveredArrow === "right" ? 1 : 0.4,
                cursor: "pointer",
              }}
              onMouseEnter={() => changearrowdform("right")}
              onMouseLeave={() => changearrowdform(null)}
              onClick={() => onclickrightArrow(NeuroneName)}
            >
              {RightLabel}
              <div className="self-end">
                <RightIcon
                  style={{
                    fontSize: hoveredArrow === "right" ? 90 : 40,
                    opacity: hoveredArrow === "right" ? 1 : 0.4,
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
