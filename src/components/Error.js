import { Fragment } from 'react';
import '../css/Error.css';

const Error = ({ error }) => {
  return (
    <div className="error-container">
      {error}
    </div>
  )
}

export default Error;
