import React from 'react'

const Backers = () => {
  return (
    <>
        <section className='bg-white mt-5 mx-5 px-5 py-10 rounded-lg lg:w-1/2 lg:mx-auto'>
            <div className='flex items-center flex-col md:flex-row'>
                <div className='flex flex-col items-center md:items-start md:pr-12 md:border-r md:mr-12'>
                    <h2 
                    id='total-pledge'
                    className='py-2 font-bold text-4xl'>
                        $89,914
                    </h2>
                    <p>of $100,000 backed</p>
                </div>
                <hr className='line md:hidden'/>
                <div className='flex items-center flex-col md:items-start md:w-1/4 md:border-r md:mr-12'>
                    <h2 
                    id='total-backers'
                    className='py-2 font-bold text-4xl'>
                        5,007
                    </h2>
                    <p>total backers</p>
                </div>
                <hr className='line md:hidden'/>
                <div className='flex items-center flex-col md:items-start'>
                    <h2 className='py-2 font-bold text-4xl'>56</h2>
                    <p>days left</p>
                </div>
            </div>
            {/* Progress Bar */}
            <div className='w-full bg-gray-200 mt-7 rounded-full'>
                <p className='btn w-9/12 py-2 rounded-full'></p>
            </div>
        </section>
    </>
  )
}

export default Backers