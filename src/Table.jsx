import React, { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

function Table({ value, search, data, setData }) {
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  const sortById = () => {
    setSorted({ sorted: "id", reversed: !sorted.reversed });
    const sortedData = data;
    sortedData.sort((a, b) => {
      if (sorted.reversed) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });

    setData(sortedData);
  };
  const sortByAge = () => {
    setSorted({ sorted: "age", reversed: !sorted.reversed });
    const sortedData = data;
    sortedData.sort((a, b) => {
      if (sorted.reversed) {
        return a.age - b.age;
      }
      return b.age - a.age;
    });

    setData(sortedData);
  };
  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const sortedData = data;
    sortedData.sort((a, b) => {
      if (sorted.reversed) {
        return b.name.localeCompare(a.name);
      }
      return a.name.localeCompare(b.name);
    });

    setData(sortedData);
  };
  const arrow = !sorted.reversed ? <>&uarr;</> : <>&darr;</>;
  let count = 0;
  return (
    <div className="mt-[2rem]">
      <table className="px-5 col">
        <thead>
          <TableHead
            arrow={arrow}
            sorted={sorted}
            sortByName={sortByName}
            sortByAge={sortByAge}
            sortById={sortById}
          />
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search === "" ? item : item.name.includes(search);
            })
            .map((el) => {
              const style = count % 2 == 0 ? "bg-[#f3ecf9]" : "";
              if (count > value) return;
              count++;

              return <TableBody style={style} el={el} />;
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
