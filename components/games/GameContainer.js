import style from '../../styles/GameContainer.module.scss';

const GameContainer = () => {
  return (
    <div className={style['game-container']}>


      <iframe id="game_frame" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"
              webkit-playsinline="true" scrolling="no" seamless="" frameBorder="0"
              style={{display: 'block', overflow: 'hidden', width: '100%', height: '100%'}}
              src="https://www.bestgames.com/games/Nonogram-Picture-Cross-Puzzle-Game/index.html" />
    </div>
  )
}

export default GameContainer;