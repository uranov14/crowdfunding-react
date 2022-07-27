import React from 'react'
import Bamboo from './Bamboo'
import Black from './Black'
import Mahogany from './Mahogany'

const Pledges = () => {
  return (
    <>
        <div className='data grid grid-cols-1 gap-5'>
            <Bamboo />
            <Black />
            <Mahogany />
        </div>
    </>
  )
}

export default Pledges