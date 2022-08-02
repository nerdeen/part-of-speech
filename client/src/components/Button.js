import PropTypes from 'prop-types'

const Button = ({ color, text, onClick,id,className }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={className}
      id={id}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button