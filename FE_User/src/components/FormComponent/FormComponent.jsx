import React from 'react'

const FormComponent = ({children, className, ...props}) => {
  return (
    <div className={className} style={{...props}}>
      {children}
    </div>
  )
}

export default FormComponent