import Link from 'next/link'
import React from 'react'

function SidebarItem({ href, children }) {
    return (
        <Link href={href}>
            <a className="group inline-block">
                <div className="group-hover:bg-gray-200 rounded-full
                        space-x-4 py-3 px-4 flex items-center max-w-full">
                    {children}
                </div>
            </a>
        </Link>
    )
}

export default SidebarItem
