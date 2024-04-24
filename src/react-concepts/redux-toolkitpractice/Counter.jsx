import React from 'react'
import { useSelector } from "react-redux";

const Counter = () => {
    const state = useSelector(state => state);
    console.log("This is the Store Object",state);
    return (
        <div className='d-flex flex-column'>
            <h1>Count is </h1>
            <button className='btn btn-outline-primary'>Increase</button>
            <button className='btn btn-outline-primary'>Increase</button>
            <button className='btn btn-outline-primary'>Increase</button>
        </div>
    )
}

export default Counter