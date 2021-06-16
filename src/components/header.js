import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{background: `#5A6C85`}}
  >
    <div
      style={{
        height: `100%`,
        width: `100%`,
        padding: `0.7rem 1.0875rem`,
      }}
    >
      <h1 style={{ 
        margin: 0,
        fontSize: `1rem`,
        letterSpacing: `0.1rem`,
        textTransform: `uppercase`,
         }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
