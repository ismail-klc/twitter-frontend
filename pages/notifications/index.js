import React from 'react'
import { SettingsIcon } from '../../components/icons'
import Layout from '../../components/layout/layout'
import TopBar from '../../components/bars/top-bar'

function Notifications() {
    return (
        <Layout title="Bildirimler / Twitter">
            <TopBar showProfile>
                <h4 className="flex-1 font-bold text-lg">Bildirimler</h4>
                <button className="text-black">
                    <SettingsIcon />
                </button>
            </TopBar>
            <div className="px-4 flex pt-3 flex-col border-r">
                notifications
            </div>
        </Layout>
    )
}

export default Notifications
