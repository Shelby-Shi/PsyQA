import React from 'react'
import axios from 'axios'
import './InputBox.css'

axios.defaults.timeout = 360000;
const base_url = '/call?input=';

function InputBox({ input, set_input, set_output, set_get_val }) {


  function handleChange(e) {
    set_input(e.target.value);
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();

    set_get_val(true);
    axios.get(`${base_url}${input}`).then((data) => {
      set_output(data.data);
      set_get_val(false);
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }


  return (
    <form className='input-box' onSubmit={handleSubmit}>
      <label>
        <textarea className='input-box-inner' value={input} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}


export default InputBox;