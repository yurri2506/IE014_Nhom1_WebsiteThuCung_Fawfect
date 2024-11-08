import React from 'react'

const UnderLineComponent = ({ width, height, background, margin = "0",
  display = "block", 
  borderRadisus = "none" }) => {
  return (
    <div style={{
      width: width, 
      height: height, 
      backgroundColor: background,
      display: display,
      borderRadius: borderRadisus,
      margin: margin
    }}>
    </div>
  )
}

export default UnderLineComponent