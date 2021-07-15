import style from '../../styles/GameList.module.scss';
import GameIcon from "../games/GameIcon";

const GameList = ({thumbnails}) => {

  return (
    <div className={style['list-container']}>
      {thumbnails.map(image=> {
        return(
          <GameIcon key={image} image={image} />
        )
      })}
    </div>
  )
}

export default GameList;