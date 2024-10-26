import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NextComponent = ({ fontSize, color }) => {
  return (
    <div>
      <Link to={"/"}>
        <FaChevronRight 
            style={{fontSize: fontSize, color: color}}
        />
      </Link>
    </div>
  )
}

export default NextComponent