import React from "react";

function TableHead({ arrow, sorted, sortByName, sortByAge, sortById }) {
  return (
    <tr>
      <th className="flex cursor-pointer" onClick={sortById}>
        id{sorted.sorted === "id" ? <span> {arrow}</span> : null}
      </th>
      <th className=" cursor-pointer" onClick={sortByName}>
        Name{sorted.sorted === "name" ? <span> {arrow}</span> : null}
      </th>
      <th className="flex  cursor-pointer" onClick={sortByAge}>
        Age
        {sorted.sorted === "age" ? <span> {arrow}</span> : null}
      </th>
      <th>Location</th>
      <th>Job</th>
    </tr>
  );
}

export default TableHead;
