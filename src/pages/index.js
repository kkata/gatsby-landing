import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Link as AnchorLink } from 'react-scroll'
import { useMediaQuery } from 'react-responsive'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import ToggleText from '../components/toggle-text'
// import Image from '../components/Image'

import '../scss/index/index.scss'

import BlockAnimeImg from '../images/img06.jpg'

const IndexPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 960px)',
  })
  const anchorLinkOptions = {
    smooth: 'easeOutQuart',
    duration: 800,
    offset: isDesktopOrLaptop ? 0 : -80,
  }
  return (
    <>
      <Head title="TOPページ" description="TOPページのディスクリプション" />
      <div className="l-site">
        <Header />
        <main className="l-site-content">
          <ol className="c-bread l-bread">
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>hoge</li>
          </ol>
          <section className="l-section">
            <div className="l-section-inner">
              <h1>
                ページ内リンク
                <ul className="anchor-list">
                  <li className="item">
                    <AnchorLink href="" to="anc-1" {...anchorLinkOptions}>
                      レスポンシブなテキスト
                    </AnchorLink>
                  </li>
                  <li className="item">
                    <AnchorLink href="" to="anc-2" {...anchorLinkOptions}>
                      トグル
                    </AnchorLink>
                  </li>
                  <li className="item">
                    <AnchorLink href="" to="anc-3" {...anchorLinkOptions}>
                      タブ
                    </AnchorLink>
                  </li>
                  <li className="item">
                    <AnchorLink href="" to="anc-4" {...anchorLinkOptions}>
                      遅延読み込み画像 (StaticImage)
                    </AnchorLink>
                  </li>
                  <li className="item">
                    <AnchorLink href="" to="anc-5" {...anchorLinkOptions}>
                      ブロックアニメーション
                    </AnchorLink>
                  </li>
                  <li className="item">
                    <AnchorLink href="" to="anc-6" {...anchorLinkOptions}>
                      スクロールアニメーション
                    </AnchorLink>
                  </li>
                </ul>
              </h1>
            </div>
          </section>
          <section className="l-section" id="anc-1">
            <div className="l-section-inner">
              <h1 className="ttl-rpw">レスポンシブなテキスト</h1>
              <p className="txt-rpw">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </section>
          <section className="l-section" id="anc-2">
            <div className="l-section-inner">
              <h1>トグル</h1>
              <ul className="card-list">
                <li className="item">
                  <ToggleText
                    className="c-toggle-content"
                    text="あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
                    moreText="またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。"
                  />
                </li>
                <li className="item">
                  <ToggleText
                    className="c-toggle-content"
                    text="あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
                    moreText="またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。"
                  />
                </li>
              </ul>
            </div>
          </section>
          <section className="l-section" id="anc-3">
            <div className="l-section-inner">
              <h1>タブ</h1>
              <Tabs
                className="c-tab"
                selectedTabClassName="is-active"
                selectedTabPanelClassName="is-visible"
              >
                <TabList className="tab-list">
                  <Tab>Title 1</Tab>
                  <Tab>Title 2</Tab>
                </TabList>

                <TabPanel className="tab-content">
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel className="tab-content">
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
            </div>
          </section>
          <section className="l-section" id="anc-4">
            <div className="l-section-inner">
              <h1>遅延読み込み画像(StaticImage)</h1>
              <ul className="photo-list">
                <li className="item">
                  {/* <Image fileName="img01.jpg" altText="aaaa" /> */}
                  <StaticImage
                    src="../images/img01.jpg"
                    layout="fluid"
                    maxWidth={860}
                    alt=""
                  />
                </li>
                <li className="item">
                  <StaticImage
                    src="../images/img02.jpg"
                    layout="fluid"
                    maxWidth={860}
                    alt=""
                  />
                </li>
                <li className="item">
                  <StaticImage
                    src="../images/img03.jpg"
                    layout="fluid"
                    maxWidth={860}
                    alt=""
                  />
                </li>
                <li className="item">
                  <StaticImage
                    src="../images/img04.jpg"
                    layout="fluid"
                    maxWidth={860}
                    alt=""
                  />
                </li>
                <li className="item">
                  <StaticImage
                    src="../images/img05.jpg"
                    layout="fluid"
                    maxWidth={860}
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </section>
          <section className="l-section" id="anc-5">
            <div className="l-section-inner">
              <h1>ブロックアニメーション</h1>
              <div>
                <div
                  className="c-block-animation js-block-animated"
                  data-sal=""
                >
                  <p>あのイーハトーヴォのすきとおった風</p>
                </div>
              </div>
              <div>
                <div
                  className="c-block-animation js-block-animated"
                  data-sal=""
                >
                  <p>夏でも底に冷たさをもつ青いそら</p>
                </div>
              </div>
              <div>
                <div
                  className="c-block-animation u-p0 js-block-animated"
                  data-sal=""
                >
                  <p>
                    <img src={BlockAnimeImg} alt="" />
                  </p>
                  {/* <StaticImage
                    src="../images/img06.jpg"
                    layout="fluid"
                    maxWidth={860}
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
          </section>
          <section className="l-section" id="anc-6">
            <div className="l-section-inner">
              <h1>スクロールアニメーション</h1>
              <div
                data-sal="fade"
                data-sal-delay="600"
                data-sal-duration="1000"
                data-sal-easing="ease-out-back"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div
                data-sal="flip-left"
                data-sal-delay="400"
                data-sal-duration="300"
                data-sal-easing="ease-out-quad"
                className="u-mt40"
              >
                <StaticImage
                  src="../images/img07.jpg"
                  layout="fluid"
                  maxWidth={860}
                  alt=""
                />
              </div>
              <div
                data-sal="zoom-out"
                data-sal-delay="400"
                data-sal-duration="300"
                data-sal-easing="ease-out-quad"
                className="u-mt40"
              >
                <StaticImage
                  src="../images/img08.jpg"
                  layout="fluid"
                  maxWidth={860}
                  alt=""
                />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
