import React from 'react'
import data from '../data'
import toggleModal from '../toggleModal'

const About = () => {
  const card1 = data[0]
  const card2 = data[1]
  const card3 = data[2]

  return (
    <>
        <section className='bg-white mt-7 mx-5 mb-20 px-6 py-10 rounded-lg border-2 
         lg:w-1/2 lg:mx-auto'>
            <div>
                <h3 className='font-bold text-xl'>About this project</h3>
                <p className='my-5'>
                    The Mastercraft Bamboo Monitor Riser is a sturdy 
                    and stylish platform that elevates your screen to a more 
                    comfortable viewing height. Placing your monitor 
                    at eye level has the potential to improve your posture and 
                    make you more comfortable while at work, helping you stay focused on 
                    the task at hand.
                </p>
                <p className='mt-7 mb-10'>
                    Featuring artisan craftsmanship, the simplicity of design creates 
                    extra desk space below your computer to allow notepads, pens, and USB sticks 
                    to be stored under the stand.
                </p>
            </div>

            {/* Fetch data */}
            <div className='data grid grid-cols-1 gap-5'>
                <article key={card1.id} className='border-2 p-6 rounded-lg'>
                    <div className='md:flex md:items-center md:justify-between'>
                        <h3 className='font-bold text-lg'>{card1.title}</h3>
                        <p className='desc font-bold'>{card1.pledge}</p>
                    </div>
                    <p className='my-5'>{card1.desc}</p>
                    <div className='md:flex justify-between'>
                        <div className='flex items-center'>
                            <h2 className='font-bold text-3xl text-black'>
                                {card1.left}
                            </h2>
                            <p className='ml-2'>left</p>
                        </div>
                        <button 
                        id='btn-bamboo'
                        className='btn py-2 px-6 mt-5 md:mt-0 rounded-full text-white font-bold md:px-12 md:h-12'
                        onClick={ () => { toggleModal(); window.scrollTo(0, -300); } }>
                            {card1.button}
                        </button>
                    </div>
                </article>
                <article key={card2.id} className='border-2 p-6 rounded-lg'>
                    <div className='md:flex md:items-center md:justify-between'>
                        <h3 className='font-bold text-lg'>{card2.title}</h3>
                        <p className='desc font-bold'>{card2.pledge}</p>
                    </div>
                    <p className='my-5'>{card2.desc}</p>
                    <div className='md:flex justify-between'>
                        <div className='flex items-center'>
                            <h2 className='font-bold text-3xl text-black'>
                                {card2.left}
                            </h2>
                            <p className='ml-2'>left</p>
                        </div>
                        <button 
                        id='btn-black'
                        className='btn py-2 px-6 mt-5 md:mt-0 rounded-full text-white font-bold md:px-12 md:h-12'
                        onClick={ () => { toggleModal(); window.scrollTo(0, -300); } }>
                            {card2.button}
                        </button>
                    </div>
                </article>
                <article key={card3.id} className='border-2 p-6 rounded-lg'>
                    <div className='md:flex md:items-center md:justify-between'>
                        <h3 className='font-bold text-lg'>{card3.title}</h3>
                        <p className='desc font-bold'>{card3.pledge}</p>
                    </div>
                    <p className='my-5'>{card3.desc}</p>
                    <div className='md:flex justify-between'>
                        <div className='flex items-center'>
                            <h2 className='font-bold text-3xl text-black'>
                                {card3.left}
                            </h2>
                            <p className='ml-2'>left</p>
                        </div>
                        <button 
                        id='btn-black'
                        className='btn py-2 px-6 mt-5 md:mt-0 rounded-full text-white font-bold md:px-12 md:h-12'
                        onClick={ () => { toggleModal(); window.scrollTo(0, -300); } }>
                            {card3.button}
                        </button>
                    </div>
                </article>
            </div>
        </section>
    </>
  )
}

export default About