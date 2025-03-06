"use client";
import React from 'react';
import {useState} from 'react'

function Component() {
   const[divi,setDivi]= useState(false);
    function Handler(){
        setDivi(!divi);
    };
    return (
    <div className="flex flex-col">
        <button onClick={Handler}>-</button>
        {divi && <div className="ml-3">hi</div>}
        </div>
  )
}

export default Component
