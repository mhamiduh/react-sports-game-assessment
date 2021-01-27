import logo from './logo.svg';
import './App.css';

//import images from '../src/assets/images';

import Game from '../src/Components/game/Game.js';


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: './src/assets/images/raccoon2.png'
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: './assets/images/squirrel.jpg'
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: './assets/images/bunny.jpg'
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: './assets/images/hound.jpg'
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}
export default App;
