import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// コンポーネントで読み込みたいけどgraphqlで変数が使えない..
// cf. https://takumon.com/simple-gatsby-image-wrapper
const Image = ({ fileName, altText }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "img01.jpg" }) {
            childImageSharp {
              gatsbyImageData(layout: FLUID, maxWidth: 860)
            }
          }
        }
      `}
      render={(data) => (
        <div>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <GatsbyImage image={getImage(data.file)} alt={altText} />
        </div>
      )}
    />
  )
}

export default Image
