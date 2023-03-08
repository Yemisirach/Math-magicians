import React, { useState } from 'react';
import Button from '../logic/Button';
import calculate from '../logic/Calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const { total, next, operation } = state;

  const clickHandler = (event) => {
    const eventData = event.target.textContent;
    const newState = calculate(state, eventData);
    setState(newState);
  };
  return (
    <div>
      <div className="mainCalculator">
        <div>
          <h2>Les&apos;s do some math</h2>
        </div>
        <div className="allCal">
          <div className="calculatorOutput">
            <div className="CalcInput">
              {total}
              {operation}
              {next}
            </div>
          </div>
          <div className="Calc_btns">
            <div className="button-col">
              <Button value="AC" clickCallback={clickHandler} />
              <Button value="7" clickCallback={clickHandler} />
              <Button value="4" clickCallback={clickHandler} />
              <Button value="1" clickCallback={clickHandler} />
            </div>
            <div className="button-col">
              <Button value="+/-" clickCallback={clickHandler} />
              <Button value="8" clickCallback={clickHandler} />
              <Button value="5" clickCallback={clickHandler} />
              <Button value="2" clickCallback={clickHandler} />
            </div>
            <div className="button-col">
              <Button value="%" clickCallback={clickHandler} />
              <Button value="9" clickCallback={clickHandler} />
              <Button value="6" clickCallback={clickHandler} />
              <Button value="3" clickCallback={clickHandler} />
            </div>
            <div className="button-col last-col">
              <Button value="÷" clickCallback={clickHandler} />
              <Button value="x" clickCallback={clickHandler} />
              <Button value="-" clickCallback={clickHandler} />
              <Button value="+" clickCallback={clickHandler} />
            </div>
          </div>
          <div className="button-row">
            <Button value="0" clickCallback={clickHandler} />
            <div className="pointrow">
              <Button value="." clickCallback={clickHandler} />
              <div className="last-col">
                <Button value="=" clickCallback={clickHandler} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
