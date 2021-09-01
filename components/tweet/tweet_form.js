import Link from 'next/link'
import React, { useRef, useState } from 'react'

function TweetForm() {
    const [tweet, setTweet] = useState('')
    const textRef = useRef();

    const onChangeHandler = function (e) {
        const target = e.target
        setTweet(target.value)
        textRef.current.style.height = "30px";
        textRef.current.style.height = `${target.scrollHeight}px`;
    };

    return (
        <div className="no-mobile:flex hidden px-4 py-2 space-x-3 border">
            <Link href="/username">
                <a className="bg-black rounded-full w-12 h-12 flex-shrink-0"></a>
            </Link>
            <div className="flex flex-col flex-1 mt-3">
                <textarea
                    value={tweet}
                    ref={textRef}
                    onChange={onChangeHandler}
                    className="overflow-hidden h-[30px] resize-none break-words outline-none text-lg group" placeholder="Neler oluyor?">
                </textarea>
                <button className="text-green-600 hidden group-focus:block">Herkes yanıtlayabilir</button>

                <div className="flex justify-between mt-2">
                    <div></div>
                    <button onClick={() => console.log(tweet)} className="bg-green-500 px-4 py-1 font-medium text-white rounded-full">
                        Tweetle
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TweetForm
