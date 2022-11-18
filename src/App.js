import Logo from './images/Scrybe-logo.svg';
import MyScrybe from './images/My-scrybe.svg';
import Analysis from './images/Analysis.svg';
import Insight from './images/Insight.svg';
import LeaderBoard from './images/Leader-board.svg';
import MonthlyAnalysis from './images/Monthly-Analysis.svg';
import Settings from './images/Settings.svg';
import Profile from './images/Profile.svg';





import './App.css';

function App() {
  return (
    <>
    <section class="left_section">
      <nav>
      <img
          src={Logo}
          className="Scrybe_logo"
          alt="hero img"
        />

         <img
          src={MyScrybe}
          className=""
          alt="hero img"
        />

        <img
          src={Analysis}
          className=""
          alt="hero img"
        />

        <img
          src={Insight}
          className=""
          alt="hero img"
        />

        <div className="Leader-logo">
        <img
          src={LeaderBoard}
          className=""
          alt="hero img"
        />
        </div>

        <img
          src={MonthlyAnalysis}
          className=""
          alt="hero img"
        />

       <img
          src={Settings}
          className=""
          alt="hero img"
        />

      </nav>
    </section>

    <section className="right-section">




    </section>
    </>
  );
}

export default App;
