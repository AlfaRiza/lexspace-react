import React from 'react'
import PropTypes from 'prop-types';
import './ErrorMessage.css';

function ErrorMessage({title, body}) {
  return (
    <>
        <h1>{title}</h1>
        <p>{body}</p>
    </>
  )
}

ErrorMessage.defaultProp = {
    title: 'Page Not Found',
    body: 'Sorry, but the page you were trying to view does not exist.'
}

ErrorMessage.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
}

export default ErrorMessage;
