import React, { FC, useEffect } from 'react'
import {Route, RouteProps, useNavigate, Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {userAuthSelector} from '../utils/redux/reducers/selectors'

type RootState = {
  auth: boolean
}

const PrivateRoute = ({children}) => {
  let isUserAuthorized: boolean = useSelector(userAuthSelector)
  console.log('isUserAuthorized', isUserAuthorized)

  if (!isUserAuthorized) {
    return <Navigate to="/authorization" />;
  }

  return children;
}

export default PrivateRoute
