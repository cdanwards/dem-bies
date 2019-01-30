import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <h4><Link style={{ color: `white`, textDecoration: `none`,  }} to={props.to}>{props.children}</Link></h4>
  </li>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#122040`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/rules/">Rules</ListLink>
        <ListLink to="/punishments/">Punishments</ListLink>
        <ListLink to="/rosters/">Rosters</ListLink>
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
