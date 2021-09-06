import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    MoreIcon, TweetIcon, TwitterIcon
} from '../../icons'
import SidebarItem from './sidebar-item'
import { links } from './links'

function Sidebar() {
    const router = useRouter()

    return (
        <div className="flex-col xl:w-[250px] hidden no-mobile:flex
        bg-white items-stretch sticky top-0 h-screen pr-4" >
            <Link href="/">
                <a className="p-3 text-blue-500 rounded-full inline-flex self-end xl:self-start hover:bg-blue-100 mt-1">
                    <TwitterIcon />
                </a>
            </Link>
            <div className="inline-flex flex-col text-xl flex-1 self-end xl:self-start space-y-1.5">

                {
                    links(router).map((link, index) => (
                        <SidebarItem href={link.href} key={index}>
                            {link.body}
                        </SidebarItem>
                    ))
                }

                <Link
                href="/"
                as="/compose/tweet"
                >
                <a className="p-3 flex items-center text-white  self-center xl:self-stretch xl:justify-center
                bg-green-500 hover:bg-green-600 rounded-full">
                    <span className="xl:hidden">
                        <TweetIcon width={24} />
                    </span>
                    <span className="hidden xl:block">Tweetle</span>
                </a>
                </Link>

            </div>

            <div className="flex mt-auto mb-6 rounded-full px-4 py-2 self-end xl:self-start 
                hover:bg-gray-200 space-x-2 items-center">
                <div className="w-10 h-10 bg-black rounded-full">
                </div>
                <div className="flex-col xl:flex hidden flex-1 -space-y-1.5">
                    <span>Name</span>
                    <span>@username</span>
                </div>
                <button className="xl:flex hidden">
                    <MoreIcon width={24} />
                </button>
            </div>
        </div>
    )
}

export default Sidebar
