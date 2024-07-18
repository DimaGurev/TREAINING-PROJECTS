import React from "react";

type typeProps = { next: () => void; prev: () => void; page: number };

const Pagination: React.FC<typeProps> = ({ next, prev, page }) => {
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={next}>
        Prev
      </button>
      <button>{page}</button>
      <button onClick={prev}>Next</button>
    </div>
  );
};

export default Pagination;
