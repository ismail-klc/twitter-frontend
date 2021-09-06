import 'tailwindcss/tailwind.css'
import TweetModal from '../components/tweet/tweet-modal'
import '../public/index.css'

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {

    return (
      <>
        <TweetModal />
        <Component {...pageProps} />
      </>
    )
  }
  return null
}

export default MyApp
