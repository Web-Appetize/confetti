// import React from "react"
// import Title from "./Title"
// import Client from "./Project"
// import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
// import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"

// export const query = graphql`
//   {
//     allStrapiClient {
//       nodes {
//         name
//         logo {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `

// const Clients = () => {
//   const data = useStaticQuery(query);
//   const { 
//     allStrapiClient: {nodes: clients }, 
//   } = data;

//   return (<section className="section projects">
//     <Title title="Clients" />
//     <div className="section-center projects-center">
//       <span className='project'>
//         {
//           clients.map((client) => {
//               return <Client key={client.sstrapiId} {...client}/>
//           })
//         }
//       </span>
//     </div>
//   </section>)
// }

// export default Clients
