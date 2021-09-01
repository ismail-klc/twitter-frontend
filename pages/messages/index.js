import React from 'react'
import { SettingsIcon } from '../../components/icons'
import Layout from '../../components/layout/layout'
import TopBar from '../../components/bars/top-bar'

function Messages() {
    return (
        <Layout title="Mesajlar / Twitter">
            <TopBar showProfile>
                <h4 className="flex-1 font-bold text-lg">Mesajlar</h4>
                <button className="text-black">
                    <SettingsIcon />
                </button>
            </TopBar>
            <div className="px-4 flex pt-3 border-r">
                messages
            </div>
        </Layout>
    )
}

export default Messages
