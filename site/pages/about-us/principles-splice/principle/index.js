import React from 'react';
import style from './style.css';


const Principle = ({ number, title, description }) => (
  <div className={style.container}>
    <div className={style.leftCol}>
      <div className={style.number}>{number}</div>
    </div>
    <div className={style.rightCol}>
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
    </div>
  </div>
);

Principle.propTypes = {
  number: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
};

export default Principle;
