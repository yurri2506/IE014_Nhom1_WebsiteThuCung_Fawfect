import React from 'react'

const UnderLineComponent = ({ width, height, background,
  display = "block", 
  borderRadisus = "none" }) => {
  return (
    <div style={{
      width: width, 
      height: height, 
      backgroundColor: background,
      display: display,
      borderRadius: borderRadisus
    }}>
    </div>
  )
}

export default UnderLineComponent