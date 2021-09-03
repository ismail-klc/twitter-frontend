import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Modal from '../modal';
import { CommentIcon, FavouriteIcon, RetweetIcon, ShareIcon } from '../icons'
import { tweets } from '../../pages';

function TweetModal() {
    const router = useRouter()
    const [image, setImage] = useState(null)
    const [tweet, setTweet] = useState(null)

    useEffect(() => {
        if (!tweet) {
            setTweet(tweets.find(x => x.id === router.query.id))
        }
        if (tweet && !image) {
            setImage(tweet.images[router.query.photoId - 1])
        }
    }, [image, tweet])

    if (image) {

        return (
            <Modal show={!!router.query.photoId} close={() => router.back()}>
                <div>
                    <img
                        className="max-h-[80vh] object-fill"
                        src={image} />
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
