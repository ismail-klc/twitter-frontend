import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { BackIcon } from '../../../../components/icons'
import TopBar from '../../../../components/bars/top-bar'
import TweetDetail from '../../../../components/tweet/tweet-detail'
import Layout from '../../../../components/layout/layout'

function TweetDetailPage() {
    const router = useRouter()

    

    return (
        <Layout title="Tweet Detail / Twitter">
            <TopBar>
                <button onClick={() => router.back()}>
                    <BackIcon />
                </button>
                <h4 className="flex-1 font-bold text-lg">Tweet</h4>
            </TopBar>
            <TweetDetail />
        </Layout>
    )
}

export default TweetDetailPage
