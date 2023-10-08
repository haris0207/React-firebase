import React from "react";

function TableBody({ style, el }) {
  return (
    <tr className={style} key={el.id}>
      <td>{el.id}</td>
      <td>{el.name}</td>
      <td>{el.age}</td>
      <td>{el.location}</td>
      <td>{el.job}</td>
    </tr>
  );
}

export default TableBody;
