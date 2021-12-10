import { useState } from 'react';
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import './App.css';
import ResultCriteriaCard from './ResultCriteriaCard';


function App() {
  const [value, setValue] = useState([0, 80, 90, 100])

  return (
    <div className="App">
      <header>
        <h1 className="title">An Intelligent System For Automatically Assessing Students To Support Social-constructivism Teaching Method</h1>
      </header>

      <main>
        <div className="container">
          <div className="question">
            <div className="question__title">
              <h2>Question</h2>
            </div>
            <div className="question__input">
              <input
                placeholder="Give your question"
              />
            </div>

            <div className="question__criteria">
              <div className="question__criteria--title">
                <h2>Criteria weights</h2>
              </div>
              <div className="question__criteria--slider">
                <Range
                  draggableTrack
                  value={value}
                  onChange={setValue}
                  pushable={false}
                  count={3}
                  allowCross={false}
                  trackStyle={[{ backgroundColor: '#545ADE' }, { backgroundColor: '#97BFB4' }, { backgroundColor: '#FC997C' }]}
                  handleStyle={[{ backgroundColor: '#545ADE' }, { backgroundColor: '#545ADE' }, { backgroundColor: '#97BFB4' }, { backgroundColor: '#FC997C' }]}
                  dotStyle={{ borderColor: 'orange' }}
                  activeDotStyle={{ borderColor: 'yellow' }}
                />
              </div>
              <div className="question__criteria--list">
                <ul>
                  <li>
                    <span style={{ flex: 10 }}>Valid sentence</span>
                    <div style={{ display: 'inline-block', width: '100px', height: '3px', backgroundColor: '#545ADE', marginRight: '10px', flex: 3 }}></div>
                    <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>{value[1]}</span>
                  </li>
                  <li>
                    <span style={{ flex: 10 }}>Correct information</span>
                    <div style={{ display: 'inline-block', width: '100px', height: '3px', backgroundColor: '#97BFB4', marginRight: '10px', flex: 3 }}></div>
                    <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>{value[2] - value[1]}</span>
                  </li>
                  <li>
                    <span style={{ flex: 10 }}>Related sentences</span>
                    <div style={{ display: 'inline-block', width: '100px', height: '3px', backgroundColor: '#FC997C', marginRight: '10px', flex: 3 }}></div>
                    <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}> {value[3] - value[2]}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="answer">
            <div className="answer__title">
              <h2>Answer</h2>
            </div>
            <div className="answer__input">
              <div className="answer__input--field" contenteditable="true"></div>
              <button>Submit</button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="result">
            <div className="result__title">
              <h2>Result</h2>
            </div>

            <div className="result__detail">
              <div className="result__detail--answer">
                <div className="title">
                  <h2 style={{ fontSize: '20px', color: '#7B7B7B' }}>Answer</h2>
                </div>
                <div className="content">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                </div>
              </div>
              <div className="result__detail--score">
                <div className="title">
                  <h2 style={{ fontSize: '20px', color: '#7B7B7B' }}>Score</h2>
                </div>
                <div className="content" style={{ fontSize: '20px' }}>
                  8.5
                </div>
                <div className="result__card">
                  <ResultCriteriaCard
                    title='Valid Sentence'
                    weights={80}
                    score={8}
                    color='#545ADE'
                  />
                  <ResultCriteriaCard
                    title='Correct information'
                    weights={80}
                    score={8}
                    color='#545ADE'
                  />
                  <ResultCriteriaCard
                    title='Related information'
                    weights={80}
                    score={8}
                    color='#545ADE'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>




      </main >

    </div >
  )
}

export default App;
