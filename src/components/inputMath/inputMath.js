import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const InputMath = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const [inputValue , setInputValue] = useState('')
    const [inputValue2 , setInputValue2] = useState('')

    const inputsValue = (e) => {
        setInputValue(+e.target.value)
    }
    const inputsValue2 = (e) => {
        setInputValue2(+e.target.value)
    }

    const plusValue = () => {
        if (inputValue !== '' && inputValue2 !== '') {
            dispatch({
                type: "MATH_PLUS",
                payload: inputValue + inputValue2
            })
            setInputValue('')
            setInputValue2('')
        } else {
            alert('похоже вы оставили 1 инпут пустым')

        }
    }
    const minusValue = () => {

        if (inputValue !== '' && inputValue2 !== '') {
            dispatch({
                type: "MATH_PLUS",
                payload: inputValue - inputValue2
            })
            setInputValue('')
            setInputValue2('')
        } else {
            alert('похоже вы оставили 1 инпут пустым')
        }
    }
    const divideValue = () => {
        if (inputValue !== '' && inputValue2 !== '') {
            const result =  (inputValue / inputValue2).toFixed(2)
            dispatch({
                type: "MATH_DIVIDE",
                payload: parseFloat(result)
            })
            setInputValue('')
            setInputValue2('')
        } else {
            alert('похоже вы оставили 1 инпут пустым')
        }
    }
    const multiplicationValue = () => {
        if (inputValue !== '' && inputValue2 !== '') {
            dispatch({
                type: "MATH_MULTIPLICATION",
                payload: inputValue * inputValue2
            })
            setInputValue('')
            setInputValue2('')
        } else {
            alert('похоже вы оставили 1 инпут пустым')
        }

    }

    return (
      <div className='div'>
          <div className='input_flex'>
              <input type="number" className="input"  onChange={inputsValue} value={inputValue} />
              <input type="number" className="input"  onChange={inputsValue2} value={inputValue2} />
          </div>
          <div className='btn_flex'>
              <button className="btn" onClick={plusValue}>+</button>
              <button className="btn" onClick={minusValue}>-</button>
              <button className="btn" onClick={divideValue}>/</button>
              <button className="btn" onClick={multiplicationValue}>&times;</button>
          </div>
          <h1>{count}</h1>
      </div>
    );
};

export default InputMath;