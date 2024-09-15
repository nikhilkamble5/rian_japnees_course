import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
    
    <h1 className='text-center fw-bold my-4'>PageNotFound <span className='text-danger'>404</span></h1>
        <NavLink to='/' className='text-center text-primary  nav-link'>Go to Home Page</NavLink>
    </>
  )
}

export default PageNotFound