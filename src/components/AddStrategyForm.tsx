import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { addColorStrategy } from "../api";

const AddStrategyForm = () => {
  const [strategyName, setStrategyName] = useState("");
  const [colorSpace, setColorSpace] = useState("");
  const [redMin, setRedMin] = useState(0);
  const [redMax, setRedMax] = useState(0);
  const [greenMin, setGreenMin] = useState(0);
  const [greenMax, setGreenMax] = useState(0);
  const [blueMin, setBlueMin] = useState(0);
  const [blueMax, setBlueMax] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const strategyData = {
      name: strategyName,
      colorSpace,
      rgbRange: { redMin, redMax, greenMin, greenMax, blueMin, blueMax },
    };

    try {
      const response = await addColorStrategy(strategyData);
      console.log("Strategy added:", response);
    } catch (error) {
      setErrorMessage("Error adding strategy");
      console.error("Error adding strategy:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h5">Add Color Strategy</Typography>
      <TextField
        label="Strategy Name"
        value={strategyName}
        onChange={(e) => setStrategyName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Color Space (e.g., RGB, HSL)"
        value={colorSpace}
        onChange={(e) => setColorSpace(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Typography>RGB Range</Typography>
      <TextField
        label="Red Min"
        type="number"
        value={redMin}
        onChange={(e) => setRedMin(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Red Max"
        type="number"
        value={redMax}
        onChange={(e) => setRedMax(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Green Min"
        type="number"
        value={greenMin}
        onChange={(e) => setGreenMin(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Green Max"
        type="number"
        value={greenMax}
        onChange={(e) => setGreenMax(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Blue Min"
        type="number"
        value={blueMin}
        onChange={(e) => setBlueMin(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Blue Max"
        type="number"
        value={blueMax}
        onChange={(e) => setBlueMax(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Strategy
      </Button>
    </Box>
  );
};

export default AddStrategyForm;
