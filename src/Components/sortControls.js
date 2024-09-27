function SortControls({
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange
}) {
  return (
    <div className="form-group">
      <label>
        <input
          type="radio"
          name="sort-by"
          value="name"
          checked={sortBy === "name"}
          onChange={onSortByChange}
          className="form-check-input"
        />
        Sort by Name
      </label>
      <label>
        <input
          type="radio"
          name="sort-by"
          value="dob"
          checked={sortBy === "dob"}
          onChange={onSortByChange}
          className="form-check-input"
        />
        Sort by Date of Birth
      </label>
      <div>
        <label>
          <input
            type="radio"
            name="sort-order"
            value="asc"
            checked={sortOrder === "asc"}
            onChange={onSortOrderChange}
          />
          Sort Ascending
        </label>
        <label>
          <input
            type="radio"
            name="sort-order"
            value="desc"
            checked={sortOrder === "desc"}
            onChange={onSortOrderChange}
          />
          Sort Descending
        </label>
      </div>
    </div>
  );
}
export default SortControls;
