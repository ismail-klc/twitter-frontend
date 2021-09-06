import Link from 'next/link'
import React from 'react'
import { CommentIcon, FavouriteIcon, MoreIcon, RetweetIcon, ShareIcon } from '../icons'
import TweetImages from './tweet-images'

function HomeTweet({ id, imgs, text, quotation, noIcons }) {

    return (
        <>
            <div className="flex pt-3 border w-full border-r px-4 hover:bg-gray-50 cursor-pointer">
                <Link href="/username">
                    <a className="bg-black rounded-full w-12 h-12 flex-shrink-0"></a>
                </Link>
                <div className="flex flex-col pl-3 pr-1 w-full mb-3">
                    <div className="flex flex-row items-center font-semibold space-x-1 text-gray-500">
                        <Link href="/username">
                            <a>
                                <span className="text-black hover:underline">Name</span>
                                <span>@username</span>
                            </a>
                        </Link>
                        <span>·</span>
                        <span className="flex-1">8d</span>
                        {
                            !noIcons &&
                            <button>
                                <MoreIcon width={20} />
                            </button>
                        }
                    </div>
                    <Link href={`/username/status/${id}`}>
                        <a className="text-sm">
                            {text}
                        </a>
                    </Link>
                    {
                        imgs && imgs.length > 0 &&
                        <TweetImages id={id} />
                    }
                    {
                        quotation &&
                        <div className="border mt-3 rounded-lg">
                            <HomeTweet
                                imgs={
                                    ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg']
                                }
                                noIcons
                                id={id}
                                text="aaaaaaaaaaaaaaaaaaaaaa" />
                        </div>
                    }
                    {
                        !noIcons &&
                        <div className="flex justify-between mt-3 pr-5 no-mobile:pr-20">
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
                    }
                </div>

            </div>

        </>
    )
}

export default HomeTweet
