import React from 'react'

const Backers = () => {
  return (
    <>
        <section className='bg-white mt-10 mx-5 px-5 py-10 
        flex items-center justify-center flex-col 
        rounded-lg border-2 lg:w-1/2 lg:mx-auto'>
            <p>
                <span className='font-bold text-4xl'>$89,914</span>
                <br /> of $100,000 backed
            </p>
            <hr className='line'/>
            <p>
                <span className='font-bold text-4xl'>5,007</span>
                <br /> total backers
            </p>
            <hr className='line'/>
            <p>
                <span className='font-bold text-4xl'>56</span>
                <br /> days left
            </p>
            {/* Progress Bar */}
            <div className='w-9/12 bg-gray-200 mt-7 rounded-full'>
                <p className='btn w-9/12 py-2 rounded-full'></p>
            </div>
        </section>
    </>
  )
}

export default Backers