import React, { useEffect } from 'react'
import { CloseIcon } from './icons'

function Modal({ children, close, show }) {

    // useEffect(() => {
    //     console.log(document.querySelector('body'));
    //     document.querySelector('body').style.overflow = 'hidden'
    //     return () => {
    //         document.querySelector('body').style.overflow = 'auto'
    //     }
    // }, [])

    if (show) {
        return (
            <div className="fixed inset-0 flex flex-1 justify-center items-center bg-black bg-opacity-50 z-30">
                <button
                    onClick={close}
                    className="top-4 left-4 fixed bg-gray-100 rounded-full p-2">
                    <CloseIcon />
                </button>
                <div className="">
                    {children}
                </div>
            </div>
        )
    }
    return null
}

export default Modal