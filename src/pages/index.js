import React from "react"

import Layout from "../components/layout"
import Logotipo from "../components/logotipo"
import SEO from "../components/seo"
import Radio from "../components/radio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Logotipo />
    <p style={{font: `italic normal normal 0.875em Georgia, serif`}}>Programa de Radio Cristiana de la Iglesia
      Evangélica Bautista "Nueva Vida"</p>
    <Radio/>

    <h3>Programación</h3>
    <p>Todos los días de 8:00 a 9:30 AM</p>

    <p>
      También puedes escucharnos en <strong>Radio La Cruz del Sur</strong>, <strong>91.0 FM</strong>
    </p>
  </Layout>
)

export default IndexPage
