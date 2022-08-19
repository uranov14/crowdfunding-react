import React, {useState} from 'react'
import data from '../data'
import toggleModal from '../toggleModal'

const Black = () => {
  const card = data[1]
  const [isOpen, setIsOpen] = useState(false)
  const activePledge = () => {
    const circle = document.getElementById('circle-active-black')
    circle.classList.toggle('select')
  }

  return (
    <>
        <article key={card.id} className='mt-5 border-2 p-6 rounded-lg'>
            <div className='flex items-center'>
                <div id='circle-active-black' className='circle'></div>
                <div className='md:flex items-center pl-4 cursor-pointer'>
                    <h3 className='title-pledge font-bold text-lg md:pr-4'
                    onClick={() => {setIsOpen(!isOpen); activePledge();}}>
                        {card.title}
                    </h3>
                    <p className='desc font-bold'>{card.pledge}</p>
                </div>
                <div className='hidden md:relative left-32 md:flex items-center'>
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
                        <p className='flex justify-center pb-4'>Enter your pledge</p>
                        <div className='flex items-center justify-between'>
                            <div className='border-2 p-3 rounded-full mr-3'>
                                <input 
                                    type='number' 
                                    name="numberInput"
                                    placeholder="$  75"
                                    className="w-12 mx-3"
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

export default Black