import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders texts", () => {
  render(<App />);
  expect(screen.getByText("Color Swatch Generator")).toBeInTheDocument();
  expect(screen.getByText("Color Strategies")).toBeInTheDocument();
});
