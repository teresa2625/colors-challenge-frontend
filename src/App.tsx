import React from "react";
import ColorDisplay from "./components/ColorDisplay";
import { Container, Typography } from "@mui/material";
import AddStrategyForm from "./components/AddStrategyForm";

const App: React.FC = () => (
  <Container>
    <Typography variant="h3">Color Swatch Generator</Typography>
    <ColorDisplay />
    <Typography variant="h4">Color Strategies</Typography>
    <AddStrategyForm />
  </Container>
);

export default App;
