import { useRouter } from 'next/router'
import React from 'react'
import { tweets } from '..'
import HomeTweet from '../../components/tweet/tweet'
import ProfileLayout from '../../components/layout/profile_layout'

function ProfileDetail() {
    const router = useRouter()
    return (
        <ProfileLayout>
            {
                tweets.map(t => (
                    <HomeTweet key={t.id} imgs={t.images} text={t.text} />
                ))
            }
        </ProfileLayout>
    )
}

export default ProfileDetail
