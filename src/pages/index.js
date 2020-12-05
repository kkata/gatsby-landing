import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Head from '../components/Head.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
// import Image from '../components/Image.jsx'

import '../scss/index/index.scss'

const IndexPage = () => {
  return (
    <>
      <Head title="TOPページ" description="TOPページのディスクリプション" />
      <div className="l-site">
        <Header />
        <main className="l-site-content">
          <ol className="c-bread l-bread">
            <li>
              <a href="/">ホーム</a>
            </li>
            <li>hoge</li>
          </ol>
          <section className="l-section">
            <div className="l-section-inner">
              <h1>
                ページ内リンク
                <ul className="anchor-list">
                  <li className="item">
                    <a href="#anc-1">レスポンシブなテキスト</a>
                  </li>
                  <li className="item">
                    <a href="#anc-2">トグル</a>
                  </li>
                  <li className="item">
                    <a href="#anc-3">タブ</a>
                  </li>
                  <li className="item">
                    <a href="#anc-4">
                      <del>遅延読み込み画像</del>
                      今の所StaticImageだと無理かも
                    </a>
                  </li>
                  <li className="item">
                    <a href="#anc-5">ブロックアニメーション</a>
                  </li>
                  <li className="item">
                    <a href="#anc-6">スクロールアニメーション</a>
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
                  <div className="c-toggle-content">
                    <p>
                      あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
                    </p>
                    <div className="js-toggle-content js-toggle-more-one">
                      <p>
                        またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
                      </p>
                    </div>
                    <button
                      className="more-btn js-toggle-btn"
                      data-target="js-toggle-more-one"
                    >
                      続きを読む
                    </button>
                  </div>
                </li>
                <li className="item">
                  <div className="c-toggle-content">
                    <p>
                      あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
                    </p>
                    <div className="js-toggle-content js-toggle-more-two">
                      <p>
                        またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
                      </p>
                    </div>
                    <button
                      className="more-btn js-toggle-btn"
                      data-target="js-toggle-more-two"
                    >
                      続きを読む
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="l-section" id="anc-3">
            <div className="l-section-inner">
              <h1>タブ</h1>
              <div className="c-tab">
                <ul className="tab-list">
                  <li className="item">
                    <button className="js-tab" data-target="js-tab-content-one">
                      tab1
                    </button>
                  </li>
                  <li className="item">
                    <button className="js-tab" data-target="js-tab-content-two">
                      tab2
                    </button>
                  </li>
                  <li className="item">
                    <button
                      className="js-tab"
                      data-target="js-tab-content-three"
                    >
                      tab3
                    </button>
                  </li>
                  <li className="item">
                    <button
                      className="js-tab"
                      data-target="js-tab-content-four"
                    >
                      tab4
                    </button>
                  </li>
                </ul>
                <div className="tab-content js-tab-content js-tab-content-one">
                  <p>tab content 1</p>
                </div>
                <div className="tab-content js-tab-content js-tab-content-two">
                  <p>tab content 2</p>
                </div>
                <div className="tab-content js-tab-content js-tab-content-three">
                  <p>tab content 3</p>
                </div>
                <div className="tab-content js-tab-content js-tab-content-four">
                  <p>tab content 4</p>
                </div>
              </div>
            </div>
          </section>
          <section className="l-section" id="anc-4">
            <div className="l-section-inner">
              <h1>遅延読み込み画像</h1>
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
                    <img src="undefinedimg06.jpg" alt="" />
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="l-section" id="anc-6">
            <div className="l-section-inner">
              <h1>スクロールアニメーション</h1>
              {/* <div
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
                style="margin-top: 40px"
              >
                <img src="undefinedimg07.jpg" />
              </div>
              <div
                data-sal="zoom-out"
                data-sal-delay="400"
                data-sal-duration="300"
                data-sal-easing="ease-out-quad"
                style="margin-top: 40px"
              >
                <img src="undefinedimg08.jpg" />
              </div> */}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
