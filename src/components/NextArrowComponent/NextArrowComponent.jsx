import React from 'react'
import UnderLineComponent from '../UnderLineComponent/UnderLineComponent';


const NextArrowComponent = ({className, ...props}) => {
  return (
    <div className={className} style={{display: "inline-flex", alignItems: "center", ...props
    }}>
      <UnderLineComponent 
        width="150px"
        height="2px"
        background="#A5A5A5"
      />
      <span style={{border: "10px solid",
        borderColor: "transparent transparent transparent #A5A5A5"}}>
      </span>
    </div>
  )
}

export default NextArrowComponent