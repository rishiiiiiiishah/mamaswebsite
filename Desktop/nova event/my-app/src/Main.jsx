import React from 'react';
import { data } from "./data";
import { Acordion } from "./Acordion";

const Main = () => {
  return (
    <div>
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

export default Main; // Exporting Main as default
