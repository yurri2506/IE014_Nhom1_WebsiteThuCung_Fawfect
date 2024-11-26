import React from 'react'

const UnderLineComponent = ({ className, width, height, background, margin = "0",
  display = "block", 
  borderRadisus = "none" }) => {
  return (
    <div className={className} style={{
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