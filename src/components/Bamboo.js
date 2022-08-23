import React, {useState} from 'react'
import data from '../data'
import toggleModal from '../toggleModal'
import toggleFinishModal from '../toggleFinishModal'

const Bamboo = () => {
  let [left, setLeft] = useState(101)
  const card = data[0]
  const [isOpen, setIsOpen] = useState(false)
  const activePledge = () => {
    const circle = document.getElementById('circle-active-bamboo')
    circle.classList.toggle('select')
  }

  return (
    <>
        <article key={card.id} className='mt-5 border-2 p-6 rounded-lg'>
            <div className='flex items-center'>
                <div id='circle-active-bamboo' className='circle'></div>
                <div className='md:flex items-center pl-4 cursor-pointer'>
                    <h3 className='title-pledge font-bold text-lg md:pr-4'
                    onClick={() => {setIsOpen(!isOpen); activePledge();}}>
                        {card.title}
                    </h3>
                    <p className='desc font-bold'>{card.pledge}</p>
                </div>
                <div className='hidden md:relative left-40 md:flex items-center'>
                    <h2 className='font-bold text-3xl text-black'>
                        {left}
                    </h2>
                    <p className='ml-2'>left</p>
                </div>
            </div>
            <p className='parag my-5 md:pl-12'>{card.desc}</p>
            <div className='flex items-center md:hidden'>
                <h2 className='font-bold text-3xl text-black'>
                    {left}
                </h2>
                <p className='ml-2'>left</p>
            </div>

            {isOpen && (
                <>
                    <hr className='mt-5 md:mt-0'/>
                    <section className='md:flex items-center justify-between mt-7'>
                        <p className='flex justify-center pb-4 md:pb-0'>Enter your pledge</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex border-2 px-2 py-3 md:p-3 rounded-full mr-3'>
                                <p>$ &nbsp;&nbsp;<span className='text-black font-bold'>25</span></p>
                                <input
                                    id='pledge-bamboo' 
                                    type='number' 
                                    name="numberInput"
                                    className="w-10 mx-1"
                                />
                            </div>
        
                            <button 
                            className="btn py-3 px-6 md:mt-0 rounded-full text-white"
                            onClick={ () => {toggleModal(); toggleFinishModal(); setLeft(--left);} }>
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

export default Bamboo