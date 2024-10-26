import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
const BackArrowComponent = ({ fontSize, color }) => {
  return (
    <div>
        <AiOutlineArrowLeft 
            style={{fontSize: fontSize, color: color}}
        />
    </div>
  )
}

export default BackArrowComponent