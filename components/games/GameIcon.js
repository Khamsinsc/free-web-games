import Image from 'next/image';
import style from '../../styles/GameIcon.module.scss';




const GameIcon = ({image})=>{
  const imageUrl = `/images/thumbnails/${image}`;
  return (
    <a href={'#'} className={style['thumbnail-link']}>
      <Image
      src={imageUrl}
      alt={'game image'}
      layout={'responsive'}
      width={'200px'}
      height={'200px'}
      />
    </a>
  )
}

export default GameIcon;