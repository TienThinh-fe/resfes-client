import Header from 'components/Header'
import ResultCriteriaCard from 'components/ResultCriteriaCard'
import SubTitle from 'components/SubTitle'
import { COLORS } from 'constants/color'
import { STRINGS_EN } from 'constants/string'
import './styles.css'

function ResultPage() {
    let assessResult = JSON.parse(localStorage.getItem('result'))


    return (
        <div className="container">
            <div className="result" id="navigate__here">
                <div id="navigate__here">
                    <Header title={STRINGS_EN.RESULT} />
                </div>

                <div className="result__detail">
                    <div className="result__detail--answer">
                        <SubTitle title={STRINGS_EN.ANSWER} color={COLORS.DARK_GREY} />
                        <div className="content">{assessResult.answer}</div>
                    </div>
                    <div className="result__detail--score">
                        <SubTitle title={STRINGS_EN.SCORE} color={COLORS.DARK_GREY} />
                        <div className="content" style={{ fontSize: '20px' }}>{assessResult.total_score}</div>
                        <div className="result__card">
                            <ResultCriteriaCard title={STRINGS_EN.CRITERIA_1} weights={assessResult.criteria_weight_1} score={assessResult.criteria_1_score} color={COLORS.BLUE} />
                            <ResultCriteriaCard title={STRINGS_EN.CRITERIA_2} weights={assessResult.criteria_weight_2} score={assessResult.criteria_2_score} color={COLORS.GREEN} />
                            <ResultCriteriaCard title={STRINGS_EN.CRITERIA_3} weights={assessResult.criteria_weight_3} score={assessResult.criteria_3_score} color={COLORS.ORANGE} />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ResultPage



