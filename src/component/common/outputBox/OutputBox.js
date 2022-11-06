import React from 'react';
import './OutputBox.css';

export default function OutputBox({output}) {

  return (
    <form className='output-box'>
      <label>
        <textarea className='output-box-inner' value={output} />
      </label>
    </form>
  );

}

