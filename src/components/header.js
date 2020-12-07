import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import SpNav from './sp-nav.js'

const Header = () => {
  return (
    <header className="c-header">
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

        <SpNav />
      </div>
    </header>
  )
}

export default Header
