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
        <h3>Please take a few moments to comment on our answers!</h3>
        <a href="https://www.wjx.cn/vm/OJMsMXn.aspx#" target="_blank" rel="noopener noreferrer">https://www.wjx.cn/vm/OJMsMXn.aspx#</a>
      </div>

    </div>
  );
}

export default App;
