import PropTypes from 'prop-types'

function ScoreSlider(props) {
    const { width, height, score, color, style } = props

    return (
        <div style={{ width, height, backgroundColor: 'white', ...style }}>
            <div style={{ width: (score * width) / 10, height, backgroundColor: color, borderRadius: 8 }} />
        </div>
    )
} ScoreSlider.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

export default ScoreSlider