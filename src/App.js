import './App.css';
import './style/landingpg.css';

import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/AnimeM';
import SuperHero from './components/AnimeR';

function App() {
  return (
    <div>
      {/*Intro section*/}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/*end of intro section*/}

      {/*Trending section*/}
      <div className="magic">
        <Trending />
      </div>
      {/*end of Trending section*/}

      {/*Superhero section*/}
      <div className="romance">
        <SuperHero />
      </div>
      {/*end of Superhero section*/}
    </div>
  );
}

export default App;
