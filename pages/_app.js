import 'tailwindcss/tailwind.css'
import '../public/index.css'

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {

    return (
        <Component {...pageProps} />
    )
  }
  return null
}

export default MyApp
