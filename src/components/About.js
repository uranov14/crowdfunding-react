import React from 'react'
import Pledgers from './Pledgers'

const About = () => {

  return (
    <>
        <section className='bg-white mt-5 mx-5 mb-20 px-6 py-10 rounded-lg border-2 
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
            <Pledgers />
        </section>
    </>
  )
}

export default About