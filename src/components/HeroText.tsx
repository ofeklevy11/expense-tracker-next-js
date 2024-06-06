import React from 'react'

const HeroText = ({title}: {title:string}) => {
  return (
    <h3 className='mt-4 text-xl'>{title}
    </h3>
  )
}

export default HeroText