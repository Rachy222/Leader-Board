import './App.css';
import React from 'react';
import Logo from './images/Scrybe-logo.svg';
import MyScrybe from './images/My-scrybe.svg';
import Analysis from './images/Analysis.svg';
import Insight from './images/Insight.svg';
import LeaderBoard from './images/Leader-board.svg';
import MonthlyAnalysis from './images/Monthly-Analysis.svg';
import Settings from './images/Settings.svg';
import Agent from './images/Agent-leaderboard.svg';
import SearchIcon from './images/search-icon.svg';
import Calender from './images/Calendar.svg';
import Profile1 from './images/profile1.svg';
import Profile2 from './images/profile2.svg';
import Profile3 from './images/profile3.svg';
import GreenLike from './images/Like-green.svg';
import BlackLike from './images/Like-black.svg';
import ProfileName from './images/Profile-name.svg';





function App() {
  return (
    <div className='content-container'>
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

        <img
          src={Agent}
          className="Agent-img"
          alt="hero img"
        />

        <div className='right-cotent2-container'>
          <div className='InputWithIcon'>
            <img
              src={SearchIcon}
              className=""
              alt="hero img"
            />
            <input
              type="text"
              name=""
              id="search-bar"
              placeholder="  &nbsp; &nbsp; &nbsp; search again"
              required

            />
          </div>

          <p> 1-20 <span> of 100</span></p>

          <div className='calender-content'>
            <img
              src={Calender}
              className=""
              alt="hero img"
            />
            <select id="calender-value" name="calender">
              <option value="monthly">monthly</option>
            </select>
          </div>
        </div>

        <div className='Profile-container'>
          <div className='Profile1'>
            <div className='Profile-img'>
              <img
                src={Profile1}
                className=""
                alt="profile1"
              />
            </div>
            <div className='Profile-content'>
              <h2>Awesome Lily</h2>
              <h1> 10</h1>
              <p>Calls Received</p>
              <div className='Like-container'>
                <div className='Like-content1'>
                  <div className='Like-icon-content'>
                    <img
                      src={GreenLike}
                      className=""
                      alt="profile1"
                    />
                    <p> 31.k</p>
                  </div>
                  <p className='Like-text'> POS.CALLS</p>
                </div>

                <div className='Like-content1'>
                  <div className='Like-icon-content'>
                    <img
                      src={BlackLike}
                      className=""
                      alt="profile1"
                    />
                    <p> 31.k</p>
                  </div>
                  <p className='Like-text'> POS.CALLS</p>
                </div>


                <div className='Like-content1'>
                  <div className='Like-icon-content'>
                    <img
                      src={GreenLike}
                      className=""
                      alt="profile1"
                    />
                    <p> 31.k</p>
                  </div>
                  <p className='Like-text'> POS.CALLS</p>
                </div>


              </div>
            </div>

          </div>

          <div className='Profile1'>
            <div className='Profile-img'>
              <img
                src={Profile2}
                className=""
                alt="profile1"
              />
            </div>
            <div className='Profile-content'>
              <h2>Awesome Lily</h2>
              <h1> 10</h1>
              <p>Calls Received</p>
              <div className='Like-container'>
                <div className='Like-content1'>
                  <div className='Like-icon-content'>
                    <img
                      src={GreenLike}
                      className=""
                      alt="profile1"
                    />
                    <p> 31.k</p>
                  </div>
                  <p className='Like-text'> POS.CALLS</p>
                </div>

                <div className='Like-content1'>
                  <div className='Like-icon-content'>
                    <img
                      src={BlackLike}
                      className=""
                      alt="profile1"
                    />
                    <p> 31.k</p>
                  </div>
                  <p className='Like-text'> POS.CALLS</p>
                </div>


                <div className='Like-content1'>
                  <div className='Like-icon-content'>
                    <img
                      src={GreenLike}
                      className=""
                      alt="profile1"
                    />
                    <p> 31.k</p>
                  </div>
                  <p className='Like-text'> POS.CALLS</p>
                </div>


              </div>
            </div>

          </div>

          <div className='Profile1'>
            <div className='Profile-img'>
              <img
                src={Profile3}
                className=""
                alt="profile1"
              />
            </div>
            <div className='Profile-content'>
              <h2>Awesome Lily</h2>
              <h1> 10</h1>
              <p>Calls Received</p>
              <div className='Like-container'>
                <div className='Like-content1'>
                  <div className='Like-icon-content'>
                    <img
                      src={GreenLike}
                      className=""
                      alt="profile1"
                    />
                    <p> 31.k</p>
                  </div>
                  <p className='Like-text'> POS.CALLS</p>
                </div>

                <div className='Like-content1'>
                  <div className='Like-icon-content'>
                    <img
                      src={BlackLike}
                      className=""
                      alt="profile1"
                    />
                    <p> 31.k</p>
                  </div>
                  <p className='Like-text'> POS.CALLS</p>
                </div>


                <div className='Like-content1'>
                  <div className='Like-icon-content'>
                    <img
                      src={GreenLike}
                      className=""
                      alt="profile1"
                    />
                    <p> 31.k</p>
                  </div>
                  <p className='Like-text'> POS.CALLS</p>
                </div>


              </div>
            </div>

          </div>
        </div>



        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>


        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

        <div className='Profile-Tabular'>
          <div className='Profile-Tabular-Content'>
          <div className='Profile-Tabular-Content1'>
            <img
              src={ProfileName}
              className=""
              alt="profile1"
            />
            <p> Ruth Sandra</p>
          </div>

          <div className='Profile-Tabular-Content2'>
            <p className='Profile-tabular-number'> 7 </p>
            <p className='Profile-tabular-score'> AVG Score</p>
          </div>
          </div>

        </div>

      </section>
    </div>
  );
}

export default App;
