import React from 'react'
import mastercraft from '../images/logo-mastercraft.svg'
import bookmark from '../images/icon-bookmark.svg'

const Section1 = () => {
  return (
    <>
        <section className='relative bg-white mx-5 px-5 pb-10 rounded-lg 
        -mt-20 border-2 lg:w-1/2 lg:mx-auto'>
            <img src={mastercraft} alt="" className='mastercraft-logo'/>
            <div className='pt-10 pb-3'>
                <h2 className='text-center font-bold text-xl pb-2'>Mastercraft Bamboo Monitor Riser</h2>
                <p className='text-center'>
                    A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                </p>
            </div>

            <div className='flex justify-between'>
                <button className='btn rounded-full py-1 px-6 text-white'>
                    Back this project
                </button>
                <img src={bookmark} alt=""/>
            </div>
        </section>
    </>
  )
}

export default Section1