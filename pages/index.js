import HomeTweet from '../components/tweet/tweet'
import { MediaIcon } from '../components/icons'
import Layout from '../components/layout/layout'
import TopBar from '../components/bars/top-bar'
import TweetForm from '../components/tweet/tweet_form'

export const tweets = [
  {
    'id': '1',
    'images': [
      "https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg"
    ],
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    'id': '2',
    'images': [],
    'text': 'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    'id': '3',
    'images': [
      "https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300",
      "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/unsplash-Josh-Earl.jpg"
    ],
    'text': 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia '
  },
  {
    'id': '4',
    'images': [
      "https://images.unsplash.com/photo-1542293787938-c9e299b880cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      "https://images.freeimages.com/images/small-previews/bfd/clouds-1371838.jpg",
      "https://jenmulligandesign.com/wp-content/uploads/2017/04/pexels-beach-tropical-scene-free-stock-photo.jpg",
      "https://picjumbo.com/wp-content/uploads/woman-holding-an-american-flag-in-a-field-free-photo-1080x1620.jpg"
    ],
    'text': 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia '
  },
  {
    'id': '5',
    'images': [
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTCJuhnbwJcy_0yU0h-nTnp0zfO5JbL40qe5vx-7qPIPpwJNUBl74K_cW6TKgaFxWwCk&usqp=CAU",
      "https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg"
    ],
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
              key={t.id} imgs={t.images} text={t.text} id={t.id}/>
          ))
        }
        {/* <HomeTweet quotation  imgs={[]} id={"7"}/> */}

      </div>


    </Layout>
  )
}
