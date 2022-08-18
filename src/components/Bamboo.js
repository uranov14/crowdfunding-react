import React from 'react'
import data from '../data'

const Bamboo = () => {
  const card = data[0]

  return (
    <>
        <article key={card.id} className='border-2 p-6 rounded-lg'>
            <div className='md:flex md:items-center md:justify-between'>
                <h3 className='font-bold text-lg'>{card.title}</h3>
                <p className='desc font-bold'>{card.pledge}</p>
            </div>
            <p className='my-5'>{card.desc}</p>
            <div className='md:flex justify-between'>
                <div className='flex items-center'>
                    <h2 className='font-bold text-3xl text-black'>
                        {card.left}
                    </h2>
                    <p className='ml-2'>left</p>
                </div>
                <button 
                id='btn-bamboo'
                className='btn py-2 px-6 rounded-full text-white font-bold md:px-12 md:h-12'>
                    {card.button}
                </button>
            </div>
        </article>
    </>
  )
}

export default Bamboo