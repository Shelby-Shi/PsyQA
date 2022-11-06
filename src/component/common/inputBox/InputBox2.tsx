import React from 'react'
import './InputBox.css'



function InputBox() {
  return (
    <div>
        <form>
            <label>
                <input className='input-box' type="text" name="name" />
            </label>
            <input type="submit" value="提交" />
        </form>
    </div>
  )
}

export default InputBox
