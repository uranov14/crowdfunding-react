import React, {useState} from 'react'
import data from '../data'
import toggleModal from '../toggleModal'

const Mahogany = () => {
  const card = data[2]
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <article key={card.id} className='mahogany mt-5 border-2 p-5 rounded-lg'>
            <div className='flex items-center'>
                <div className='circle'></div>
                <div className='md:flex items-center pl-4 cursor-pointer'>
                    <h3 className='font-bold text-2sm md:text-lg md:pr-4'
                    onClick={() => setIsOpen(!isOpen)}>
                        {card.title}
                    </h3>
                    <p className='desc font-bold'>{card.pledge}</p>
                </div>
                <div className='hidden md:relative left-20 md:flex items-center'>
                    <h2 className='font-bold text-3xl text-black'>
                        {card.left}
                    </h2>
                    <p className='ml-2'>left</p>
                </div>
            </div>
            <p className='parag my-5 md:pl-12 md:pr-5'>{card.desc}</p>
            <div className='flex items-center md:hidden'>
                <h2 className='font-bold text-3xl text-black'>
                    {card.left}
                </h2>
                <p className='ml-2'>left</p>
            </div>
            {isOpen && (
                <>
                    <hr className='mt-5 md:mt-0'/>
                    <section className='md:flex items-center justify-between mt-7'>
                        <p className='text-center pb-4 md:pb-0'>Enter your pledge</p>
                        <div className='flex items-center'>
                            <div className='flex border-2 px-2 py-3 md:p-3 rounded-full mr-3'>
                                <p>$ &nbsp;&nbsp;<span className='text-black font-bold'>200</span></p>
                                <input 
                                    type='number' 
                                    name="numberInput"
                                    className="w-10 mx-1"
                                />
                            </div>
        
                            <button className="btn py-3 px-6 md:mt-0 rounded-full text-white"
                            onClick={toggleModal}>
                                Continue
                            </button>
                        </div>
                    </section>
                </>
            )}
        </article>
    </>
  )
}

export default Mahogany