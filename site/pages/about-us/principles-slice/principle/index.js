import React from 'react';
import style from './style.css';


const Principle = ({ number, title, description }) => (
  <li className={style.container}>
    <div className={style.leftCol}>
      <div className={style.number}>{number}</div>
    </div>
    <div className={style.rightCol}>
      <h3 className={style.title}>{title}</h3>
      <div className={style.description}>{description}</div>
    </div>
  </li>
);

Principle.propTypes = {
  number: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
};

export default Principle;
