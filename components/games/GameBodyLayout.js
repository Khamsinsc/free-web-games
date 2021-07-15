import style from '../../styles/GameBodyLayout.module.scss';

const GameBodyLayout = ({children}) => {

  return (
    <div className={style['game-page-body']}>
      {children}
    </div>

  )
}

export default GameBodyLayout;