import React from 'react'
import UnderLineComponent from '../UnderLineComponent/UnderLineComponent'


const BackArrowComponent = ({onClick}) => {
    return (
        <div onClick={onClick} style={{display: "inline-flex", alignItems: "center"}}>
          <span style={{border: "10px solid", 
            borderColor: "transparent #A5A5A5 transparent transparent"}}>
          </span>
          <UnderLineComponent 
            width="200px"
            height="2px"
            background="#A5A5A5"
          />
        </div>
      )
}

export default BackArrowComponent