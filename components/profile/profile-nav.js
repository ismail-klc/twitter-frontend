import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function ProfileNav({ username }) {
    const router = useRouter()
    const path = router.asPath

    return (
        <nav className="flex px-4 mt-5 justify-between min-h-0 min-w-0 whitespace-nowrap h-14
         box-border flex-shrink-0 items-center border-b overflow-x-auto">
            <Link href={`/${username}`}>
                <a>

                    <div className={path === `/${username}` ? 'border-b-4 border-blue-600 p-3' : ' '}>
                        Tweetler
                    </div>
                </a>

            </Link>
            <Link href={`/${username}/with_replies`}>
                <a>

                    <div className={path === `/${username}/with_replies` ? 'border-b-4 border-blue-600 p-3' : ' '}>
                        Tweetler ve Yanıtlar
                    </div>
                </a>

            </Link>
            <Link href={`/${username}/media`}>
                <a>
                    <div className={path === `/${username}/media` ? 'border-b-4 border-blue-600 p-3' : ' '}>
                        Medya
                    </div>
                </a>
            </Link>
            <Link href={`/${username}/likes`}>
                <a>
                    <div className={path === `/${username}/likes` ? 'border-b-4 border-blue-600 p-3' : ' '}>
                        Beğeni
                    </div>
                </a>
            </Link>
        </nav>
    )
}

export default ProfileNav
