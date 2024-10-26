import React from 'react'

const UnderLineComponent = ({ width, height, background, borderRadisus = "none" }) => {
  return (
    <div style={{
      width: width, 
      height: height, 
      backgroundColor: background,
      borderRadius: borderRadisus
    }}>
    </div>
  )
}

export default UnderLineComponent