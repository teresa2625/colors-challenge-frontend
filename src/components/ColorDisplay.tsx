import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import ColorSwatch from "./ColorSwatch";
import { fetchColors } from "../api";

const ColorDisplay: React.FC = () => {
  const [colors, setColors] = useState<
    { type: string; [key: string]: number | string }[]
  >([]);

  const loadColors = async () => {
    const newColors = await fetchColors();
    setColors(newColors);
  };

  useEffect(() => {
    loadColors();
  }, []);

  return (
    <Box textAlign="center">
      <Button variant="contained" onClick={loadColors}>
        Generate Colors
      </Button>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
        {colors.map((color, index) => (
          <ColorSwatch key={index} color={color} />
        ))}
      </Box>
    </Box>
  );
};

export default ColorDisplay;
