import GameList from "../components/Layout/GameList";

const fs = require('fs');
const path = require('path');

export default function Home({thumbnails}) {
    return (
        <GameList thumbnails={thumbnails}/>
        )
}



export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'public/images/thumbnails')
  const thumbnails = fs.readdirSync(postsDirectory)

  return {
    props: {
      thumbnails
    }
  }
}
