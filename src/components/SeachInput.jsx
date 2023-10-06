import React from 'react'
import { lang } from '../utils/Constants'
import { useSelector } from 'react-redux'
const SeachInput = () => {
    const {language}=useSelector(state=>state.lang)
    return (
        <div>
            <div className='pt-[10%] flex justify-center'>

                <form className='bg-black w-1/2 grid grid-cols-12 p-2 h-18'>
                    <input type='text'
                        className='col-span-9 rounded-lg p-2 text-lg text-black'
                        placeholder={lang[language]?.placeholderdata}
                        autofocus>
                    </input>
                    <button className='bg-red-600 col-span-3 ml-3 rounded-lg hover:bg-orange-600 text-lg text-white'>
                    {lang[language]?.identity}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SeachInput