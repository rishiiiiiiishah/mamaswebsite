import React from 'react';
import { data } from "./data";
import { Acordion } from "./Acordion";

const FAQS = () => {
  return (
    <div className='faqs'>
      <div>
        <h3 className='main-title'>FAQS</h3>
        <div className='main-title-underline'></div>
        {data.map((section, index) => (
          <Acordion key={index} section={section}/>
        ))}
      </div>
    </div>
  );
};

export default FAQS; // Exporting Main as default
