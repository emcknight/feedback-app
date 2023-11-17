import React from 'react'
import spinner from '../assets/loading-loading-forever.gif'

function Spinner() {
  return (
    <img src={spinner} alt='Loading...' style={{width: '100px', margin: 'auto', display: 'block'}}></img>
  )
}

export default Spinner
