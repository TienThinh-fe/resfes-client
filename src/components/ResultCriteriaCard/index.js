import { COLORS } from 'constants/color'
import PropTypes from 'prop-types'
import ScoreSlider from 'components/ScoreSlider'
import { round10 } from 'utils'


const fontStyles = { fontStyle: 'normal', fontSize: 16, color: 'black' }

function ResultCriteriaCard(props) {
    const { weights, score, color, title } = props
    return (
        <div style={{
            background: COLORS.LIGHT_GREY,
            paddingLeft: 24,
            paddingRight: 24,
            display: 'flex',
            alignItems: 'center',
            margin: '16px 0'
        }}>
            <span style={{
                flex: .6,
                ...fontStyles
            }}
            >{title} <span style={{ fontSize: 12, color: COLORS.DARK_GREY }}>({weights}%)</span></span>
            <div style={{ flex: .3 }}>
                <ScoreSlider
                    width={196}
                    height={6}
                    score={score}
                    color={color}
                />
            </div>
            <p style={{
                display: 'flex',
                flex: .1,
                justifyContent: 'flex-end',
                ...fontStyles
            }}>{round10(score, -1)}</p>
        </div>)
}

ResultCriteriaCard.propTypes = {
    weights: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default ResultCriteriaCard