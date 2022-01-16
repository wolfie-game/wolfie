import React, {Component} from 'react'
import CanvasComponent from '../../canvas/canvas'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

class Main extends Component {
  render() {
    return (
      <ErrorBoundary>
      <div className="content__canvas">
        <CanvasComponent />
      </div>
      </ErrorBoundary>
    )
  }
}
export default Main
