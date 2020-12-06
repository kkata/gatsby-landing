import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export const Header = () => {
  return (
    <>
      <header className="c-header" data-scroll-header="data-scroll-header">
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <Link to="/">
                <StaticImage
                  src="../images/logo.png"
                  width={43}
                  height={45}
                  placeholder="none"
                  alt="logo"
                />
                <span>ロゴ</span>
              </Link>
            </div>
            <button className="nav-btn" id="js-nav-btn">
              メニューボタン
            </button>
            <div className="nav-pc">
              <ul className="nav-pc-list">
                <li className="item">
                  <Link to="/" target="_blank">
                    pc nav menu item 1
                  </Link>
                </li>
                <li className="item">
                  <Link to="/">pc nav menu item 2</Link>
                </li>
              </ul>
            </div>
          </div>
          <nav className="header-nav" id="js-nav">
            <ul className="list-main-sp">
              <li className="item">
                <Link to="/">sp humberger menu item</Link>
              </li>
              <li className="item">
                <Link to="/">トップページ</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
