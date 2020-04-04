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

  const cb = new Date().getTime();

  return (
    <div>
      <audio controls={true} preload={"none"}>
        <source
          src={`${site.siteMetadata.radioStreamUrl}&cb=${cb}/;stream.mp3`}
          type={"audio/mp3"}
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default Radio
