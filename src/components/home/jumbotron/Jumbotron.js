import React from 'react';
import './jumbotron.scss';
import data from '../../../data/jumbo.json';
import Prevue from '../prevue/Prevue';

function Jumbotron() {
  return (
    <>
      {data.map((el, index) => (
        <Prevue  {...el} key={index} />
      ))}
    </>
  );
}

export default Jumbotron;