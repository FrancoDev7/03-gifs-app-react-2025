import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviuosSearches } from "./gifs/components/PreviuosSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string) => {
    console.log({ query });
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
