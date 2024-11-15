import React from "react";
import { Box } from "@mui/material";

interface ColorSwatchProps {
  color: { type: string; [key: string]: number | string };
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color }) => {
  const { type, ...colorValues } = color;
  const backgroundColor =
    type === "rgb"
      ? `rgb(${colorValues.red}, ${colorValues.green}, ${colorValues.blue})`
      : `hsl(${colorValues.hue}, ${colorValues.saturation}%, ${colorValues.lightness}%)`;

  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        backgroundColor,
        display: "inline-block",
        margin: 1,
        border: 0.5,
      }}
    />
  );
};

export default ColorSwatch;
