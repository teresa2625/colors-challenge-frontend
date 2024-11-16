import axios from "axios";
import { fetchColors, addColorStrategy } from "./api";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("API functions", () => {
  describe("fetchColors", () => {
    it("should fetch color swatches and return data on success", async () => {
      const mockResponse = { data: { data: ["rgb", "hsl"] } };
      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await fetchColors();

      expect(mockedAxios.get).toHaveBeenCalledWith(
        "http://localhost:5000/api/colors",
      );
      expect(result).toEqual(["rgb", "hsl"]);
    });

    it("should throw an error when the API request fails", async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

      await expect(fetchColors()).rejects.toThrow("Network Error");
    });
  });

  describe("addColorStrategy", () => {
    it("should add a color strategy and return the message on success", async () => {
      const mockResponse = { data: { message: "Strategy added successfully" } };
      mockedAxios.post.mockResolvedValueOnce(mockResponse);

      const strategyData = { name: "Test Strategy", colorSpace: "RGB" };
      const result = await addColorStrategy(strategyData);

      expect(mockedAxios.post).toHaveBeenCalledWith(
        "http://localhost:5000/api/strategies",
        strategyData,
      );
      expect(result).toEqual("Strategy added successfully");
    });

    it("should throw an error when the API request fails", async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error("Network Error"));

      const strategyData = { name: "Test Strategy", colorSpace: "RGB" };
      await expect(addColorStrategy(strategyData)).rejects.toThrow(
        "Network Error",
      );
    });
  });
});
