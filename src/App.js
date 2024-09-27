import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TableComponent from "./Components/TableComponent";
import SortControls from "./Components/sortControls";
function App() {
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [data, setData] = useState([
    { id: 1, name: "John", dob: "1998-05-23" },
    { id: 2, name: "Jane", dob: "1993-11-10" },
    { id: 3, name: "Bob", dob: "2002-07-08" },
    { id: 4, name: "Samantha", dob: "1995-02-18" },
    { id: 5, name: "Peter", dob: "1990-12-01" },
    { id: 6, name: "Linda", dob: "1999-09-22" },
    { id: 7, name: "Tom", dob: "1986-04-14" },
    { id: 8, name: "Anna", dob: "1996-06-09" },
    { id: 9, name: "David", dob: "1989-03-27" },
    { id: 10, name: "Emily", dob: "2004-01-15" }
  ]);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    console.log("Sort By:", sortBy);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedData = data.sort((a, b) => {
    if (sortBy === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      const aDate = new Date(a.dob);
      const bDate = new Date(b.dob);
      return sortOrder === "asc" ? aDate - bDate : bDate - aDate;
    }
  });
  return (
    <div className="container">
      <SortControls
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortByChange={handleSortByChange}
        onSortOrderChange={handleSortOrderChange}
      />
      <TableComponent data={sortedData} />
    </div>
  );
}

export default App;
