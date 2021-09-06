import { useRouter } from 'next/router'
import React from 'react'
import Modal from '../modal'
import TweetForm from './tweet_form'

function TweetFormModal() {
    const router = useRouter()

    const handleClose = () => {
        router.replace(router.pathname)
    }

    return (
        <Modal show={router.asPath === '/compose/tweet'} close={handleClose}>
            <div className="bg-white w-full">
                <TweetForm />
            </div>
        </Modal>
    )
}

export default TweetFormModal
