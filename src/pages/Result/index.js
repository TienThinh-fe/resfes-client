import Header from 'components/Header'
import ResultCriteriaCard from 'components/ResultCriteriaCard'
import SubTitle from 'components/SubTitle'
import { COLORS } from 'constants/color'
import { STRINGS_EN } from 'constants/string'
import './styles.css'

function ResultPage() {
    return (
        <div className="container">
            <div className="result">
                <Header title={STRINGS_EN.RESULT} />

                <div className="result__detail">
                    <div className="result__detail--answer">
                        <SubTitle title={STRINGS_EN.ANSWER} color={COLORS.DARK_GREY} />
                        <div className="content">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                    <div className="result__detail--score">
                        <SubTitle title={STRINGS_EN.SCORE} color={COLORS.DARK_GREY} />
                        <div className="content" style={{ fontSize: '20px' }}>
                            8.5
                        </div>
                        <div className="result__card">
                            <ResultCriteriaCard title={STRINGS_EN.CRITERIA_1} weights={80} score={8} color={COLORS.BLUE} />
                            <ResultCriteriaCard title={STRINGS_EN.CRITERIA_2} weights={10} score={5} color={COLORS.GREEN} />
                            <ResultCriteriaCard title={STRINGS_EN.CRITERIA_3} weights={10} score={2} color={COLORS.ORANGE} />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ResultPage



