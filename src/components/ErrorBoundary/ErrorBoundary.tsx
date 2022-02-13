import React, {Component} from 'react'
import './ErrorBoundary.scss'

type MyProps = {}
type MyState = {hasError: boolean}

class ErrorBoundary extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error: any) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="error-title">Что-то пошло не так...</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
