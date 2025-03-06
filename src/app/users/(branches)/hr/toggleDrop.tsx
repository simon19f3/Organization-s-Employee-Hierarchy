"use client";
import React from 'react'
import { useState } from 'react';
function toggleDrop() {
   const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
    <div>
        tr
    </div>
  )
}

export default toggleDrop;