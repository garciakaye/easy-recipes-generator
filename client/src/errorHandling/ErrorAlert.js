import { Alert } from 'react-bootstrap';

const ErrorAlert = ({ errors }) => {

  // const renderErrors = errors.map((err, index) => <li key={index}>{err}</li>)


  return (
    <Alert variant="danger">
      <ul>
        {errors}
      </ul>
    </Alert>
  )
}

export default ErrorAlert;