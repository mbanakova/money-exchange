import React from 'react';
import Calc from '../calc/Calc';
import './Rate.css';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '', // весь JSON
      'currencyRate': {},  // массив значений для выбранных валют
      'base': '' // Рассчётная валюта
    }
    this.currency = ['USD', 'EUR', 'GBP', 'CNY', 'HKD'];
    this.getRate();
  }

  getRate = () => {
    fetch('https://api.exchangeratesapi.io/latest?base=RUB')
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ date: data.date });
        this.setState({ base: data.base })
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        this.setState({ currencyRate: result })
      })
  }

  render() {
    return (
      <div className="rate">
        <h3> Курс валют на {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName) =>
          (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{(1 / this.state.currencyRate[keyName]).toFixed(2)} {this.state.base}</div>
            </div>
          )
          )}
        </div>
        <Calc rate={this.state.currencyRate} base={this.state.base} />
      </div>
    );
  }
}

export default Rate;
