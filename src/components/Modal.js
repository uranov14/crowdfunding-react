import React from 'react'
import Pledges from './Pledges'
import closeModal from '../images/icon-close-modal.svg'
import toggleModal from '../toggleModal'

const Modal = () => {
  return (
    <>
        <section id='modal' className='hidden bg-white mx-5 mt-5 p-5 rounded-lg border-2'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='font-bold text-xl'>Back this project</h4>
                    <p className='my-5'>
                        Want to support us in bringing Mastercraft Bamboo 
                        Monitor Riser out in the world?
                    </p>
                </div>
                <div className='mt-2'>
                    <img src={closeModal} alt="" className='w-6 cursor-pointer' 
                    onClick={ toggleModal }/>
                </div>
            </div>
            <Pledges />
        </section>
    </>
  )
}

export default Modal