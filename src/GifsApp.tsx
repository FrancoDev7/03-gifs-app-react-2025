import { GifList } from "./gifs/components/GifList";
import { PreviuosSearches } from "./gifs/components/PreviuosSearches";
import { useGifs } from "./gifs/hooks/useGifs";

import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const { gifs, handleSearch, handleTermClicked, previousTerms } = useGifs();
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

      <GifList gifs={gifs} />
    </>
  );
};
