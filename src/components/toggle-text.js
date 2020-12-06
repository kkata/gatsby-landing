import React, { useState } from 'react'

const ToggleText = ({ text, moreText }) => {
  const [open, setOpen] = useState(false)
  const buttonText = open ? '閉じる' : '続きを読む'
  return (
    <div>
      <p>{text}</p>
      {open && <p>{moreText}</p>}
      <button onClick={() => setOpen(!open)} className="more-btn">
        {buttonText}
      </button>
    </div>
  )
}

export default ToggleText
