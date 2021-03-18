import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }

  static getDerivedStateFromProps(props) {
    return { rate: props.rate };
  }

  calcRate = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    let amount = elements['amount'].value;
    let type = elements['type'].value;
    this.setState({ result: (amount / this.state.rate[type])})
  }

  render() {
    return (
      <div className="calculator">
        <h3> Калькулятор обмена</h3>
        <div className="block">
          <div>Хочу купить:</div>
          <div>
            <form className="form" onSubmit={this.calcRate}>
            <input type="number" defaultValue="100" step="10" name="amount" />
            <select name="type" id="">
              {Object.keys(this.props.rate).map((keyName) =>
                (<option key={keyName} defaultValue={keyName}>{keyName}</option>)
              )}
            </select>
            <button type="submit" defaultValue="calc">Рассчитать</button>
            </form>
          </div>
          <div>
            <h4>Понадобится:</h4>
            <ul className="calc-res">
              <li>{this.state.result.toFixed(2)} {this.props.base}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
