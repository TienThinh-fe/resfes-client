import CriteriaItem from 'components/CriteriaItem'
import SubTitle from 'components/SubTitle'
import { COLORS } from 'constants/color'
import { STRINGS_EN } from 'constants/string'
import { Range } from 'rc-slider'
import { useState } from 'react'
import './styles.css'

function QuestionPage() {
    const [value, setValue] = useState([0, 80, 90, 100])
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [payload, setPayLoad] = useState({})

    const handleChangeQuestion = (value) => setQuestion(value)
    const handleChangeAnswer = (value) => setAnswer(value)
    const handleSubmit = () => {
        let baseUrl = 'https://4369-35-237-238-1.ngrok.io'
        // console.log({ question, answer, value })
        payload.answer = answer
        payload.question = question
        payload.weight1 = value[1]
        payload.weight2 = value[2] - value[1]
        payload.weight3 = value[3] - value[2]
        fetch(`${baseUrl}/assess/?question=${payload.question}&answer=${payload.answer}&criteria_weight_1=${payload.weight1}&criteria_weight_2=${payload.weight2}&criteria_weight_3=${payload.weight3}`)
            .then(res => res.json())
            .then(data => localStorage.setItem('result', JSON.stringify(data)))
            .then(() => {
                window.location.reload()
                window.location.href = 'https://the-pioneer.vercel.app/#navigate__here'
            })
    }

    return (
        <div className="container">
            <div className="question">
                <SubTitle title={STRINGS_EN.QUESTION} />
                <div className="question__input">
                    <input placeholder="Give your question" value={question} onChange={(e) => handleChangeQuestion(e.target.value)} />
                </div>

                <div className="question__criteria">
                    <SubTitle title={STRINGS_EN.CRITERIA_WEIGHTS} />
                    <div className="question__criteria--slider">
                        <Range
                            draggableTrack
                            value={value}
                            onChange={setValue}
                            pushable={false}
                            count={3}
                            allowCross={false}
                            trackStyle={[{ backgroundColor: COLORS.BLUE }, { backgroundColor: COLORS.GREEN }, { backgroundColor: COLORS.ORANGE }]}
                            handleStyle={[{ backgroundColor: COLORS.BLUE }, { backgroundColor: COLORS.BLUE }, { backgroundColor: COLORS.GREEN }, { backgroundColor: COLORS.ORANGE }]}
                        />
                    </div>
                    <div className="question__criteria--list">
                        <ul>
                            <CriteriaItem title={STRINGS_EN.CRITERIA_1} value={value[1]} color={COLORS.BLUE} />
                            <CriteriaItem title={STRINGS_EN.CRITERIA_2} value={value[2] - value[1]} color={COLORS.GREEN} />
                            <CriteriaItem title={STRINGS_EN.CRITERIA_3} value={value[3] - value[2]} color={COLORS.ORANGE} />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="answer">
                <SubTitle title={STRINGS_EN.ANSWER} />
                <div className="answer__input">
                    <textarea className="answer__input--field" aria-label='' value={answer} onChange={(e) => handleChangeAnswer(e.target.value)} />
                    <button 
                        className={`button-submit ${answer && 'button-valid'}`} 
                        onClick={handleSubmit} 
                        disabled={answer ? false : true}
                    >{STRINGS_EN.SUBMIT}</button>
                    
                </div>
            </div>
        </div>
    )
}

export default QuestionPage


