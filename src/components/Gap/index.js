import PropTypes from 'prop-types'

function Gap(props) {
    const { height } = props
    return (
        <div style={{ width: 1, height}} />
    )
}

Gap.propTypes = {
    height: PropTypes.number
}

Gap.defaultProps = {
    height: 16
}

export default Gap

