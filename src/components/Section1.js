import React, {useState} from 'react'
import mastercraft from '../images/logo-mastercraft.svg'
import bookmark from '../images/icon-bookmark.svg'
import bookmarkActive from '../images/icon-bookmark-active.svg'
import toggleModal from '../toggleModal'

const Section1 = () => {
  const [isMark, setIsMark] = useState(false)
  
  return (
    <>
        <section className='relative bg-white mx-5 px-5 pb-10 rounded-lg 
        -mt-12 md:-mt-24 border-2 lg:w-1/2 lg:mx-auto'>
            <img src={mastercraft} alt="" className='mastercraft-logo'/>
            <div className='pt-12 pb-3'>
                <h2 className='title text-center pb-2'>
                    Mastercraft Bamboo Monitor Riser
                </h2>
                <p className='text-center'>
                    A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                </p>
            </div>

            <div className='flex justify-between pt-5'>
                <button className='btn rounded-full py-1 px-12 text-white font-bold' 
                onClick={ toggleModal }>
                    Back this project
                </button>
                {!isMark ? (
                <div className='flex items-center bg-gray-200 rounded-full cursor-pointer' onClick={() => setIsMark(!isMark)}>
                    <img src={bookmark} alt=""/>
                    <span className='hidden md:flex text-gray-500 font-bold px-4'>
                        Bookmark
                    </span>
                </div>
                ) : (
                <div className='flex items-center bg-gray-200 rounded-full cursor-pointer' onClick={() => setIsMark(!isMark)}>
                    <img src={bookmarkActive} alt=""/>
                    <span className='hidden md:flex text-green-700 font-bold px-4'>
                        Bookmarked
                    </span>
                </div>
                )}
            </div>
        </section>
    </>
  )
}

export default Section1