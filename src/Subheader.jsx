
/**
 * Component representing a subsection heading.
 * 
 * PropTypes:
 *   text: String
 *
 */
function Subheader(props) {
  return (
    <div className="subheader">{props.text}</div>
  );
}

module.exports = Subheader;
