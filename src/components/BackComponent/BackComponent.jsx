import React from 'react'
import { IoIosArrowBack } from "react-icons/io"
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const BackComponent = ({ onClick, ...props }) => {
  return (
    <div>
      <FaChevronLeft 
          style={{...props, cursor: "pointer"}}
          onClick={onClick}
      />
    </div>
  )
}

export default BackComponent