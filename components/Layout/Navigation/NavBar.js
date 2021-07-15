import style from '../../../styles/NavBar.module.scss';

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
          <a href={"#"} key={componentKey} className={style.link} mode={'_blank'}>
            {NavConfig[key]}
          </a>)
      })}
    </div>

  )
}

export default NavBar;