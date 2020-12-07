import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

const SpNav = () => {
  const [drawer, setDrawer] = useState(false)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 960px)',
  })

  useEffect(() => {
    isDesktopOrLaptop && setDrawer(false)
  }, [isDesktopOrLaptop])

  return (
    <>
      <button
        className={drawer ? 'nav-btn js-active' : 'nav-btn'}
        onClick={() => setDrawer(!drawer)}
      >
        メニューボタン
      </button>

      {drawer && (
        <nav className="header-nav is-visible">
          <ul className="list-main-sp">
            <li className="item">
              <Link to="/">sp humberger menu item</Link>
            </li>
            <li className="item">
              <Link to="/">トップページ</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default SpNav
