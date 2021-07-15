import Image from 'next/image';
import Link from 'next/link';
import style from '../../styles/GameIcon.module.scss';

const GameIcon = ({image})=>{
  const imageUrl = `/images/thumbnails/${image}.jpg`;
  return (
    <Link href={`/games/${image}`}>
      <a className={style['thumbnail-link']}>
        <Image
        src={imageUrl}
        alt={'game image'}
        layout={'responsive'}
        width={'200px'}
        height={'200px'}
        />
      </a>
    </Link>
  )
}

export default GameIcon;