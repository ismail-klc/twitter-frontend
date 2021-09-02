import React from 'react'
import Agendas from './agendas'
import Search from '../search'

function Timeline() {
    return (
        <div className="flex-col hidden lg:flex sticky h-screen top-0 lg:w-[290px] xl:w-[350px]  ml-6 mr-2">
            <Search />
            <Agendas />
        </div>
    )
}

export default Timeline
