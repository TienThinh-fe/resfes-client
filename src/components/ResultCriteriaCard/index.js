import PropTypes from 'prop-types'
import ScoreSlider from '../ScoreSclider'

const fontStyles = { fontFamily: 'Poppins', fontStyle: 'normal', fontSize: 16, color: 'black'}

function ResultCriteriaCard(props) {
    const { weights, score, color, title } = props
    return (
        <div style={{
            background: '#F3F3F3',
            borderRadius: 8,
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
            >{title} ({weights}%)</span>
            <div style={{ flex: .3 }}>
                <ScoreSlider
                    width={196}
                    height={6}
                    score={8}
                    color={color}
                />
            </div>
            <p style={{
                display: 'flex',
                flex: .1,
                justifyContent: 'flex-end',
                ...fontStyles
            }}>{score}</p>
        </div>)
}

ResultCriteriaCard.propTypes = {
    weights: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default ResultCriteriaCard