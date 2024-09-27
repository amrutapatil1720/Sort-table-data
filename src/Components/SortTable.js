import TableComponent from "./TableComponent";

function SortableTable({ data, sortBy, sortOrder }) {
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

  return <TableComponent data={sortedData} />;
}
export default SortableTable;
