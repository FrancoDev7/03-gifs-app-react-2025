import type { FC } from "react";

interface Props {
  searches: string[];

  onLabelClick: (term: string) => void;
}

export const PreviuosSearches: FC<Props> = ({ searches, onLabelClick }) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li key={term} onClick={() => onLabelClick(term)}>
            Goku
          </li>
        ))}
      </ul>
    </div>
  );
};
