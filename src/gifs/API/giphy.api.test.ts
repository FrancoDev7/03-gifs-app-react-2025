import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe("giphyAPI", () => {
  test("debe de funcionar correctamente", () => {
    const params = giphyApi.defaults.params;
    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(params?.lang).toBe("es");
    expect(params?.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);
  });
});
