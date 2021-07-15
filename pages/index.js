import GameList from "../components/Layout/GameList";
import generateGameData from "../utils/generateGameData";

export default function Home({thumbnails}) {
    return (
        <GameList thumbnails={thumbnails}/>
        )
}



export async function getStaticProps() {

  const gameData = generateGameData();

  return {
    props: {
      thumbnails: Object.keys(gameData)
    }
  }
}
