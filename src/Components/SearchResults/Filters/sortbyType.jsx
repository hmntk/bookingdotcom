function PaymentButtons({ filters }) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="paymentButton"
          id="flexRadioDefault2"
          value="all"
          onChange={filters}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          All modes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="paymentButton"
          id="flexRadioDefault1"
          value="cash"
          onChange={filters}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Cash only
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="paymentButton"
          id="flexRadioDefault1"
          value="online"
          onChange={filters}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Online Payments
        </label>
      </div>
    </>
  );
}

export default PaymentButtons;
