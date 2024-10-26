import React from 'react'
import { IoIosArrowBack } from "react-icons/io"
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const BackComponent = ({ fontSize, color }) => {
  return (
    <div>
        <Link to={"/"}>
          <FaChevronLeft 
              style={{fontSize: fontSize, color: color}}
          />
        </Link>
    </div>
  )
}

export default BackComponent