import React, {useState} from 'react'
import toggleModal from '../toggleModal'
import toggleFinishModal from '../toggleFinishModal'

const PledgeNoReward = () => {
  const [isOpen, setIsOpen] = useState(false)
  const activePledge = () => {
    const circle = document.getElementById('circle-active-noReward')
    circle.classList.toggle('select')
  }

  return (
    <>
      <article className='border-2 p-6 rounded-lg'>
        <div className='flex items-center'>
          <div id='circle-active-noReward' className='circle'></div>
          <div className='pl-4 cursor-pointer'>
            <h3 className='title-pledge font-bold'
            onClick={() => {setIsOpen(!isOpen); activePledge();}}>
              Pledge with no reward
            </h3>
          </div>
        </div>
        <p className='parag my-5 md:pl-12'>
          Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
        </p>

        {isOpen && (
          <>
            <hr className='mt-5 md:mt-0'/>
            <section className='md:flex items-center justify-between mt-7'>
                <p className='flex justify-center pb-4 md:pb-0'>Enter your pledge</p>
                <div className='flex items-center justify-between'>
                    <div className='border-2 p-3 rounded-full mr-3'>
                        <span>$</span>
                        <input 
                            id='pledge-no-reward'
                            type='number' 
                            name="numberInput"
                            className="w-12 mx-3"
                        />
                    </div>

                    <button className="btn py-3 px-6 md:mt-0 rounded-full text-white"
                    onClick={ () => {toggleModal(); toggleFinishModal(); window.scrollTo(0, 300)} }>
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

export default PledgeNoReward