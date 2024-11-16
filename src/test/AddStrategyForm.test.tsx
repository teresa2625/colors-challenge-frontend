import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddStrategyForm from "../components/AddStrategyForm";
import { addColorStrategy } from "../api";

jest.mock("../api", () => ({
  addColorStrategy: jest.fn(),
}));

describe("AddStrategyForm", () => {
  test("submits the form with valid data", async () => {
    (addColorStrategy as jest.Mock).mockResolvedValueOnce({ data: "Success" });

    render(<AddStrategyForm />);

    fireEvent.change(screen.getByLabelText(/Strategy Name/i), {
      target: { value: "Test Strategy" },
    });

    const colorSpaceSelect = screen.getByLabelText(/Color Space/i);
    fireEvent.mouseDown(colorSpaceSelect);
    const colorSpaceOption = screen.getAllByText(/RGB/i);
    fireEvent.click(colorSpaceOption[1]);

    fireEvent.change(screen.getByLabelText(/Red Min/i), {
      target: { value: "1" },
    });
    fireEvent.change(screen.getByLabelText(/Red Max/i), {
      target: { value: "255" },
    });
    fireEvent.change(screen.getByLabelText(/Green Min/i), {
      target: { value: "1" },
    });
    fireEvent.change(screen.getByLabelText(/Green Max/i), {
      target: { value: "255" },
    });
    fireEvent.change(screen.getByLabelText(/Blue Min/i), {
      target: { value: "1" },
    });
    fireEvent.change(screen.getByLabelText(/Blue Max/i), {
      target: { value: "255" },
    });

    fireEvent.click(screen.getByText(/Add Strategy/i));

    await waitFor(() => {
      expect(addColorStrategy).toHaveBeenCalledWith({
        name: "Test Strategy",
        colorSpace: "RGB",
        rgbRange: {
          redMin: 1,
          redMax: 255,
          greenMin: 1,
          greenMax: 255,
          blueMin: 1,
          blueMax: 255,
        },
      });
    });
  });

  test("handles errors when submitting the form", async () => {
    (addColorStrategy as jest.Mock).mockRejectedValueOnce(
      new Error("Error adding strategy"),
    );

    render(<AddStrategyForm />);

    fireEvent.change(screen.getByLabelText(/Strategy Name/i), {
      target: { value: "Test Strategy" },
    });

    const colorSpaceSelect = screen.getByLabelText(/Color Space/i);
    fireEvent.mouseDown(colorSpaceSelect);
    const colorSpaceOption = await screen.findAllByText(/RGB/i);
    fireEvent.click(colorSpaceOption[1]);

    fireEvent.change(screen.getByLabelText(/Red Min/i), {
      target: { value: "0" },
    });
    fireEvent.change(screen.getByLabelText(/Red Max/i), {
      target: { value: "255" },
    });
    fireEvent.change(screen.getByLabelText(/Green Min/i), {
      target: { value: "0" },
    });
    fireEvent.change(screen.getByLabelText(/Green Max/i), {
      target: { value: "255" },
    });
    fireEvent.change(screen.getByLabelText(/Blue Min/i), {
      target: { value: "0" },
    });
    fireEvent.change(screen.getByLabelText(/Blue Max/i), {
      target: { value: "255" },
    });

    fireEvent.click(screen.getByText(/Add Strategy/i));

    await waitFor(() => {
      expect(screen.getByText(/Error adding strategy/i)).toBeInTheDocument();
    });
  });
});
