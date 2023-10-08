import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";

import { getDatabase, ref, onValue } from "firebase/database";
import Table from "./Table";

function App() {
  const [employeeList, setEmployeeList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [optionValue, setOptionValue] = useState(15);
  const searchHandle = (e) => {
    setSearchPhrase(e.target.value);
  };
  console.log(optionValue);
  useEffect(() => {
    let tempData = [];
    const dbRef = ref(db, "emplist");
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((snapshot) => {
        tempData.push(snapshot.val());
      });
      const data = snapshot.val();
      setEmployeeList(tempData);
    });
  }, []);
  if (employeeList.length <= 0) return <>loading...</>;
  return (
    <div className="bg-stone-100 rounded-[0.5rem] my-2 md:w-[60%] md:mx-auto">
      <div className="flex justify-between px-2 pt-2">
        <h2>Employee Data Table</h2>
        <input
          className="rounded-[0.3rem] px-7 border-2 border-[#612c86]"
          type="text"
          placeholder="search"
          value={searchPhrase}
          onChange={searchHandle}
        />

        <div>
          <label>Select number of rows</label>
          <select
            className="px-1 rounded-[0.2rem] ml-1 border border-[#612c86]"
            onChange={(e) => setOptionValue(e.target.value)}
            defaultValue={optionValue}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>5</option>
            <option>7</option>
            <option>10</option>
            <option>11</option>
            <option>13</option>
            <option>15</option>
          </select>
        </div>
      </div>
      <Table
        value={optionValue}
        search={searchPhrase}
        data={employeeList}
        setData={setEmployeeList}
      />
    </div>
  );
}

export default App;
