import GameContainer from "../../../components/games/GameContainer";
import {useRouter} from 'next/router';

const fs = require('fs');
const path = require('path');

const GamePage = ({thumbnails}) => {

  const router = useRouter();
  const gameId = router.query.gameId;

  console.log(thumbnails, gameId)


  return (
    <GameContainer/>
  )
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'public/images/thumbnails')
  const thumbnails = fs.readdirSync(postsDirectory)

  console.log(thumbnails)


  return  {
    fallback:false,
    paths: thumbnails.map(fileName=>({
      params: {
        gameId: fileName.replace(/.jpg/, '')
      }
    }))
  };
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



export default GamePage;