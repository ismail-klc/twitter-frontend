import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

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

function TweetImages({ imgs, id }) {
    const router = useRouter()
    const [path, setPath] = useState(null)

    useEffect(() => {
        getPath()
    }, [])

    const getPath = () => {
        let orgPath = router.pathname + "?"

        for (const q of Object.keys(router.query)) {
            if (q === 'id') {
                continue
            }
            orgPath += q + "=" + router.query[q] + "&"
        }

        setPath(orgPath)
    }

    return (
        <ImageTemplate imgCount={imgs.length}>
            {
                imgs.map((img, index) => (
                    <Link
                        key={index}
                        href={`${path}id=${id}&photoId=${index + 1}`}
                        as={`/username/status/${id}/photo/${index + 1}`}
                        passHref>
                        <a className={"relative p-0.5" + (imgs.length === 3 ? " first:row-span-2" : "")}>
                            <img className="object-cover  h-full absolute w-full" src={img} />
                        </a>
                    </Link>
                ))
            }
        </ImageTemplate>
    )
}

export default TweetImages
