import { BasisCurve } from "react-svg-curve";

export default function Curvedline({ x1, y1, x2, y2 }) {
  return (
    <>
      <div>
        <svg overflow="visible">
          <BasisCurve
            showPoints={false}
            stroke="grey"
            strokeWidth="15"
            className="bg-white"
            data={[
              [x1, y1],
              [x2, y1],
              [x2, y2],
            ]}
          />
        </svg>
      </div>
    </>
  );
}
