import React from 'react'
import { ExploreIcon } from './icons'

function Search() {
    return (
        <div className="top-1 relative">
            <input 
            placeholder="Twitter'da Ara"
            className="outline-none text-sm w-full bg-gray-100 rounded-full py-3 relative pl-16"/>
            <label className="absolute top-1/2 -translate-y-1/2 left-4">
                <ExploreIcon />
            </label>
        </div>
    )
}

export default Search
