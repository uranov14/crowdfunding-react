import React, {useState} from 'react'
import data from '../data'

const Black = () => {
  const card = data[1]
  const [isOpen, setIsOpen] = useState(false)

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
                className='btn py-2 px-6 rounded-full text-white md:px-12 md:h-12' 
                onClick={() => setIsOpen(!isOpen)}>
                    {card.button}
                </button>
            </div>
            {isOpen && (
                <section>
                    <hr />
                    <p>Enter your pledge</p>
                    <div>
                        <input 
                            type='number' 
                            name="numberInput"
                            placeholder="$  25"
                            className="pledge"
                        />
                        <button className="continueButton">
                            Continue
                        </button>
                    </div>
                </section>
            )}
        </article>
    </>
  )
}

export default Black