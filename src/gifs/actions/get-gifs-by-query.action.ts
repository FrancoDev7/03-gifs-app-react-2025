import axios from "axios";
import type { GyphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await axios.get<GyphyResponse>(
    "https://api.giphy.com/v1/gifs/search",
    {
      params: {
        q: query,
        limit: 10,
        lang: "es",
        api_key: "wsMyIidgfqtVZq4wFaCiD7Pshnia9lzF",
      },
    }
  );

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));
};
