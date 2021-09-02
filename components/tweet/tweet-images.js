import Link from 'next/link'
import React from 'react'

function ImageTemplate({ imgCount, children }) {
    if (imgCount === 1) {

        return (
            <div className={"rounded-xl mt-4 grid sm:max-h-72 h-72 max-h-[40vw]"}>
                {children}
            </div>
        )
    }

    return (
        <div className={"rounded-xl mt-4 grid sm:max-h-72 max-h-[40vw] h-72 grid-cols-2"}>
            {children}
        </div>
    )
}

function TweetImages({ imgs, id }) {
    return (
        <ImageTemplate imgCount={imgs.length}>
            {
                imgs.map((img, index) => (
                    <Link
                        key={index}
                        href={`/?id=${id}&photoId=${index + 1}`}
                        as={`/username/status/${id}/photo/${index + 1}`}>
                        <a className={"relative p-0.5" + (imgs.length === 3 && " first:row-span-2")}>
                            <img className="object-cover h-full absolute w-full" src={img} />
                        </a>
                    </Link>
                ))
            }
        </ImageTemplate>
    )
}

export default TweetImages
