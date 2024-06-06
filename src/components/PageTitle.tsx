import React from 'react'

const PageTitle = ({title} : {title:string}) => {
  return (
    <h1 className='text-5xl text-center text-pink-400/90'>{title}</h1>
  )
}

export default PageTitle