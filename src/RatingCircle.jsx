import React from "react";

class RatingCircle extends React.Component {
  render() {
    const { rgbColour } = this.props;
    const { size } = this.props;

    const viewBoxStr = "0 0 " + size + " " + size;
    console.log(rgbColour, size, "sdf");

    let circleHalf = (Number(size) / 2).toString();
    return (
      <svg
        width={size}
        height={size}
        viewBox={viewBoxStr}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={circleHalf}
          cy={circleHalf}
          r={circleHalf}
          fill={rgbColour}
        />
      </svg>
    );
  }
}

export default RatingCircle;
