import PropTypes from 'prop-types';

const ErrorMessage = ({ children }) => {
  return (
      <div>
          <h2>{children}</h2>
      </div>
  )
}

ErrorMessage.propTypes = {
    children: PropTypes.string.isRequired,
}

export default ErrorMessage