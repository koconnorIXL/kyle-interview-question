var React = require('react');
var ReactDOM = require('react-dom');

/**
 * Component representing a section heading.
 * 
 * PropTypes:
 *   text: String
 *
 */
function Header(props) {
  return (
    <div className="header">{props.text}</div>
  );
}

module.exports = Header;
