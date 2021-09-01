import { useRouter } from 'next/router'
import React from 'react'
import { BackIcon } from '../../../../components/icons'
import TopBar from '../../../../components/bars/top-bar'
import TweetDetail from '../../../../components/tweet/tweet-detail'
import Layout from '../../../../components/layout/layout'

function TweetDetailPage() {
    const router = useRouter()

    return (
        <Layout>
            <TopBar>
                <button onClick={() => router.back()}>
                    <BackIcon />
                </button>
                <h4 className="flex-1 font-bold text-lg">Tweet</h4>
            </TopBar>
            <TweetDetail imgs="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        </Layout>
    )
}

export default TweetDetailPage
