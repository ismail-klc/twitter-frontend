import HomeTweet from '../components/tweet/tweet'
import { MediaIcon } from '../components/icons'
import Layout from '../components/layout/layout'
import TopBar from '../components/bars/top-bar'
import TweetForm from '../components/tweet/tweet_form'
import Modal from '../components/modal'
import { useState } from 'react'

export const tweets = [
  {
    'id': 1,
    'images': "https://source.unsplash.com/random",
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    'id': 2,
    'text': 'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    'id': 3,
    'images': "https://source.unsplash.com/random",
    'text': 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia '
  }
]

export default function Home() {
  return (
    
    <Layout title="En Son Tweetler / Twitter">

      <TopBar showProfile>
        <h4 className="flex-1 font-bold text-lg">En Son Tweetler</h4>
        <button className="text-black">
          <MediaIcon />
        </button>
      </TopBar>

      <div>
        <TweetForm />
        {
          tweets.map(t => (
            <HomeTweet
              key={t.id} imgs={t.images} text={t.text} />
          ))
        }
        <HomeTweet quotation />

      </div>


    </Layout>
  )
}
