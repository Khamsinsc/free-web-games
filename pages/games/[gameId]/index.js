import GameContainer from "../../../components/games/GameContainer";
import generateGameData from "../../../utils/generateGameData";
import {useRouter} from 'next/router';
import GameBodyLayout from "../../../components/games/GameBodyLayout";

const gameData = generateGameData();

const GamePage = ({gameData}) => {

  const router = useRouter();
  const gameId = router.query.gameId;

  return (
    <GameBodyLayout>
      <GameContainer gameUrl={gameData[gameId]}/>
    </GameBodyLayout>
  )
}

export async function getStaticPaths() {
  return  {
    fallback:false,
    paths: Object.keys(gameData).map(key=>({
      params: {
        gameId: key
      }
    }))
  };
}

export async function getStaticProps() {
  return {
    props: {
      gameData
    }
  }
}

export default GamePage;