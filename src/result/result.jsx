import { useEffect } from "react";

function Result({ bill, setBill, tip, setTip, number, setNumber, amount, setAmount, total, setTotal }) {

  useEffect(() => {
    const tipValue = parseFloat(tip) / 100;
    const result = (bill * tipValue) / number;
    setAmount(result.toFixed(2));

    const totalr = Number(bill / number) + Number(result);
    setTotal(totalr.toFixed(2));
  }, [tip, bill, number, setAmount, setTotal]);

  function resetButton() {
    setBill('');
    setNumber('1');
    setTip('5');
    setAmount('0.00');
    setTotal('0.00');
  }

  return (
    <div className="result">
      <div className="TipAmount">
        <div>
          <label>Tip Amount</label>
          <h6>/ person</h6>
        </div>
        <div>
          <span>{amount}</span>
        </div>
      </div>
      <div className="Total">
        <div>
          <label>Total</label>
          <h6>/ person</h6>
        </div>
        <div>
          <span>{total}</span>
        </div>
      </div>
      <button className="reset" onClick={resetButton}>RESET</button>
    </div>
  );
}

export default Result;
