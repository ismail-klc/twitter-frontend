import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { CommentIcon, FavouriteIcon, MoreIcon, RetweetIcon, ShareIcon } from '../icons'

function HomeTweet({ id, imgs, text, quotation, noIcons, open, close }) {
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
                    <div onClick={() => Router.push('/username/status/123456')} className="text-sm select-all">
                        {text}
                    </div>
                    {
                        imgs &&
                        <div className="pt-4 h-auto object-center w-full">
                            <Link
                                href={`/?photoId=1`}
                                as={`/username/status/123456/photo/1`}>
                                <a href="#">
                                    <img className="rounded-xl" src={imgs} />
                                </a>
                            </Link>
                        </div>
                    }
                    {
                        quotation &&
                        <div className="border mt-3 rounded-lg">
                            <HomeTweet
                                imgs='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                                noIcons
                                text={`
                            asdfgh`} />
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
