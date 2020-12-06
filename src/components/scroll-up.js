import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

const scrollUp = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeOutQuart',
    })
  }
  return (
    <button className="c-top-btn" onClick={scrollToTop}>
      <svg
        enableBackground="new 0 0 261.808 261.808"
        viewBox="0 0 261.808 261.808"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m260.485 160.384-124.799-140.975c-2.42-2.73-6.331-2.736-8.757-.011l-125.599 140.991c-2.426 2.73-1.441 4.928 2.203 4.928h79.144v72.546c0 3.644 2.953 6.587 6.592 6.587h83.267c3.639 0 6.592-2.948 6.592-6.587v-72.546h79.138c3.644 0 4.64-2.203 2.219-4.933z"
          fill="#010002"
        />
      </svg>
    </button>
  )
}

export default scrollUp
