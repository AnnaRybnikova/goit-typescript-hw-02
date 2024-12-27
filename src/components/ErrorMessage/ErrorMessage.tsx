import { FC } from 'react';
import s from './ErrorMessage.module.css'

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
  return (
      <div className={s.error_msg_container}>
          <h2 className={s.error_header}>{children}</h2>
      </div>
  )
}

export default ErrorMessage