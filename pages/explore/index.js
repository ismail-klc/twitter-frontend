import React from 'react'
import { ExploreIcon, SettingsIcon } from '../../components/icons'
import Layout from '../../components/layout/layout'
import TopBar from '../../components/bars/top-bar'

function Explore() {
    return (
        <Layout title="Keşfet / Twitter">
            <TopBar showProfile>
                <div className=" mx-auto flex-1 relative">
                    <input
                        placeholder="Twitter'da Ara"
                        className="outline-none w-full text-sm bg-gray-100 rounded-full py-3 relative pl-16" />
                    <label className="absolute top-1/2 -translate-y-1/2 left-4">
                        <ExploreIcon />
                    </label>
                </div>
                <button className="text-black">
                    <SettingsIcon />
                </button>
            </TopBar>
            <div className="border-r py-2 px-3">

            </div>

        </Layout>
    )
}

export default Explore
