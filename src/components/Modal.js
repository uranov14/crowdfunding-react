import React, {useState} from 'react'
import closeModal from '../images/icon-close-modal.svg'
import closeModalActive from '../images/icon-close-modal-active.svg'
import toggleModal from '../toggleModal'
import PledgeNoReward from './PledgeNoReward'
import Bamboo from './Bamboo'
import Black from './Black'
import Mahogany from './Mahogany'

const Modal = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <>
        <main  id='modal' className='hidden absolute flex justify-center w-full'>
            <section className='bg-white p-5 my-28 md:my-44 rounded-lg border-2 mx-5 md:w-1/2'>
                <div className='flex justify-between'>
                    <div className='mb-3 md:my-4'>
                        <h4 className='font-bold text-xl mb-4 md:mb-0'>Back this project</h4>
                        <p className='parag my-2'>
                            Want to support us in bringing Mastercraft Bamboo 
                            Monitor Riser out in the world?
                        </p>
                    </div>

                    {!isHover ? 
                    <div>
                        <img src={closeModal} alt="" className='w-8 md:w-6 pt-2 md:pt-0 cursor-pointer'
                        onMouseOver={ () => setIsHover(!isHover) } 
                        onClick={ toggleModal } />
                    </div>
                    : 
                    <div>
                        <img src={closeModalActive} alt="" className='w-8 md:w-6 pt-2 md:pt-0 cursor-pointer'
                        onMouseOut={() => setIsHover(!isHover) }  
                        onClick={ toggleModal } />
                    </div>
                    }
                </div>

                <PledgeNoReward />
                <Bamboo />
                <Black />
                <Mahogany />
            </section>
        </main>
    </>
  )
}

export default Modal