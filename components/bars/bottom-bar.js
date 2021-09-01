import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
import {
    ActiveExploreIcon, ActiveHomeIcon,
    ActiveMessagesIcon, ActiveNotificationsIcon,
    ExploreIcon, HomeIcon, MessagesIcon, NotificationsIcon
} from '../icons'

function BottomBar() {
    const router = useRouter()

    return (
        <div className="h-[53px] w-full border-t fixed bottom-0 bg-white no-mobile:hidden">
            <nav className="flex justify-around h-full items-center">
                <Link href="/">
                    <a>
                        {
                            router.route === '/' ?
                                <ActiveHomeIcon /> :
                                <HomeIcon />
                        }
                    </a>
                </Link>
                <Link href="/explore">
                    <a>
                        {
                            router.route === '/explore' ?
                                <ActiveExploreIcon /> :
                                <ExploreIcon />
                        }
                    </a>
                </Link>
                <Link href="/notifications">
                    <a>
                        {
                            router.route === '/notifications' ?
                                <ActiveNotificationsIcon /> :
                                <NotificationsIcon />
                        }
                    </a>
                </Link>
                <Link href="/messages">
                    <a>
                        {
                            router.route === '/messages' ?
                                <ActiveMessagesIcon /> :
                                <MessagesIcon width={24}/>
                        }
                    </a>
                </Link>
            </nav>
        </div>
    )
}

export default BottomBar
