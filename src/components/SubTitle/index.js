import { COLORS } from 'constants/color'
import PropTypes from 'prop-types'

function SubTitle(props) {
    const { title, color } = props

    return (
        <h2 style={{ fontSize: 20, color }}>{title}</h2>
    )
}

SubTitle.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
}

SubTitle.defaultProps = {
    title: 'Subtitle',
    color: COLORS.BLACK
}

export default SubTitle

