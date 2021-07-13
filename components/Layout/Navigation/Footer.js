import style from '../../../styles/Footer.module.scss';

const Footer = () => {
    const disclaimer = 'Our site offers you a variety of the most popular desktop games and mobile games. You can play all these hot games on your mobile, pad and tablet without installation. Choose your favorite mobile games to play now. Find more great free online mobile games at yof.com! Including Kids, HTML5, Boy, Girl, Cartoon, Princess, Disney, Puzzle, Movie, Brain, Dress Up, Arcade, Frozen, Fashion, Skill, Avoid, HighScore, 3D, Ball, Cute, Holiday, Food, Matching, Baby, Platform, Cooking,  Design, Cleaning, Hair, Car, Physics, Surgery, Adventure, Doctor, Cake, Driving, Drawing, Shooting, Running, Halloween, Christmas, Match 3, Racing, Strategy games and more! To play a game, simply use your finger to control if you are playing on your mobile phone or tablet, or use your keyboard and mouse if you play a game on your desktop. You can play a game directly in a browser on your mobile phone, tablet or desktop devices. YOF Games is absolutely your number one resource of free online games which includes car games, girl games, boy games, dress-up games, skill games, racing games, shooting games, RPG games, math games, and a lot more. We now have more than 1000+ fun web games that you can play for free. If you\'d like all the pleasure of a classic pc game without any download trouble, then you\'ll love playing games online at yof.com. Whatever game you are looking for, we\'ve got it here. This is actually the best spot on the internet to play online games without cost! Thousands of options from the best developers around, such as PacoGames.Com, CrazyGames.Com, ArmorGames.com, King.com, AddictingGames.com, Miniclip.com, y8.com and more. If you\'re ready to begin playing right now, just simply select your preferred game and click to relax and play. We add brand new games on a daily basis so you will never get bored at here. On YOF.Com there isn\'t any annoying advertisement or POPUP, enjoy!'

    return (
        <div className={style.footer}>
            <hr className={style.divider}/>
            {disclaimer}
        </div>
    )
}

export default Footer;