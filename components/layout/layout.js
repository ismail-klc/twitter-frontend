import Modal from '../modal'
import Head from 'next/head'
import React from 'react'
import BottomBar from '../bars/bottom-bar'
import Sidebar from '../bars/sidebar/sidebar'
import Timeline from '../bars/timeline'

function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="min-h-screen max-w-[78rem] mx-auto flex justify-center">

                <Sidebar />
                <main className="no-mobile:max-w-[600px] lg:w-[600px] w-full">
                    {children}
                </main>
                <Timeline />
            </div>

            <BottomBar />
            
        </>
    )
}

export default Layout
