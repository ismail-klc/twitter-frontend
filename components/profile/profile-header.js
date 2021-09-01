import React from 'react'
import { AlarmIcon, MessagesIcon, MoreIcon } from '../icons';

function ProfileHeader() {

    return (
        <div className="">
            <div className="relative ">
                <a>
                    <img className={"h-[33vw] sm:h-[200px] w-full object-cover"} src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
                </a>

                <a className="absolute left-4 -bottom-1/5 -translate-y-1/2 border-2 border-white rounded-full">
                    <img className="h-[22vw] w-[22vw] sm:h-[134px] sm:w-[134px] 
                 rounded-full" src="https://lh3.googleusercontent.com/proxy/mLCGroLqUuYpW4Fi8ManFEFUL6Y7LN85yYxUfYWFIxjVxJnlLvsvewQlU8s3pO4coCYbsbJiLi2hooCIJD6GOzUhBwVfDAt4WneORIlpBU3qOxLq_MU3uk254s0gp2df3NRkABkkyKL71chYjSdfQo16fknbVU9Uhg" />
                </a>
            </div>

            <div className="flex flex-col relative px-4">

                <div className="flex justify-end space-x-2 mt-2 flex-shrink-0">
                    <button className="rounded-full border p-2">
                        <MoreIcon width={20}/>
                    </button>
                    <button className="rounded-full border p-2">
                        <MessagesIcon width={20}/>
                    </button>
                    <button className="rounded-full border bg-black text-white font-semibold px-4 py-2">
                        Takip Et
                    </button>
                </div>

                <div className="flex flex-col mt-2.5 sm:mt-5 -space-y-2">
                    <h3 className="font-bold text-lg">firstname lastname</h3>
                    <span className="text-gray-500 font-light">@username</span>
                </div>

                <div className="mt-1 font-light">
                    <span>Bio</span>
                </div>

            </div>
        </div>
    )
}

export default ProfileHeader
