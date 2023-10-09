import React from 'react'
import { backImg } from '../utils/Constants'
import SeachInput from './SeachInput'
import SearchRecomandations from './SearchRecomandations'
const SearchButton = () => {
    return (
        <div>
                <div >
                    <img
                        className='fixed -z-10 '
                        src={backImg}
                        alt='' />
                </div>
                <SeachInput/>
                <SearchRecomandations/>
        </div>
    )
}

export default SearchButton