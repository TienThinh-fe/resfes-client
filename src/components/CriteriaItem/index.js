import PropTypes from 'prop-types'

function CriteriaItem(props) {
    const { title, value, color } = props

    return (
        <li>
            <span style={{ flex: 10 }}>{title}</span>
            <div style={{ display: 'inline-block', width: 100, height: 3, background: color, marginRight: 10, flex: 3 }}></div>
            <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>{value}%</span>
        </li>
    )
}

CriteriaItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

CriteriaItem.defaultProps = {
    title: 'Criteria',
    value: 0,
    color: '#ffffff',
}

export default CriteriaItem

