import style from '../../../styles/NavBar.module.scss';
import Link from 'next/link';

const NavBar = () => {
  const NavConfig = {
    'new-games': 'new',
    'hot-games': 'hot',
    'best-games': 'best',
  }


  return (
    <div className={style.navigation}>
      {Object.keys(NavConfig).map(key => {
        const componentKey = `navlink:${key}`

        return (
          <Link
            key={componentKey}
            href={`/${NavConfig[key] === 'new' ? '' : NavConfig[key]}`}>
            <a className={style.link} mode={'_blank'}>
              {NavConfig[key]}
            </a>
          </Link>
        )
      })}
    </div>

  )
}

export default NavBar;