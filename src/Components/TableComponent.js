import formatDate from "./FormaterData";

function TableComponent({ data }) {
  return (
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{formatDate(item.dob)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TableComponent;
