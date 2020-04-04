import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Radio = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            radioStreamUrl
          }
        }
      }
    `
  )

  return (
    <div>
      <audio controls={true} preload={"none"}>
        <source
          src={site.siteMetadata.radioStreamUrl}
          type={"audio/mp3"}
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default Radio
