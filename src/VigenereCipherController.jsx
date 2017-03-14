var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./Header.jsx');
var Subheader = require('./Header.jsx');
var KeywordDisplay = require('./KeywordDisplay.jsx');
var AlphabetOffsetView = require('./AlphabetOffsetView.jsx');

var CharUtils = require('./CharUtils.js');

/**
 * View controller component for the Vigenere cipher user interface.
 */
class VigenereCipherController extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      /** The current keyword. */
      keyword: props.defaultKeyword || '',
      /** The current source text. */
      sourceText: props.defaultSourceText || '',
      /** Last entered character. */
      lastCharacter: ''
    };
  }

  render() {
    var lastCharacterIndex = 0;
    if (this.state.lastCharacter) {
      lastCharacterIndex = CharUtils.indexFromUpperCaseChar(this.state.lastCharacter.toUpperCase());
    }

    return (
      <div className="vigenere-cipher-container">
        <Header text="Keyword" />
        <div className="keyword-subsection">
          <input 
            className="keyword-input"
            value={this.state.keyword}
            onChange={this.updateKeyword.bind(this)}
          />
          <button
            className="keyword-submit" 
            onClick={this.updateKeyword.bind(this)}
          >
            Update
          </button>
        </div>
        <KeywordDisplay keyword={this.state.keyword} />
        <Header text="Encoding" />
        <Subheader text="Source Text" />
        <input
          className="source-text-input" 
          value={this.state.sourceText} 
          onChange={this.updateSourceText.bind(this)}
        />
        <AlphabetOffsetView offset={lastCharacterIndex}/>
        <Subheader text="Cipher Text" />
        <input 
          className="cipher-text" 
          readOnly="readonly" 
          value={CharUtils.applyCipher(this.state.sourceText, this.state.keyword)}
        />
      </div>
    );
  }

  updateKeyword(e) {
    var value = ReactDOM.findDOMNode(this).querySelector('.keyword-input').value;
    this.setState({
      keyword: value.toUpperCase(),
      lastCharacter: value[value.length - 1]
    });
  }

  updateSourceText(e) {
    this.setState({
      sourceText: ReactDOM.findDOMNode(this).querySelector('.source-text-input').value.toUpperCase()
    });
  }
}

module.exports = VigenereCipherController;
