import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {userAuthSelector} from '../utils/redux/reducers/selectors'

const PrivateRoute = ({children}: any) => {
  const isUserAuthorized: boolean = useSelector(userAuthSelector)

  if (!isUserAuthorized) {
    return <Navigate to="/authorization" />
  }

  return children
}

export default PrivateRoute
