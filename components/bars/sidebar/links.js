import {
    ActiveExploreIcon, ActiveHomeIcon,
    ActiveMessagesIcon, ActiveNotificationsIcon, BookmarkIcon,
    ExploreIcon, HomeIcon, MessagesIcon, MoreIcon, NotificationsIcon, PersonIcon,
} from '../../icons'


export const links = (router) => [
    {
        'href': '/',
        'body': (
            <>
                {
                    router.route === '/' ?
                        <ActiveHomeIcon /> :
                        <HomeIcon />
                }
                < span className="hidden xl:block" > Anasayfa</span >
            </>
        )
    },
    {
        'href': '/explore',
        'body': (
            <>
                {
                    router.route === '/explore' ?
                        <ActiveExploreIcon /> :
                        <ExploreIcon />
                }
                <span className="hidden xl:block">Keşfet</span>
            </>
        )
    },
    {
        'href': '/notifications',
        'body': (
            <>
                {
                    router.route === '/notifications' ?
                        <ActiveNotificationsIcon /> :
                        <NotificationsIcon />
                }
                <span className="hidden xl:block">Bildirimler</span>
            </>
        )
    },
    {
        'href': '/messages',
        'body': (
            <>
                {
                    router.route === '/messages' ?
                        <ActiveMessagesIcon /> :
                        <MessagesIcon width={24} />
                }
                <span className="hidden xl:block">Mesajlar</span>
            </>
        )
    },
    {
        'href': '/messages',
        'body': (
            <>
                <BookmarkIcon width={24} />
                <span className="hidden xl:block">Yer İşaretleri</span>
            </>
        )
    },
    {
        'href': '/messages',
        'body': (
            <>
                <PersonIcon width={24} />
                <span className="hidden xl:block">Profil</span>
            </>
        )
    },
    {
        'href': '/messages',
        'body': (
            <>
                <span className="border rounded-full border-black">
                    <MoreIcon width={24} />
                </span>
                <span className="hidden xl:block">Daha fazla</span>
            </>
        )
    }
]

