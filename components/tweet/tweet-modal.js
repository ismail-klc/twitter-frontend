import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Modal from '../modal';
import { CommentIcon, FavouriteIcon, RetweetIcon, ShareIcon } from '../icons'
import { tweets } from '../../pages';
import Link from 'next/link'

function TweetModal() {
    const router = useRouter()
    const [image, setImage] = useState(null)
    const [tweet, setTweet] = useState(null)
    const [show, setShow] = useState(!!router.query.photoId)
    const [path, setPath] = useState(null)
    const [prevUrl, setPrevUrl] = useState(null)

    const handleClose = () => {
        setShow(false)

        if (prevUrl !== router.asPath){
            router.replace(prevUrl)
        }
    }

    useEffect(() => {
        getPath()
        getPrevUrl()
        setTweet(tweets.find(x => x.id === router.query.tweetId))
        setShow(!!router.query.photoId)

    }, [router.query])

    useEffect(() => {
        if (tweet) {
            setImage(tweet.images[router.query.photoId - 1])
        }
    }, [router.query.photoId, tweet])

    const getPrevUrl = () => {
        let orgPath = router.pathname

        for (const q of Object.keys(router.query)) {
            orgPath = orgPath.replace(`[${q}]`, router.query[q])
        }

        setPrevUrl(orgPath)
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

    if (image && path) {
        return (
            <Modal show={show} close={handleClose}>
                <div>
                    <div className="relative text-white">
                        {
                            router.query.photoId !== '1' &&
                            <Link href={`${path}tweetId=${tweet.id}&photoId=${parseInt(router.query.photoId) - 1}`}
                                as={`/username/status/${tweet.id}/photo/${parseInt(router.query.photoId) - 1}`}
                                replace>
                                <a className="p-4 bg-gray-700 hover:bg-gray-500 rounded-lg absolute left-0 top-1/2">
                                    &#10094;
                                </a>
                            </Link>
                        }
                        <img
                            className="max-h-[80vh] object-fill"
                            src={image} />
                        {
                            router.query.photoId !== tweet.images.length.toString() &&
                            <Link href={`${path}tweetId=${tweet.id}&photoId=${parseInt(router.query.photoId) + 1}`}
                                as={`/username/status/${tweet.id}/photo/${parseInt(router.query.photoId) + 1}`}
                                replace>
                                <a className="p-4 bg-gray-700 hover:bg-gray-500 rounded-lg absolute right-0 top-1/2">
                                    &#10095;
                                </a>
                            </Link>
                        }

                    </div>


                    <div className="flex text-white  justify-around py-4">
                        <button className="rounded-full hover:bg-blue-200 p-2">
                            <CommentIcon />
                        </button>
                        <button className="rounded-full hover:bg-green-200 p-2">
                            <RetweetIcon />
                        </button>
                        <button className="rounded-full hover:bg-red-200 p-2">
                            <FavouriteIcon />
                        </button>
                        <button className="rounded-full hover:bg-blue-200 p-2">
                            <ShareIcon />
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }
    return null
}

export default TweetModal
