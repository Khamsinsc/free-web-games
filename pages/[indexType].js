import GameList from "../components/Layout/GameList";
import generateGameData from "../utils/generateGameData";

export default function Home({thumbnails}) {

  const newThumbnailsList = shuffle(thumbnails);

  return (
    <GameList thumbnails={newThumbnailsList}/>
  )
}


export async function getStaticPaths() {
  return  {
    fallback:false,
    paths: [{
      params: {
        indexType: 'hot'
      }
    },{
      params: {
        indexType: 'best'
      }
    }]
  };
}

export async function getStaticProps() {

  const gameData = generateGameData();

  return {
    props: {
      thumbnails: Object.keys(gameData)
    }
  }
}

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}