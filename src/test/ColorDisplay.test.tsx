import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ColorDisplay from "../components/ColorDisplay";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ColorDisplay", () => {
  test("renders color swatches and generates new colors", async () => {
    const mockColors = [
      { type: "rgb", red: 255, green: 0, blue: 0 },
      { type: "hsl", hue: 360, saturation: 100, lightness: 50 },
      { type: "rgb", red: 0, green: 255, blue: 0 },
      { type: "hsl", hue: 120, saturation: 100, lightness: 50 },
      { type: "rgb", red: 0, green: 0, blue: 255 },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { data: mockColors } });

    render(<ColorDisplay />);

    fireEvent.click(screen.getByText(/Generate Colors/i));

    await waitFor(() => {
      const swatches = screen.getAllByTestId("color-swatch");
      expect(swatches).toHaveLength(5);
    });
  });

  test("handles errors when fetching colors", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    render(<ColorDisplay />);

    fireEvent.click(screen.getByText(/Generate Colors/i));

    await waitFor(() => {
      expect(screen.getByText(/Error loading colors/i)).toBeInTheDocument();
    });
  });
});
