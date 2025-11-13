
function Calculator({bill, setBill, setTip, number, setNumber }){
  
  
  function handleClick (value){
    setTip(value);
  }

  const handleBillChange = (e) => {
    const input = e.target.value;
    const onlyNumbers = input.replace(/[^0-9.]/g, ''); // Replace any non-numeric characters with empty string
    setBill(onlyNumbers);
  }

  const handleNumberChange = (e) => {
    const input = e.target.value;
    const onlyNumbers = input.replace(/[^0-9.]/g, ''); // Replace any non-numeric characters with empty string
    setNumber(onlyNumbers);
  }


    return(
      <div className="calculator">
        <div className="bill">
            <label>Bill</label><br/>
            <input type="text" placeholder='0' pattern="[0-9]" value={bill} onChange={handleBillChange} />
        </div>
        <div className="tip">
          <label>Select Tip %</label><br/>
          <div className='tipButton'>
            <div className='buttonrow'>
              <button className='btn' onClick={() => handleClick('5')}>5%</button>
              <button onClick={() => handleClick('10')}>10%</button>
              <button onClick={() => handleClick('15')}>15%</button>
              <button onClick={() => handleClick('20')}>20%</button>
              <button onClick={() => handleClick('25')}>25%</button>
              <button onClick={() => handleClick('50')}>50%</button>
            </div>
          </div>
        
        </div>
        <div className="people">
            <label>Number Of People</label><br/>
            <input type="text" pattern="[0-9]" placeholder='0' value={number} onChange={handleNumberChange}></input>
        </div>
      </div>
    );
}

export default Calculator;