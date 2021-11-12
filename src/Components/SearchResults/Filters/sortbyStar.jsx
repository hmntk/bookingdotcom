function SortByStars({ filters }) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortByStars"
          id="flexRadioDefault2"
          value="above-four"
          onChange={filters}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Above 4 Star
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortByStars"
          id="flexRadioDefault1"
          value="above-three"
          onChange={filters}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Above 3 Star
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortByStars"
          id="flexRadioDefault1"
          value="above-two"
          onChange={filters}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Above 2 Star
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="sortByStars"
          id="flexRadioDefault1"
          value="above-one"
          onChange={filters}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Above 1 Star
        </label>
      </div>
    </>
  );
}

export default SortByStars;
