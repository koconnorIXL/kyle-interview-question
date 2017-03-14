var React = require('react');

function KeywordDisplay(props) {
  var keywordChars = props.keyword.split('');

  return (
    <table className="keyword-display-table">
      <tbody>
        <tr className="char-row">
          {keywordChars.map(function(c, index) { return <td key={index}>{c}</td> })}
        </tr>
        <tr className="number-row">
          {keywordChars.map(function(c, index) { return <td key={index}>{c.charCodeAt(0)}</td> })}
        </tr>
      </tbody>
    </table>
  );
}

module.exports = KeywordDisplay;
