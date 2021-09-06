import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { tweets } from '../../pages'

function ImageTemplate({ imgCount, children }) {
    if (imgCount === 1) {
        return (
            <div className={"mt-4 grid h-72 max-h-[40vw]"}>
                {children}
            </div>
        )
    }

    return (
        <div className={"mt-4 grid gap-1 max-h-[40vw] h-72 grid-cols-2 relative"}>
            {children}
        </div>
    )
}

function TweetImages({ id }) {
    const router = useRouter()
    const [path, setPath] = useState(null)
    const [tweet, setTweet] = useState(null)

    useEffect(() => {
        getTweet()
        getPath()
    }, [id])

    const getTweet = () => {
        setTweet(tweets.find(x => x.id === id))
    }

    const getPath = () => {
        let orgPath = router.pathname + "?"

        for (const q of Object.keys(router.query)) {
            if (q === 'photoId' || q === 'tweetId') {
                continue
            }
            orgPath += q + "=" + router.query[q] + "&"
        }
        setPath(orgPath)
    }

    if (tweet) {
        return (
            <ImageTemplate imgCount={tweet.images.length}>
                {
                    tweet.images.map((img, index) => (
                        <Link
                            key={index}
                            href={`${path}tweetId=${id}&photoId=${index + 1}`}
                            as={`/username/status/${id}/photo/${index + 1}`}
                        >
                            <a className={"relative p-0.5" + (tweet.images.length === 3 ? " first:row-span-2" : "")}>
                                <img className="object-cover  h-full absolute w-full" src={img} />
                            </a>
                        </Link>
                    ))
                }
            </ImageTemplate>
        )
    }
    return null
}

export default TweetImages
