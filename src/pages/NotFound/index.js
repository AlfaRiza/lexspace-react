import React from 'react'
import ErrorMessage from 'parts/Error/ErrorMessage'

function NotFound() {
  return (
    <>
      <ErrorMessage title='Page Not Found' body='Sorry, but the page you were trying to view does not exist.'/>
    </>
  )
}

export default NotFound;

