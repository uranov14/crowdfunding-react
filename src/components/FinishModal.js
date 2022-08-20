import React from 'react'
import iconCheck from '../images/icon-check.svg'
import toggleFinishModal from '../toggleFinishModal'

const FinishModal = () => {
  return (
    <>
        <main  id='finishModal' className='hidden absolute flex justify-center w-full'>
            <section className='finish relative top-20 bg-white p-5 rounded-lg border-2 mx-5 my-96'>
                <div className='flex flex-col items-center py-7'>
                    <img src={iconCheck} alt="" />
                    <div className='flex flex-col items-center mb-3 md:my-4'>
                        <h4 className='font-bold text-xl mt-8 mb-3'>Thanks for your support!</h4>
                        <p className='parag text-center mb-3 px-9'>
                        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. 
                        You will get an email once our campaign is completed.
                        </p>
                    </div>
                    <button 
                    id='btnGotIt'
                    className="btn py-3 px-6 mt-4 mb-2 rounded-full text-white"
                    onClick={ toggleFinishModal }>
                        Got it!
                    </button>
                </div>
            </section>
        </main>
    </>
  )
}

export default FinishModal