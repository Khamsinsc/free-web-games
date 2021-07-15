import style from '../styles/Home.module.scss';
import GameIcon from "../components/games/GameIcon";
const fs = require('fs');
const path = require('path');


export default function Home({thumbnails}) {

  console.log(thumbnails)
    return (
        <div className={style['list-container']}>
          {thumbnails.map(image=> {
            return(
              <GameIcon key={image} image={image} />
              )
          })}

        </div>)
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