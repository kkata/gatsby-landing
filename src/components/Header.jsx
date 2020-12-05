import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const Header = () => {
  return (
    <>
      <header className="c-header" data-scroll-header="data-scroll-header">
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <a href="/">
                <StaticImage
                  src="../images/logo.png"
                  width={43}
                  height={45}
                  placeholder="none"
                  alt="logo"
                />
                <span>ロゴ</span>
              </a>
            </div>
            <button className="nav-btn" id="js-nav-btn">
              メニューボタン
            </button>
            <div className="nav-pc">
              <ul className="nav-pc-list">
                <li className="item">
                  <a href="/hoge/" target="_blank">
                    pc nav menu item 1
                  </a>
                </li>
                <li className="item">
                  <a href="/hoge/">pc nav menu item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <nav className="header-nav" id="js-nav">
            <ul className="list-main-sp">
              <li className="item">
                <a href="/hoge/">sp humberger menu item</a>
              </li>
              <li className="item">
                <a href="/">トップページ</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
