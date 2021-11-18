import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { StaticImage } from "gatsby-plugin-image"

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

const Navbar = ({toggleSidebar}) => {
  // const { 
  //   allStrapiClient: {nodes: home }, 
  // } = data;

  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
          {/* <GatsbyImage 
            // image={getImage(home.logo)} 
            layout="fixed"
            width={250}
            height={75} 
            alt="logo" 
          /> */}
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>  
  </nav>
}

export default Navbar
