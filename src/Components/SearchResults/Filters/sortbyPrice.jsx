function SortingByAmount({ filters }) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortByAmount"
          id="flexRadioDefault2"
          onChange={filters}
          value="highToLow"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          High to Low
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortByAmount"
          id="flexRadioDefault1"
          onChange={filters}
          value="lowToHigh"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Low to High
        </label>
      </div>
    </>
  );
}

export default SortingByAmount;
