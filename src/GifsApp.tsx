import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviuosSearches } from "./gifs/components/PreviuosSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));
    const gifs = await getGifsByQuery(query);
    console.log({ gifs });
  };

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      <PreviuosSearches
        searches={previousTerms}
        onLabelClick={handleTermClicked}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};
