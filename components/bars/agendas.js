import React from 'react'
import { MoreIcon, SettingsIcon } from '../icons'

function Agendas() {

    return (
        <div className="rounded-xl sticky bg-gray-100 flex flex-col mt-4">
            <div className="flex justify-between py-3 px-4">
                <span className="flex-1 text-lg font-bold">Gündemler</span>
                <button>
                    <SettingsIcon />
                </button>
            </div>

            {
                Array(5).fill(null).map((_, a) => (
                    <div className="py-3 px-4 flex flex-col hover:bg-gray-300" key={a}>
                        <div className="flex justify-between">
                            <span className="text-xs text-gray-600">1. Gündemdekiler</span>
                            <button>
                                <MoreIcon />
                            </button>
                        </div>
                        <span className="text-lg font-semibold">#Tag</span>
                        <span className="text-xs text-gray-600">10 B Tweet</span>
                    </div>
                ))
            }

            <div className="flex py-3 px-4  hover:bg-gray-300">
                <span className="flex-1 text-green-600">Daha fazla göster</span>
            </div>
        </div>
    )
}

export default Agendas
