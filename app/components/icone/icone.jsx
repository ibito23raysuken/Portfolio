import React from "react";
import s from "./style.module.css";

export default function CustomIcone(props) {
  return (
    <div className="justify-self-center">
      <div
        className={`${s.iconetheme}`}
        onClick={() => props.onClickIcon(props.NeuroneName)}
      >
        <props.BaseIcon
          sx={{ fontSize: 40, cursor: "pointer" }}
          ref={props.reference}
        />
      </div>
    </div>
  );
}
