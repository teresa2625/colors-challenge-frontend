import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import ColorSwatch from "./ColorSwatch";
import { fetchColors } from "../api";

const ColorDisplay = () => {
  const [colors, setColors] = useState<
    { type: string; [key: string]: number | string }[]
  >([]);
  const [errorMessage, setErrorMessage] = useState("");

  const loadColors = async () => {
    try {
      const newColors = await fetchColors();
      setColors(newColors);
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage("Error loading colors");
    }
  };

  return (
    <Box textAlign="center">
      <Button variant="contained" onClick={loadColors}>
        Generate Colors
      </Button>
      {errorMessage && <p>{errorMessage}</p>}
      <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
        {colors.length > 0 ? (
          colors.map((color, index) => (
            <ColorSwatch key={index} color={color} />
          ))
        ) : (
          <p>No colors available</p>
        )}
      </Box>
    </Box>
  );
};

export default ColorDisplay;
