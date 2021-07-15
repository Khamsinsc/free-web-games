
const fs = require('fs');

const thumbnails = fs.readdirSync('../../public/images/thumbnails/');

console.log(thumbnails)

const gameIcon = ({image})=>{
  return (
    <div>
      game icon
    </div>
  )
}

export default gameIcon;