import React from 'react';
import Button from './Button';

function Calculator() {
  return (
    <div>
      <div className="mainCalculator">
        <div className="calculatorOutput">
          <Button value="0" />
        </div>
        <div className="Calc_btns">
          <div className="button-col">
            <Button value="AC" />
            <Button value="7" />
            <Button value="4" />
            <Button value="1" />
          </div>
          <div className="button-col">
            <Button value="+/-" />
            <Button value="8" />
            <Button value="5" />
            <Button value="2" />
          </div>
          <div className="button-col">
            <Button value="%" />
            <Button value="9" />
            <Button value="6" />
            <Button value="3" />
          </div>
          <div className="button-col last-col">
            <Button value="/" />
            <Button value="*" />
            <Button value="-" />
            <Button value="+" />
          </div>
        </div>
        <div className="button-row">
          <Button value="0" />
          <div className="pointrow">
            <Button value="." />
            <div className="last-col">
              <Button value="=" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
