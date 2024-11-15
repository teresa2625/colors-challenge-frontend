import React from "react";
import ColorDisplay from "./components/ColorDisplay";
import { Container } from "@mui/material";
import AddStrategyForm from "./components/AddStrategyForm";

const App: React.FC = () => (
  <Container>
    <h1>Color Swatch Generator</h1>
    <ColorDisplay />
    <h2>Color Strategies</h2>
    <AddStrategyForm />
  </Container>
);

export default App;
