import React from 'react'
import { useNavigate } from 'react-router-dom'

function Forum() {
  const navigate = useNavigate();
  return (
    <div className="content__canvas">
      <div className="simpple-page">
        <div className="simpple-page__heading">
          <h1 className="simpple-page__title">Forum</h1>
          <button className="button-back" onClick={() => navigate(-1)} type="button"></button>
        </div>
        <p className="simpple-page__text">How to play the game?</p>
        <p className="simpple-page__text">How to win the game?</p>
      </div>
    </div>
  )
}
export default Forum
