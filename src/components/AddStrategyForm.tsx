import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
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
    } finally {
      setStrategyName("");
      setColorSpace("");
      setRedMin(0);
      setRedMax(0);
      setGreenMin(0);
      setGreenMax(0);
      setBlueMin(0);
      setBlueMax(0);
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color Space</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={colorSpace}
          label="Color Space"
          onChange={(e) => setColorSpace(e.target.value)}
        >
          <MenuItem value={"RGB"}>RGB</MenuItem>
          <MenuItem value={"HSL"}>HSL</MenuItem>
        </Select>
      </FormControl>
      <Typography>RGB Range</Typography>
      <TextField
        label="Red Min"
        value={redMin}
        onChange={(e) => setRedMin(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Red Max"
        value={redMax}
        onChange={(e) => setRedMax(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Green Min"
        value={greenMin}
        onChange={(e) => setGreenMin(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Green Max"
        value={greenMax}
        onChange={(e) => setGreenMax(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Blue Min"
        value={blueMin}
        onChange={(e) => setBlueMin(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Blue Max"
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
