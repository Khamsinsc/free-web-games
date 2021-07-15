import style from '../../styles/GameContainer.module.scss';

const GameContainer = ({gameUrl}) => {
  return (
    <div className={style['game-container']}>
      <iframe id="game_frame" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"
              webkit-playsinline="true" scrolling="no" seamless="" frameBorder="0"
              style={{display: 'block', overflow: 'hidden', width: '100%', height: '100%'}}
              src={gameUrl} />
    </div>
  )
}

export default GameContainer;