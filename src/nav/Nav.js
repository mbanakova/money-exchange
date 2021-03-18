import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
  render() {
    let pages = [
      {
        en: 'Main',
        ru: 'Главная',
        src: '/'
      },
      {
        en: 'About',
        ru: 'О нас',
        src: '/about'
      },
      {
        en: 'Shops',
        ru: 'Пункты обмена',
        src: '/shops'
      },
      {
        en: 'Stocks',
        ru: 'Биржи',
        src: '/stocks'
      },
      {
        en: 'Quotes',
        ru: 'Котировки',
        src: '/quotes'
      },
      {
        en: 'Crypto',
        ru: 'Криптовалюта',
        src: '/crypto'
      }
    ]

    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul className="nav__list">
              {pages.map(elem => {
                return <Link to={elem.src} key={elem.en}>
                  <li className="nav__style" key={elem.en}>
                    <span className="nav__text">{elem.ru}</span>
                    </li>
                </Link>
              })}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
