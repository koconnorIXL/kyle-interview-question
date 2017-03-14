var React = require('react');

var CharUtils = require('./CharUtils.js');

function AlphabetOffsetView(props) {
  var offset = props.offset;

  var referenceRow = [];
  var offsetRow = [];

  for (let i = 0; i < 26; i++) {
    referenceRow.push(<td key={i}>{CharUtils.upperCaseCharFromIndex(i)}</td>);
    offsetRow.push(<td key={i}>{CharUtils.upperCaseCharFromIndex(i + offset)}</td>);
  }
  return (
    <table className="alphabet-offset-view">
      <tbody>
        <tr className="reference-row">
          {referenceRow}
        </tr>
        <tr className="offset-row">
          {offsetRow}
        </tr>
      </tbody>
    </table>
  );
}

module.exports = AlphabetOffsetView;
