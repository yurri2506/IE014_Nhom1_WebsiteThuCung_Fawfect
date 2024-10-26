import React from 'react'

const FormComponent = ({children, ...props}) => {
  return (
    <div style={{...props}}>
      {children}
    </div>
  )
}

export default FormComponent