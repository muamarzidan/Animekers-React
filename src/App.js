import './App.css';
import './style/landingpg.css';

import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/Superhero';

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
      <div className="trending">
        <Trending />
      </div>
      {/*end of Trending section*/}

      {/*Superhero section*/}
      <div className="superhero">
        <SuperHero />
      </div>
      {/*end of Superhero section*/}
    </div>
  );
}

export default App;
