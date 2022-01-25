/*import React from 'react'
import {Redirect, Route, RouteProps} from 'react-router-dom'
import {useSelector} from 'react-redux'

export type ProtectedRouteProps = RouteProps

const PrivateRoute = (props: ProtectedRouteProps): React.ReactElement => {
  const isUserAuthorized: boolean = useSelector(isAuthorized)
  if (isUserAuthorized) {
    return <Route {...props} />
  }

  const {location} = props
  return <Redirect to={{pathname: '/auth', state: {from: location}}} />
}

export default PrivateRoute
*/