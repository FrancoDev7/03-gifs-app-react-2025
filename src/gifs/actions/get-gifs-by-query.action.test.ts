import { beforeEach, describe, expect, test, vi } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";
import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../API/giphy.api";
import { giphySearchReponseMOck } from "../../tests/mock/giphy.response.data";

describe("getGifsByQuery", () => {
  let mock = new AxiosMockAdapter(giphyApi);
  beforeEach(() => {
    // mock.reset();
    mock = new AxiosMockAdapter(giphyApi);
  });
  // test("should return a list of gifs", async () => {
  //   const gifs = await getGifsByQuery("goku");
  //   const [gif1] = gifs;

  //   expect(gif1).toStrictEqual({
  //     id: expect.any(String),
  //     height: expect.any(Number),
  //     width: expect.any(Number),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //   });
  // });

  test("should return a list of gifs", async () => {
    mock.onGet("/search").reply(200, giphySearchReponseMOck);
    const gifs = await getGifsByQuery("goku");

    expect(gifs.length).toBe(10);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe("string");
      expect(typeof gif.title).toBe("string");
      expect(typeof gif.url).toBe("string");
      expect(typeof gif.height).toBe("number");
      expect(typeof gif.width).toBe("number");
    });
  });

  test("should return a empty list of gifs if query is empty", async () => {
    // mock.onGet("/search").reply(200, { data: [] });
    mock.restore();
    const gifs = await getGifsByQuery("");

    expect(gifs.length).toBe(0);
  });

  test("should handle error when API returns an error", async () => {
    const mockErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    mock.onGet("/search").reply(400, {
      data: {
        message: "Bad Request",
      },
    });
    const gifs = await getGifsByQuery("goku");
    expect(gifs.length).toBe(0);
    expect(mockErrorSpy).toHaveBeenCalled();
    expect(mockErrorSpy).toHaveBeenCalledTimes(1);
    expect(mockErrorSpy).toHaveBeenCalledWith(expect.anything());
  });
});
