import React from 'react'

const UseCallbackButtons = (props) => {
    console.log('render....')
  return (
    <div>
      <button className="btn" onClick={() => props.inc(6)}>+6</button>
      <button className="btn" onClick={() => props.inc(12)}>+12</button>
      <button className="btn" onClick={() => props.inc(24)}>+24</button>
    </div>
  )
}

export default React.memo(UseCallbackButtons)
