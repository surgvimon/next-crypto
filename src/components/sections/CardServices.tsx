import React from 'react'

const CardServices = ({children, className, onClick}:any) => {
  return (
    <>
        <article className={`card ${className}`} onClick={onClick}>
            {children}
        </article>

    </>
  )
}

export default CardServices
