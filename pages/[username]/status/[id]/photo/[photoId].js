import Modal from '../../../../../components/modal'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Home from '../../../../index'

function TweetPhotoDetail() {
    const router = useRouter()

    useEffect(() => {
        if (window.history.length === 1 && router.query.username) {
            router.push(`/${router.query.username}/status/${router.query.id}`)
        }

    }, [router.query])

    if (window.history.length > 1) {

        return (
            <div>
                <Home />
            </div>
        )
    }

    return null
}

export default TweetPhotoDetail
