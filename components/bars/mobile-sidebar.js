import React, { useEffect } from 'react'
import { BookmarkIcon, CloseIcon, ListIcon, MomentIcon, 
    NewsIcon, PersonIcon, PlusIcon, TopicIcon } from '../icons'

function MobileSidebar({ onClose }) {

    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden'
        return () => {
            document.querySelector('body').style.overflow = 'auto'
        }
    }, [])

    const lists1 = [
        {
            'icon': <PersonIcon width={24}/>,
            'text': 'Profil'
        },
        {
            'icon': <ListIcon width={24}/>,
            'text': 'Listeler'
        },
        {
            'icon': <TopicIcon />,
            'text': 'Konular'
        },
        {
            'icon': <BookmarkIcon width={24}/>,
            'text': 'Yer İşaretleri'
        },
        {
            'icon': <MomentIcon />,
            'text': 'Anlar'
        },
        {
            'icon': <NewsIcon />,
            'text': 'Bültenler'
        }
    ]

    const lists2 = [
        {
            'icon': <PersonIcon width={24}/>,
            'text': 'Twitter Reklamları'
        },
        {
            'icon': <NewsIcon />,
            'text': 'İstatistikler'
        }
    ]

    const lists3 = [
        {
            'icon': <PersonIcon width={24}/>,
            'text': 'Ayarlar ve Gizlilik'
        },
        {
            'icon': <NewsIcon />,
            'text': 'Yardım Merkezi'
        }
    ]

    const lists4 = [
        {
            'icon': null,
            'text': 'Çıkış Yap'
        },
    ]

    return (
        <div className="w-full inset-0 fixed z-30 bg-gray-800 bg-opacity-40 flex">
            <div className="w-[280px] h-full bg-white ">
                <div className="h-[53px] inset-0 flex justify-between px-4 font-bold items-center border-b">
                    <span>Hesap bilgileri</span>
                    <button onClick={onClose} className="px-3">
                        <CloseIcon />
                    </button>
                </div>

                <div className="overflow-y-auto h-full pb-11">
                    <div className="flex justify-between px-4 pt-3 mt-2">
                        <div className="w-10 h-10 rounded-full bg-black"></div>
                        <button className="rounded-full border px-2">
                            <PlusIcon />
                        </button>
                    </div>
                    <div className="py-3 px-4 flex flex-col -space-y-1">
                        <span className="font-bold">Name</span>
                        <span className="text-gray-500">@username</span>
                    </div>
                    <div className="py-3 px-4 flex space-x-4 text-sm -mb-2">
                        <div>
                            <span className="font-bold">155 </span>
                            <span className="font-semibold text-gray-500">Takip edilen</span>
                        </div>
                        <div>
                            <span className="font-bold">1245 </span>
                            <span className="font-semibold text-gray-500">Takipçi</span>
                        </div>
                    </div>

                    {
                        lists1.map((l, index) => (
                            <a className="p-4 flex items-center text-sm" key={index}>
                                {l.icon}
                                <span className="ml-3">{l.text}</span>
                            </a>
                        ))
                    }
                    <div className="my-[2px] h-[1px] w-full bg-gray-300"> </div>
                    {
                        lists2.map((l, index) => (
                            <a className="p-4 flex items-center text-sm" key={index}>
                                {l.icon}
                                <span className="ml-3">{l.text}</span>
                            </a>
                        ))
                    }
                    <div className="my-[2px] h-[1px] w-full bg-gray-300"> </div>
                    {
                        lists3.map((l, index) => (
                            <a className="p-4 flex items-center text-sm" key={index}>
                                {l.icon}
                                <span className="ml-3">{l.text}</span>
                            </a>
                        ))
                    }
                    <div className="my-[2px] h-[1px] w-full bg-gray-300 "> </div>
                    {
                        lists4.map((l, index) => (
                            <a className="p-4 flex items-center text-sm" key={index}>
                                {l.icon}
                                <span >{l.text}</span>
                            </a>
                        ))
                    }
                    <div className="mb-11"> </div>

                </div>
            </div>
            <div onClick={onClose} className="flex-1"></div>
        </div>
    )
}

export default MobileSidebar
