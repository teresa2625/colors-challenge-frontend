import React from "react";
import ColorDisplay from "./components/ColorDisplay";
import { Container } from "@mui/material";

const App: React.FC = () => (
  <Container>
    <h1>Color Swatch Generator</h1>
    <ColorDisplay />
  </Container>
);

export default App;
