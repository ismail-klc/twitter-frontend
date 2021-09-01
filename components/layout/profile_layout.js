import { useRouter } from 'next/router'
import React from 'react'
import { BackIcon } from '../icons'
import ProfileHeader from '../profile/profile-header'
import ProfileNav from '../profile/profile-nav'
import TopBar from '../bars/top-bar'
import Layout from './layout'

function ProfileLayout({children}) {
    const router = useRouter()

    return (
        <Layout title="Name (@username) / Twitter">
            <TopBar>
                <button onClick={() => router.back()}>
                    <BackIcon />
                </button>
                <div className="flex flex-col">
                    <h4 className="flex-1 font-bold text-lg">Name</h4>
                    <span className="text-xs text-gray-500">8.148 Tweet</span>
                </div>
            </TopBar>
            <div className="border-r">
                <ProfileHeader />
                <ProfileNav username={router.query.username}/>
                {children}
            </div>
        </Layout>
    )
}

export default ProfileLayout
