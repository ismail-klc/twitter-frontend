import React from 'react'
import { tweets } from '../../pages'
import HomeTweet from './tweet'
import { CommentIcon, FavouriteIcon, MoreIcon, RetweetIcon, ShareIcon } from '../icons'

function TweetDetail({ id, imgs, text }) {
    return (
        <div className="flex pt-3 flex-col border-r">
            <div className="flex pr-1 mb-3 flex-1 px-4">
                <div className="bg-black rounded-full w-12 h-12 flex-shrink-0"></div>
                <div className="flex items-start flex-row flex-1 ml-2">
                    <div className="flex flex-col flex-1">
                        <span>Name</span>
                        <span className="text-gray-500 -mt-1">@username</span>
                    </div>
                    <button>
                        <MoreIcon />
                    </button>
                </div>
            </div>

            <div className="flex flex-1 px-4">
                'text': 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia '
            </div>

            {
                imgs &&
                <div className="pt-4 px-4">
                    <img className="rounded-xl" src={imgs} />
                </div>
            }

            <div className="my-4 text-gray-500 px-4">
                ÖS 9:07 · 30 Ağu 2021·Twitter Web App
            </div>

            <div className="flex mt-1 border-t py-4 text-gray-500 border-b space-x-4 px-4">
                <div><b className="text-black">10</b> Retweet</div>
                <div><b className="text-black">10</b> Alıntı Tweetler</div>
                <div><b className="text-black">10</b> Beğeni</div>
            </div>

            <div className="flex justify-around mt-1 py-4 text-gray-500 border-b">
                <button>
                    <CommentIcon />
                </button>
                <button>
                    <RetweetIcon />
                </button>
                <button>
                    <FavouriteIcon />
                </button>
                <button>
                    <ShareIcon />
                </button>
            </div>

            <div>
                {
                    tweets.map(t => (
                        <HomeTweet key={t.id} imgs={t.images} text={t.text} />
                    ))
                }
            </div>
        </div>
    )
}

export default TweetDetail
