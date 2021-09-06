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
                <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
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
