import Modal from '../../../../../components/modal'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Home from '../../../../index'

function TweetPhotoDetail() {
    const [modal, setModal] = useState(true)
    const router = useRouter()

    const handleClose = () => {
        setModal(false)
        router.back()
    }

    return (
        <div>
            <Home />
        </div>
    )
}

export default TweetPhotoDetail
