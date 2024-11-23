import PropTypes from 'prop-types';
import s from './ErrorMessage.module.css'

const ErrorMessage = ({ children }) => {
  return (
      <div className={s.error_msg_container}>
          <h2 className={s.error_header}>{children}</h2>
      </div>
  )
}

ErrorMessage.propTypes = {
    children: PropTypes.string.isRequired,
}

export default ErrorMessage