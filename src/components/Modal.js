import React, {useState} from 'react'
import Pledges from './Pledges'
import closeModal from '../images/icon-close-modal.svg'
import closeModalActive from '../images/icon-close-modal-active.svg'
import toggleModal from '../toggleModal'

const Modal = () => {
    const [isHover, setIsHover] = useState(false)

  return (
    <>
        <main  id='modal' className='hidden absolute flex justify-center w-full'>
            <section className='bg-white p-5 my-44 rounded-lg border-2 w-1/2'>
                <div className='flex justify-between'>
                    <div className='my-4'>
                        <h4 className='font-bold text-xl'>Back this project</h4>
                        <p className='my-2'>
                            Want to support us in bringing Mastercraft Bamboo 
                            Monitor Riser out in the world?
                        </p>
                    </div>

                    {!isHover ? 
                    <div>
                        <img src={closeModal} alt="" className='w-6 cursor-pointer'
                        onMouseOver={ () => setIsHover(!isHover) } 
                        onClick={ toggleModal } />
                    </div>
                    : 
                    <div>
                        <img src={closeModalActive} alt="" className='w-6 cursor-pointer'
                        onMouseOut={() => setIsHover(!isHover) }  
                        onClick={ toggleModal } />
                    </div>
                    }
                </div>
                <Pledges />
            </section>
        </main>
    </>
  )
}

export default Modal