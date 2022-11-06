import React, { useState } from 'react';
import './App.css';

import { InputBox, OutputBox, HoverRating, Score, Title } from './component/common'

function App() {
  const [input, set_input] = useState("please");
  const [output, set_output] = useState("output");

  const [get_val, set_get_val] = useState(false)

  return (
    <div className="App">
      <header>
        <Title />
      </header>
      <InputBox input={input}
        set_input={set_input}
        set_output={set_output}
        set_get_val={set_get_val}
      />
      {
        get_val ? (
          <h2>正在加载中......</h2>
        ) : (
          null
        )
      }
      <OutputBox output={output} />
      
      <div className='rating-place '>
        <HoverRating />
      </div>

    </div>
  );
}

export default App;
