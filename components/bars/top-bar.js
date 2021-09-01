import React, { useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import MobileSidebar from './mobile-sidebar'

function TopBar({ children, showProfile }) {
    const [showSidebar, setShowSidebar] = useState(false)
    const { height, width } = useWindowDimensions();

    return (
        <>
            <div className="h-[53px] border sticky bg-white flex items-center space-x-6 px-4 top-0">
                {
                    showProfile && width < 500 &&
                    <div onClick={() => setShowSidebar(!showSidebar)}
                        className="flex-shrink-0 rounded-full w-8 h-8 bg-black"></div>
                }
                {children}
            </div>
            {
                showSidebar && <MobileSidebar onClose={() => setShowSidebar(false)} />
            }
        </>
    )
}

export default TopBar
