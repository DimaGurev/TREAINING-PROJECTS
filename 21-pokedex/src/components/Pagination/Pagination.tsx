import React from "react";
import style from "./Pagination.module.scss";

const Pagination = ({ activePage, setActivePage }: any) => {
  const Prev = () => {
    if (activePage !== 1) {
      setActivePage(activePage - 1);
    }
  };
  const Next = () => {
    if (activePage !== 3) {
      setActivePage(activePage + 1);
    }
  };
  return (
    <div className={style.pagination}>
      <button onClick={() => setActivePage(1)} disabled={activePage === 1}>
        First
      </button>
      <button onClick={Prev} disabled={activePage === 1}>
        Prev
      </button>
      <button
        className={activePage === 1 ? style.active : ""}
        onClick={() => setActivePage(1)}
      >
        1
      </button>
      <button
        className={activePage === 2 ? style.active : ""}
        onClick={() => setActivePage(2)}
      >
        2
      </button>
      <button
        className={activePage === 3 ? style.active : ""}
        onClick={() => setActivePage(3)}
      >
        3
      </button>
      <button onClick={Next} disabled={activePage === 3}>
        Next
      </button>
      <button onClick={() => setActivePage(3)} disabled={activePage === 3}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
