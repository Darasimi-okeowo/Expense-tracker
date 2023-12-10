import PropTypes from "prop-types";
const Transaction = ({ transaction: { text, amount } }) => {
  const sign = amount < 0 ? "-" : "+";
  return (
    <>
      <li className={amount < 0 ? "minus" : "plus"}>
        {text}{" "}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className="delete-btn">x</button>
      </li>
    </>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Transaction;
