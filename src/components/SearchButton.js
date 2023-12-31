import React from 'react'
import { backImg } from '../utils/Constants'
import SeachInput from './SeachInput'
import SearchRecomandations from './SearchRecomandations'
const SearchButton = () => {
    return (
        <div>
                <div >
                    <img
                        className='w-screen fixed -z-10  h-screen object-cover '
                        src={backImg}
                        alt='' />
                </div>
                <SeachInput/>
                <SearchRecomandations/>
        </div>
    )
}

export default SearchButton