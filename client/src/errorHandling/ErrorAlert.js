import { Alert } from 'react-bootstrap';

const ErrorAlert = ({ errors }) => {



  return (
    <Alert variant="danger">
      <ul>
        {errors}
      </ul>
    </Alert>
  )
}

export default ErrorAlert;