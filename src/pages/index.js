import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
// import Services from "../components/Services"
// import Clients from "../components/Clients"
// import Testimonials from "../components/Testimonials"
// import Helmet from "react-helmet"
// import { withPrefix } from "gatsby"


export default ({ data }) => {

  // const {
  //   allStrapiTestimonials: {nodes: testimonials},
  // } = data

  return <Layout>
      <Hero />
      {/* <Services /> */}
      {/* <Clients /> */}
  </Layout>
}

// export const query = graphql`
//   {
//     allStrapiTestimonials {
//       nodes {
//         id
//         name
//         title
//         testimonial
//         image {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `

