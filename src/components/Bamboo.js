import React from 'react'
import data from '../data'

const Bamboo = () => {
  const card = data[0]

  return (
    <>
        <article key={card.id} className='border-2 p-5 rounded-lg'>
            <h3 className='font-bold text-lg'>{card.title}</h3>
            <p className='desc font-bold'>{card.pledge}</p>
            <p className='my-5'>{card.desc}</p>
            <div className='md:flex justify-between'>
                <p className='font-bold text-3xl flex items-center mb-5'>
                    {card.left} 
                    <span className='font-light text-base text-gray-600 ml-2'>
                        left
                    </span>
                </p>
                <button 
                id='btn-bamboo'
                className='btn py-2 px-6 rounded-full text-white md:px-12 md:h-12'>
                    {card.button}
                </button>
            </div>
        </article>
    </>
  )
}

export default Bamboo