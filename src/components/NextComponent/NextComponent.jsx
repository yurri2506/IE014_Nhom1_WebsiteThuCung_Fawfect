import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NextComponent = ({ onClick, ...props }) => {
  return (
    <div>
      <FaChevronRight 
          style={{...props, cursor: "pointer"}}
          onClick={onClick}
      />
    </div>
  )
}

export default NextComponent