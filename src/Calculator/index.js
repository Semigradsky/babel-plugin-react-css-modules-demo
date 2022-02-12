import './index.module.css'

function Calculator({ number1, number2 }) {
  const expression = `${number1} + ${number2} = ${number1 + number2}`

  return (
    <div styleName="calculator">
      {expression}
    </div>
  );
}

export default Calculator;
